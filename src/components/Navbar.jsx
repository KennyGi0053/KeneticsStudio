import { useState } from "react"
import logo from "../assets/logoK1.png"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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
    { id: "planes", label: "Planes" },
    { id: "testimonios", label: "Testimonios" },
    { id: "contacto", label: "Contacto" },
  ]

  return (
    <motion.nav
      className="bg-black w-full"
      initial={false}
      animate={{ height: open ? "auto" : "5.5rem" }} // 5.5rem ≈ 88px (logo + margen)
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between">
        <img
          src={logo}
          alt="logo"
          className="h-20 md:ml-6 mt-2"
        />
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
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col shadow-md md:hidden gap-4 px-4 pt-2 pb-4 bg-black"
          >
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-[#cfd0d1] text-sm text-left cursor-pointer"
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar