
// # 函式 _ 取得

// # 函式 _ 新增
import { useCreate_Customer , useCreate_Customer_With_Id } from '@rq_hooks/customer/useCreateCustomer' ;
import { useCreate_Pet , useCreate_Pet_Class , useCreate_Pet_Species , useCreate_Pet_With_Id } from '@rq_hooks/pet/useCreatePet' ;
import { useCreate_Service_Content_With_Id , useCreate_Service_Price , useCreate_Service_Order } from '@rq_hooks/service/useCreateService' ;
import { useCreate_Plan , useCreate_Plan_Content } from '@rq_hooks/plan/useCreatePlan' ;
import { useCreate_Account } from '@rq_hooks/account/useCreateAccount' ;

// # 函式 _ 修改
import { useUpdate_Customer } from '@rq_hooks/customer/useUpdateCustomer' ;
import { useUpdate_Pet } from '@rq_hooks/pet/useUpdatePet' ;
import { useUpdate_Service_Order } from '@rq_hooks/service/useUpdateService' ;
import { useUpdate_Account } from '@rq_hooks/account/useUpdateAccount' ;



// # 資料類型
import { db_Customers_Columns , 
         db_Pets_Columns , 
         db_Services_Columns ,
         db_Service_Order_Columns ,
         db_Service_Contents_Columns ,
         useForm_Customer_Form, 
         useForm_Pet_Form, 
         useForm_PetForm_With_CustomerForm , 
         useForm_Service_Form ,
         useForm_Service_Content_Form ,
         useForm_Service_Order_Form ,
         useForm_ServiceOrder_With_Customer_Pet_Form ,
         useForm_Product_Form ,
         useForm_Management_Pet_Class ,
         useForm_Management_Pet_Species,
         useForm_Plan_Form,
         useForm_Plan_Content_Form,
         useForm_Account_Form,
         db_Account_Columns
        } from '@/utils/custom_types/form';


// # 欄位轉換
import { columns_Covert_Customer , 
         columns_Covert_Pet , 
         columns_Covert_Pet_Class , 
         columns_Covert_Service_Order ,
         columns_Covert_Plan ,
         columns_Covert_Account
       } from '@utils/convert/column_Convert_Database' ;

// # 封裝 _ useForm() / noSubmit 事件
import { useForm_Edit } from '@/hooks/form/useForm_Edit';
import { useOnSubmit_Edit } from '@/hooks/form/useOnSubmit_Edit';


// # Yup Schema
import { schema_CreateCustomer , schema_UpdateCustomer } from "@/utils/schemas/schema_customer" ;
import { schema_CreatePet , schema_UpdatePet , schema_Management_PetClass , schema_Management_PetSpeices } from "@/utils/schemas/schema_pet" ;
import { schema_Management_Plan_First_Class , 
         schema_Management_Plan_Second_Class ,
         schema_Management_Plan_Price_First_Class ,
         schema_Management_Plan_Price_Second_Class
        } from "@/utils/schemas/schema_plan" ;
import { 
         schema_Management_Service_First_Class , 
         schema_Management_Service_Second_Class , 
         schema_CreateServiceOrder , 
         schema_UpdateServiceOrder 
        } from "@/utils/schemas/schema_service" ;
import { schema_CreateProduct } from "@/utils/schemas/schema_product" ;
import { schema_CreateAccount , schema_UpdateAccount } from "@/utils/schemas/schema_account" ;






// 新增 _ 寵物：種類 ( pet class )
export const useForm_Provider_Create_Pet_Class = ( current_Pet_Classes : any[] ) => {


     // 封裝 _ useForm() 
     const methods = useForm_Edit< useForm_Management_Pet_Class >( schema_Management_PetClass ) ;
    
     // 新增函式
     const create_Func = useCreate_Pet_Class() ; 

     // 提交新增函式
     const submit_Create = ( data : useForm_Management_Pet_Class ) => { 

        // 轉換欄位 
        const obj_Pet_Class = columns_Covert_Pet_Class( data ) ;

        
        // 驗證是否重複
        const pet_Class = data.management_pet_class ;  // 所輸入寵物種類
        let isDuplicate = false ;
        
        current_Pet_Classes.forEach( x => {

            if( x.pet_class === pet_Class ){

                alert( '已經存在此寵物種類，請改用其他名稱' ) ;
                methods.setValue(  'management_pet_class' , '' ) ;
                isDuplicate = true;
                return ; // 跳出循環，不繼續執行後續循環

            }

        }) ;

        // 沒有重複，才新增
        if( !isDuplicate ){

            // 新增種類
            create_Func( obj_Pet_Class ) ;

            // 清空輸入框
            methods.setValue(  'management_pet_class' , '' ) ;

        }

     }


     // 封裝 _ onSubmit 
     const onSubmit = useOnSubmit_Edit< useForm_Management_Pet_Class >( submit_Create ) ; 
     
     return {  methods , onSubmit  }


}


// 新增 _ 寵物：品種 ( pet species )
export const useForm_Provider_Create_Pet_Species = ( current_Pet_Class_Id : string , current_Pet_Species : any[] ) => {


    // 封裝 _ useForm() 
    const methods  = useForm_Edit< useForm_Management_Pet_Species >( schema_Management_PetSpeices ) ;

    // 新增函式
    const create_Func = useCreate_Pet_Species() ; 

    // 提交新增函式
    const submit_Create = ( data : useForm_Management_Pet_Species ) => { 


        // 所輸入寵物品種
        const pet_Species = data.management_pet_species ;

        let isDuplicate   = false ;

        // 驗證是否重複
        current_Pet_Species.forEach( x => {

            if( x.pet_species === pet_Species ){

                alert( '已經存在此寵物品種，請改用其他名稱' ) ;
                methods.setValue(  'management_pet_species' , '' ) ;
                isDuplicate = true ;
                return ; // 跳出循環，不繼續執行後續循環

            }

        }) ;

          // 沒有重複，才新增
        if( !isDuplicate ){

            // 新增客戶
            create_Func( { pet_class_id : current_Pet_Class_Id , pet_species : pet_Species  } )

            // 清空輸入框
            methods.setValue(  'management_pet_species' , '' ) ;


        }


    }
    

    // 封裝 _ onSubmit 
    const onSubmit = useOnSubmit_Edit< useForm_Management_Pet_Species >( submit_Create ) ; 
     
    return {  methods , onSubmit  }

}




// 新增 _ 服務 : 項目內容
export const useForm_Provider_Create_Service_Content = ( current_Service_Id : string , all_Service_Contents : any[]  ) => {

    
    // 封裝 _ useForm() 
    const methods = useForm_Edit< useForm_Service_Content_Form >( schema_Management_Service_Second_Class ) ;

    // 新增函式
    const create_Service_Content_With_Id = useCreate_Service_Content_With_Id() ; // 新增 _ 服務項目內容
    const create_Price                   = useCreate_Service_Price() ;           // 新增 _ 服務價格  


    // 提交新增函式
    const submit_Create = async( data : useForm_Service_Content_Form ) => { 

        
        // 驗證是否重複
        const service_content = data.management_service_second_class ;  // 所輸入第二層分類
        let isDuplicate = false ;

        
        all_Service_Contents.forEach( x => {

            if( x?.content === service_content ){

                alert( '已經存在此類別，請改用其他名稱' ) ;
                methods.setValue( 'management_service_second_class' , '' ) ;
                isDuplicate = true;
                return ; // 跳出循環，不繼續執行後續循環

            }

        }) ;


        // 沒有重複，才新增
        if( !isDuplicate ){


            // 新增種類 ( 並取得資料表 service_contents 的 id )
            const created_Service_Content_Id = await create_Service_Content_With_Id( { 
                                                        service_id : current_Service_Id , 
                                                        content    : data.management_service_second_class 
                                                     }) ; 


            // 新增服務價格
            create_Price({ 
                            service_id         : current_Service_Id ,
                            service_content_id : created_Service_Content_Id ,
                            price              : data.management_service_second_class_price
                         }) ;


            // 清空輸入框
            methods.setValue( 'management_service_second_class' , '' ) ;
            methods.setValue( 'management_service_second_class_price' , '' ) ;

        }

    }

    // 封裝 _ onSubmit 
    const onSubmit = useOnSubmit_Edit< useForm_Service_Content_Form >( submit_Create ) ; 
     
    return { methods , onSubmit }

}


// 新增 _ 自訂方案 ( 第一層級 ) 
export const useForm_Provider_Create_Plan = ( current_Plans : any[] ) => {

    // 封裝 _ useForm() 
    const methods = useForm_Edit< useForm_Plan_Form >( schema_Management_Plan_First_Class ) ;


    // 新增函式 
    const create_Plan = useCreate_Plan() ;


    // 提交新增函式
    const submit_Create = ( data : useForm_Plan_Form ) => { 

        // 轉換欄位 
        const obj_Plan = columns_Covert_Plan( data ) ;

        
        // 驗證是否重複
        const plan = data.management_plan_name ;  // 所輸入第一層分類
        let isDuplicate = false ;
        
        current_Plans.forEach( x => {

            if( x.name === plan ){

                alert( '已經存在此自訂方案名稱，請改用其他名稱' ) ;
                methods.setValue( 'management_plan_name' , '' ) ;
                isDuplicate = true;
                return ; // 跳出循環，不繼續執行後續循環

            }

        }) ;

        // 沒有重複，才新增
        if( !isDuplicate ){

            // 新增種類
            create_Plan( obj_Plan ) ;

            // 清空輸入框
            methods.setValue(  'management_plan_name'   , '' ) ;
            methods.setValue(  'management_plan_count'  , '' ) ;
            methods.setValue(  'management_plan_period' , '' ) ;
            methods.setValue(  'management_plan_note'   , '' ) ;  

        }

    }

    
    // 封裝 _ onSubmit 
    const onSubmit = useOnSubmit_Edit< useForm_Plan_Form >( submit_Create ) ; 
     
    return {  methods , onSubmit  }





}


// 新增 _ 自訂方案 : 內容 ( 第二層級 ) 
export const useForm_Provider_Create_Plan_Content = ( current_Plan_Id : string , all_Plan_Contents : any[] , plna_Count : number  ) => {


     // 封裝 _ useForm() 
     const methods  = useForm_Edit< useForm_Plan_Content_Form >( schema_Management_Plan_Second_Class ) ;

     // 新增函式
     const create_Plan_Content = useCreate_Plan_Content() ;
     
     // 提交新增函式
     const submit_Create = ( data : useForm_Plan_Content_Form ) => { 
 
         
         // 驗證是否重複
         const plan_content = data.management_plan_content_name ;  // 所輸入第二層分類
         let isDuplicate = false ;
         
         all_Plan_Contents.forEach( x => {
 
             if( x.content === plan_content ){
 
                 alert( '已經存在此類別，請改用其他名稱' ) ;
                 methods.setValue( 'management_plan_content_name' , '' ) ;
                 isDuplicate = true;
                 return ; // 跳出循環，不繼續執行後續循環
 
             }
 
         }) ;


         if( all_Plan_Contents.length >= plna_Count ){

             alert( `此方案使用次數為 : ${ plna_Count } 次，無法再新增方案項目` ) ;
             methods.setValue(  'management_plan_content_name' , '' ) ;
             return false ;

         }


 
         // 沒有重複，才新增
         if( !isDuplicate ){
 
             // 新增種類
             create_Plan_Content( { plan_id : current_Plan_Id , content : data.management_plan_content_name } ) ;
 
             // 清空輸入框
             methods.setValue(  'management_plan_content_name' , '' ) ;
 
         }
 
     }
 
     // 封裝 _ onSubmit 
     const onSubmit = useOnSubmit_Edit< useForm_Plan_Content_Form >( submit_Create ) ; 
      
     return { methods , onSubmit }


}



// 新增 _ 自訂方案內容 : 價格 ( 第一層級 )
export const useForm_Provider_Create_SecondClass_PlanPrice = ( first_Class : any ) => {





}


// 新增 _ 商品
export const useForm_Provider_Create_Product = () => {

    
     // 提交新增函式
     const submit_Create = ( data : any ) => {
     
        // console.log( 'Quill --- ' , editorContent ) ;

        const formData = new FormData() ;

        // 將上傳的圖片，添加 ( append ) 到 FormData：
        for( const key in data ){
            formData.append( key, data[ key ] );
        }

        // if( uploadedFiles ){

        //     uploadedFiles.forEach(( file , index ) => {
        //         formData.append( `image_${index}`, file );
        //     });

        // } 
        
        // console.log(Array.from(formData.entries()));
  
     } ;


     // --------


     // 封裝 _ useForm() 
     const { control , handleSubmit , formState } = useForm_Edit< useForm_Product_Form >( schema_CreateProduct ) ;


     // 封裝 _ onSubmit 
     const onSubmit = useOnSubmit_Edit< useForm_Product_Form >( submit_Create ) ;  

     const isValid = formState.isValid ;

     return { control , handleSubmit , isValid , onSubmit }

 }


// 新增 _ 帳戶
export const useForm_Provider_Create_Account = () => {


    // 新增函式
    const create_Account = useCreate_Account() ; 


    // 提交新增函式
    const submit_Create = ( data : useForm_Account_Form ) => {

        // 轉換欄位 
        const obj_Account = columns_Covert_Account( data ) ;

        // 新增帳戶
        create_Account( obj_Account ) ;

    } ;


    // ---------------------


    // 封裝 _ useForm() 
    const methods  = useForm_Edit< useForm_Account_Form >( schema_CreateAccount ) ;
   

    // 封裝 _ onSubmit 
    const onSubmit = useOnSubmit_Edit< useForm_Account_Form >( submit_Create ) ; 
    
   
    return {  methods , onSubmit  }
   

} ;



// 更新 _ 帳戶
export const useForm_Provider_Update_Account = ( account : db_Account_Columns ) => {


    // 服務訂單 _ 預設值
    const default_Account_Values : useForm_Account_Form =  {
 
                                        account_county     : account.county ,
                                        account_district   : account.district ,
                                        account_zipcode    : account.zipcode ,

                                        account_serial     : account.serial , 

                                        account_shop_brand : account.shop_brand ,
                                        account_shop_name  : account.shop_name ,
                                        account_shop_owner : account.shop_owner 

                                   } ;

    // 修改函式 
    const update_Account = useUpdate_Account() ;                                  


    // 提交新增函式
    const submit_Update = ( data : useForm_Account_Form ) => {

       // 轉換欄位 
       const obj_Account = columns_Covert_Account( data ) as any ;
       obj_Account.id    = account.id  ; 
      
       // 修改帳戶
       update_Account( obj_Account ) ;

    } ;


    // 封裝 _ useForm() 
    const methods  = useForm_Edit< useForm_Account_Form >( schema_UpdateAccount , default_Account_Values ) ;

    // 封裝 _ onSubmit 
    const onSubmit = useOnSubmit_Edit< useForm_Account_Form >( submit_Update )  ;  


    return { methods , onSubmit }


}


// 新增 _ 員工 




// 更新 _ 員工


// 新增 _ 

// 更新 _


// 新增 _ 

// 更新 _


// 新增 _ 

// 更新 _