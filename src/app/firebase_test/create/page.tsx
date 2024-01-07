
"use client"
import { addDoc , setDoc , collection , doc  } from "firebase/firestore";
import { firestore_db } from "@/firebase";



const add_Doc = async() => {

    const docRef = await addDoc( collection( firestore_db , "orders" ) , {
    
                              id   : "55555" ,
                              text : "GGGG"

                          }) ;

    alert( `addDoc() 新增成功，文件 id 為 : ${ docRef.id }` ) ;
  
} ;


// 新增 _ 子集合
const add_Doc_SubCollection = async() => { 

    const citiesRef = collection( firestore_db , 'cities' );

    await Promise.all([
        
        addDoc(collection(citiesRef, 'SF', 'landmarks'), {
            name: 'Golden Gate Bridge',
            type: 'bridge'
        }),
        addDoc(collection(citiesRef, 'SF', 'landmarks'), {
            name: 'Legion of Honor',
            type: 'museum'
        }),
        addDoc(collection(citiesRef, 'LA', 'landmarks'), {
            name: 'Griffith Park',
            type: 'park'
        }),
        addDoc(collection(citiesRef, 'LA', 'landmarks'), {
            name: 'The Getty',
            type: 'museum'
        }),
        addDoc(collection(citiesRef, 'DC', 'landmarks'), {
            name: 'Lincoln Memorial',
            type: 'memorial'
        }),
        addDoc(collection(citiesRef, 'DC', 'landmarks'), {
            name: 'National Air and Space Museum',
            type: 'museum'
        }),
        addDoc(collection(citiesRef, 'TOK', 'landmarks'), {
            name: 'Ueno Park',
            type: 'park'
        }),
        addDoc(collection(citiesRef, 'TOK', 'landmarks'), {
            name: 'National Museum of Nature and Science',
            type: 'museum'
        }),
        addDoc(collection(citiesRef, 'BJ', 'landmarks'), {
            name: 'Jingshan Park',
            type: 'park'
        }),
        addDoc(collection(citiesRef, 'BJ', 'landmarks'), {
            name: 'Beijing Ancient Observatory',
            type: 'museum'
        })

    ]) ;

    alert( `add_Doc_SubCollection() 新增完成` )

} ;


const set_Doc = async() => {

    await setDoc( doc( firestore_db , "orders" , "LA" ) , {
    
                             name    : "Los Angeles _ 覆寫 ( merge )" , 
                             state   : "CA _ 覆寫 ( merge )" ,
                             country : "USA _ 覆寫 ( merge )" ,
                             // capital : true    // 新增
                             polular : false  

                          } ) ;

    alert( `set_Doc() 新增成功` ) ;

} ;


const set_Doc_dc = async() => {

    // 先用 collection() 取得 _ cities 集合，再利用 doc() 在此集合下，自動產生一個 _ 文件 id
    const newCityRef = doc( collection( firestore_db , "orders" ) ) ;

    // 針對上述自動產生的文件 ( id )，再寫入資料
    await setDoc( newCityRef , { 

          "AA" : 123

    }) ;

    alert( `set_Doc_dc() 新增成功，文件 id 為 : ${ newCityRef.id  }` ) ;

} ;


const set_Doc_Samples = async() => {

    const citiesRef = collection( firestore_db , "cities" );

    await setDoc(doc(citiesRef, "SF"), {
        name: "San Francisco", state: "CA", country: "USA",
        capital: false, population: 860000,
        regions: ["west_coast", "norcal"] });

    await setDoc(doc(citiesRef, "LA"), {
        name: "Los Angeles", state: "CA", country: "USA",
        capital: false, population: 3900000,
        regions: ["west_coast", "socal"] });

    await setDoc(doc(citiesRef, "DC"), {
        name: "Washington, D.C.", state: null, country: "USA",
        capital: true, population: 680000,
        regions: ["east_coast"] });

    await setDoc(doc(citiesRef, "TOK"), {
        name: "Tokyo", state: null, country: "Japan",
        capital: true, population: 9000000,
        regions: ["kanto", "honshu"] });

    await setDoc(doc(citiesRef, "BJ"), {
        name: "Beijing", state: null, country: "China",
        capital: true, population: 21500000,
        regions: ["jingjinji", "hebei"] });


    alert( `set_Doc_Samples() 新增成功` ) ;

} ;




// # 測試 Firebase : 新增
const FirebaseTest_Create_Page = async() => {


   return <>

            <button onClick = { add_Doc }               className = "m-5 p-4 bg-slate-600/10" > addDoc( )                </button>
            <button onClick = { add_Doc_SubCollection } className = "m-5 p-4 bg-slate-600/10" > add_Doc_SubCollection( ) </button>
            <button onClick = { set_Doc }               className = "m-5 p-4 bg-slate-600/10" > set_Doc( )               </button>
            <button onClick = { set_Doc_dc }            className = "m-5 p-4 bg-slate-600/10" > set_Doc_dc( )            </button>
            <button onClick = { set_Doc_Samples }       className = "m-5 p-4 bg-slate-600/10" > set_Doc_Samples( )       </button>
        
          </>

} ;

export default FirebaseTest_Create_Page