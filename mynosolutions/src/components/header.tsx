import srcLogo from '../assets/img/logo.png'
import { motion } from 'framer-motion'

export const Header = () => {
    
    return (
        <div className="contenedor-header">
            <motion.header initial={{ y: -80, opacity: 0 }}   // empieza arriba
      animate={{ y: 0, opacity: 1 }}     // baja a su sitio
      transition={{
        duration: 0.6,
        ease: "easeOut"
      }}
             className='flex items-center justify-between w-full p-4 gap-20'>

            <a href="#" className='w-20'>
                <img src={srcLogo} alt="Logo de Myno Solutions" />
            </a>

            <nav className='flex gap-15'>
                <a href="#" className="menu__link">Home</a>
                <a href="" className="menu__link">Servicios</a>
                <a href="" className="menu__link">Contacto</a>
                <a href="" className="menu__link">Trabajos</a>
            </nav>

            <a href="" className='flex items-center justify-center gap-2 btn-contacto-header'>
                <span>Contactanos</span> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
            </a>
        </motion.header>
        </div>

        // <header className='flex items-center justify-evenly w-full p-4'>
        //     <a href="#" className='w-18'>
        //         <img src={srcLogo} alt="Logo de Myno Solutions" />
        //     </a>

        //     <nav className='flex gap-10'>
        //         <a href="#">Home</a>
        //         <a href="">Servicios</a>
        //         <a href="">Contacto</a>
        //         <a href="">Trabajos</a>
        //     </nav>
        // </header>
    )
}