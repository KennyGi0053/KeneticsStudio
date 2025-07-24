import { useState } from "react"
import logo from "../assets/logoK1.png"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

const Navbar = () => {

     const [open, setOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setOpen(false)
    }
  }

   const sections = [
    { id: "inicio", label: "Inicio" },
    { id: "servicios", label: "Servicios" },
    { id: "quiensoy", label: "Quién Soy"},
    { id: "proceso", label: "Nuestro Proceso de Servicio" },
    { id: "por-que-elegirnos", label: "¿Por Qué Elegirnos?" },
    { id: "contacto", label: "Contacto" },
  ]

  return (
    <nav className="bg-black h-30 w-full">
        <div className="flex items-center justify-between">
        <img src={logo} alt="logo" 
        className="h-20 md:ml-6 mt-2 "
        />
         {/* Botón hamburguesa */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-200 focus:outline-none cursor-pointer"
        >
          {open ? <X className="w-6 h-6 mr-4" /> : <Menu className="w-6 h-6 mr-4" />}
        </button>

        {/* Menú en desktop */}
        <div className="hidden md:flex flex-row items-center space-x-10 mr-10">
          {sections.map(({ id, label }) => (
            <motion.button
            key={id}
            whileHover={{ scale: 1.1, color: "#0aadbf" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection(id)}
            className="text-gray-200 text-md font-medium hover:text-[#004aeb] transition cursor-pointer"
            >
              {label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Menú en móvil */}
      {open && (
        <div className="flex flex-col border-b border-gray-300 shadow-md md:hidden gap-4 mt-2 px-4 pt-1 bg-gray-100">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-gray-500 text-sm text-left cursor-pointer"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
