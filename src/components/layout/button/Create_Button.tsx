
import { FC } from 'react' ;
import { MdOutlineAddCircle } from "react-icons/md" ;


type Button = {

  buttonType : string ;     // 新增類型
  onClick    : () => void ; // 點選 _ 事件處理

}

// 新增按鈕
const Create_Button : FC< Button > = ( { onClick , buttonType } ) => {

  
    return <button data-testid = "Create_Button" className = "flex items-center px-3 h-12 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg cursor-pointer" 
                   onClick     = { () => onClick() } >

              <MdOutlineAddCircle size = { 20 } className = "mr-2" /> 
              <span className = "font-bold text-md md:text-base" > 新增 _ { buttonType } </span>

           </button>

} ;

export default Create_Button
       