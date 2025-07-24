import './App.css'
import Navbar from './components/Navbar'
import Carrusel from './components/carrusel'
import Servicios from "./components/Servicios"
import Planes from './components/Planes'
function App() {


  return (
<div className="min-h-screen bg-black">
    <Navbar/>
    <Carrusel/>
    <Servicios/>
    <Planes/>
</div>
  )
}

export default App
