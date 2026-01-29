import { IconoEstrella } from "./icons/iconoEstrella"
import { motion } from 'framer-motion'

export const MejoresSoluciones = () => {
    return (
            <motion.div initial={{ y: -80, opacity: 0 }}   // empieza arriba
      animate={{ y: 0, opacity: 1 }}     // baja a su sitio
      transition={{
        duration: 0.6,
        ease: "easeOut", 
        delay: 0.3
      }} className="contenedor-soluciones-digitales">
                <div className="soluciones-digitales">
                    <IconoEstrella></IconoEstrella>
                    <span>Soluciones Digitales Premium</span>
                </div>
            </motion.div>
    )
}

