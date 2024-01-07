
"use client"
import { collection , doc , updateDoc , setDoc , serverTimestamp , arrayUnion , arrayRemove } from "firebase/firestore";
import { firestore_db } from "@/firebase";




const update_No_Dot = async() => {


    const docRef = doc( firestore_db , "users" , "frank" ) ;

    // await setDoc( docRef , {

    //                           name      : "Frank",
    //                           favorites : {
    //                                         food    : "Pizza",
    //                                         color   : "Blue",
    //                                         subject : "Recess"
    //                                       },
    //                           age       : 12

    //                         }) ;

    await updateDoc( docRef , {

                                "favorites.color" : "Red"

    }) ;
  
    alert( `update_No_Dot() 完成` ) ;

   
} ;


const update_Add_ArrayEle = async() => {

  const docRef = doc( firestore_db , "users" , "frank" ) ;

  await updateDoc( docRef , {

                                friends : arrayUnion( "Danny" )

                            }) ;

  alert( `update_Add_ArrayEle() 完成` ) ;                    

} ;


const update_Remove_ArrayEle = async() => {


  const docRef = doc( firestore_db , "users" , "frank" ) ;

  await updateDoc( docRef , {

                                friends : arrayRemove( "Danny" )

                            }) ;

  alert( `update_Remove_ArrayEle() 完成` ) ;                 


} ;


const update_Doc = async() => {

    await updateDoc( doc( firestore_db , "cities" , "LA" ) , { 

          "DD" : serverTimestamp()

    }) ;

    alert( `update_Doc() 更新成功` ) ;
  
} ;


// # 測試 Firebase : 更新
const FirebaseTest_Update_Page = async( ) => {
  

  return <>

             
           <button onClick = { update_Doc }   className = "m-5 p-4 bg-slate-600/10" > update_Doc( )    </button>
           <button onClick = { update_No_Dot }   className = "m-5 p-4 bg-slate-600/10" > update_No_Dot( )    </button>
           <button onClick = { update_Add_ArrayEle }   className = "m-5 p-4 bg-slate-600/10" > update_Add_ArrayEle( )    </button>
           <button onClick = { update_Remove_ArrayEle }   className = "m-5 p-4 bg-slate-600/10" > update_Remove_ArrayEle( )    </button>

  
         </>

} ;

export default FirebaseTest_Update_Page