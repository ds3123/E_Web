
"use client"
import { collection , doc , deleteDoc , updateDoc , deleteField } from "firebase/firestore" ;
import { adminDb } from "firebaseAdmin" ;
import { firestore_db } from "@/firebase" ;



const delete_Doc = async() => {

   await deleteDoc( doc( firestore_db , "orders" , "Ue40658b29cc3c59ba944647d726f755f" ) ) ;

   alert( "delete_Doc() 刪除成功" ) ;

} ;



const delete_Field = async() => {

   const docRef = doc( firestore_db , 'users' , 'frank' ) ;
      
   // 從 frank 文件，刪除其 name 欄位
   await updateDoc( docRef , {
                               name : deleteField()
                             });

   alert( "delete_Field() 刪除成功" ) ;
   
} ;


// # 測試 Firebase : 刪除
const FirebaseTest_Delete_Page = async() => {


  return <>

            <button onClick = { delete_Doc } className = "m-5 p-4 bg-slate-600/10" > delete_Doc( )  </button>
            <button onClick = { delete_Field } className = "m-5 p-4 bg-slate-600/10" > delete_Field( )  </button>
                            
         </>

} ;

export default FirebaseTest_Delete_Page