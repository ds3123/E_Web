
import Link from 'next/link'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Logo_Image from '@images/logos/chat-logo.svg'
import Image from "next/image"


// # for Chat 專案 
const Chat_Logo = (  ) => {

  return  <Link href = "/chat" prefetch = { false } >

                <div className = "flex items-center w-72 h-14" >

                  <AspectRatio ratio = { 16 / 9 } className = "flex items-center justify-center" >

                      <Image priority
                              src       = { Logo_Image }
                              alt       = "Logo"
                              className = "h-14 dark:filter dark:invert " />

                  </AspectRatio>

                </div>

                </Link>

} ;

export default Chat_Logo  