
"use client"
import { collection , doc , getDoc ,getDocs , query , where , getDocFromCache , or , startAt , endAt , orderBy  
          , onSnapshot , collectionGroup , getCountFromServer , getAggregateFromServer , sum , average , count
        } from "firebase/firestore" ;
import { firestore_db } from "@/firebase" ;



// 單個文件
const get_Doc = async() => {

    const docRef  = doc( firestore_db , "cities", "SF" );
    const docSnap = await getDoc( docRef );

    if ( docSnap.exists() ) {

           console.log( "文件資料 : ", docSnap.data() );

    } else {

      // docSnap.data() will be undefined in this case
      console.log( "沒有該文件" );

    }

    alert( `get_Doc( ) 讀取成功` ) ;

} ;


// 多個文件
const get_Docs = async() => {


    const querySnapshot = await getDocs( collection( firestore_db , "posts" )) ;

    querySnapshot.forEach( doc => {

       console.log( `${ doc.id } => ${ doc.data() }` ) ;

    }) ;

} ;


// 從快取中取得文件
const get_Doc_FromCache = async() => {

    const docRef = doc( firestore_db , "cities" , "SF" );

    try {

        /*
            1. 強制從離線快取 ( offline cache ) 中，取得最新的 _ 文件快照 
            2. 若快取不存在，將會拋出錯誤
        */
        const doc = await getDocFromCache(docRef);

        console.log( "快取文件 : " , doc.data() );

    } catch ( e ) {

        console.log( "快取文件取得錯誤 : " , e );

    }

} ;


// Query 查詢 ( where : == )
const get_Docs_Query_Where = async() => {

    // 利用 query() 與 where() 進行條件查詢
    const q = query( collection( firestore_db , "cities" ) , where( "capital" , "==" , true ) ) ;

    // 取得 _ 查詢後的文件快照
    const querySnapshot = await getDocs( q ) ;

    // 遍歷顯示所查詢資料
    querySnapshot.forEach( doc => {

        console.log( doc.id , " => " , doc.data() ) ;

    }) ;

} ;


// Query 查詢 ( AND : where )
const get_Docs_Query_And = async() => {

    const q = query( collection( firestore_db , "cities" ) , where( "state" , "==" , "CA" ) , where( "name" , "==", "San Francisco" ) ) ;

    // 取得 _ 查詢後的文件快照
    const querySnapshot = await getDocs( q ) ;

    // 遍歷顯示所查詢資料
    querySnapshot.forEach( doc => {

        console.log( doc.id , " => " , doc.data() ) ;

    }) ;
    
} ;


// Query 查詢 ( OR : where )
const get_Docs_Query_Or = async() => { 

    const q = query( collection( firestore_db , "cities" ) , or( 
                                                                 where( 'capital'    , '==' , true    ) ,
                                                                 where( 'population' , '>=' , 1000000 )
                                                               )
                   ) ;

    // 取得 _ 查詢後的文件快照
    const querySnapshot = await getDocs( q ) ;

    // 遍歷顯示所查詢資料
    querySnapshot.forEach( doc => {

        console.log( doc.id , " => " , doc.data() ) ;

    }) ;

} ;


// Query 查詢 ( where : array-contains )
const get_Docs_Query_Array = async() => {

    const q = query( collection( firestore_db , "cities" ) , where( "regions" , "array-contains" , "west_coast" ));

    // 取得 _ 查詢後的文件快照
    const querySnapshot = await getDocs( q ) ;

    // 遍歷顯示所查詢資料
    querySnapshot.forEach( doc => {

        console.log( doc.id , " => " , doc.data() ) ;

    }) ;
    
} ;


// Query 查詢 ( where : array-contains-any )
const get_Docs_Query_ArrayAny = async() => {

    const q = query( collection( firestore_db , "cities" ), where( 'regions' , 'array-contains-any' , [ 'west_coast' , 'east_coast' ] ) ) ;

    // 取得 _ 查詢後的文件快照
    const querySnapshot = await getDocs( q ) ;

    // 遍歷顯示所查詢資料
    querySnapshot.forEach( doc => {

        console.log( doc.id , " => " , doc.data() ) ;

    }) ;
    
} ;


// Query 查詢 ( where : in )
const get_Docs_Query_In = async() => {

    const q = query( collection( firestore_db , "cities" ) , where( 'country' , 'in', [ 'USA', 'Japan' ] ) ) ;

    // 取得 _ 查詢後的文件快照
    const querySnapshot = await getDocs( q ) ;

    // 遍歷顯示所查詢資料
    querySnapshot.forEach( doc => {

        console.log( doc.id , " => " , doc.data() ) ;

    }) ;
    
} ;


// Query 查詢 ( where : not-in )
const get_Docs_Query_NotIn = async() => {

    const q = query( collection( firestore_db , "cities" ) , where( 'country' , 'not-in', [ 'USA', 'Japan' ] ) ) ;

    // 取得 _ 查詢後的文件快照
    const querySnapshot = await getDocs( q ) ;

    // 遍歷顯示所查詢資料
    querySnapshot.forEach( doc => {

        console.log( doc.id , " => " , doc.data() ) ;

    }) ;
    
} ;


// 取得 _ 子集合 : 所有文件
const get_Docs_SubCollection = async() => {

    // 取得 _ cities 集合 > SF 文件 > landmarks 子集合    
    const querySnapshot = await getDocs( collection( firestore_db , "cities" , "SF", "landmarks" ) ) ;

    querySnapshot.forEach( doc => {

        console.log( doc.id , " => ", doc.data());
        
    });

    alert( `get_Docs_SubCollection() 查詢完成` ) ;

} ;


// 取得 _ 子集合 : 所有文件
const query_Docs_SubCollection = async() => {

    const museums = query( collectionGroup( firestore_db , 'landmarks' ), where( 'type' , '==' , 'museum' ) );

    const querySnapshot = await getDocs( museums ) ;
        
    querySnapshot.forEach( doc => {

        console.log( doc.id , ' => ', doc.data() ) ;

    }) ;

} ;


// 監聽
const get_OnSnapshot = () => {


} ;


const get_Count_FromServer = async() => {

  const coll         = collection( firestore_db , "cities" ) ;
  const snapshot_col = await getCountFromServer( coll ) ;
  
  console.log( '快照            : ' , snapshot_col ) ;
  console.log( '資料物件         : ' , snapshot_col.data() ) ;
  console.log( '物件 cout 屬性值 : ' , snapshot_col.data().count ) ;

} ;


const get_Aggregate_Sum = async() => {

   const coll     = collection( firestore_db , 'cities' ) ;
   const snapshot = await getAggregateFromServer( coll , { totalPopulation : sum( 'population' ) } ) ;

   console.log( 'totalPopulation : ' , snapshot.data().totalPopulation ) ;
   
} ;

const get_Aggregate_Query_Sum = async() => {

    const coll     = collection( firestore_db , 'cities') ;
    const qColl    = query( coll , where( 'capital' , '==' , true )) ;
    const snapshot = await getAggregateFromServer( qColl , { totalPopulation : sum( 'population' ) }) ;

    console.log( 'totalPopulation : ' , snapshot.data().totalPopulation );
    
} ;


const get_Aggregate_Average = async() => {

    const coll     = collection( firestore_db , 'cities');
    const snapshot = await getAggregateFromServer( coll , { averagePopulation : average( 'population' ) } ) ;

    console.log( 'averagePopulation : ' , snapshot.data().averagePopulation ) ;

 } ;


const get_Aggregate_Query_Average = async() => {

    const coll     = collection( firestore_db , 'cities') ;
    const qColl    = query( coll , where( 'capital' , '==' , true ) );
    const snapshot = await getAggregateFromServer( qColl , { averagePopulation: average( 'population' ) });

    console.log( 'averagePopulation : ', snapshot.data().averagePopulation );

 } ;


const get_Aggregate_Multi = async() => {

    const coll     = collection( firestore_db , 'cities' ) ;
    const snapshot = await getAggregateFromServer( coll , {
                                                            countOfDocs       : count() ,
                                                            totalPopulation   : sum( 'population' ) ,
                                                            averagePopulation : average( 'population' )
                                                          }) ;

    console.log( 'countOfDocs : '       , snapshot.data().countOfDocs ) ;
    console.log( 'totalPopulation : '   , snapshot.data().totalPopulation ) ;
    console.log( 'averagePopulation : ' , snapshot.data().averagePopulation ) ;

 } ;

 const get_Query_Start_At = async() => {

    const coll                = collection( firestore_db , 'cities' ) ;
    const q_StartAt           = query( coll , orderBy( "population" ) , startAt( 1000000 ) ) ;

    const snapshot_StartAt    = await getDocs( q_StartAt ) ;

    snapshot_StartAt.forEach( doc => {

        console.log( doc.id , ' => ', doc.data() ) ;

    }) ;

 }


const get_Query_End_At = async() => {

    const coll     = collection( firestore_db , 'cities' ) ;
    const q        = query( coll , orderBy( "population" ) , endAt( 1000000 ) ) ;

    const snapshot = await getDocs( q ) ;

    snapshot.forEach( doc => {

        console.log( doc.id , ' => ' , doc.data() ) ;

    }) ;

}



// # 測試 Firebase : 讀取
const FirebaseTest_Read_Page = async() => {


    // # collection()
    // const coll = await collection( firestore_db , "orders" ) ;
    // console.log( 'aa' , coll ) ;

    // # doc() 
    // const doc_1 = await doc( firestore_db , "orders" , "Ue40658b29cc3c59ba944647d726f755f" ) ;
    // const doc_2 = await doc( firestore_db , "orders/Ue40658b29cc3c59ba944647d726f755f" ) ;

    // const c_doc = await doc( collection( firestore_db , "cities" ) ) ;

    // console.log( 'cccc : '  , c_doc.id ) ;
    // console.log( 'doc : '   , doc_1    ) ;
    // console.log( 'doc_1 : ' , doc_1.id ) ;
    // console.log( 'doc_2 : ' , doc_2.id ) ;

    
    return <>

                <button onClick = { get_Doc } className = "m-5 p-4 bg-slate-600/10" > get_Doc( )  </button>
                <button onClick = { get_Doc_FromCache } className = "m-5 p-4 bg-slate-600/10" > get_Doc_FromCache( )  </button>
                <button onClick = { get_Docs_Query_Where } className = "m-5 p-4 bg-slate-600/10" > get_Doc_Query_Where( )  </button>
                <button onClick = { get_Docs_SubCollection } className = "m-5 p-4 bg-slate-600/10" > get_Docs_SubCollection( )  </button>
                <button onClick = { query_Docs_SubCollection } className = "m-5 p-4 bg-slate-600/10" > query_Docs_SubCollection( )  </button>
                <button onClick = { get_Docs_Query_Array } className = "m-5 p-4 bg-slate-600/10" > get_Docs_Query_Array( )  </button>
                <button onClick = { get_Docs_Query_ArrayAny } className = "m-5 p-4 bg-slate-600/10" > get_Docs_Query_ArrayAny( )  </button>
                <button onClick = { get_Docs_Query_In } className = "m-5 p-4 bg-slate-600/10" > get_Docs_Query_In( )  </button>
                <button onClick = { get_Docs_Query_NotIn } className = "m-5 p-4 bg-slate-600/10" > get_Docs_Query_NotIn( )  </button>
                <button onClick = { get_Docs_Query_And } className = "m-5 p-4 bg-slate-600/10" > get_Docs_Query_And( )  </button>
                <button onClick = { get_Docs_Query_Or } className = "m-5 p-4 bg-slate-600/10" > get_Docs_Query_Or( )  </button>
                <button onClick = { get_Count_FromServer } className = "m-5 p-4 bg-slate-600/10" > get_Count_FromServer( )  </button>
                <button onClick = { get_Aggregate_Sum } className = "m-5 p-4 bg-slate-600/10" > get_Aggregate_Sum( )  </button>
                <button onClick = { get_Aggregate_Query_Sum } className = "m-5 p-4 bg-slate-600/10" > get_Aggregate_Query_Sum( )  </button>
                <button onClick = { get_Aggregate_Average } className = "m-5 p-4 bg-slate-600/10" > get_Aggregate_Average( )  </button>
                <button onClick = { get_Aggregate_Query_Average } className = "m-5 p-4 bg-slate-600/10" > get_Aggregate_Query_Average( )  </button>
                <button onClick = { get_Aggregate_Multi } className = "m-5 p-4 bg-slate-600/10" > get_Aggregate_Multi( )  </button>
                <button onClick = { get_Query_Start_At } className = "m-5 p-4 bg-slate-600/10" > get_Query_Start_At( )  </button>
                <button onClick = { get_Query_End_At } className = "m-5 p-4 bg-slate-600/10" > get_Query_End_At( )  </button>
    
           </>

} ;


export default FirebaseTest_Read_Page