
'use client'
import { FC } from 'react' 
import { Section_Nav } from '@layout/index'
import { Today_Appointments , Shop_Status } from "@service/index"


// # 首頁 _ 統計頁面
const Dashboard_Page : FC = () => {




  return <>

            <Section_Nav > 
           
                統計數字

               

            </Section_Nav>

            <div className = "p-2 grid grid-cols-5 gap-2 h-[90vh] " >

                  { /* 今日預約 */ }
                  <Today_Appointments />

                  { /* 到店處理狀態 */ }
                  <Shop_Status />

            </div>
          
         </>
} ;

export default Dashboard_Page  