import { FC, MouseEventHandler } from "react"
import { BiLoader } from "react-icons/bi"

type Props = {

  title     : string;
  busy?     : boolean;
  disabled? : boolean;
  onClick?  : MouseEventHandler<HTMLButtonElement>;

} ;

// # 行動按鈕
const Action_Button: FC< Props > = ({ disabled , busy = false , title, onClick } ) => {


  return <button className = "text-white bg-blue-400 px-6 py-2 font-semibold hover:scale-[0.97] duration-100 rounded w-full flex items-center justify-center space-x-2 transition"
                 onClick   = { onClick }
                 disabled  = { disabled } >

                <span> { title } </span>
                { busy && <BiLoader className = "animate-spin" size = { 20 } /> }

         </button> ;

};

export default Action_Button;
