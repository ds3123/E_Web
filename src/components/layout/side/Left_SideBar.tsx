'use client'
import { FC } from 'react' 
import Link from "next/link"
import { RxSketchLogo , RxDashboard , RxPerson } from "react-icons/rx" 
import {  MdPets  } from "react-icons/md" 
import {  RiCustomerService2Line  } from "react-icons/ri" 
import { FiSettings } from "react-icons/fi" 
import { BsHouseHeartFill , BsTicketPerforated , BsFillGiftFill } from "react-icons/bs" 
import { usePathname } from 'next/navigation' 




// @ 左側 _ 選項 
const Left_SideBar : FC = ( ) => {

    // 取得 _ 目前 url
    const path   = usePathname() ; 


    // 是否點選樣式
    const is_On = ( current : string , path : string ) => {
     
                     if( current === path ) return 'bg-purple-800 text-white my-4 p-3 rounded-lg inline-block' 
                  
                     return 'bg-gray-100 my-4 p-3 rounded-lg inline-block'   

                  } ;
                 
          
    const is_Setting = path === '/admin/management/setting'  || 
                       path === '/admin/management/price'    || 
                       path === '/admin/management/product'  ||            
                       path === '/admin/management/account'  ||            
                       path === '/admin/management/employee' ||            
                       path === '/admin/management/finance'  ||  
                       path === '/admin/management/front_end' ;  
               

    return <div className = "md:flex fixed w-16 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between" >
                        
               <div className = "flex flex-col items-center" >

                  { /* 首頁  */ }
                  <Link href = '/admin/dashboard' > 
                     <div className = { `${ is_On( '/admin/dashboard' , path ) }` } > 
                        <RxDashboard size = { 15 } />
                     </div>
                  </Link>

                  <span className = "border-b-[1px] border-gray-800 w-full p-2 mb-4"></span>

                  { /* 客戶 */ }
                  <Link href = '/admin/customers' > 
                     <div className = { `${ is_On( '/admin/customers' , path ) }` } > 
                        <RxPerson size = { 17 } />
                     </div>
                  </Link>

                  { /* 寵物 */ }
                  <Link href = '/admin/pets' > 
                     <div className = { `${ is_On( '/admin/pets' , path ) }` } > 
                        <MdPets size = { 18 } />
                     </div>
                  </Link>

                  { /* 服務 */ }
                  <Link href = '/admin/service_orders' > 
                     <div className = { `${ is_On( '/admin/service_orders' , path ) }` } > 
                        <RiCustomerService2Line size = { 19 } />
                     </div>
                  </Link>

                  { /* 方案 */ }
                  <Link href = '/admin/plans' > 
                     <div className = { `${ is_On( '/admin/plans' , path ) }` } > 
                        <BsTicketPerforated size = { 18 } />
                     </div>
                  </Link>

                  { /* 住宿 */ }
                  <Link href = '/admin/lodges' > 
                     <div className = { `${ is_On( '/admin/lodges' , path ) }` } > 
                        <BsHouseHeartFill size = { 21 } />
                     </div>
                  </Link>

                  { /* 商品訂單 */ }
                  <Link href = '/admin/product_orders' > 
                     <div className = { `${ is_On( '/admin/product_orders' , path ) }` } > 
                        <BsFillGiftFill size = { 20 } />
                     </div>
                  </Link> 
                  
                  { /* 管理 */ }
                  <Link href = '/admin/management/finance' > 
                     <div className = { `${ is_Setting ? 'bg-purple-800 text-white' : 'bg-gray-100' } my-4 p-3 rounded-lg inline-block` } > 
                        <FiSettings size = { 18 } />
                     </div>
                  </Link>

               </div>

           </div>  

} ;

export default Left_SideBar
       