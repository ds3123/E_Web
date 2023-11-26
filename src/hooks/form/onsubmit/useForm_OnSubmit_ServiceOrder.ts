
// # 函式 _ 新增、修改
import { useCreate_Customer_With_Id } from '@rq_hooks/customer/useCreateCustomer' ;
import { useCreate_Pet_With_Id } from '@rq_hooks/pet/useCreatePet' ;
import { useCreate_Service_Order } from '@rq_hooks/service/useCreateService' ;
import { useUpdate_Service_Order } from '@rq_hooks/service/useUpdateService' ;

// # 資料類型
import { useForm_ServiceOrder_With_Customer_Pet_Form , useForm_Service_Order_Form , db_Service_Order_Columns } from '@/utils/custom_types/form';

// # 欄位轉換
import { columns_Covert_Customer , columns_Covert_Pet ,  columns_Covert_Service_Order } from '@utils/convert/column_Convert_Database' ;

// # API
import { fetch_Account_Customer_By_Mobile } from '@/utils/api/api_Customer';


import { submit_Before } from "@utils/aop/aop_form" ;
import { validate_Create_ServiceOrder } from "@utils/form/validate/validate_service_order" ;



// 新增 _ 服務訂單
export const useForm_OnSubmit_Create_ServiceOrder = () => {

    // 新增函式 
    const create_Customer_With_Id = useCreate_Customer_With_Id() // 客人 ( 回傳新增客戶 id )
    const create_Pet_With_Id      = useCreate_Pet_With_Id() ;    // 寵物 ( 回傳新增寵物 id )
    const create_Service_Order    = useCreate_Service_Order() ;  // 服務訂單  


    // 提交新增函式
    const submit_Create = async( data : useForm_ServiceOrder_With_Customer_Pet_Form ) => {


        // 轉換欄位 
        const obj_Customer    = columns_Covert_Customer( data ) ;      // 客戶
        let obj_Pet           = columns_Covert_Pet( data ) ;           // 寵物 
        let obj_Service_Order = columns_Covert_Service_Order( data ) ; // 服務 : 訂單

        
        // 以客戶 "手機號碼"，檢查 _ 客戶 : 是否已經存在 
        const customer_Mobile = data.customer_mobile ;  // 客戶手機號碼

        if( !customer_Mobile ){ alert( '未填寫手機號碼' ) ; return false ; }
        const query_Mobile = await fetch_Account_Customer_By_Mobile( customer_Mobile ) ;
        
        // 以寵物 pets 資料表 id ( 點選寵物標籤時注入 )，檢查 _ 寵物 : 是否已經存在 
        const pet_Id = data?.pet_id  ;


        // # 新增資料 ----------- 
        
        if( query_Mobile.length === 0 && !pet_Id  ){   // * 1.客戶 _ 不存在 & 寵物 _ 不存在 --> 新增 _ 客戶 + 寵物 + 服務

            
            // 新增客戶 ( 並取得其於資料表 customers 的 id )
            const created_Customer_Id = await create_Customer_With_Id( obj_Customer ) ;
 
            // 新增寵物
            obj_Pet.customer_id  = created_Customer_Id ;
            const created_Pet_Id = await create_Pet_With_Id( obj_Pet ) ; 


            // 新增服務
            obj_Service_Order.customer_id = created_Customer_Id ; // 設定 _ 寵物主人 id
            obj_Service_Order.pet_id      = created_Pet_Id ;      // 設定 _ 寵物 id

            create_Service_Order( obj_Service_Order ) ;


        }else if( query_Mobile.length > 0 && !pet_Id ){ // * 2.客戶 _ 存在 & 寵物 _ 不存在 ( 為客人追加寵物 ) -->  新增 _ 寵物 + 服務


            // 客戶 id
            const customer_id = data.pet_customer_id  ; 

            // 新增寵物
            obj_Pet.customer_id           = customer_id ; 
            const created_Pet_Id          = await create_Pet_With_Id( obj_Pet ) ; 

            // 新增服務
            obj_Service_Order.customer_id = customer_id ;
            obj_Service_Order.pet_id      = created_Pet_Id ;

            create_Service_Order( obj_Service_Order ) ;


        }else{                                        // * 3.客戶 & 寵物 皆存在 --> 新增 _ 服務


            // 新增服務
            obj_Service_Order.customer_id = data.pet_customer_id ;
            obj_Service_Order.pet_id      = data.pet_id ;

            create_Service_Order( obj_Service_Order ) ;

        }

      
    } ;

    // 利用 AOP ( 裝飾模式 )，將額外欄位( 服務價格、應付金額 ) 驗證功能，動態加上去 -> 但有時會延遲，再檢查 2023.09.23
    const submit_Fnc = submit_Before( submit_Create , validate_Create_ServiceOrder ) ;


    return submit_Fnc

}


// 修改 _ 服務訂單
export const useForm_OnSubmit_Update_ServiceOrder = ( service : db_Service_Order_Columns ) => {


     // 修改函式 
     const update_Service_Order = useUpdate_Service_Order() ;   


     // 提交新增函式
     const submit_Update = ( data : useForm_Service_Order_Form ) => {


         /*
             以下 service_price , amount_paid 欄位，若用 yup 驗證，會導致驗證通過後，須再點選畫面，提交鈕
             才會觸發生效 ( 不直覺 )  
             --> 改為在此驗證是否有填寫 ( 2023.05.08 )
        */ 
            //  const service_price = methods.watch( 'service_price' ) ; // 服務價格
            //  const amount_paid   = methods.watch( 'amount_paid' ) ;   // 實付金額
             
            //  if( !service_price ){ alert( '未填寫：服務價格' ) ; return false ; }
            //  if( !amount_paid ){   alert( '未填寫：實付金額' ) ; return false ; }


       // 轉換欄位 
       const obj_Service_Order = columns_Covert_Service_Order( data ) as any ;

       obj_Service_Order.id          = service.id  ; 
       obj_Service_Order.customer_id = service.customer_id ;
       obj_Service_Order.pet_id      = service.pet_id ;


       // 修改客戶
       update_Service_Order( obj_Service_Order ) ;

    } ; 

    return submit_Update

}