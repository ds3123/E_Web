
import {

         is_Url_Admin_Finance ,
         is_Url_Admin_PriceSetting , 
         is_Url_Admin_Account ,
         is_Url_Admin_Employee ,
         is_Url_Admin_FrontEnd ,
         is_Url_Admin
       } from "@fp/common/condition/url"


describe( "測試 URL 路徑：管理區" , () => { 

    const finance       = '/admin/management/finance' ;
    const price_setting = '/admin/management/price_setting' ;
    const account       = '/admin/management/account' ;
    const employee      = '/admin/management/employee' ;
    const front_end     = '/admin/management/front_end'  ;

    test( "is_Url_Admin_Finance() : 路徑為：管理區 > 財務報表" , () => {

        expect( is_Url_Admin_Finance( finance ) ).toBeTruthy() ;
    
    }) ;

    test( "is_Url_Admin_PriceSetting() : 路徑為：管理區 > 分類價格" , () => {
    
        expect( is_Url_Admin_PriceSetting( price_setting ) ).toBeTruthy() ; 

    }) ;

    test( "is_Url_Admin_Account() : 路徑為：管理區 > 帳號設定" , () => {
    
        expect( is_Url_Admin_Account( account ) ).toBeTruthy() ;
    
    }) ;

    test( "is_Url_Admin_Employee() : 路徑為：管理區 > 員工設定" , () => {
    
        expect( is_Url_Admin_Employee( employee ) ).toBeTruthy() ;
    
    }) ;


    test( "is_Url_Admin_FrontEnd() : 路徑為：管理區 > 外網設定" , () => {
    
        expect( is_Url_Admin_FrontEnd( front_end ) ).toBeTruthy() ;
    
    }) ;

    test( "is_Url_Admin() : 路徑為：管理區" , () => {
    
        expect( is_Url_Admin( finance ) ).toBeTruthy() ;
        expect( is_Url_Admin( price_setting ) ).toBeTruthy() ;
        expect( is_Url_Admin( account ) ).toBeTruthy() ;
        expect( is_Url_Admin( employee ) ).toBeTruthy() ;
        expect( is_Url_Admin( front_end ) ).toBeTruthy() ;

        expect( is_Url_Admin( "/customer" ) ).not.toBeTruthy() ;
    
    }) ;



}) ; 




