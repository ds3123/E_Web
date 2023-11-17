import { FC , useState } from 'react' ;
import Editor_Button from '../Editor_Button';
import { BsLink45Deg } from 'react-icons/bs'
import Link_Form , { linkOption } from './Link_Form';


type Props = {

  onSubmit( likn : linkOption ) : void ;

}


// # 輸入 _ 連結
const Insert_Link : FC< Props > = ( { onSubmit } ) => {

  // 是否顯示
  const [ visable , set_Visable ] = useState< boolean >( false )  ; 


  // 顯示表格
  const show_Form = () => set_Visable( true ) ;

  // 隱藏表格
  const hide_Form = () => set_Visable( false ) ;


  // 提交處理
  const handleSubmit = ( link : linkOption ) => {

     if( !link.url.trim() ) return hide_Form() ;

     onSubmit( link ) ;

     hide_Form() ;
  
  } ;


  return <div onKeyDown = { ( { key } ) => {

                                              // 點按鈕以外地方，隱藏 ( 但似乎沒有作用 2023.11.05 )
                                              if( key === "Escape" ) hide_Form() ;

                                            } } className = "relative" >
                                                        
            { /* 連結按鈕 */ }
            <Editor_Button onClick = { visable ? hide_Form : show_Form } >  
                <BsLink45Deg />  
            </Editor_Button>

            { /* 輸入連結 */ }
            <div className = "absolute z-50 top-full mt-4 right-0" >
                <Link_Form visable = { visable } onSubmit = { handleSubmit } />
            </div>
                                                            
         </div>

} ;

export default Insert_Link   