
import { FC , MouseEventHandler , ReactNode , useCallback } from 'react' ;

type Props = {

  children     : ReactNode ;
  active?      : boolean ;
  disabled?    : boolean ;
  onMouseDown? : MouseEventHandler< HTMLButtonElement > ;
  onClick?     : MouseEventHandler< HTMLButtonElement > ;

} ;


// # 編輯器按鈕
const Editor_Button : FC< Props > = ( { children , active , disabled , onClick , onMouseDown } ) : JSX.Element => {

  
  return <button type        = "button"
                 className   = { `p-2 rounded text-lg hover:scale-110 hover:shadow-md transition ${ active  ? 'text-white bg-black' : 'text-black bg-gray-100' }` }
                 onMouseDown = { onMouseDown }
                 onClick     = { onClick }
                 disabled    = { disabled } >

            { children }      

         </button>
} ;

export default Editor_Button  