

import { FC } from 'react' 
import Link from 'next/link';
import Image from 'next/image';
import DemoGif from '@images/landingPage/demo.gif'



/*

   # 專案練習 Youtube
    https://www.youtube.com/watch?v=OOUsvDOKlGs

*/

const Chat_Page : FC = () => {


    return <main>
    
             <div className = "relative isolate pt-14 dark:bg-gray-900" >

                <div className = "absolute inset-x-0 top-28 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden = "true" >

                   <div className = "bg-gradient-radial from-purple-600 t0-red-400 relative left-[calc(50%-11rem)] aspect-video w-[36.125rem] -translate-x-1/3 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
                        style     = {{ clipPath : "polygon( 50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38% )" }} />


                </div>
                
                <div className = "py-12 sm:py-20 lg:pb-40" >

                    <div className = "mx-auto max-w-7xl px-6 lg:px-8" >  

                        <div className = "mx-auto max-w-2xl text-center" >

                            <h1 className = "text-4xl font-bold tracking-tight sm:text-6xl" >
                                Create with Anyone , anywhere !
                            </h1>
                            <p className = "mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300" >
                                You speak your language , they speak their language.{ " " }
                                <span className = "text-indigo-600 dark:text-indigo-500" > Let AI handle the translation </span>
                            </p>
                            <div className = "mt-10 flex items-center justify-center gap-x-6" >

                                <Link href      = "/chat/dialogue"
                                      className = "rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                                    Get Started
                                </Link>

                                <Link href      = "/chat/pricing" 
                                      className = "text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300" >
                                    View Pricing 
                                </Link>

                            </div>
                            
                        </div>

                        <div className = "mt-16 flow-root sm:mt-24" >

                            <div className = "-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:g-4" >
                              
                                 <div className = "w-full h-[800px] rounded-lg opacity-30 bg-white" >


                                 </div>

                                {/* <Image unoptimized
                                    src       = { DemoGif }
                                    alt       = "App screenshot"
                                    width     = { 2432 }
                                    height    = { 1442 }
                                    className = "rounded-md shadow-2xl ring-1 ring-gray-900/10" />  */}

                            </div>

                        </div>

                    </div> 

                </div>

                <div className = "absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden = "true" >

                    <div className = "bg-gradient-radial from-purple-600 t0-red-400 relative left-[calc(50%-11rem)] aspect-video w-[36.125rem] -translate-x-1/3 rotate-[30deg] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]" 
                            style     = {{ clipPath : "polygon( 50% 0%, 100% 38%, 82% 100%, 18% 10%, 40% 38% )" }} />


                </div>

             </div>

           </main>

} ;


export default Chat_Page
       