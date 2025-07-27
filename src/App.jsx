import './App.css'
import Navbar from './components/Navbar'
import Carrusel from './components/Carrusel'
import Servicios from "./components/Servicios"
import Planes from './components/Planes'
import Testimonios from './components/Testimonios'
import Contacto from './components/Contacto'
function App() {


  return (
<div className="min-h-screen bg-black">
    <Navbar/>
    <Carrusel/>
    <Servicios/>
    <Planes/>
    <Testimonios/>
    <Contacto/>
</div>
  )
}

export default App
