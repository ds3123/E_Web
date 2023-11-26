import { Left_SideBar , Toggle_Panel_Right } from "@layout/index"
 


// # 系統內容整體樣板
const AdminContent_Layout = ( { children } : { children: React.ReactNode } ) => {

  
  return <div className = "flex" >

             { /* 左側 _ 服務類型選項 */ }
             <Left_SideBar />

             { /*  右側 _ 滑動面板  */ }
             <Toggle_Panel_Right />  

             { /* 右側 _ 選項內容 */ } 
             <main className = "fixed left-16 pr-16 inset-0 w-full" > 

                { children }

             </main>
             
         </div>
} ;

export default AdminContent_Layout   