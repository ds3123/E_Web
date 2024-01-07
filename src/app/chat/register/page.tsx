
import { authOptions } from "@/app/api/auth/[...nextauth]/route" ;
import { getServerSession } from "next-auth" ;



// # 註冊頁面
const Register_Page = async() => {


  const session = await getServerSession( authOptions ) ;  


  return <>

              註冊頁面

         </>
         
} ;

export default Register_Page   