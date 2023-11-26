
'use client'
import { 
         Section_Nav ,
         Create_Button
       } from "@layout/index"
import { usePathname } from 'next/navigation' 
import { admin_Url_Type } from '@configs/config_url'
import { usePanel_Create_Component_Click } from '@hooks/layout/usePanel'


// # 一般功能樣板
const AdminGeneral_Layout = ( { children } : { children: React.ReactNode } ) => {


    // 取得 _ 目前 url
    const current_Url  = usePathname() as Admin_GeneralFunction_Url ; 


    // 點選 _ 新增按鈕 : 開啟、設定 _ 右側元件
    const click_Add_Btn = usePanel_Create_Component_Click( current_Url ) ;

    
    return <div>

                <Section_Nav>

                    <p> 一般功能 </p>

                </Section_Nav>

                { /* 導覽列 */ }
                <div className = "w-5/6 mx-auto min-h-[60px] flex justify-center mt-20" >

                    <div className = "flex justify-between w-11/12" >

                        導覽列

                        <Create_Button buttonType = { typeof admin_Url_Type[ current_Url ] === "function" ? admin_Url_Type[ current_Url ]() : "" } 
                                       onClick    = { () => click_Add_Btn() } />

                    </div>

                </div>

                { /* 資料表單 */ }
                <div className = "w-5/6 mx-auto min-h-[600px] relative mt-16" >

                    { children }

                </div>
           
           </div>


  } ;
  
  export default AdminGeneral_Layout   