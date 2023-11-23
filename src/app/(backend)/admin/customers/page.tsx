'use client'
import React from 'react'
import { FC , useState } from 'react' 
import TipTap_Editor from '@/components/editor/TipTap_Editor' 

// import {} from "@store"


const Page : FC = () => {

    
    const [ editor_Content , set_Editor_Content ] = useState< string >( "" ) ;
  

    // 提交表單處理
    const handle_Submit_Form = () => {
    
        console.log( '編輯器內容 : ' , editor_Content ) ;

    } ;


  return  <div className = "border p-5 max-w-6xl mx-auto relative top-10" >
          
             <TipTap_Editor get_Editor_Content = { set_Editor_Content } initialValue = '初始值' />


          </div>

} ;

export default Page   
