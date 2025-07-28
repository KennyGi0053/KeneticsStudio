import whatsapp from "../assets/whatsapp.png"
import correo from "../assets/correo1.png"
import instagram from "../assets/social.png"
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
const Contacto = () => {

     const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0lrv9zc",
        "template_ghwodrc", 
        e.target,
        "sdVglaxi7zJDKZcVz"    
      )
      .then(() => {
        toast.success("✅ Mensaje enviado correctamente");
        e.target.reset();
      })
      .catch((error) => {
       console.error("EmailJS Error:", error?.text || error);

        toast.error("❌ Ocurrió un error al enviar");
      });
  };

  return (
    <div id="contacto" className="p-10 mt-20">
      <h1 className="text-white text-xl text-center font-semibold">¿Contáctanos Que Esperas?</h1>

      {/* CONTENEDOR FLEX: contacto + formulario */}
      <div className="flex flex-col md:flex-row mt-12 gap-12">
        
        {/* Sección de contactos */}
        <div className="flex flex-col gap-8 md:w-1/2">
      <h1 className="text-white text-3xl font-bold ">¿Listo para comenzar?</h1>
      <p className="text-white text-lg">
        Contáctanos para una consulta gratuita y descubre cómo podemos ayudarte a crecer tu negocio.
      </p>
         <a
  href="https://wa.me/584142351457"
  target="_blank"
  rel="noopener noreferrer"
  className="flex flex-row items-start hover:opacity-80 transition"
>
  <img src={whatsapp} alt="WhatsApp" className="w-14 h-14" />
  <div className="flex flex-col ml-4">
    <p className="text-white text-lg">Llámanos por WhatsApp</p>
    <p className="text-white text-lg">+58 414-235-14-57</p>
  </div>
</a>

<a
  href="mailto:keneticsstudio@gmail.com"
  className="flex flex-row items-start hover:opacity-80 transition"
>
  <img src={correo} alt="Correo" className="w-14 h-14" />
  <div className="flex flex-col ml-4">
    <p className="text-white text-lg">Envíanos un Correo</p>
    <p className="text-white text-lg">keneticsstudio@gmail.com</p>
  </div>
</a>

<a
  href="https://www.instagram.com/kenetics.studio"
  target="_blank"
  rel="noopener noreferrer"
  className="flex flex-row items-start hover:opacity-80 transition"
>
  <img src={instagram} alt="Instagram" className="w-14 h-14" />
  <div className="flex flex-col ml-4">
    <p className="text-white text-lg">Instagram</p>
    <p className="text-white text-lg">@keneticsstudio</p>
  </div>
</a>
        </div>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 md:w-1/2"
        >
          <p className="text-lg mb-4 font-bold text-white text-center md:text-left">
            Llena el Formulario y Obtén tu Consulta Gratuita
          </p>

          <input
            type="text"
            name="title"
            placeholder="Asunto"
            required
            className="p-2 border border-gray-600 rounded-lg bg-transparent text-white"
          />
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
            className="p-2 border border-gray-600 rounded-lg bg-transparent text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo"
            required
            className="p-2 border border-gray-600 rounded-lg bg-transparent text-white"
          />
          <textarea
            name="message"
            placeholder="Redacta tu mensaje"
            required
            className="p-2 border border-gray-600 rounded-lg h-32 resize-none bg-transparent text-white"
          />

          <button
            type="submit"
            className="bg-[#1269FF] text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
};


export default Contacto
