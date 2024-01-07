
import { FC } from 'react' 
import { Card , Card_Title } from "@layout/index" 
import { BsShop } from "react-icons/bs" ;
import { BiCut } from "react-icons/bi" ;
import { GoHome } from "react-icons/go" ;
import { TbDog } from "react-icons/tb" ;


// # 到店狀態
const Shop_Status : FC = (  ) => {



    
  return <Card span = '4' shadow = 'shadow-lg'>

            <div className = "grid md:grid-cols-4 gap-1" >

               { /* 到店等候中 */ }
                <Card span = '1' height = '70' padding = 'p-0' >

                    <Card_Title title = "到店等候中" icon = { <BsShop size = { 27 } /> } />
                
                </Card>

                { /* 到店美容中  */ }
                <Card span = '1' height = '70' padding = 'p-0' > 
                
                    <Card_Title title = "到店美容中" icon = { <BiCut size = { 29 } /> } />

                </Card>
                    
                { /* 洗完等候中 */ }
                <Card span = '1' height = '70' padding = 'p-0' > 

                    <Card_Title title = "洗完等候中" icon = { <TbDog size = { 32 } /> } />
                
                </Card>
                    
                { /* 已回家 ( 房 ) */ }
                <Card span = '1' height = '70' padding = 'p-0' > 

                    <Card_Title title = "已回家 ( 房 )" icon = { <GoHome size = { 29 } /> } />
                    
                </Card>


            </div>
             
         </Card>

} ;

export default Shop_Status  