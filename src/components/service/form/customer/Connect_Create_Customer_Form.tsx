import { FC } from 'react' 
import Create_Customer_Form from '@service/form/customer/Create_Customer_Form'
import { useForm_OnSubmit_Create_Customer } from "@hooks/form/onsubmit/useForm_OnSubmit_Customer" 



// # 載體元件 _ <Create_Customer_Form >
const Connect_Create_Customer_Form : FC = () => {


   // 提交處理
   const onSubmit = useForm_OnSubmit_Create_Customer() ; 


   return <>
              <Create_Customer_Form onSubmit = { onSubmit } /> 
          </>


} ;

export default Connect_Create_Customer_Form
       