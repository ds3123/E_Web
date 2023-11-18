/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react' 
import { Editor } from '@tiptap/react'



type get_Data = ( data : string ) => void ;


// 回傳 _ TipTap 編輯器所產生的資料
export const useEffect_Get_EditorContent = ( editor : Editor | null , get_Editor_Content : get_Data ) => {

    // 回傳編輯器內容
    const get_Data = () => {

        if( editor ) get_Editor_Content( editor.getHTML() ) ;
    
    } ;

    // 回傳編輯器內容
    useEffect( () => {

         get_Data() ;

    } , [ get_Data ] ) ;


} ;

// 設定 _ 初始值 ( for 編輯 ) 
export const useEffect_Set_EditorContent = ( editor : Editor | null , initialValue : string | undefined ) => {


    // 設定 _ 初始值 ( for 編輯 ) 
    useEffect( () => {
        
        if( initialValue && editor ) editor?.commands.setContent( initialValue ) ; 
        
    } , [ initialValue , editor ] ) ;


} ;