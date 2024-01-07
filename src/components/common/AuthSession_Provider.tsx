
"use client"
import { SessionProvider } from "next-auth/react" ;


// # Next Auth 的 session provider
const AuthSession_Provider = ( { children } : { children : React.ReactNode } ) => {

  return <SessionProvider>
     
            { children }
             
         </SessionProvider>

} ;

export default AuthSession_Provider