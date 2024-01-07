
'use client'
import { FC , useState } from 'react' 


interface Nav {

    children : ( value : any ) => JSX.Element ; 
    options  : string[] ;

}


// # 一般功能導覽列 ( 帶有選項  )
const Section_Options_Nav : FC< Nav > = ( { children , options } ) => {


    const [ action , set_Action ] = useState< string >( options[0]  ) ;

    const click_Tag = ( x : string ) => set_Action( x ) ;


  return <>

              { /* 選項頁籤 */ } 
              <div className = "flex mb-10">

                {
                   options.map( ( x : any , y ) => 
                                    <p role      = 'listitem' 
                                       key       = { y } 
                                       onClick   = { () => click_Tag( x ) } 
                                       className = { `nav_btn cursor-pointer ${ action === x ? 'bg-blue-400 text-white' : ''  }` } >
                                        { x } 
                                    </p>    
                              )
                }

              </div>

              { /* 頁籤內容 */ }
              <div className = "p-10">

                  { children( action )  }

              </div>
             
         </>

} ;

export default Section_Options_Nav  