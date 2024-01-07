
import { FC } from 'react' ;
import { AiOutlineLogout } from "react-icons/ai"




// 登出按鈕
const Logout_Button : FC< { onClick() : void } > = ( { onClick } ) => {

  return  <AiOutlineLogout onClick   = { onClick } 
                           className = "absolute right-3 text-gray-400 hover:text-black cursor-pointer" size = { 35 } />


                           
} ;

export default Logout_Button  