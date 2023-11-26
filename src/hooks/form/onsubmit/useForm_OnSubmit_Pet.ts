import { useCreate_Pet } from '@rq_hooks/pet/useCreatePet' ;
import { useCreate_Customer_With_Id } from '@rq_hooks/customer/useCreateCustomer' ;
import { useUpdate_Pet } from '@rq_hooks/pet/useUpdatePet' ;


// # 資料類型
import { useForm_Pet_Form , useForm_PetForm_With_CustomerForm , db_Pets_Columns } from '@/utils/custom_types/form';


// # 欄位轉換
import { columns_Covert_Customer , columns_Covert_Pet } from '@utils/convert/column_Convert_Database' ;

// # API
import { fetch_Account_Customer_By_Mobile } from '@/utils/api/api_Customer' ;



// 新增 _ 寵物
export const useForm_OnSubmit_Create_Pet = () => { 

    // 新增函式 
    const create_Pet              = useCreate_Pet() ;               // 寵物
    const create_Customer_With_Id = useCreate_Customer_With_Id() ;  // 客人 ( 回傳新增客戶 id )

    // 提交新增函式
    const submit_Create = async( data : useForm_PetForm_With_CustomerForm ) => {

        // 轉換欄位 
        const obj_Customer    = columns_Covert_Customer( data ) ; // 客戶
        let obj_Pet           = columns_Covert_Pet( data ) ;      // 寵物 

        // 以客戶 "手機號碼"，檢查 _ 客戶是否已經存在 
        const customer_Mobile = data.customer_mobile ;  // 客戶手機號碼

        if( !customer_Mobile ){ alert( '未填寫手機號碼' ) ; return false ; }
        const query_Mobile = await fetch_Account_Customer_By_Mobile( customer_Mobile ) ;
        
        // ----------------------
       
        if( query_Mobile.length === 0 ){  // * 客戶不存在 --> 新增 _ 寵物 ＋ 客戶

           // 新增客戶 ( 並取得其於資料表 customers 的 id )
           const created_Customer_Id = await create_Customer_With_Id( obj_Customer ) ;

           // 新增寵物
           obj_Pet.customer_id = created_Customer_Id ; // 設定 _ 寵物所屬主人 id
           create_Pet( obj_Pet ) ; 

        }else{                           // * 客戶存在 --> 新增 _ 寵物
 
           // 新增寵物 
           obj_Pet.customer_id = data.pet_customer_id ; // 設定 _ 寵物所屬主人 id
           create_Pet( obj_Pet ) ; 

        }
       

    } ;

    return submit_Create

}


// 更新 _ 寵物
export const useForm_OnSubmit_Update_Pet = ( pet : db_Pets_Columns  ) => { 

    // 修改函式 
    const update_Pet = useUpdate_Pet() ;    
        

    // 提交新增函式
    const submit_Update = ( data : useForm_Pet_Form ) => {

        // 轉換欄位 
        const obj_Pet = columns_Covert_Pet( data ) as any ;

        // 新增 _ 屬性值
        obj_Pet.id          = pet.id  ;          // 寵物資料表 id 
        obj_Pet.customer_id = pet.customer_id ;  // 寵物所屬主人 id 


        // 新增客戶
        update_Pet( obj_Pet ) ;

    } ;

    return submit_Update

}