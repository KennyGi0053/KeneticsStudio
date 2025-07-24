import check from "../assets/checkin.png"
import insta from  "../assets/imagen6.png"
import pcmpovil from "../assets/pcmovil.png"
const Planes = () => {
  return (
     
    <div className="p-4 mt-20">
      <h1 className="text-white text-xl font-bold text-center mb-6">Planes y Servicios</h1>

      {/* Contenedor horizontal con scroll */}
      <div className="flex overflow-x-auto gap-6 md:justify-center md:gap-20 flex-nowrap mt-10">
        {/* Tarjeta 1 */}
        <div className="flex-shrink-0 group relative w-80 h-96 border-2 border-gray-400 rounded-lg shadow-2xl bg-[#1f1f26] overflow-hidden transition-all duration-300 hover:shadow-indigo-500/100">
          <img
            src={insta}
            alt="Imagen del plan"
            className="w-full h-full object-cover opacity-0 md:opacity-100 group-hover:opacity-0 transition-opacity duration-500"
          />

          <div className="absolute mt-4 top-0 left-0 w-full h-full bg-[#1f1f26] opacity-100 md:opacity-0 group-hover:md:opacity-100 transition-opacity duration-500 p-6 flex flex-col">
            <h2 className="text-xl font-semibold text-white">Community Silver</h2>
            <h1 className="text-2xl text-white mt-4">$299/mes</h1>

            <div className="text-white mt-6 space-y-2">
              <div className="flex items-center gap-2">
                <img src={check} alt="" className="h-4 w-4" />
                <p>Gestión de redes sociales</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={check} alt="" className="h-4 w-4" />
                <p>12 publicaciones mensuales</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={check} alt="" className="h-4 w-4" />
                <p>Respuesta a comentarios</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={check} alt="" className="h-4 w-4" />
                <p>Informe mensual básico</p>
              </div>
            </div>
            <button className="mt-12 border  bg-[#0aadbf] border-gray-400 text-white font-bold rounded-lg h-10 w-full cursor-pointer">
              Elegir Plan
            </button>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="flex-shrink-0 group relative w-80 h-96 border-2 border-gray-400 rounded-lg shadow-2xl bg-[#1f1f26] overflow-hidden transition-all duration-300 hover:shadow-indigo-500/100">
          <img
            src={insta}
            alt="Imagen del plan"
            className="w-full h-full object-cover opacity-0 md:opacity-100 group-hover:opacity-0 transition-opacity duration-500"
          />

          <div className="absolute mt-4 top-0 left-0 w-full h-full bg-[#1f1f26] opacity-100 md:opacity-0 group-hover:md:opacity-100 transition-opacity duration-500 p-6 flex flex-col">
            <h2 className="text-xl font-semibold text-white">Community Gold</h2>
            <h1 className="text-2xl text-white mt-4">$499/mes</h1>

            <div className="text-white mt-6 space-y-2">
              <div className="flex items-center gap-2">
                <img src={check} alt="" className="h-4 w-4" />
                <p>Gestión de redes + ADS</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={check} alt="" className="h-4 w-4" />
                <p>20 publicaciones mensuales</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={check} alt="" className="h-4 w-4" />
                <p>Soporte a clientes</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={check} alt="" className="h-4 w-4" />
                <p>Informe profesional</p>
              </div>
            </div>
            <button className="cursor-pointer mt-12 border font-bold bg-[#0aadbf] border-gray-400 text-white rounded-lg h-10 w-full">
              Elegir Plan
            </button>
          </div>
        </div>
        
        <div className="flex-shrink-0 group relative w-80 h-96 border-2 border-gray-400 rounded-lg shadow-2xl bg-[#1f1f26] overflow-hidden transition-all duration-300 hover:shadow-indigo-500/100">
          <img
            src={insta}
            alt="Imagen del plan"
            className="w-full h-full object-cover opacity-0 md:opacity-100 group-hover:opacity-0 transition-opacity duration-500"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-[#1f1f26] opacity-100 md:opacity-0 group-hover:md:opacity-100 transition-opacity duration-500 p-6 flex flex-col">
            <h2 className="text-xl mt-4 font-semibold text-white">Community Platinum</h2>
            <h1 className="text-2xl text-white mt-4">$499/mes</h1>

            <div className="text-white mt-6 space-y-2">
              <div className="flex items-center gap-2">
                <img src={check} alt="" className="h-4 w-4" />
                <p>Gestión de redes + ADS</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={check} alt="" className="h-4 w-4" />
                <p>20 publicaciones mensuales</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={check} alt="" className="h-4 w-4" />
                <p>Soporte a clientes</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={check} alt="" className="h-4 w-4" />
                <p>Informe profesional</p>
              </div>
            </div>
            <button className="cursor-pointer mt-12 border font-bold bg-[#0aadbf] border-gray-400 text-white rounded-lg h-10 w-full">
              Elegir Plan
            </button>
          </div>
        </div>
      </div>
            {/* Contenedor horizontal con scroll */}
      <div className="flex overflow-x-auto gap-6 md:justify-center md:gap-20 flex-nowrap mt-10">
        {/* Tarjeta 1 */}
        <div className="flex-shrink-0 group relative w-80 h-96 border-2 border-gray-400 rounded-lg shadow-2xl bg-[#1f1f26] overflow-hidden transition-all duration-300 hover:shadow-indigo-500/100">
          <img
            src={pcmpovil}
            alt="Imagen del plan"
            className="w-full h-full object-cover opacity-0 md:opacity-100 group-hover:opacity-0 transition-opacity duration-500"
          />

          <div className="absolute mt-4 top-0 left-0 w-full h-full bg-[#1f1f26] opacity-100 md:opacity-0 group-hover:md:opacity-100 transition-opacity duration-500 p-6 flex flex-col">
            <h2 className="text-xl font-semibold text-white">Community Silver</h2>
            <h1 className="text-2xl text-white mt-4">$299/mes</h1>

            <div className="text-white mt-6 space-y-2">
              <div className="flex items-center gap-2">
                <img src={check} alt="" className="h-4 w-4" />
                <p>Gestión de redes sociales</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={check} alt="" className="h-4 w-4" />
                <p>12 publicaciones mensuales</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={check} alt="" className="h-4 w-4" />
                <p>Respuesta a comentarios</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={check} alt="" className="h-4 w-4" />
                <p>Informe mensual básico</p>
              </div>
            </div>
            <button className="mt-12 border  bg-[#0aadbf] border-gray-400 text-white font-bold rounded-lg h-10 w-full cursor-pointer">
              Elegir Plan
            </button>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="flex-shrink-0 group relative w-80 h-96 border-2 border-gray-400 rounded-lg shadow-2xl bg-[#1f1f26] overflow-hidden transition-all duration-300 hover:shadow-indigo-500/100">
          <img
            src={pcmpovil}
            alt="Imagen del plan"
            className="w-full h-full object-cover opacity-0 md:opacity-100 group-hover:opacity-0 transition-opacity duration-500"
          />

          <div className="absolute mt-4 top-0 left-0 w-full h-full bg-[#1f1f26] opacity-100 md:opacity-0 group-hover:md:opacity-100 transition-opacity duration-500 p-6 flex flex-col">
            <h2 className="text-xl font-semibold text-white">Community Gold</h2>
            <h1 className="text-2xl text-white mt-4">$499/mes</h1>

            <div className="text-white mt-6 space-y-2">
              <div className="flex items-center gap-2">
                <img src={check} alt="" className="h-4 w-4" />
                <p>Gestión de redes + ADS</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={check} alt="" className="h-4 w-4" />
                <p>20 publicaciones mensuales</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={check} alt="" className="h-4 w-4" />
                <p>Soporte a clientes</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={check} alt="" className="h-4 w-4" />
                <p>Informe profesional</p>
              </div>
            </div>
            <button className="cursor-pointer mt-12 border font-bold bg-[#0aadbf] border-gray-400 text-white rounded-lg h-10 w-full">
              Elegir Plan
            </button>
          </div>
        </div>
        
        <div className="flex-shrink-0 group relative w-80 h-96 border-2 border-gray-400 rounded-lg shadow-2xl bg-[#1f1f26] overflow-hidden transition-all duration-300 hover:shadow-indigo-500/100">
          <img
            src={pcmpovil}
            alt="Imagen del plan"
            className="w-full h-full object-cover opacity-0 md:opacity-100 group-hover:opacity-0 transition-opacity duration-500"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-[#1f1f26] opacity-100 md:opacity-0 group-hover:md:opacity-100 transition-opacity duration-500 p-6 flex flex-col">
            <h2 className="text-xl mt-4 font-semibold text-white">Community Platinum</h2>
            <h1 className="text-2xl text-white mt-4">$499/mes</h1>

            <div className="text-white mt-6 space-y-2">
              <div className="flex items-center gap-2">
                <img src={check} alt="" className="h-4 w-4" />
                <p>Gestión de redes + ADS</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={check} alt="" className="h-4 w-4" />
                <p>20 publicaciones mensuales</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={check} alt="" className="h-4 w-4" />
                <p>Soporte a clientes</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={check} alt="" className="h-4 w-4" />
                <p>Informe profesional</p>
              </div>
            </div>
            <button className="cursor-pointer mt-12 border font-bold bg-[#0aadbf] border-gray-400 text-white rounded-lg h-10 w-full">
              Elegir Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Planes
