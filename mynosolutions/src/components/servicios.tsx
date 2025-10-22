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
                        <h3 className="text-xl text-white font-bold" style={{width: "100%", marginBottom: "1rem"}}>Carteles y Contenido Digital</h3>
                    </div>
                    <p className="first-p">Creamos tu imagen, comunicamos tu valor.</p>
                    <p className="content-p">Creamos carteles, flyers, logos, videos promocionales, publicaciones para redes y todo lo que tu marca necesita para destacar.</p>
                    <p className="final-p">Tu imagen profesional lista para impactar.</p>
                </div>

                <div className="card card-redes">
                    <div className="flex align-center gap-2" style={{width: "100%", marginBottom: "1rem"}}>
                        <IconoRedSocial/>
                        <h3 className="text-xl text-white font-bold" style={{width: "100%"}}>Presencia Digital y Redes Sociales</h3>
                    </div>
                    <p className="first-p">Hazte visible donde están tus clientes.</p>
                    <p className="content-p">Configuramos tus redes sociales, creamos tu perfil en Google Maps y publicamos contenido para aumentar tu visibilidad y conectar con tu público.</p>
                    <p className="final-p">Te encuentran, te siguen, te eligen.</p>
                </div>

                <div className="card card-web">
                    <div className="flex align-center gap-2" style={{width: "100%", marginBottom: "1rem"}}>
                        <IconoCodigo/>
                        <h3 className="text-xl text-white font-bold" style={{width: "100%"}}>Aplicaciones Web</h3>
                    </div>
                    <p className="first-p">Tu negocio, tu app, exactamente como la necesitas.</p>
                    <p className="content-p">Desarrollamos plataformas a medida: herramientas de gestión, ecommerce, reservas, CRM... Todo adaptado 100% a tus necesidades.</p>
                    <p className="final-p">No te adaptes al software, el software se adapta a ti.</p>
                </div>      
            </div>
        </div>
    )
}