
import { initializeApp , getApp , getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore" ;
import { getStorage } from "firebase/storage" ;


/*

    Udemy 教學 ： https://www.udemy.com/course/react-js-tutorial/learn/lecture/32461752#overview

*/

// 設定選項
const firebaseConfig = {

  apiKey            : process.env.FIREBASE_API_KEY ,
  authDomain        : "web-api-f5107.firebaseapp.com",
  projectId         : "web-api-f5107",
  storageBucket     : "web-api-f5107.appspot.com",
  messagingSenderId : "19499484520",
  appId             : "1:19499484520:web:4fd05ea09b3f5fcd0e42dd",
  measurementId     : "G-63JZSBJTCE"

} ;


// # 初始化 Firebase 

// 主程式
const firebase_app     = !getApps().length ? initializeApp( firebaseConfig ) : getApp() ;  // 增加條件判斷，避免每次都進行初始化

// Firestore 資料庫
const firestore_db     = getFirestore( firebase_app ) ;

// 雲端儲存
const firebase_storage = getStorage( firebase_app ) ;


export { firebase_app , firestore_db , firebase_storage } ;





