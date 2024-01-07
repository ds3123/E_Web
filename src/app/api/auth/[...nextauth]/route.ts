import NextAuth from "next-auth"
import { NextAuthOptions } from "next-auth" ;
import GoogleProvider from "next-auth/providers/google" ;


// # Next Auth 物件
export const authOptions : NextAuthOptions = {

    // 授權提供者
    providers : [
                   // Google
                   GoogleProvider({ 
                                     clientId     : process.env.GOOGLE_CLIENT_ID! ,
                                     clientSecret : process.env.GOOGLE_CLIENT_SECRET!
                                  }) ,

                ] ,

 } satisfies NextAuthOptions ;



// # 讀取上述物件設定，進行 Auth 授權處理
const handler = NextAuth( authOptions ) ;

export { handler as GET, handler as POST }