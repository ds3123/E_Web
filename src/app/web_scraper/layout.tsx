import { WebScraper_SideBar , WebScraper_Header } from "@/components/layout";


const WebScraper_Page = ( { children } : { children : React.ReactNode } ) => {

  return <div className = "flex bg-[#F7FBFF] h-screen" >

             { /* Sidebar */ }
             <WebScraper_SideBar />

             { /* Main */ }
             <main className = "p-10 max-w-7xl w-full mx-auto" >

               { /* header */ }
               <WebScraper_Header />

               { children }

             </main>
             
         </div>
} ;

export default WebScraper_Page  