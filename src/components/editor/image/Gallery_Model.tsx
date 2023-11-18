import { ChangeEventHandler , FC , useState , useCallback } from 'react' 
import Modal_Container from "@/components/common/Modal_Container"
import { ModalProps } from "@/components/common/Modal_Container"
import Gallery from '@/components/editor/image/Gallery'
import Image from 'next/image'
import Action_Button from '@/components/common/Action_Button'
import { AiOutlineCloudUpload } from 'react-icons/ai'


export interface ImageSelectionResult {

   src     : string ;
   altText : string ;

}

interface Props extends ModalProps {

  images              : { src : string }[] ;
  uploading?          : boolean ;
  onFileSelect( image : File ) : void ;
  onSelect( result : ImageSelectionResult ) : void ;

}


// 圖片資料
// const images = [
//   {
//       src: "https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1664784805210-9fa665e2b7e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1664719772929-4e7265bb3c4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1664740688843-0e8ad76b07a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1664725594423-3a221a3469ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1664737426331-a1cde6c831d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1664575198263-269a022d6e14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1664745027113-0145831af78a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1664750160078-254952b00ec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1664777415004-d83abf07a61a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1664268531721-b3a29768467b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1635774855317-edf3ee4463db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1604404157820-e90f6ff383b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1453230806017-56d81464b6c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwzMzN8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1415935701388-58a01402490d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwzMzN8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1473881823110-d94cac66318a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8MTUxODk5fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1664480169131-899eb1aae002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1664295776783-6e72b6ab1387?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1664286423988-d742f1165f9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1645474886991-032013802da0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1664021029310-bc881e4ebb22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1664091729644-07a158d7c4ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1663667163173-b1c11c74bb49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1663657471161-30b3d75d82cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     },
//              ] ;



// # 圖片 Modal
const Gallery_Modal : FC< Props > = ( { visible , uploading , images , onClose , onFileSelect , onSelect } ) => {


    // 圖片 alt 文字
    const [ altText , set_AltText ] = useState< string >( "" ) ;

    // 所選擇圖片
    const [ selectedImage , set_SelectedImage ] = useState< string >( "" ) ;



    // 關閉函式
    const handle_Close = useCallback( () => {
       
                            onClose && onClose() ;

                        } , [ onClose ] ) ;



    // 處理 _ <input type = 'file' > 欄位變動
    const handle_OnImageChange : ChangeEventHandler<HTMLInputElement> = ( { target } ) => {
    
        const { files } = target ;

        // 排除 files 為 null 
        if( !files ) return ;

        // 取得 _ FileList 第一個檔案
        const file = files[ 0 ] ;

        // 只選擇類型 ( type 屬性 ) 為：圖片 ( Ex. image/png , image/jpg  )，排除非圖片 ( Ex. audio/mpeg )
        if( !file.type.startsWith( 'image' ) ) return handle_Close() ;

        // 選擇該圖片
        onFileSelect( file ) ;
        
    
    } ;

    // 處理 _ 選擇圖片
    const handle_Selection = () => {

        if( !selectedImage ) return handle_Close() ;
        
        // 選擇
        onSelect( { src : selectedImage , altText } ) ;

        // 關閉
        handle_Close() ;
    
    } ;


  return <Modal_Container visible = { visible } onClose = { onClose } >

            <div className = "max-w-4xl p-2 bg-black rounded" >
                
                <div className = "flex" >

                    { /* 左側：圖片集 */ }
                    <div className = "basis-3/4 max-h-[450px] overflow-y-auto custom-scroll-bar">

                        <Gallery images        = { images } 
                                 uploading     = { uploading }
                                 onSelect      = { src => set_SelectedImage( src ) } 
                                 selectedImage = { selectedImage } />

                    </div>

                    { /* 右側：圖片 _ 選擇與上傳 */ }
                    <div className = "basis-1/4 px-2 py-2" >

                        <div className = "space-y-4" >
                           
                            { /* 上傳圖片 */ }
                            <div>

                               <input onChange = { handle_OnImageChange }  hidden type = "file" id = "image-input" />

                               <label htmlFor = "image-input" >

                                   <div className = "flex items-center justify-center space-x-2 p-2 cursor-pointer w-full border-2 border-blue-400 text-white" >
                                       <AiOutlineCloudUpload />
                                       <span>  Upload Image </span>
                                   </div>

                               </label>
                              
                            </div>

                            { selectedImage ? <>

                                                <textarea placeholder = "Alt : "
                                                          value       = { altText }
                                                          onChange    = { ( { target } ) => set_AltText( target.value ) }
                                                          className   = "resize-none p-1 h-32 w-full bg-transparent text-white rounded border-2 border-gray-400 focus:ring-1" > 
                                                </textarea>

                                                <Action_Button onClick = { handle_Selection }  title = "Select" />

                                                <div className = "relative aspect-video bg-png-pattern" >

                                                    <Image src       = { selectedImage } 
                                                           layout    = 'fill' 
                                                           objectFit = 'contain'
                                                           alt       = '' />

                                                </div>

                                              </> : null  } 

                        </div>

                    </div>

                </div>
                
            </div>

         </Modal_Container>

} ;

export default Gallery_Modal ;  