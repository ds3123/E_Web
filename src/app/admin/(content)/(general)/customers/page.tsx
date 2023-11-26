'use client'
import { FC } from 'react' 
import { List_Table } from '@layout/index'
import { Customer_TableRow_Service } from '@service/index'
import { useFetch_Account_Table_All_Data } from "@rq_hooks/common/useFetch" ; 



// # 客戶列表
const Customer_Page : FC = () => {


    // 查詢 _ 列表資料 
    const { page_Data , page_Btn_Num , total_data_sum , isFetching , refetch } = useFetch_Account_Table_All_Data( "customer" ) ;


    return <List_Table type = 'customers' >

            { page_Data?.map( ( customer : any , idx : number ) => 
                    <Customer_TableRow_Service key = { idx } customer = { customer } /> )  }

           </List_Table>

} ;

export default Customer_Page   
