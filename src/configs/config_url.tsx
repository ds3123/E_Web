import Connect_Create_Customer_Form from '@components/service/form/customer/Connect_Create_Customer_Form' 

/*
 
   Url 路徑

*/

type Url_Type = {

    '/admin/customers'      () : string ;   
    '/admin/pets'           () : string ;   
    '/admin/service_orders' () : string ;   
    '/admin/plans'          () : string ;   
    '/admin/lodges'         () : string ;   
    '/admin/product_orders' () : string ;   

}


type Url_Component = {

    '/admin/customers'      () : JSX.Element | null ;   
    '/admin/pets'           () : JSX.Element | null ;   
    '/admin/service_orders' () : JSX.Element | null ;   
    '/admin/plans'          () : JSX.Element | null ;   
    '/admin/lodges'         () : JSX.Element | null ;   
    '/admin/product_orders' () : JSX.Element | null ;   

}


// ----

// # 後台管理區

// 根據服務類型（ url ），回傳 _ 服務類型
export const admin_Url_Type : Url_Type = {

    '/admin/customers'      : () => '客戶' ,   
    '/admin/pets'           : () => '寵物' ,   
    '/admin/service_orders' : () => '服務訂單' ,   
    '/admin/plans'          : () => '方案' ,   
    '/admin/lodges'         : () => '住宿' ,   
    '/admin/product_orders' : () => '商品訂單' ,   

} ;


// 根據服務類型（ url ），回傳 _ 建立元件
export const admin_Url_Create_Component : Url_Component = {

    '/admin/customers'      : () => <Connect_Create_Customer_Form /> ,   
    '/admin/pets'           : () => <></> ,   
    '/admin/service_orders' : () => <></> ,   
    '/admin/plans'          : () => <></> ,   
    '/admin/lodges'         : () => <></> ,   
    '/admin/product_orders' : () => <></>    

} ;