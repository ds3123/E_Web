'use client'
import React , { useReducer } from 'react'


 // for useReducer
 interface I_State {
  account    : string ;
  password   : string ;
  is_success : boolean ;
  error      : string ;
}

interface I_Action {
    type     : 'clean' | 'error' ;
    payload? : any ;

}


const initialState = { 
   
           account    : '' ,  // 帳號
           password   : '' ,  // 密碼

           is_success : false ,  // 已登入

           error      : ''       // 錯誤
        
      } ;


const loginReducer = ( state : I_State , action : I_Action ) => {

  switch( action.type ){

      case 'clean'   : return { ...state , error : '' }
      case 'error'   : {

                          // 清空 _ 帳號密碼
                          const setValue = action.payload.setValue ; 
                          setValue( 'account' , '' ) ; 
                          setValue( 'password' , '' ) ; 

                          return { ...state , is_success : false , error : action.payload.error  }

                       } 
      
      default        : return state ;
   
  }

} ;



// # 後台：登入頁面
export default function page(){


  const [ state , dispatch ] = useReducer( loginReducer , initialState ) ;


  return <div className = "flex items-center justify-center min-h-screen relative -top-10" >

             <form >

                <div className = "flex justify-center mb-10" >

                      <img loading = "lazy" className = "w-full" src = "https://i.imgur.com/8bvjeDJ.png" alt = "" />
               
                </div>

                { /* 帳號 */ } 
                <div className = "mb-7" >

                    <input  className   = { `shadow appearance-none border rounded w-full p-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline` }
                            type        = "text"
                            placeholder = "請輸入：帳號" />
                                  
                          
                </div>

                { /* 密碼 */ }
                <div className = "mb-10" >
                      
                    <input className    = { `shadow appearance-none border rounded w-full p-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline` }
                            type        = "password"
                            placeholder = "請輸入 : 密碼" />
                        
                </div>

                <div className = "flex items-center justify-between" >

                    <button className="w-full text-xl tracking-widest bg-green-300 hover:bg-green-500 text-white font-bold p-5 rounded focus:outline-none focus:shadow-outline" type = "submit" >
                        登 入 系 統
                    </button>

                </div>

             </form>

         </div>

}
