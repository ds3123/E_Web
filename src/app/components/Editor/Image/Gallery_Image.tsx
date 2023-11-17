
import { FC } from 'react' ;
import NextImage from 'next/image'
import Check_Mark from '../../Common/Check_Mark';


type Props = {

  src        : string ;
  selected?  : boolean ;
  onClick?() : void ;

} ;



// # 圖片 Next.js 元件
const Gallery_Image : FC< Props > = ( { src , selected , onClick } ) => {

  return <div onClick = { onClick } className = "rounded h-[100px] overflow-hidden cursor-pointer relative" >

            <NextImage src       = { src } 
                       width     = { 200 }
                       height    = { 200 }
                       alt       = "gallery"
                       objectFit = "cover"
                       className = "bg-gray-200 hover:scale-110 transition" />
              
            
            <div className = "absolute top-2 left-2" >

               <Check_Mark visible = { selected || false } />

            </div>

         </div>

} ;

export default Gallery_Image  