import { useState } from 'react' ;
import TipTap_Editor from '@/components/editor/TipTap_Editor'


type Editor = {

    'editor_Content' : string ;
    'TipTap_Editor'  : JSX.Element ;

}



// TipTap 編輯器
export const useEffect_TipTap_Editor = ( initValue : string ) : Editor => {


    // 編輯器內容
    const [ editor_Content , set_Editor_Content ] = useState< string >( "" ) ;


    return { 
             'editor_Content' : editor_Content , 
             'TipTap_Editor'  : <TipTap_Editor get_Editor_Content = { set_Editor_Content } initialValue = { initValue } /> 
           } ;


} ;