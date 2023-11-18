
import { FC , useState } from 'react' ;
import Editor_Button from '../Editor_Button';
import { BsYoutube } from 'react-icons/bs'


type Props = {

  onSubmit( likn : string ) : void ;

}


// # 嵌入 Youtube 影片
const Embed_Youtube : FC< Props > = ( { onSubmit } ) => {

  // Youtube 網址
  const [ url , set_Url ] = useState< string >( "" ) ;


  // 是否顯示
  const [ visable , set_Visable ] = useState< boolean >( false )  ; 


  // 顯示表格
  const show_Form = () => set_Visable( true ) ;

  // 隱藏表格
  const hide_Form = () => set_Visable( false ) ;


  // 提交處理
  const handleSubmit = () => {

     if( !url.trim() ) return hide_Form() ;

     onSubmit( url ) ;

     set_Url( '' ) ;

     hide_Form() ;
  
  } ;


  return <div onKeyDown = { ( { key } ) => {

                                              // 點按鈕以外地方，隱藏 ( 但似乎沒有作用 2023.11.05 )
                                              if( key === "Escape" ) hide_Form() ;

                                            } } className = "relative" >
                                                        
            { /* Youtube 按鈕 */ }
            <Editor_Button onClick = { visable ? hide_Form : show_Form } >  
                <BsYoutube />  
            </Editor_Button>

            { /* 輸入 Youtube 連結 */ }
            { visable && 

                <div className = "absolute z-50 top-full mt-4 right-0" >

                   <div className = "flex space-x-2" >

                      <input autoFocus 
                              type        = "text" 
                              className   = "bg-transparent rounded border-2 p-2"
                              placeholder = "https://youtube.com" 
                              value       = { url }
                              onChange    = { ( { target } ) => set_Url( target.value ) } />

                      <button onClick   = { handleSubmit }
                              className = "bg-blue-400 p-2 text-white rounded text-sm" > 
                          Embed
                      </button>

                   </div>

                </div>

            }

         </div>

} ;

export default Embed_Youtube   