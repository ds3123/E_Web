import { withAuth } from "next-auth/middleware" ;

// 藉由中介軟體 withAuth，保護授權路徑 ( 透過以下來指定 _ 欲保護路徑 )
export default withAuth ;


// 指定 _ 欲保護路徑
export const config = {

    // 在以下路徑的頁面，會要求 Log In
    matcher : [ "/chat/dialogue" , "/chat/dialogue/:id*" , "/chat/register" ]

} ;