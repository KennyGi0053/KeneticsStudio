import testi3 from "../assets/testi3.jpeg"
import estrella from "../assets/estrella.png"
import testi1 from "../assets/testi1.jpeg"
import testi2 from "../assets/testi2.jpg"

const Testimonios = () => {
  return (
    <div className='p-4'>
      <h1 className='text-xl text-white font-bold text-center mt-20'>Testimonios</h1>
      <div className="mt-12 w-full items-center justify-center">
<div className="flex flex-col md:flex-row gap-6 md:gap-20 justify-center items-center">

    {/* Tarjeta de Testimonio */}
    <div className="min-w-[20rem] w-80 bg-[#1f1f26] text-white p-6 rounded-2xl shadow-xl border border-gray-700 flex flex-col">
      <div className="flex items-start gap-4 mb-4">
        <img
          src={testi3}
          alt=""
          className="w-16 h-16 rounded-full object-cover border border-gray-500"
        />
        <div className="flex flex-col">
          <p className="font-semibold text-lg">Carlos Rodriguez</p>
          <p className="text-gray-400 text-sm">Mecánico Automotriz</p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={estrella} alt="estrella" className="w-4 h-4 mr-1" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-200 leading-relaxed">
        “Increíble servicio. Han transformado completamente nuestra presencia en redes sociales.”
      </p>
    </div>
        {/* Tarjeta de Testimonio */}
    <div className="min-w-[20rem] w-80 bg-[#1f1f26] text-white p-6 rounded-2xl shadow-xl border border-gray-700 flex flex-col">
      <div className="flex items-start gap-4 mb-4">
        <img
          src={testi1}
          alt=""
          className="w-16 h-16 rounded-full object-cover border border-gray-500"
        />
        <div className="flex flex-col">
          <p className="font-semibold text-lg">María García</p>
          <p className="text-gray-400 text-sm">Dueña de Boutique</p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={estrella} alt="estrella" className="w-4 h-4 mr-1" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-200 leading-relaxed">
        “El equipo de Kenetics Studio superó mis expectativas. Ahora mi tienda tiene una página web hermosa y profesional.”
      </p>
    </div>
        {/* Tarjeta de Testimonio */}
    <div className="min-w-[20rem] w-80 bg-[#1f1f26] text-white p-6 rounded-2xl shadow-xl border border-gray-700 flex flex-col">
      <div className="flex items-start gap-4 mb-4">
        <img
          src={testi2}
          alt=""
          className="w-16 h-16 rounded-full object-cover border border-gray-500"
        />
        <div className="flex flex-col">
          <p className="font-semibold text-lg">Ruben Hernandez</p>
          <p className="text-gray-400 text-sm">Venta de Articulos en Línea </p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={estrella} alt="estrella" className="w-4 h-4 mr-1" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-200 leading-relaxed">
        “La Página quedó exactamente como la quería, Gracias por su gran trabajo, ¡Los Recomiendo 100%! .”
      </p>
    </div>        
  </div>
</div>
                </div>
              
 
  )
}

export default Testimonios
