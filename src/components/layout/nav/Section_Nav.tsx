
import { FC } from 'react' 

type Nav = {

  children : React.ReactNode 

}



// # 一般功能導覽列
const Section_Nav : FC< Nav > = ( { children } ) : JSX.Element => {


  return <div className = { `flex bg-white border-b px-6 py-8 relative` } >
  
              { children }
             
         </div>
         
} ;

export default Section_Nav  