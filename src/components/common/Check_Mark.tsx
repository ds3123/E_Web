import { FC } from 'react' ;
import { BsCheckLg } from 'react-icons/bs';


type Props = {

  visible : boolean

} ;

// # 勾選圓點
const Check_Mark : FC< Props > = ( { visible } ) => {

  if( !visible ) return null ;  

  return <div className = "p-2 bg-blue-500 text-white rounded-full bg-opacity-70 backdrop-blur-sm" >
            <BsCheckLg />
         </div>

} ;

export default Check_Mark  