
import * as admin from "firebase-admin" ;
import { getApps } from "firebase-admin/app";


/*

    @ Sonny 教學 ( 1:57:20 ) ： https://www.youtube.com/watch?v=FJb8xOhX3ZE&t=316s
 
      # 尚未使用
      

*/


// serviceAccountKey.json 位於根目錄，因爲 Server 端，所以安全 ( ? )
const serviceAccount = require( "./serviceAccountKey.json" ) ;


// 若尚未初始化
if( !getApps().length ){

    admin.initializeApp({ credential : admin.credential.cert( serviceAccount ) }) ;
 
}


const adminDb = admin.firestore() ;

export { adminDb } ;


