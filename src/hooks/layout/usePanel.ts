

import { useDispatch } from 'react-redux' 
import { AppDispatch } from '@/store/store' 
import { open_Right_Panel } from '@reducer/reducer_Layout' 
import { admin_Url_Create_Component } from '@configs/config_url'




// 打開右側面板
export const usePanel_Right_Open = ( component : JSX.Element | null ) => {

    const dispatch = useDispatch< AppDispatch >() ;

    return () => dispatch( open_Right_Panel( component ) ) ;

} 


// 取得 _ 函式：打開右側面板
export const usePanel_Create_Component_Click = ( current_Url : Admin_GeneralFunction_Url )  => {


     // 依照資料類別，取得 _ 相對應新增表單元件 
     const create_Component = admin_Url_Create_Component[ current_Url ]() ;

     // 點選 _ 新增按鈕 : 開啟、設定 _ 右側元件
     const click_Add_Btn = usePanel_Right_Open( create_Component ) ;

     return click_Add_Btn ;
 
} ;