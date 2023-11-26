import { useCreate_Customer , useCreate_Customer_With_Id } from '@rq_hooks/customer/useCreateCustomer' 
import { useUpdate_Customer } from '@rq_hooks/customer/useUpdateCustomer' 

// # 資料類型
import { useForm_Customer_Form , db_Customers_Columns } from '@/utils/custom_types/form' 

// # 欄位轉換
import { columns_Covert_Customer } from '@utils/convert/column_Convert_Database' 




// 新增 _ 客戶
export const useForm_OnSubmit_Create_Customer = () => { 

    
    // 新增函式
    const create_Customer = useCreate_Customer() ; 


    // 提交新增函式
    const submit_Create = ( data : useForm_Customer_Form ) => {

        // 轉換欄位 
        const obj_Customer = columns_Covert_Customer( data ) ;

        // 新增客戶
        create_Customer( obj_Customer )

    } ;

    return submit_Create

}


// 更新 _ 客戶
export const useForm_OnSubmit_Update_Customer = ( customer : db_Customers_Columns ) => { 

    // 修改函式 
    const update_Customer = useUpdate_Customer() ;  
    
    // 提交新增函式
    const submit_Update = ( data : useForm_Customer_Form ) => {

        // 轉換欄位 
        const obj_Customer = columns_Covert_Customer( data ) as any ;

        // 新增 _ 客戶資料表 id 
        obj_Customer.id = customer.id  ; 

        // 新增客戶
        update_Customer( obj_Customer ) ;

    } ;

    return submit_Update

}