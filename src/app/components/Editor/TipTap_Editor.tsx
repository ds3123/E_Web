/* eslint-disable react-hooks/exhaustive-deps */

import { FC } from 'react' 
import { EditorContent } from '@tiptap/react'
import TipTap_ToolBar from './TipTap_ToolBar'
import Edit_Link from './Link/Edit_Link'
import { useEffect_Editor } from './hooks/useEffect_Editor'
import { useEffect_Get_EditorContent , useEffect_Set_EditorContent } from './hooks/useEffect_Get_EditorContent'




type Props = {

  initialValue?  : string ;                       // 初始值 ( for 編輯 )  
  get_Editor_Content( content : string ) : void ; // 回傳 _ 編輯器內容

} ;


/*
    
    # Tiptap 編輯器 ( 獨立版本 2023.11.10 )

    參考連結 : https://www.udemy.com/course/full-stack-development-with-next-js-typescript/learn/lecture/34209210#overview

*/
const TipTap_Editor : FC< Props > = ( { initialValue , get_Editor_Content } ) => {


  // TipTap 實體化設定
  const editor = useEffect_Editor() ;

  // 回傳 _ TipTap 編輯器所產生的資料
  useEffect_Get_EditorContent( editor , get_Editor_Content ) ;

  // 設定 _ 初始值 ( for 編輯 ) 
  useEffect_Set_EditorContent( editor , initialValue ) ;


  return <div>
 
             <div className = "sticky top-0 z-10 bg-white" > 

                { /* 工具列  */ }
                <TipTap_ToolBar editor = { editor }  />

                <div className = "h-[1px] w-full bg-gray-200 my-3" ></div>
             
             </div>

              { /* 編輯 _ 連結  */ }
              { editor ? <Edit_Link editor = { editor } /> : null }

              { /* 編輯器內容  */ }
              <EditorContent editor = { editor }  className = "min-h-[300px]" />
             
         </div>

} ;

export default TipTap_Editor  