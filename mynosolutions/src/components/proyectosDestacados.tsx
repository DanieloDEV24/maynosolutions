import { motion, type Variants } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import RotMoncayo from "../assets/img/RotMoncayo.png";
import RestArde from "../assets/img/RestArde.png"

export const ProyectosDestacados = () => {
    
    const [mostrar, setMostrar] = useState(false);
    const componentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setMostrar(entry.isIntersecting);
            },
            {
                threshold: 0.1,
                rootMargin: '0px'
            }
        );

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
    }, []);

    const proyectos = [
        {
            titulo: "Rótulos Moncayo", 
            categororias: ["Desarrollo Web"], 
            descripcion: "Web corporativa para empresa de rótulos y vinilos, con galería de trabajos y contacto directo.",
            imagen: RotMoncayo
        }, 
        {
            titulo: "Restaurante Arde", 
            categororias: ["Diseño de Logos", "Redes Sociales", "Diseño Gráfico"], 
            descripcion: "Redes sociales, creación de carteles y contenido multimedia del Restaurante Arde, Humilladero",
            imagen: RestArde
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { 
            opacity: 0,
            y: 30,
            scale: 0.95
        },
        visible: { 
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };
    
    return (
        <div className="contenedor-proyectos" ref={componentRef}>
            <motion.h1 
                className="title-proyectos"
                initial={{ opacity: 0, y: -20 }}
                animate={mostrar ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                Proyectos <span>Destacados</span>
            </motion.h1>
            <motion.div 
                className="contenedor-nuestros-proyectos"
                variants={containerVariants}
                initial="hidden"
                animate={mostrar ? "visible" : "hidden"}
            >
                {
                    proyectos.map((proyecto, index) => (
                       <motion.div 
                            key={index}
                            className="card-proyecto"
                            variants={itemVariants}
                            whileHover={{ 
                                y: -8, 
                                scale: 1.02,
                                transition: { duration: 0.3 } 
                            }}
                       >
                            <div className="imagen-card-proyectos" style={{
                                backgroundImage: `url(${proyecto.imagen})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                width: '100%',
                                height: '250px',
                                borderRadius: '20px 20px 0px 0px'
                            }}></div>
                            <div className="contenido-card-proyecto">
                                <span className="categorias-proyectos">{proyecto.categororias.map((categoria, index) => {
                                    if((proyecto.categororias.length - 1) === index) {
                                        return categoria
                                    }
                                    else {
                                        return categoria + ", "
                                    }
                                })}</span>
                                <h2 className="h2-proyecto">{proyecto.titulo}</h2>
                                <p className="descripcion-proyecto">
                                    {proyecto.descripcion}
                                </p>
                            </div>
                       </motion.div> 
                    ))
                }
            </motion.div>
        </div>
    )
}