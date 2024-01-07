


'use client'
import { FC } from 'react' 
import { Section_Options_Nav } from '@layout/index'
 


type Action = '主視覺' | '商品' | '活動'  ;



const services = {
                  '主視覺' : <> 主視覺 </> ,
                  '商品' : <> 商品 </> , 
                  '活動' : <> 活動 </> ,
                 }

// # 管理區 > 外網設定
const FrontEnd_Page : FC = () => {


  return <div className = "w-5/6 mx-auto min-h-[600px] mt-10" >
              
              { /* 資料內容 */ }      
              <Section_Options_Nav options = {  [ '主視覺' , '商品' ,'活動'  ] } >

                    { ( value : Action ) => services[ value ] }
                
              </Section_Options_Nav>

         </div>
} ;

export default FrontEnd_Page  