
import { Pricing_Cards } from "@/components/layout";


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


// # 費用頁面
const Pricing_Page = (  ) => {

    

  return <div className = "isolate overflow-hidden dark:bg-gray-900" >

            { /* Banner */ }
            <div className = "mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8" >

                <div className = "mx-auto max-w-4xl" >

                    <h2 className = "text-base font-semibold leading-7 text-indigo-400" > Pricing </h2>
                    <p className = "mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl" >
                        The right price for you,{ " " }
                        <br className = "hidden sm:inline lg:hidden" />
                        whoever you are
                    </p>

                </div> 

                <div className = "relative mt-6" >

                    <p className = "mx-auto max-w-2xl text-lg leading-8 text-white/60" >
                        Were 99% sure we have a plan to match 100% of your needs
                    </p>

                    <svg viewBox   = "0 0 1208 1024" 
                        className = "absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0" >

                        <ellipse cx = { 604 } cy = { 512 } fill = "url(#radial-gradient-pricing)" rx = { 604 } ry = { 512 } />
                        <defs> 
                            <radialGradient id  = "radial-gradient-pricing" >
                                <stop stopColor = "#7775D6" />
                                <stop offset    = { 1 } stopColor = "#E935C1" />
                            </radialGradient>     
                        </defs>

                    </svg>

                </div>
           
            </div>
            
            { /* Pricing Card */ }
            <div className = "flow-root bg-white pb-24 sm:pb-32" >
                
                <div className = "-mt-80" >
 
                   <Pricing_Cards redirect = { true } />

                </div>

            </div>
              
         </div>

} ;

export default Pricing_Page