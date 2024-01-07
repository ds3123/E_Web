'use client'
import { Section_Nav } from "@layout/index"
import Link from "next/link" ;
import { usePathname } from 'next/navigation' 
import { 
         is_Url_Admin_Finance ,
         is_Url_Admin_PriceSetting , 
         is_Url_Admin_Account ,
         is_Url_Admin_Employee ,
         is_Url_Admin_FrontEnd 
       } from "@fp/common/condition/url"




// # 管理區樣板
const AdminManagement_Layout = ( { children } : { children: React.ReactNode } ) => {

    // 取得 _ 目前 url
    const path = usePathname() ; 

  
    return <div>
         
                <Section_Nav>
                    
                    <div className = "flex" >

                        <Link href = '/admin/management/finance' >   <p className = { `nav_btn ${ is_Url_Admin_Finance( path ) ? 'bg-blue-400 text-white' : ''  }` } > 財務報表 </p> </Link>
                        <Link href = '/admin/management/price_setting' >   <p className = { `nav_btn ${ is_Url_Admin_PriceSetting( path ) ? 'bg-blue-400 text-white' : ''  }` } > 分類價格 </p> </Link>
                        <Link href = '/admin/management/front_end' > <p className = { `nav_btn ${ is_Url_Admin_FrontEnd( path )? 'bg-blue-400 text-white' : ''  }` } > 外網設定 </p> </Link> 
                        <Link href = '/admin/management/account' >   <p className = { `nav_btn ${ is_Url_Admin_Account( path ) ? 'bg-blue-400 text-white' : ''  }` } > 帳號設定 </p> </Link>
                        <Link href = '/admin/management/employee' >  <p className = { `nav_btn ${ is_Url_Admin_Employee( path ) ? 'bg-blue-400 text-white' : ''  }` } > 員工設定 </p> </Link>

                    </div>

                </Section_Nav>

                { children }
  
               
           </div>
  } ;
  
  export default AdminManagement_Layout   