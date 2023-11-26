import { FC } from 'react' 
import { Table_Head_Columns } from '@/utils/custom_types/layout'
import { Table_Columns } from '@configs/config_table'


interface L_Table  {

  children : React.ReactNode ; 
  type     : keyof Table_Head_Columns  // 表單類型
 
}


// # 一般清單表格
const List_Table : FC< L_Table > = ( { type , children } ) => {


    return  <table className = "table-auto w-full mb-8" >

               <thead className = "border-b-2 text-base h-12" >

                  <tr>{ Table_Columns[ type ]?.map( ( title , index ) => <th key = { index } className = "px-5 py-3"> { title } </th> ) }</tr>   
               
               </thead>

               <tbody>

                  { children }

               </tbody>

            </table> ;

} ;


export default List_Table
       