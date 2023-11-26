'use client'
import { FC } from 'react' ;
import { useDispatch , useSelector } from 'react-redux';
import { AppDispatch , RootState } from '@store/store' ;
import { close_Right_Panel } from '@reducer/reducer_Layout'


// ＠ 右側面板
const Toggle_Panel_Right : FC = () => {


   const dispatch = useDispatch< AppDispatch >() ; 

   const is_Right_Panel_Open   = useSelector( ( state: RootState ) => state.layout.is_Right_Panel_Open ); 
   const right_Panel_Component = useSelector( ( state: RootState ) => state.layout.right_Panel_Component ); 
   

   // 關閉 _ 右側滑動面板
   const close_Panel = () => dispatch( close_Right_Panel() ) ;

  

   return <div data-testid = "Toggle_Panel_Right" >

               { /* 遮罩 */ }
               <div className = { `fixed z-10 cursor-pointer inset-0 bg-gray-900 bg-opacity-50 flex justify-end ${ is_Right_Panel_Open ? "" : "hidden" } ` }
                    onClick   = { close_Panel } > 
               </div>  

               { /* 右側面板 */ }
               <div className = { `fixed z-10 bottom-0 -right-[70em] h-full w-[70em] p-12 overflow-y-auto overflow-x-hidde bg-white transform ${ is_Right_Panel_Open ? "-translate-x-[71em]" : "translate-x-[0em]" } transition duration-500` } 
                    onClick   = { e => e.stopPropagation() } >

                         { right_Panel_Component }
                              
               </div> 
    
          </div>

} ;

export default Toggle_Panel_Right
       

