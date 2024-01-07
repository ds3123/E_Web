
"use client"
import { Button } from "@/components/ui/button";
import { MessageSquarePlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";


// for Chat 專案 : 新增對話
const Create_Chat_Button = () => {


  const router = useRouter() ; 


  // 新增對話
  const create_NewChat = async() => {
  

      router.push( `/chat/123` ) ;
  

  } ;  


  return <Button onClick = { create_NewChat } variant = { 'ghost' } >

            <MessageSquarePlusIcon />

         </Button>

} ;

export default Create_Chat_Button  