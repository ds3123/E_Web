import { FC } from 'react' ;
import { T_Section } from "@/utils/custom_types/layout";


interface TR extends T_Section {


}


// # 表單 _ <tr>
const Table_Tr : FC< TR > = ( { children  } ) => {
 
    
    return <tr className = "border-b-2 h-12 text-center" >

              { children }  

           </tr>

} ;

export default Table_Tr
       


