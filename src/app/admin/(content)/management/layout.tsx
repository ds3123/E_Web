import { Section_Nav } from "@layout/index"



// # 管理區樣板
const AdminManagement_Layout = ( { children } : { children: React.ReactNode } ) => {

  
    return <div>
         
                <Section_Nav>
                    
                  <p> 管理區 SSSSSS </p>

                </Section_Nav>

                { children }
  
               
           </div>
  } ;
  
  export default AdminManagement_Layout   