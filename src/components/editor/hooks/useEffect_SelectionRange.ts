/* eslint-disable react-hooks/exhaustive-deps */
import { useState , useEffect } from 'react' 
import { Editor , Range } from '@tiptap/react'




// 設定 _ 文字選取範圍
export const useEffect_SelectionRange = ( editor : Editor | null ) => {

    // 選擇範圍
    const [ selectionRange , set_SelectionRange ] = useState< Range >() ;


    // editor 設定 _ 文字選取範圍                         
    useEffect( () => {
        
        if( editor && selectionRange ){

            editor.commands.setTextSelection( selectionRange ) ;

        }
        
    } , [ editor , selectionRange ] ) ;    


    return set_SelectionRange ;


} ;