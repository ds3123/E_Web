
'use client'
import { FC } from 'react' 
import { Section_Options_Nav } from '@layout/index'
 


type Action = '服務' | '寵物' | '方案' | '住宿'  ;



const services = {
                  '服務' : <> 服務 </> ,
                  '方案' : <> 方案 </> , 
                  '寵物' : <> 寵物 </> ,
                  '住宿' : <> 住宿 </>
                 }

// # 管理區 > 分類價格
const PriceSetting_Page : FC = () => {


  return <div className = "w-5/6 mx-auto min-h-[600px] mt-10" >
              
              { /* 資料內容 */ }      
              <Section_Options_Nav options = {  [ '服務' , '方案' , '寵物' , '住宿'  ] } >

                    { ( value : Action ) => services[ value ] }
                
              </Section_Options_Nav>

         </div>
} ;

export default PriceSetting_Page  