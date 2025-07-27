import check from "../assets/checkin.png"
import insta1 from  "../assets/instagramprice1.png"
import insta2 from "../assets/instagramprice2.png"
import insta3 from "../assets/instagramprice3.png"
import webprice1 from "../assets/web1.png"
import webprice2 from "../assets/web3.png"
import webprice3 from "../assets/web2.png"
import mobileprice1 from "../assets/mobileprice1.png"
import mobileprice2 from "../assets/mobileprice2.png"
import mobileprice3 from "../assets/mobileprice3.png"


const Planes = () => {
  return (
     
    <div id="planes" className="p-4 mt-20">
      <h1 className="text-white text-xl font-bold text-center mb-6">Planes y Servicios</h1>
      <h2 className="text-white text-xl text-center font-extrabold mt-10">Planes Community</h2>
      {/* Contenedor horizontal con scroll */}
      <div className="flex overflow-x-auto gap-6 md:justify-center md:gap-20 flex-nowrap mt-12">
        {/* Tarjeta 1 */}
        <div className="flex-shrink-0 group relative w-80 h-96 border-2 border-gray-400 rounded-lg shadow-2xl bg-[#1f1f26] overflow-hidden transition-all duration-300 hover:shadow-indigo-500/100">
          <img
            src={insta1}
            alt="Imagen del plan"
            className="w-full h-full object-contain opacity-0 md:opacity-100 group-hover:opacity-0 transition-opacity duration-500"
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
            src={insta2}
            alt="Imagen del plan"
            className="w-full h-full object-contain opacity-0 md:opacity-100 group-hover:opacity-0 transition-opacity duration-500"
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
            src={insta3}
            alt="Imagen del plan"
            className="w-full h-full object-contain opacity-0 md:opacity-100 group-hover:opacity-0 transition-opacity duration-500"
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
            <h2 className="text-xl font-extrabold text-center text-white mt-10">Planes Web</h2>
      <div className="flex overflow-x-auto gap-6 md:justify-center md:gap-20 flex-nowrap mt-10">
        {/* Tarjeta 1 */}
        <div className="flex-shrink-0 group relative w-80 h-96 border-2 border-gray-400 rounded-lg shadow-2xl bg-[#1f1f26] overflow-hidden transition-all duration-300 hover:shadow-indigo-500/100">
          <img
            src={webprice1}
            alt="Imagen del plan"
            className="w-full h-full object-contain opacity-0 md:opacity-100 group-hover:opacity-0 transition-opacity duration-500"
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
            src={webprice2}
            alt="Imagen del plan"
            className="w-full h-full object-contain opacity-0 md:opacity-100 group-hover:opacity-0 transition-opacity duration-500"
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
            src={webprice3}
            alt="Imagen del plan"
            className="w-full h-full object-contain opacity-0 md:opacity-100 group-hover:opacity-0 transition-opacity duration-500"
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
      <h2 className="text-xl font-extrabold text-center text-white mt-10">Planes Mobile</h2>
      <div className="flex overflow-x-auto gap-6 md:justify-center md:gap-20 flex-nowrap mt-10">
        {/* Tarjeta 1 */}
        <div className="flex-shrink-0 group relative w-80 h-96 border-2 border-gray-400 rounded-lg shadow-2xl bg-[#1f1f26] overflow-hidden transition-all duration-300 hover:shadow-indigo-500/100">
          <img
            src={mobileprice1}
            alt="Imagen del plan"
            className="w-full h-full object-contain opacity-0 md:opacity-100 group-hover:opacity-0 transition-opacity duration-500"
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
            src={mobileprice2}
            alt="Imagen del plan"
            className="w-full h-full object-contain opacity-0 md:opacity-100 group-hover:opacity-0 transition-opacity duration-500"
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
            src={mobileprice3}
            alt="Imagen del plan"
            className="w-full h-full object-contain opacity-0 md:opacity-100 group-hover:opacity-0 transition-opacity duration-500"
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
