
import { FC } from 'react' ;
import { FormWrapper } from '@layout/index' ;
import { Customer_Form } from "@service/index" ;

import { db_Customers_Columns } from '@/utils/custom_types/form';
import { Delete_Button } from '@components/layout';
import { useDelete_Customer } from "@rq_hooks/customer/useDeleteCustomer" ;

import { useForm_OnSubmit_Update_Customer  } from "@hooks/form/onsubmit/useForm_OnSubmit_Customer" ;
import { useForm_Edit } from '@hooks/form/useForm_Edit' ;
import { useForm_Customer_Form } from '@utils/custom_types/form' ;
import {  schema_UpdateCustomer } from "@utils/schemas/schema_customer" ;



type Update = {

   customer : db_Customers_Columns ; // 客戶資料

}



// 表單 _ 更新客戶
const Update_Customer_Form : FC< Update > = ( { customer } ) => {


     // 提交處理
     const onSubmit = useForm_OnSubmit_Update_Customer( customer ) ;


     // 客戶表單 _ 預設值
     const default_Customer_Values : useForm_Customer_Form =  {

                customer_name     : customer.name ,
                customer_id       : customer.serial_id ? customer.serial_id : ''  ,
                customer_mobile   : customer.mobile_phone ,
                customer_telphone : customer.tel_phone ? customer.tel_phone : '' ,
                customer_sex      : customer.sex ,
                customer_birthday : new Date( customer.birthday ) as any ,
                customer_line     : customer.line ? customer.line : '' ,
                customer_email    : customer.email ? customer.email : '' ,
                customer_address  : customer.address ? customer.address : '' ,
                customer_note     : customer.note ? customer.note : ''

     } ;

     // RHF 方法
     const methods         = useForm_Edit< useForm_Customer_Form >( schema_UpdateCustomer , default_Customer_Values ) ;


     // 刪除客戶函式
     const delete_Customer = useDelete_Customer();
     

     return <div data-testid = "Update_Customer_Form" >
              
                { /* 刪除客戶按鈕 */ }
                <Delete_Button delete_Func = { delete_Customer } data_Id = { customer?.id } />

                <FormWrapper title = '修改資料' methods = { methods } onSubmit = { onSubmit } >

                        <Customer_Form />

                </FormWrapper>
                
            </div>
           
           
           

} ;


export default Update_Customer_Form
       