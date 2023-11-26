



// # 一般功能導覽列
const Section_Nav = ( { children } : { children : React.ReactNode } ) : JSX.Element => {

  return <div className = "flex bg-white min-h-[150px] border-2 px-6 py-8 relative" >
  
              { children }
             
         </div>
} ;

export default Section_Nav  