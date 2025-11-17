import RotMoncayo from "../assets/img/RotMoncayo.png";
import RestArde from "../assets/img/RestArde.png"

export const ProyectosDestacados = () => {
    
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
    
    return (
        <div className="contenedor-proyectos">
            <h1 className="title-proyectos">Proyectos <span>Destacados</span></h1>
            <div className="contenedor-nuestros-proyectos">
                {
                    proyectos.map((proyecto) => (
                       <div className="card-proyecto">
                            <div className="imagen-card-proyectos"   style={{
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
                       </div> 
                    ))
                }
            </div>
        </div>
    )
}