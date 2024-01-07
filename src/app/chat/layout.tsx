
import { Chat_Header , NextThemeProvider } from '@layout/index'


const Chat_Layout = ( { children } : { children: React.ReactNode }  ) => {


  return <>

             { /* UI 主題 */ }
             <NextThemeProvider attribute    = "class"
                                defaultTheme = "system"
                                enableSystem
                                disableTransitionOnChange > 

                <Chat_Header />
    
                { children }

             </NextThemeProvider> 
           
         </>
} ;

export default Chat_Layout  