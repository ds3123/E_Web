

import axios from '@utils/axios' ;


// @ 帳戶 相關 API ( 資料表 : accounts )

// [ GET ] ---------------

// 取得 _ 所有店家帳戶
export const fetch_All_Accounts = () => axios.get< any[] >( `/accounts` ).then( res => res.data ) ;             


// 取得 _ 特定郵遞區號下，所有店家帳戶
export const fetch_All_Accounts_By_Zipcode = ( zipcode : string ) => axios.get< any[] >( `/accounts/zipcode/${zipcode}` ).then( res => res.data ) ;   


// [ POST ] ---------------

// 新增 _ 帳戶
export const create_Account = ( obj : any ) => axios.post( "/accounts" , obj ) ;


// [ PUT ] ---------------

// 修改 _ 寵物
export const update_Account_By_Id = ( obj : any ) => axios.put( `/accounts/${ obj.id }` , obj ) ;





// [ DELETE ] ---------------