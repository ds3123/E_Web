import { FC , useState , useCallback } from 'react' 
import { BsBoxArrowUpRight , BsPencilSquare } from "react-icons/bs" 
import { BiUnlink} from "react-icons/bi" 
import { BubbleMenu, Editor } from '@tiptap/react'
import Link_Form, { linkOption } from './Link_Form';


type Props = {

   editor : Editor

} ;


// # 編輯 _ 連結
const Edit_Link : FC< Props > = ( { editor } ) => {

  
  // 使否顯示編輯表單  
  const [ showEditForm , set_ShowEditForm ] = useState< boolean >( false ) ;  



  // 打開連結  
  const handleOnLinkOpenClick = useCallback( () => {

    const { href } = editor.getAttributes( 'link' ) ;

    if( href ){

      window.open( href , "_blank" ) ;   

    } 
    
  } , [ editor ] )  ; 


  // 編輯連結
  const handleLinkEditClick = () => {

    set_ShowEditForm( true ) ;

  } ;  

  // 刪除連結
  const handleUnlinkClick = () => editor.commands.unsetLink() ;


  // 提交處理
  const handleSubmit = ( { url , openInNewTab } : linkOption ) => { 

    // 先清除連結，再設定連結
    editor.chain().focus().unsetLink().setLink( { href : url , target : openInNewTab ? '_blank' : '' } ).run() ;

    // 隱藏表單
    set_ShowEditForm( false ) ;

  } ;


  // 取得 _ 初始狀態
  const getInitialState = useCallback( () => {

    const { href , target } = editor.getAttributes( 'link' ) ;

    return { url : href , openInNewTab : target ? true : false }
    
  } , [ editor ] )  ; 

 
  // 只有編輯連結，才顯示
  return <BubbleMenu editor       = { editor } 
                     shouldShow   = { ( { editor } ) => editor.isActive( 'link' ) } 
                     tippyOptions = {{
                                       onHide : () => {  set_ShowEditForm( false ) ; } // 先隱藏 Edit_Form

                                     }} >


            <Link_Form visable      = { showEditForm } 
                       onSubmit     = { handleSubmit } 
                       initialState = { getInitialState() } />

            { !showEditForm && 

                <div className = "flex items-center space-x-6 relative z-50 rounded shadow-lg p-3 bg-white" >
                
                    <button onClick = { handleOnLinkOpenClick } >
                        <BsBoxArrowUpRight />
                    </button>   

                    <button onClick = { handleLinkEditClick } >
                        <BsPencilSquare />
                    </button>   

                    <button onClick = { handleUnlinkClick } >
                        <BiUnlink />
                    </button>   

                </div>

            }           

         </BubbleMenu>

} ;

export default Edit_Link  