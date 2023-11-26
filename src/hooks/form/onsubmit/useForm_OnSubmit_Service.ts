
import { columns_Covert_Service } from '@utils/convert/column_Convert_Database' ;
import { useForm_Service_Form , useForm_Service_Content_Form } from '@/utils/custom_types/form';





// 新增 _ 服務 ( 第一層 )
export const useForm_OnSubmit_Create_Service = ( all_Services : any[] , setValue : any , create_Service_With_Id : any  , create_Price : any ) => {

    
    // 提交新增函式
    const submit_Create = async( data : useForm_Service_Form ) => { 

       
        // * 驗證是否重複
        const service      = data.management_service_first_class ;       // 所輸入第一層分類
        const service_prie = data.management_service_first_class_price ; // 所輸入第一層分類 : 價格

        if( all_Services?.includes( service ) ){

            alert( '已經存在此類別，請改用其他名稱' ) ;
            setValue( 'management_service_first_class' , '' ) ;          
            return false

        } 

        // * 新增資料
        const obj_Service = columns_Covert_Service( data ) ;   // 轉換欄位 

        if( service && service_prie ){  // 新增 _ 服務 + 價格

            // 新增服務 ( 並取得資料表 services 的 id )
            const created_Service_Id = await create_Service_With_Id( obj_Service ) ;

            // 新增服務價格
            create_Price({ 
                            service_id : created_Service_Id ,
                            price      : data.management_service_first_class_price
                            }) ;

            // 清空輸入框
            setValue( 'management_service_first_class' , '' ) ;
            setValue( 'management_service_first_class_price' , '' ) ;


        }else{                        // 新增 _ 服務     

             // 新增服務 
             create_Service_With_Id( obj_Service ) ;

             // 清空輸入框
             setValue( 'management_service_first_class' , '' ) ;

        }

    }


    return { submit_Create }

} ;



// 新增 _ 服務 : 內容 ( 第二層 )
export const useForm_OnSubmit_Create_Service_Content  = ( 
                                                          current_Service_Id : string , 
                                                          all_Service_Contents : any[] , 
                                                          setValue : any ,  
                                                          create_Service_Content_With_Id : any ,
                                                          create_Price : any
                                                        ) => {


    // 提交新增函式
    const submit_Create = async( data : useForm_Service_Content_Form ) => { 

        // 驗證是否重複
        const service_content       = data.management_service_second_class ;       // 所輸入第二層分類
        const service_content_price = data.management_service_second_class_price ; // 所輸入第二層分類 : 價格

        if( all_Service_Contents?.includes( service_content ) ){

            alert( '已經存在此類別，請改用其他名稱' ) ;
            setValue( 'management_service_second_class' , '' ) ;
            return false 

        }

        if( service_content && service_content_price ){     // 新增 _ 服務內容 + 價格


            // 新增種類 ( 並取得資料表 service_contents 的 id )
            const created_Service_Content_Id = await create_Service_Content_With_Id({ 
                                                                                      service_id : current_Service_Id , 
                                                                                      content    : service_content 
                                                                                    }) ; 


            // 新增服務價格
            create_Price({ 
                            service_id         : current_Service_Id ,
                            service_content_id : created_Service_Content_Id ,
                            price              : service_content_price
                         }) ;


            // 清空輸入框
            setValue( 'management_service_second_class' , '' ) ;
            setValue( 'management_service_second_class_price' , '' ) ;


        }else{

            // 新增種類 
             create_Service_Content_With_Id({ 
                                              service_id : current_Service_Id , 
                                              content    : service_content 
                                            }) ; 


            // 清空輸入框
            setValue( 'management_service_second_class' , '' ) ;


        }


    }

    return { submit_Create }

} ;