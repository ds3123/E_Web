// TipTap 主程式
import { useEditor , getMarkRange , Editor  } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

// TipTap 額外下載套件
import Underline from '@tiptap/extension-underline'
import Placeholder from '@tiptap/extension-placeholder'
import Link from '@tiptap/extension-link'
import Youtube from '@tiptap/extension-youtube'
import TipTapImage from '@tiptap/extension-image'

import { useEffect_SelectionRange } from './useEffect_SelectionRange'



// 回傳 _ TipTap 設定實體
export const useEffect_Editor = () : Editor | null => {

    // TipTap 實體化設定
    const editor = useEditor({

                                    extensions : [ 
                                                StarterKit ,             // StarterKit 即包含 TipTap 所需的基本節點 ( Ex. Document , Paragraph , Text ) 
                                                Underline ,              // 底線功能，需額外安裝套件擴充
                                                Placeholder.configure({  // 佔位文字，需額外安裝套件擴充
                                                                        placeholder : '請輸入內容...'
                                                                        }) ,
                                                Link.configure({         // 輸入網址連結，需額外安裝套件擴充
                                                                    autolink       : false ,
                                                                    linkOnPaste    : false ,
                                                                    openOnClick    : false ,
                                                                    HTMLAttributes : {
                                                                                    target : ''
                                                                                    }
                                                                }) ,
                                                Youtube.configure({      // 輸入 Youtube 連結，需額外安裝套件擴充
                                                                    width  : 840 ,
                                                                    height : 472.5 ,
                                                                    HTMLAttributes : {
                                                                                        class : 'mx-auto rounded' // 樣式
                                                                                        }
                                                                    }) ,
                                                TipTapImage.configure({  // 圖片處理，需額外安裝套件擴充
                                                                        HTMLAttributes : {
                                                                                            class : 'mx-auto'  // 樣式
                                                                                            }   
                                                                        })    
                                                ] ,
                                
                                    editorProps : {

                                                    // 配合 set_SelectionRange ( 再次修改時，仍有文字選擇作用 ) 
                                                    handleClick( view , pos , event ){

                                                    const { state } = view ;

                                                    // 選擇字串範圍
                                                    const selectionRange = getMarkRange( 
                                                                                            state.doc.resolve( pos ) ,
                                                                                            state.schema.marks.link 
                                                                                        ) ;
                                                    
                                                    if( selectionRange ) set_SelectionRange( selectionRange ) ;

                                                    } , 
                                                    
                                                    attributes : { 
                                                                // 利用 Tailwind 額外下載套件：@tailwindcss/typography，設定編輯器樣式
                                                                class : 'prose prose-lg focus:outline-none max-w-full mx-auto h-full'
                                                                }
                                                } ,

                                    // content    : '<p> Hello World! 🌎️ </p>' 

                            }) ;

    // 設定 _ 文字選取範圍 ( 再次修改時，仍有文字選擇作用 )                      
    const set_SelectionRange = useEffect_SelectionRange( editor ) ;


    return editor ;

} ;

