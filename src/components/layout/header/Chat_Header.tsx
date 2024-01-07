import { getServerSession } from 'next-auth';
import { DarkModeToggle , Chat_Logo , Chat_Avatar , Create_Chat_Button } from '@layout/index' ;
import { authOptions } from '@/app/api/auth/[...nextauth]/route' ;
import Link from 'next/link';
import { MessageSquareIcon } from 'lucide-react';


// # Chat App 專用
const Chat_Header = async() => {




  // NextAuth Session
  const session = await getServerSession( authOptions ) ;



  return <header className = "sticky top-0 z-50 bg-white dark:bg-gray-900" >
 
              <nav className = "flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto" >

                 {/* Logo */}
                  <Chat_Logo />

                  <div className = "flex-1 flex items-center justify-end space-x-4 mt-5 sm:mt-0 z-50" >

                     { /* Language Select */ }


                     { /* Session */ }
                     {
                        session ? <> 
                                      { /* 對話頁面 */ }
                                      <Link href = "/chat/dialogue" prefetch = { false } >
                                          <MessageSquareIcon className = "text-black dark:text-white" />
                                      </Link >
                                    
                                      { /* 新增對話 */ }
                                      <Create_Chat_Button />

                                  </>  
                                : <>
                                      <Link href = "/chat/pricing" >
                                           Pricing
                                      </Link>
                                  </>
                     }

                     { /* Dark Mode Toggle */ }
                     <DarkModeToggle /> 

                     { /* User Button */ }
                     <Chat_Avatar session = { session } image = { session?.user?.image }  alt = { session?.user?.name } />

                  </div>

              </nav>

              { /* Upgrade Banner */ }

         </header>

} ;

export default Chat_Header  