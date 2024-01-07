"use client"
import {
         DropdownMenu,
         DropdownMenuContent,
         DropdownMenuItem,
         DropdownMenuTrigger,
         DropdownMenuLabel ,
         DropdownMenuSeparator
       } from "@/components/ui/dropdown-menu" ;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar" ;
import { cn } from "@utils/shadcn/utils"
import Image from "next/image" ; 
import { Session } from "next-auth" ; 
import { Button } from "@ui/button" ;
import { signIn , signOut } from "next-auth/react";


  
type Avatar = {
    image?     : string | null ;
    alt?       : string | null ;
    className? : string ;
    session    : Session | null ;
}


// # Chat App 專用
const Chat_Avatar = ( { image , alt , className , session } : Avatar ) => {


  // 未登入時顯示 : Sign In  
  if( !session ) return <Button variant = { 'outline' } onClick = { () => signIn() } > 
                           Sign In 
                        </Button> ;   


  return session && <div>

                        { /* DropdownMenu 元件 */ }
                        <DropdownMenu >

                            { /* 觸發 */ }
                            <DropdownMenuTrigger>

                                { /* Avatar 元件 */ }
                                <Avatar className = { cn( 'bg-white text-black' , className ) } >

                                    { image && <Image src       = { image }
                                                      alt       = { alt || "User name" }
                                                      width     = { 40 }
                                                      height    = { 40 } 
                                                      className = "rounded-full" /> } 
                                    {/* <AvatarImage src="https://github.com/shadcn.png" /> */}

                                    { /* 當沒有傳入以上圖片時，預設顯示 */ }
                                    <AvatarFallback delayMs = { 1000 } className = "dark:bg-white dark:text-black text-lg" >
                                        
                                        { alt?.split( " " ).map( n => n[0] ).join( "" ) }
                                        
                                    </AvatarFallback>

                                </Avatar>

                            </DropdownMenuTrigger>

                            { /* 內容選項 */ }
                            <DropdownMenuContent>

                                <DropdownMenuLabel> { session.user?.name } </DropdownMenuLabel>
                               
                                <DropdownMenuSeparator />
                               
                                <DropdownMenuItem onClick = { () => signOut() } > Sign Out </DropdownMenuItem>

                            </DropdownMenuContent>

                        </DropdownMenu>

                    </div> 

} ;

export default Chat_Avatar  