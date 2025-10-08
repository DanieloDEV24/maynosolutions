import { IconoFlyer } from "./icons/iconoFlyer"
import {  IconoRedSocial } from "./icons/iconoRedSocial"
import { IconoCodigo } from "./icons/iconoCodigo"

export const Servicios = () => {
    return (
        <div className="servicios">
            <h1 className="text-4xl text-white font-bold mb-4">NUESTROS SERVICIOS</h1>
            <div className="cards flex justify-center gap-1 flex-wrap">
                <div className="card card-cartel">
                    <div className="flex align-center gap-2" style={{width: "100%"}}>
                        <IconoFlyer/>
                        <h3 className="text-xl text-white font-bold" style={{width: "100%"}}>Carteles y Contenido Digital</h3>
                    </div>
                    <p></p>
                </div>

                <div className="card card-redes">
                    <div className="flex align-center gap-2" style={{width: "100%"}}>
                        <IconoRedSocial/>
                        <h3 className="text-xl text-white font-bold" style={{width: "100%"}}>Presencia Digital y Redes Sociales</h3>
                    </div>
                </div>

                <div className="card card-web">
                    <div className="flex align-center gap-2" style={{width: "100%"}}>
                        <IconoCodigo/>
                        <h3 className="text-xl text-white font-bold" style={{width: "100%"}}>Aplicaciones Web</h3>
                    </div>
                </div>      
            </div>
        </div>
    )
}