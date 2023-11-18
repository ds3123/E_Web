import { FC , useState , useEffect } from 'react' 
import Gallery_Modal, { ImageSelectionResult } from './Gallery_Model'
import axios from 'axios'
import { BsImageFill } from 'react-icons/bs'
import Editor_Button from '../Editor_Button'



type Props = {
  
    onSubmit( result : ImageSelectionResult ) : void ;

} ;


// # 插入圖片
const Insert_Image : FC< Props > = ( { onSubmit } ) => {


    // 是否顯示
    const [ visable , set_Visable ] = useState< boolean >( false )  ;   

    // 圖片是否上傳中
    const [ uploading , set_Uploading ] = useState< boolean >( false ) ;


    // Cloudinary 圖片資料
    const [ images , set_Images ] = useState< { src : string }[] >( [] ) ;


    // 顯示表格
    const show_Gallery = () => set_Visable( true ) ;

    // 隱藏表格
    const hide_Gallery = () => set_Visable( false ) ;


    // 處理 _ 圖片選擇
    const handle_ImageSelection = ( result : ImageSelectionResult ) => {

        onSubmit( result ) ;
 
    } ;

    // 取得 _ Cloudinary 圖片資料
    const fetch_Images = async() => {

        const { data } = await axios( '/api/image' ) ;

        set_Images( data.images ) ;

    } ;


    // 處理 _ 圖片上傳
    const handle_ImageUpload = async( image : File ) => {

        // 開始上傳
        set_Uploading( true ) ; 

        // 轉換為 FormData 格式
        const formData = new FormData() ;
        formData.append( 'image' , image ) ;

        // 上傳圖片至 Cloudinary ， 並取得回傳的 _ 上傳圖片網址 ( Cloudinary 空間 )
        const { data } = await axios.post( '/api/image' , formData ) ;
    
        // 上傳結束
        set_Uploading( false ) ; 

        // 加入所上傳的圖片
        set_Images( [ data , ...images ] ) ;

    } ;



    // 取得 _ Cloudinary 圖片資料
    useEffect( () => {
        
        // fetch_Images() ;
        
    } , [] ) ;


  return <>

            { /* 嵌入圖片按鈕 */ }
            <Editor_Button onClick = { visable ? hide_Gallery : show_Gallery } >  
                <BsImageFill />  
            </Editor_Button>

            { /* 圖片集 */ }
            <Gallery_Modal visible      = { visable } 
                           images       = { images } 
                           uploading    = { uploading }
                           onClose      = { () => set_Visable( false ) } 
                           onSelect     = { handle_ImageSelection } 
                           onFileSelect = { handle_ImageUpload } />
                
         </>

} ;

export default Insert_Image  