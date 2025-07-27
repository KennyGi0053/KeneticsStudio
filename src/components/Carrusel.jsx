import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
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

const Carrusel = () => {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timeoutRef = useRef(null)
  const touchStartXRef = useRef(null)

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % imagenes.length)
  }

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + imagenes.length) % imagenes.length)
  }

  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setInterval(nextSlide, 3000)
    }
    return () => clearInterval(timeoutRef.current)
  }, [isPaused])

  const goToSlide = (i) => setIndex(i)

  // 👇 Manejo del scroll táctil
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX
    const deltaX = touchEndX - touchStartXRef.current

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        prevSlide()
      } else {
        nextSlide()
      }
    }
  }

  return (
    <div
      className="relative w-full h-[500px] bg-black flex items-center justify-center px-4 overflow-hidden mt-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Imagenes */}
      <div className="relative w-full max-w-6xl h-full overflow-hidden rounded-xl border border-gray-700 shadow-xl">
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

        {/* Botones Flechas */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/60 p-2 rounded-full cursor-pointer"
        >
          <ChevronLeft className="text-white " />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/60 p-2 rounded-full cursor-pointer"
        >
          <ChevronRight className="text-white" />
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {imagenes.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                i === index ? "bg-white scale-125" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carrusel