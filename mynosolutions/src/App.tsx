import { Header } from './components/header'
import { Home } from './components/home'
import { NuestrosServicios } from './components/nuestrosServicios'
  
import { MejoresSoluciones } from './components/mejoresSoluciones'
import './App.css'

function App() {

  return (
      <>
        <Header></Header>
        <MejoresSoluciones></MejoresSoluciones>
        <Home></Home>
        <NuestrosServicios></NuestrosServicios>
        {/*<Servicios></Servicios>
        <Contacto></Contacto> */}
      </>
  )
}

export default App
