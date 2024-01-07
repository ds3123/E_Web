
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline"



/*

   # 專案練習 Youtube
     https://www.udemy.com/course/react-js-tutorial/learn/lecture/32463910#overview

*/

const WebScraper_Page = (  ) => {

  return <>

            <div className = "flex flex-col items-center text-center" >

                 <DocumentMagnifyingGlassIcon className = "h-64 w-64 text-indigo-600/20" />

                 <h1 className = "text-3xl mt-2 mb-5 text-black font-bold" > 
                     Welcom to the Amazon Web Scraper 
                 </h1>
 
                 <h2 className = "text-lg italic text-black/50" > 
                     To learn how to code ZERO experience , join ZERO TO FULL STACK HERO
                 </h2>

                 <h3 className = "text-lg italic text-black/50" >
                     https://www.danny.com/course
                 </h3>

            </div>
             
         </>
} ;

export default WebScraper_Page