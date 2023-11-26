
import { rest } from "msw" ;
import Cookies from "js-cookie" ;
import { fake_Service_Data } from "@utils/data/fake_service_data" ;


// 使用者 : 所屬商店 id
const account_id = Cookies.get( "account_id" ) ? Cookies.get( "account_id" ) : "1" ;  



// 服務日期
const service_date = '2023-06-07'



// @ Mock Service Worker -> Handler 設定
export const handlers = [


            // @ 管理區 ------- 

            // # GET _ 服務 : 項目 ( 第一層 )
            rest.get( 
                      `http://localhost:8000/services/account/${ account_id }` , 
                      ( req , res , ctx ) => {

                          return res( ctx.json( fake_Service_Data ) ) 

                      }
                    ) , 


             /*
                 for Hook : useForm_OnSubmit_Create_Service()
             */

             // # POST _ 服務 : 項目 ( 第一層 )
             rest.post( `http://localhost:8000/services` , ( req , res , ctx ) => {

                   return res( ctx.json( { msg : "新增成功" } ) )

             }) , 

             // # POST _ 服務價格
             rest.post( `http://localhost:8000/service_prices` ,  ( req , res , ctx ) => { 

                   return res( ctx.json( { msg : "新增成功" } ) )
             
             } ) ,   

             
            

       ] ;



