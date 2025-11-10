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
            descripcion: "Web corporativa para empresa de rótulos y vinilos, con galería de trabajos y contacto directo.",
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
                            <img src={proyecto.imagen} alt={proyecto.titulo} />
                       </div> 
                    ))
                }
            </div>
        </div>
    )
}