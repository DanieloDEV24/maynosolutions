export const Servicios = () => {
    return (
        <div className="servicios">
            <h1 className="text-4xl text-white font-bold mb-4">NUESTROS SERVICIOS</h1>
            <div className="cards flex justifi-center gap-1 flex-wrap">
                <div className="card card-cartel">
                    <h3 className="text-xl text-white font-bold">Carteles y Contenido Digital</h3>
                    <p></p>
                </div>

                <div className="card card-redes">
                    <h3 className="text-xl text-white font-bold">Presencia Digital y Redes Sociales</h3>
                </div>

                <div className="card card-web">
                    <h3 className="text-xl text-white font-bold">Aplicaciones Web</h3>
                </div>      
            </div>
        </div>
    )
}