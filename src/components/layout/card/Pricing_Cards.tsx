import { CheckIcon } from "lucide-react";
import Link from "next/link" ;
import { Checkout_Button } from "..";


const tiers = [

    {
       name         : "Starter" ,
       id           : null ,
       href         : "#" ,
       priceMonthly : null ,
       description  : "Get chatting right away with anyone , anywhere !" ,
       features     : [
                        "20 Message Chat Limit in Chats" , 
                        "2 Participant limit in Chat" ,
                        "3 Chat Rooms limit" ,
                        "Supports 2 languages" ,
                        "48-hour support reponse time"
                      ]
    } ,
    {
       name         : "Pro" ,
       id           : "si_Onlcs" ,  // for 訂閱者 ( 1:46:28 )
       href         : "#" ,
       priceMonthly : "$5.99" ,
       description  : "Unlock the full potential with pro" ,
       features     : [
                        "Unlimited Messages in Chats" ,
                        "Unlimited Participants in Chats" ,
                        "Unlimited Chat Rooms" , 
                        "Supports up to 10 languages" , 
                        "Multimedia support in chats ( coming soon )" ,
                        "1-hour , dedicated support response time" ,
                        "Early access to New Features"
                      ]
    } 

 ] ;



// # 價位卡片
const Pricing_Cards = ( { redirect } : { redirect : boolean } ) => {



  return <div>

            <div className = "mx-auto max-w-md grid grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2" >

               { tiers.map( x => {

                  return  <div key = { x.id } className = "flex flex-col justify-between bg-white rounded-3xl p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10" >

                                <h3 id = { x.id + x.name } className = "text-base font-semibold leading-7 text-indigo-600" > { x.name } </h3>

                                <div className = "mt-4 flex items-baseline gap-x-2" >

                                    {
                                        x.priceMonthly ? <>
                                                            <span className = "text-5xl font-bold tracking-tight text-gray-900" >
                                                                { x.priceMonthly }
                                                            </span>
                                                            <span className = "text-base font-semibold leading-7 text-gray-600" >
                                                                / month
                                                            </span>
                                                            </> :
                                                            <span className = "text-5xl font-bold tracking-tight text-gray-900" >
                                                                Free  
                                                            </span>
                                    }

                                </div>

                                <p className = "mt-6 text-base leading-7 text-gray-600" >
                                { x.description }
                                </p>

                                <ul role = "list" className = "mt-10 space-y-4 text-sm leading-6 text-gray-600" >

                                    { x.features.map( y => <li key = { y } className = "flex gap-x-3" >
                                            
                                                            <CheckIcon className = "h-6 w-5 flex-none text-indigo-600" aria-hidden = "true" />

                                                            { y }
                                                            
                                                            </li> ) }

                                </ul>

                                { redirect ? <Link href      = "/chat/register" 
                                                   className = "mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer disabled:opacity-80"> 
                                                Get Started Today
                                            </Link> 
                                        : ( x.id && <Checkout_Button /> ) }

                          </div>

                            
               } ) }

            </div>
             
         </div>


} ;

export default Pricing_Cards  