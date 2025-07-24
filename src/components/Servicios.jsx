import codificacion from "../assets/codificacion.png"
import check from "../assets/checkin.png"
import telefono from "../assets/androide1.png"
import apple from "../assets/apple.png"
import instagram from "../assets/instagram3.png"
import incrementar from "../assets/ingresos.png"
import laptop from "../assets/laptop1.png"
import telefono1 from "../assets/telefono.png"
import facebook from "../assets/facebook.png"

const Servicios = () => {
  return (
    <div className='mt-10 bg-neutral-950 pt-12'>
      <h1 className='text-white text-xl text-center font-bold'>Nuestros Servicios</h1>

      {/* Scroll horizontal en móvil */}
      <div className="mt-12 overflow-x-auto w-full px-4">
        <div className="flex flex-row gap-6 md:gap-20 md:justify-center md:flex-wrap min-w-max md:min-w-0">

          {/* Tarjeta 1 */}
          <div className="border-gray-400 shadow-2xl rounded-xl p-4 w-80 min-w-[20rem] border-1 bg-[#1f1f26] transform transition-all duration-300 hover:shadow-indigo-500/100"
           style={{ cursor: `url(${laptop}), pointer` }}
          >
            <img src={codificacion} alt="" className="h-6 w-8" />
            <p className="text-white text-lg font-medium mt-4 text-left">Desarrollo Web Personalizado</p>
            <p className="text-gray-400 text-left mt-2 text-sm">Sitios Web Únicos y Optimizados</p>
            <div className="flex flex-row items-center mt-6"><img src={check} alt="" className="h-4 w-4" /><p className="text-white ml-2">Diseño Responsivo</p></div>
            <div className="flex flex-row items-center mt-2"><img src={check} alt="" className="h-4 w-4" /><p className="text-white ml-2">E-Commerce</p></div>
            <div className="flex flex-row items-center mt-2"><img src={check} alt="" className="h-4 w-4" /><p className="text-white ml-2">Mantenimiento web</p></div>
            <div className="flex flex-row items-center mt-2"><img src={check} alt="" className="h-4 w-4" /><p className="text-white ml-2">Optimización SEO</p></div>
          </div>

          {/* Tarjeta 2 */}
          <div className="border-gray-400 shadow-2xl rounded-xl p-4 w-80 min-w-[20rem] border-1 bg-[#1f1f26]  transform transition-all duration-300 hover:shadow-indigo-500/100"
          style={{ cursor: `url(${telefono1}), pointer` }}
          >
            <div className="flex flex-row gap-4">
            <img src={telefono} alt="" className="h-6 w-8" />
            <img src={apple} alt="" className="h-6 w-8" />
            </div>
            <p className="text-white text-lg font-medium mt-4 text-left">Aplicaciones Android - iOS</p>
            <p className="text-gray-400 text-left mt-2 text-sm">Experiencias Móviles Excepcionales</p>
            <div className="flex flex-row items-center mt-6"><img src={check} alt="" className="h-4 w-4" /><p className="text-white ml-2">UX/UI Intuitivo</p></div>
            <div className="flex flex-row items-center mt-2"><img src={check} alt="" className="h-4 w-4" /><p className="text-white ml-2">Rendimiento Óptimo</p></div>
            <div className="flex flex-row items-center mt-2"><img src={check} alt="" className="h-4 w-4" /><p className="text-white ml-2">Mantenimiento y Actualizaciones</p></div>
            <div className="flex flex-row items-center mt-2"><img src={check} alt="" className="h-4 w-4" /><p className="text-white ml-2">Integración Perfecta</p></div>
          </div>

          {/* Tarjeta 3 */}
          <div className="border-gray-400 shadow-2xl rounded-xl p-4 w-80 min-w-[20rem] border-1 bg-[#1f1f26] transform transition-all duration-300 hover:shadow-indigo-500/100"
          style={{ cursor: `url(${instagram}), pointer` }}
          >
            <img src={instagram} alt="" className="h-6 w-6" />
            <p className="text-white text-lg font-medium mt-4 text-left">Community Management</p>
            <p className="text-gray-400 text-left mt-2 text-sm">Gestión Estratétiga De Tus Redes Sociales</p>
            <div className="flex flex-row items-center mt-6"><img src={check} alt="" className="h-4 w-4" /><p className="text-white ml-2">Creación De Contenido</p></div>
            <div className="flex flex-row items-center mt-2"><img src={check} alt="" className="h-4 w-4" /><p className="text-white ml-2">Estrategia De Contenido</p></div>
            <div className="flex flex-row items-center mt-2"><img src={check} alt="" className="h-4 w-4" /><p className="text-white ml-2">Análisis Métricas</p></div>
            <div className="flex flex-row items-center mt-2"><img src={check} alt="" className="h-4 w-4" /><p className="text-white ml-2">Diseños De Posts</p></div>
          </div>

          {/* Tarjeta 4 */}
          <div className="border-gray-400 shadow-2xl rounded-xl p-4 w-80 min-w-[20rem] border-1 bg-[#1f1f26] transform transition-all duration-300 hover:shadow-indigo-500/100"
          style={{ cursor: `url(${facebook}), pointer` }}
          >
            <img src={incrementar} alt="" className="h-6 w-8" />
            <p className="text-white text-lg font-medium mt-4 text-left">Campañas Publicitarias</p>
            <p className="text-gray-400 text-left mt-2 text-sm">Publicidad Que Acelera Tu Negocio</p>
            <div className="flex flex-row items-center mt-6"><img src={check} alt="" className="h-4 w-4" /><p className="text-white ml-2">Facebook Ads</p></div>
            <div className="flex flex-row items-center mt-2"><img src={check} alt="" className="h-4 w-4" /><p className="text-white ml-2">Instagram Ads</p></div>
            <div className="flex flex-row items-center mt-2"><img src={check} alt="" className="h-4 w-4" /><p className="text-white ml-2">Optimización De Presupuesto</p></div>
            <div className="flex flex-row items-center mt-2"><img src={check} alt="" className="h-4 w-4" /><p className="text-white ml-2">Estrategia Personalizada</p></div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Servicios
