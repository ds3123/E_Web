import { FC } from 'react' 
import { FormWrapper , Section_Title } from '@layout/index' 
import { Customer_Field_QueryResult , Customer_Form } from '@service/index' 
import { FaUser } from "react-icons/fa" 
import { schema_CreateCustomer  } from "@utils/schemas/schema_customer" 
import { useForm_Edit } from '@/hooks/form/useForm_Edit' 
import { I_Form_OnSubmit, useForm_Customer_Form } from '@/utils/custom_types/form' 



// 表單 _ 新增客戶
const Create_Customer_Form : FC< I_Form_OnSubmit > = ( { onSubmit } ) => {


      // RHF 方法
     const methods = useForm_Edit< useForm_Customer_Form >( schema_CreateCustomer ) ;

    
     return <div data-testid = "Create_Customer_Form" >
                
                <FormWrapper title = '新增資料' methods = { methods } onSubmit = { onSubmit } >

                    <Section_Title icon = { <FaUser size = { 22 } /> }  title = '客戶資料'  >
                        <Customer_Field_QueryResult  />
                    </Section_Title>

                    <Customer_Form />

                </FormWrapper>

            </div>  


} ;


export default Create_Customer_Form
        