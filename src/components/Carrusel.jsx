import { useEffect, useRef, useState } from "react"
import imagen1 from "../assets/imagen1.png"
import imagen2 from "../assets/imagen2.png"
import imagen3 from "../assets/imagen3.png"
import imagen4 from "../assets/imagen4.png"
import imagen5 from "../assets/imagen5.png"
import imagen6 from "../assets/imagen6.png"
import imagen7 from "../assets/imagen7.png"


const imagenes = [
  imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7
]
const carrusel = () => {
 const [index, setIndex] = useState(0)
 const [isPaused, setIsPaused] = useState(false)
 const timeoutRef = useRef(null)

 const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % imagenes.length)
  }

   useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setInterval(nextSlide, 3000)
    }

    return () => clearInterval(timeoutRef.current)
  }, [isPaused])

   const goToSlide = (i) => {
    setIndex(i)
  }

  return (
    <div
      className="w-full h-[500px] flex items-center justify-center bg-black px-4"
      
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="w-full max-w-6xl h-full overflow-hidden relative rounded-xl shadow-xl border border-gray-700">
        {imagenes.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Slide ${i}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}

        {/* Indicadores clicables */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {imagenes.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                i === index ? "bg-white scale-125" : "bg-gray-500"
              }`}
              aria-label={`Ir al slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default carrusel
