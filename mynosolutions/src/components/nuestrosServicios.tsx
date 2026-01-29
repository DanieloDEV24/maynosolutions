import { motion, type Variants } from 'framer-motion';
import { IconoCodigo } from "./icons/iconoCodigo"
import { IconoPaint } from "./icons/iconoPaint"
import { IconoPicture } from "./icons/iconoPicture"
import { IconoPhone } from "./icons/iconoPhone"
import { IconoNet } from "./icons/iconoNet"
import { IconoUX } from "./icons/iconoUX"
import { useEffect, useState, useRef } from 'react';

export const NuestrosServicios = () => {

  const [mostrar, setMostrar] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setMostrar(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Se activa cuando el 10% del componente es visible
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

    const servicios = [
        {
           icon: <IconoCodigo></IconoCodigo>, 
           title: 'Desarrollo Web', 
           description: 'Tu página web profesional que trabaja 24/7 para atraer nuevos clientes.',
           features: ['Diseño adaptado a móviles', 'Fácil de actualizar', 'Siempre disponible']
        }, 
        {
           icon: <IconoPaint></IconoPaint>, 
           title: 'Diseño de Logos', 
           description: 'El logo que hará que tu negocio destaque y sea memorable.',
           features: ['Diseño único', 'Listo para usar', 'Todos los formatos']
        }, 
        {
           icon: <IconoPicture></IconoPicture>, 
           title: 'Diseño Gráfico', 
           description: 'Carteles y flyers que captan la atención de tus clientes.',
           features: ['Listos para imprimir o postear en redes sociales', 'Diseños impactantes y profesionales', 'Entrega rápida']
        }, {
           icon: <IconoPhone></IconoPhone>, 
           title: 'Redes Sociales', 
           description: 'Contenido visual que aumenta tu presencia en redes sociales.',
           features: ['Publicaciones llamativas', 'Google Bussiness', 'Contenido constante']
        }, {
           icon: <IconoNet></IconoNet>, 
           title: 'Landing Pages', 
           description: 'Páginas que convierten visitantes en clientes de forma efectiva.',
           features: ['Haz que tu negocio sea fácil de encontrar', 'Carga rápida', 'Resultados medibles']
        }, {
           icon: <IconoUX></IconoUX>, 
           title: 'Experiencia del Usuario', 
           description: 'Diseños intuitivos que hacen que tus clientes disfruten navegando.',
           features: ['Fácil de usar', 'Diseño atractivo', 'Mayor satisfacción del cliente']
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
            }
        }
    };

    const itemVariants : Variants= {
        hidden: { 
            opacity: 0,
            y: 20
        },
        visible: { 
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
    <div id="nuestros-servicios" ref={componentRef}>
      <motion.h1 
        className="encabezado-nuestros-servicios"
        initial={{ opacity: 0, y: -10 }}
        animate={mostrar ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Nuestros <span>Servicios</span>
      </motion.h1>
      <motion.div 
        className="grid-servicios"
        variants={containerVariants}
        initial="hidden"
        animate={mostrar ? "visible" : "hidden"}
      >
        {servicios.map((servicio, index) => (
          <motion.div 
            key={index} 
            className="card-servicio"
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="icon-card-servicio">
                {servicio.icon}
            </div>
            <h3 className="card-header">{servicio.title}</h3>
            <p className="card-description">{servicio.description}</p>
            <ul>
              {servicio.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}