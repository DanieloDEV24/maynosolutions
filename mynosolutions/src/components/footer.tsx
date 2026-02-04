import logo2 from '../assets/img/logo.png'

export const Footer = () => {
    return (
        <footer className='' >
            <div className="flex justify-between items-start gap-10 p-10">
                <div className='flex flex-col justify-start items-start w-1/4 mr-20 texto-footer' >
                    <img src={logo2} alt="" className='logo-footer'/>
                    <p className='text-xl text-left pt-3' >Transformamos tus ideas en realidad. Especialistas en desarrollo web y diseño gráfico profesional.</p>
                </div>
                <div className='flex flex-col justify-start items-start w-1/4'>
                    <h3 className='text-2xl '>Enlaces Rápidos</h3>
                    <a href="" className='text-xl mb-3'>Home</a>
                    <a href="" className='text-xl mb-3'>Servicios</a>
                    <a href="" className='text-xl mb-3'>Proyectos</a>
                    <a href="" className='text-xl mb-3'>Contacto</a>
                </div>
                <div className='flex flex-col justify-start items-start w-1/4'>
                    <h3 className='text-2xl'>Servicios</h3>
                    <a href="" className='text-xl mb-3'>Desarrollo Web</a>
                    <a href="" className='text-xl mb-3'>Diseño de Logos</a>
                    <a href="" className='text-xl mb-3'>Diseño Gráfico</a>
                    <a href="" className='text-xl mb-3'>Redes Sociales</a>
                    <a href="" className='text-xl mb-3'>Landing Pages</a>
                    <a href="" className='text-xl mb-3'>Experiencia de Usuario</a>
                </div>
                <div className='flex flex-col justify-start items-start w-1/4'>
                    <h3 className='text-2xl'>Contacto</h3>
                    <a href="" className='text-xl mb-3'>myno.solutions@gmail.com</a>
                    <a href="" className='text-xl mb-3'>+34 681 67 10 14</a>
                    <div></div>
                </div>
            </div>

            <div className="copyright flex justify-center items-center p-10">
                <p className='text-xl' >© 2026 MyNoSolutions. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}