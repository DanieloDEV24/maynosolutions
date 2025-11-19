import srcLogo from '../assets/img/logo.png'

export const Header = () => {
    return (
        <header className='flex items-center justify-center w-full p-4 gap-20'>

            <nav className='flex gap-10'>
                <a href="#" className="menu__link">Home</a>
                <a href="" className="menu__link">Servicios</a>
            </nav>


            <a href="#" className='w-20'>
                <img src={srcLogo} alt="Logo de Myno Solutions" />
            </a>

            <nav className='flex gap-10'>
                <a href="" className="menu__link">Contacto</a>
                <a href="" className="menu__link">Trabajos</a>
            </nav>
        </header>

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