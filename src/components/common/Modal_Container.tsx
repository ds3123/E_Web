
import { FC , useEffect , ReactNode , useCallback , useId } from 'react' 


export interface ModalProps {

   visible?   : boolean ;
   onClose?() : void ;

} ;


interface Props extends ModalProps {

    children : ReactNode ;
   
} ;
   


// # Modal 容器
const Modal_Container : FC< Props > = ( { visible , children , onClose } ) : JSX.Element | null => {


    const containerId = useId() ;


    // 關閉處理
    const handleClose = useCallback( () => onClose && onClose() , [ onClose ] ) ;
        

    // 點選處理
    const handleClick = ( { target } : any ) => {

        // 避免事件冒泡
        if( target.id === containerId ) handleClose() ;
    
    } ;

 
    // 設定 _ Keydown 事件
    useEffect( () => {

      // 關閉 Modal  
      const closeModal = ( { key } : any ) => key === 'Escape' && handleClose() ; 

      // 綁定事件
      document.addEventListener( 'keydown' , closeModal ) ;

      // 清除事件
      return () => document.removeEventListener( 'keydown' , closeModal ) ; 
       
    } , [ handleClose ] ) ;


    if( !visible ) return null ;  

  return <div id        = { containerId }
              onClick   = { handleClick } 
              className = "flex items-center justify-center fixed inset-0 bg-white z-50 bg-opacity-5 backdrop-blur-[2px]" >
             
             { children }

         </div>

} ;

export default Modal_Container  