
"use client" 
import { Provider } from "react-redux"
import store from '@store/store' 

export function Redux_Provider( { children } : { children : React.ReactNode } ) {

  return <Provider store = { store } > 
  
              { children } 
  
          </Provider> ;

}