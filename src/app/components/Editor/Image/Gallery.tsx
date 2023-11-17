
import { FC } from 'react'
import Gallery_Image from './Gallery_Image'
import { BsCardImage } from 'react-icons/bs';


type Props = {

  images : { src : string }[] ;
  onSelect( src : string ) : void ; 
  uploading?     : boolean ;
  selectedImage? : string ; 

} ;




// # 圖片集 ( 左側 )
const Gallery : FC< Props > = ( { images , uploading = false , selectedImage = "" , onSelect } ) => {



  return <div className = "flex flex-wrap" >

            { /* 上傳中 */ }
            { 
               uploading && 
                  <div className = "basis-1/4 p-2 aspect-square flex flex-col items-center justify-center bg-gray-200 text-black rounded animate-pulse" >  
                      <BsCardImage size = { 60 } />
                      <p> Uploading </p>
                  </div> 
            }

            { /* 圖片集 */ }
            { 
               images.map( 
                           ( { src } , index ) => 
                              <div key = { index } className = "basis-1/4 p-2" > 

                                  <Gallery_Image src      = { src } 
                                                 selected = { selectedImage === src } 
                                                 onClick  = { () => onSelect( src ) } />

                              </div>  
                         ) 
            }
             
         </div>

} ;

export default Gallery  