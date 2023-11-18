
import { FC , useState } from 'react' ;


type Props = {
 
   head    : React.ReactNode ; 
   options : { label : string ; onClick() : void }[ ] ;

} ;


// # 下拉選單 _ 選項
const Dropdown_Options : FC< Props > = ( { head , options } ) : JSX.Element => {

  // 是否顯示選項
  const [ showOptions , set_ShowOptions ] = useState< boolean >( false ) ;


  return <button className       = "relative" 
                     onMouseDown = { () => set_ShowOptions( !showOptions ) } 
                     onBlur      = { () => set_ShowOptions( false ) } >

            { head }

            { showOptions &&

                <div className = "min-w-max absolute top-full mt-4 z-10 border-2 bg-gray-200 rounded text-left" >

                    <ul className = "p-3 space-y-3" >
                         { 
                           options.map( ( { label , onClick } , index ) => 
                                   <li key = { label + index } onMouseDown = { onClick } > { label } </li>  ) 
                         }
                    </ul>

                </div>

            }

         </button>
         
} ;

export default Dropdown_Options  