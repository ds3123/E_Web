
import { FC, useState , useEffect } from 'react' ;
import { validate_Url } from '../utils/editor_utils';


export type linkOption = {

    url          : string ;
    openInNewTab : boolean ; 

} ;


type Props = {

   visable        : boolean ;
   initialState?  : linkOption
   onSubmit( likn : linkOption ) : void ;

} ;


const defaultLink = {

   url          : "" ,
   openInNewTab : false 

} ;




// # 輸入連結表單
const Link_Form : FC< Props > = ( { visable , initialState , onSubmit } ) => {


  // 設定連結
  const [ link , set_Link ] = useState< linkOption >( defaultLink ) ;


  // 還原表單
  const resetForm = () => set_Link( { ...defaultLink } ) ;


  // 點選提交
  const handleSubmit = () => {

    onSubmit( { ...link , url : validate_Url( link.url ) } ) ;

    resetForm() ;
  
  } ;


  // 設定 _ 初始狀態
  useEffect( () => {

     if( initialState ) set_Link( { ...initialState } ) ;   

  } , [ initialState ] ) ;
  

  if( !visable ) return null ;


  return <div className = "rounded p-2 bg-white shadow-md" >
     
             { /* 輸入網址 */ }
             <input autoFocus 
                    type        = "text" 
                    className   = "bg-transparent rounded border-2 p-2"
                    placeholder = "https://example.com" 
                    value       = { link.url }
                    onChange    = { ( { target } ) => set_Link( { ...link , url : target.value } ) } />

             { /* 點選使用 */ }
             <div className = "flex items-center space-x-2 mt-2" >

                <input type    = "checkbox" 
                       id      = "open-in-new-tab" 
                       checked = { link.openInNewTab }
                    onChange   = { ( { target } ) => set_Link( { ...link , openInNewTab : target.checked } ) } />
                    
                <label htmlFor = "open-in-new-tab" className = "text-sm" > open in new tab </label>

                <div className = "flex-1 text-right" >
                    <button onClick   = { handleSubmit }
                            className = "bg-blue-400 px-2 py-1 text-white rounded text-sm" > 
                        Apply  
                    </button>
                </div>

             </div>
             
         </div>
} ;

export default Link_Form  