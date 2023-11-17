import { FC } from 'react' 
import { Editor } from '@tiptap/react'
import Dropdown_Options from '../Common/Dropdown_Options'
import Editor_Button from './Editor_Button'
import { focused_Editor } from './utils/editor_utils'
import { AiFillCaretDown } from 'react-icons/ai'
import { RiDoubleQuotesL } from 'react-icons/ri'
import { 
         BsTypeStrikethrough ,
         BsBraces ,
         BsCode ,
         BsListOl ,
         BsListUl ,
         BsTypeBold ,
         BsTypeItalic ,
         BsTypeUnderline ,
        } from 'react-icons/bs'
import Insert_Link from './Link/Insert_Link'
import { linkOption } from './Link/Link_Form'
import Embed_Youtube from './Youtube/Embed _Youtube'
import { ImageSelectionResult } from './Image/Gallery_Modal'
import Insert_Image from './Image/Insert_Image'



type Props = {
   
    editor : Editor | null ; 
  
}


// # TipTap 編輯器 _ 工具列
const TipTap_ToolBar : FC< Props > = ( { editor  } ) : JSX.Element | null => {


    if( !editor ) return null ;


    // 下拉選項 ( 段落大小 )
    const options = [ 
                        { label : "Paragraph" , onClick : () => focused_Editor( editor ).setParagraph().run() } , 
                        { label : "Heading 1" , onClick : () => focused_Editor( editor ).toggleHeading({ level : 1 }).run() } , 
                        { label : "Heading 2" , onClick : () => focused_Editor( editor ).toggleHeading({ level : 2 }).run() } , 
                        { label : "Heading 3" , onClick : () => focused_Editor( editor ).toggleHeading({ level : 3 }).run() } 
                    ] ;

    // 取得 _ 下拉標題 ( 段落大小 )                
    const get_Label = () : string => {
    
        if( editor.isActive( "heading" , { level : 1 } ) ) return "Heading 1" ;
        if( editor.isActive( "heading" , { level : 2 } ) ) return "Heading 2" ;
        if( editor.isActive( "heading" , { level : 3 } ) ) return "Heading 3" ;

        return "Paragraph" ;
    
    } ;                

        
    // 下拉標題元件
    const Head = () => <div className = "flex items-center space-x-2" > 
        
                            <p> { get_Label() } </p>
    
                            <AiFillCaretDown />
                            
                        </div>  ;

    // 提交處理：輸入連結
    const handleLinkSubmit = ( { url , openInNewTab } : linkOption ) => {

        const { commands } = editor ;

        if( openInNewTab ) commands.setLink({ href : url , target : "_blank" }) ;
        else               commands.setLink({ href : url }) ;

    } ;


    // 提交處理：嵌入 Youtube 連結
    const handleEmbedYoutube = ( url : string ) => {
    
        editor.chain().focus().setYoutubeVideo({ src : url }).run() ;
    
    } ;


    // 提交處理：插入圖片
    const handleInsertImage = ( result : ImageSelectionResult ) => {
    
        editor?.chain().focus().setImage({ src : result.src , alt : result.altText }).run() ;
    
    } ;


  return <div className = "flex items-center" >
            
            { /* 段落大小 */ }
            <Dropdown_Options head = { <Head /> } options = { options } />

            { /* 分隔線 */ } 
            <div className = "h-4 w-[1px] bg-gray-400 mx-8" />

            { /* 其他選項 */ }
            <div className = "flex items-center space-x-3" >

                { /* 粗體 */ }
                <Editor_Button active  = { editor.isActive( 'bold' ) } 
                               onClick = { () => focused_Editor( editor ).toggleBold().run() } >  
                    <BsTypeBold />  
                </Editor_Button>

                { /* 斜體 */ }
                <Editor_Button active  = { editor.isActive( 'italic' ) } 
                               onClick = { () => focused_Editor( editor ).toggleItalic().run() } >  
                    <BsTypeItalic />  
                </Editor_Button>

                { /* 底線 */ }
                <Editor_Button  active  = { editor.isActive( 'underline' ) } 
                                onClick = { () => focused_Editor( editor ).toggleUnderline().run() }  >  
                    <BsTypeUnderline  />  
                </Editor_Button>

                { /* 刪除線 */ }
                <Editor_Button active  = { editor.isActive( 'strike' ) }  
                               onClick = { () => focused_Editor( editor ).toggleStrike().run() } >  
                    <BsTypeStrikethrough />  
                </Editor_Button>

                { /* 雙引號 */ }
                <Editor_Button active  = { editor.isActive( 'blockquote' ) }  
                               onClick = { () => focused_Editor( editor ).toggleBlockquote().run() } >  
                    <RiDoubleQuotesL />  
                </Editor_Button>

                { /* < > */ }
                <Editor_Button active  = { editor.isActive( 'code' ) } 
                               onClick = { () => focused_Editor( editor ).toggleCode().run() }  >  
                    <BsCode />  
                </Editor_Button>
                
                { /* 大括號 */ }
                <Editor_Button active  = { editor.isActive( 'codeBlock' ) } 
                               onClick = { () => focused_Editor( editor ).toggleCodeBlock().run() }  >  
                    <BsBraces />  
                </Editor_Button>
                
                { /* 項目列表 */ }
                <Editor_Button active  = { editor.isActive( 'bulletList' ) } 
                               onClick = { () => focused_Editor( editor ).toggleBulletList().run() } >  
                    <BsListUl />  
                </Editor_Button>

                { /* 數字列表 */ }
                <Editor_Button active  = { editor.isActive( 'orderedList' ) } 
                               onClick = { () => focused_Editor( editor ).toggleOrderedList().run() }  >  
                    <BsListOl />  
                </Editor_Button>

            </div>

            { /* 分隔線 */ } 
            <div className = "h-4 w-[1px] bg-gray-400 mx-8" />

            <div className = "flex items-center space-x-3" >

                { /* 嵌入連結 */ }
                <Insert_Link onSubmit = { handleLinkSubmit } />

                { /* 嵌入 Youtube */ }
                <Embed_Youtube onSubmit = { handleEmbedYoutube } />

                { /* 嵌入圖片 */ }
                <Insert_Image onSubmit = { handleInsertImage }  />
        
            </div>
           
         </div>
} ;

export default TipTap_ToolBar  