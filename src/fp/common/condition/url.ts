import { boolean } from "yup";





// 為 _ 管理區 > 財務報表 < T >
export const is_Url_Admin_Finance = ( url : string ) : boolean  => url === "/admin/management/finance" ;


// 為 _ 管理區 > 分類價格 < T >
export const is_Url_Admin_PriceSetting = ( url : string ) : boolean => url === "/admin/management/price_setting" ;



// 為 _ 管理區 > 帳號設定 < T >
export const is_Url_Admin_Account = ( url : string ) : boolean => url === "/admin/management/account"  ;



// 為 _ 管理區 > 員工設定 < T >
export const is_Url_Admin_Employee = ( url : string ) : boolean => url === "/admin/management/employee" ;



// 為 _ 管理區 > 外網設定 < T >
export const is_Url_Admin_FrontEnd = ( url : string ) : boolean => url === "/admin/management/front_end" ;


// 為 _ 管理區網址
export const is_Url_Admin = ( url : string ) => is_Url_Admin_Finance( url ) ||
                                                is_Url_Admin_PriceSetting( url ) || 
                                                is_Url_Admin_Account( url ) ||
                                                is_Url_Admin_Employee( url ) ||
                                                is_Url_Admin_FrontEnd( url ) ;
