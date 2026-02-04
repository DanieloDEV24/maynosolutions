import img from '../assets/img/fotoDashboard.png'
import img2 from '../assets/img/zapas.jpg'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export const Home = () => {

    const [mostrar, setMostrar] = useState(false);
    const [mostrar2, setMostrar2] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 150) {
                setMostrar(true);
            } else {
                setMostrar(false);
            }


            if (window.scrollY >= 550) {
                setMostrar2(true);
            } else {
                setMostrar2(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div id="home">
            <motion.h1 initial={{ y: 80, opacity: 0 }}   // empieza arriba
      animate={{ y: 0, opacity: 1 }}     // baja a su sitio
      transition={{
        duration: 0.6,
        ease: "easeOut", 
        delay: 0.3
      }} id="encabezado-home"><span>Tu visión</span><br />Hecha realidad digital.</motion.h1>
            <motion.div initial={{ y: 80, opacity: 0 }}   // empieza arriba
      animate={{ y: 0, opacity: 1 }}     // baja a su sitio
      transition={{
        duration: 0.6,
        ease: "easeOut"
      }} className="contenedor-imagen">
                <img src={img} alt="" />
            </motion.div>


            <motion.div     initial={{ y: 100, opacity: 0 }}
    animate={mostrar ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="bocadillo1">
                <div className='flex justify-between items-start'>
                    <div className='flex flex-col items-start'>
                        <h1 id="title-bocadillo1">To-do list</h1>
                        <span id='fecha-bocadillo'>Viernes, 24 Abr</span>
                    </div>
                    <div id='btn-cerrar'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>

                <div id='todo-list'>
                    <div className='flex justify-between items-center mb-3'>
                        <div className='flex flex-col items-start'>
                            <p className="accion"><del>Subir contenidos Redes Sociales</del></p>
                            <span id="estado">Completado</span>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    <hr />
                    <div className='flex justify-between items-center mt-3'>
                        <div className='flex flex-col items-start'>
                            <p className="accion">Hoy</p>
                            <p className='plazo'>10:00 PM - 11:45PM</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                        </svg>
                    </div>

                </div>
            </motion.div>


                        <motion.div     initial={{ y: 100, opacity: 0 }}
    animate={mostrar2 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="bocadillo2">
                <div className="contenedor-bocadillo flex gap-5">
                    <img src={img2} alt="" />
                    <div>
                        <div className='flex gap-1 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <span id='cronograma'>Cronograma on 10 Oct at 12:00</span>
                        </div>

                        <div className='flex gap-1 items-center mt-2'>
                            <span id='title-post'>Post Instagram</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                            </svg>

                        </div>

                        <div className='flex gap-1 items-center mt-5 gap-5 emojis'>
                            <div className='flex gap-1 items-center mt-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                                <span>10k</span>
                            </div>
                            <div className='flex gap-1 items-center mt-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>

                                <span>50k</span>
                            </div>
                            <div className='flex gap-1 items-center mt-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                </svg>

                                <span>5k</span>
                            </div>

                        </div>
                    </div>
                </div>
            </motion.div>

        </div>
    )
}