'use client'
import { T_Section } from '@/utils/custom_types/layout';
import { FC } from 'react' ;
import { Submit_Button } from '@layout/index' ;
import { FormProvider } from "react-hook-form" ;



interface FWrapper extends T_Section {

   title                  : string 

   onSubmit( data : any ) : void  ;
   methods                : any ;   // React Hook Form 方法

}


// ＠ 一般表單外圍 ( 之後刪除 )
const FormWrapper : FC< FWrapper > = ( { children , title , onSubmit , methods } ) => {


    return <form onSubmit = { methods.handleSubmit( onSubmit ) } >

                <FormProvider { ...methods }>  

                    <p className = "border-l-8 border-blue-700 px-3 text-2xl mb-10" > { title }  </p> 
                        
                    <div className = "py-10 grid grid-cols-1 lg:grid-cols-4 gap-5 relative" >

                            { children }

                        <div className = "md:col-span-4 mt-32 mb-32">  
                            <Submit_Button btn_name = { `提交 _ ${ title }` } is_valid = { methods.formState.isValid } />
                        </div>
                        
                    </div>

                </FormProvider>

             </form>   

} ;

export default FormWrapper
       