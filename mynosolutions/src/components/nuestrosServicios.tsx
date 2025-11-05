
import { IconoCodigo } from "./icons/iconoCodigo"
import { IconoPaint } from "./icons/iconoPaint"
import { IconoPicture } from "./icons/iconoPicture"
import { IconoPhone } from "./icons/iconoPhone"
import { IconoNet } from "./icons/iconoNet"
import { IconoUX } from "./icons/iconoUX"

export const NuestrosServicios = () => {

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

    return (
    <div id="nuestros-servicios">
      <h1 className="encabezado-nuestros-servicios">
        Nuestros <span>Servicios</span>
      </h1>
      <div className="grid-servicios">
        {servicios.map((servicio, index) => (
          <div key={index} className="card-servicio">
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
          </div>
        ))}
      </div>
    </div>
  )
}