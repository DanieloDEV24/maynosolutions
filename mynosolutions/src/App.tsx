import { Header } from './components/header'
import { Home } from './components/home'
import { NuestrosServicios } from './components/nuestrosServicios'  
import { MejoresSoluciones } from './components/mejoresSoluciones'
import { ProyectosDestacados } from './components/proyectosDestacados'
import { Contacto } from './components/contacto'
import './App.css'

function App() {

  return (
      <>
        <Header></Header>
        <MejoresSoluciones></MejoresSoluciones>
        <Home></Home>
        <NuestrosServicios></NuestrosServicios>
        <ProyectosDestacados></ProyectosDestacados>
        <Contacto></Contacto>
      </>
  )
}

export default App
