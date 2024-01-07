"use client" 
import { QueryClient , QueryClientProvider } from 'react-query' ;
import { ReactQueryDevtools } from 'react-query/devtools' ;
import { queryClient } from "@utils/react-query/queryClient" ; // 自訂 queryClient

export function ReactQuery_Provider( { children } : { children : React.ReactNode } ) {

  return <QueryClientProvider client = { queryClient } >

            { children } 

            <ReactQueryDevtools position = "bottom-right" /> 

         </QueryClientProvider> ;

}