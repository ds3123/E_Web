'use client'
import { QueryClient } from 'react-query' ;



export function generateQueryClient() : QueryClient {

  return new QueryClient({

                defaultOptions : {

                                    queries : {

                                      //  onError              : queryErrorHandler ,

                                      //  staleTime            : 600000 , // 10 minutes
                                      //  cacheTime            : 900000 , // default cacheTime is 5 minutes; doesn't make sense for staleTime to exceed cacheTime
                                     
                                      //  refetchOnMount       : false ,
                                      //  refetchOnWindowFocus : false ,
                                      //  refetchOnReconnect   : false

                                    } ,

                                    mutations : {

                                     //   onError              : queryErrorHandler

                                    }

                                }

         } ) ;

}

export const queryClient = generateQueryClient();