import { FC } from 'react' ;
import { Card , Card_Title , Card_Row } from "@layout/index" 
import { get_Today } from "@utils/helper/date" 
import { BsCalendar2Week } from "react-icons/bs" ;





// # 今日預約列表
const Today_Appointments : FC = (  ) => {


  
    // 今日
    const today = get_Today().substring( 4 , 9 ) ;
     

  return  <Card span = '1' height = '71' shadow = 'shadow-xl' >
                        
              <Card_Title  title = { `今日預約 ( ${ today } )` } background = 'bg-yellow-50' icon = { <BsCalendar2Week size = { 27 } /> } />


          </Card> 

} ;

export default Today_Appointments  