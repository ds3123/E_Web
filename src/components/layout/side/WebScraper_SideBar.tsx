import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid";





// # for web_scraper 專案
const WebScraper_SideBar = () => {

  return <div className = "p-2 py-6 md:p-10 overflow-y-auto border-b border-indigo-500/20" >
            
            <div className = "flex flex-col items-center mb-10 text-center" >

               <DocumentMagnifyingGlassIcon className = "h-16 md:w-16 text-indigo-600" />

               <h1 className = "hidden md:inline text-3xl mt-2 mb-2" > Web Scraper </h1>
               <h2 className = "hidden md:inline text-xs italic" > Scarping the Unscrapable </h2>
                
            </div>
            
            <ul>


            </ul>
             
         </div>
} ;

export default WebScraper_SideBar