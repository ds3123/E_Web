import { Editor } from "@tiptap/react"


// 取得 _ focus Editor
export const focused_Editor = ( editor : Editor ) => editor.chain().focus() ;


// 取得 _ 有效網址
export const validate_Url = ( url : string ) : string => {

    if( !url.trim() ) return "" ;

    let valid_Url ;

    try{

       valid_Url = new URL( url ) ; // 若非有效網址，會拋出錯誤

    }catch( error ){

       valid_Url = new URL( 'http://' + url ) ;

    }

    return valid_Url.origin ;

} ;


