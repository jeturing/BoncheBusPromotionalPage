import { useState } from "react";
import { Phone, MessageCircle, MapPin, Mail, Clock, Send } from "lucide-react";
import { brandColors } from "../utils/brandColors";

export function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    evento: "",
    fecha: "",
    personas: "",
    mensaje: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Crear mensaje de WhatsApp
    const mensaje = `
*Nueva Consulta - Bonche Bus*

*Nombre:* ${formData.nombre}
*Email:* ${formData.email}
*Teléfono:* ${formData.telefono}
*Tipo de Evento:* ${formData.evento}
*Fecha Estimada:* ${formData.fecha}
*Número de Personas:* ${formData.personas}

*Mensaje:*
${formData.mensaje}
    `.trim();

    const whatsappUrl = `https://wa.me/18496576361?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-4 relative overflow-hidden text-center" style={{ background: brandColors.primary }}>
        <div className="max-w-3xl mx-auto relative z-10">
          <p className="text-white/50 font-bold uppercase tracking-widest text-xs mb-5">Bonche Bus · Santo Domingo</p>
          <h1 className="font-black text-white leading-none mb-4">
            CONTÁC<span style={{ color: brandColors.secondary }}>TANOS</span>
          </h1>
          <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-5">
            Respuesta rápida · Atención personalizada
          </p>
          <p className="text-white/70 mx-auto" style={{ maxWidth: '420px' }}>
            Estamos listos para hacer de tu evento una experiencia inolvidable.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-black text-purple-900 mb-8">Información de Contacto</h2>

              {/* Phone */}
              <div className="bg-white p-8 rounded-2xl shadow-lg mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-900">Teléfonos</h3>
                </div>
                <div className="space-y-3 ml-18">
                  <a
                    href="tel:8096196960"
                    className="block text-xl text-gray-700 hover:text-green-600 transition-colors"
                  >
                    (809) 619-6960
                  </a>
                  <a
                    href="tel:8096166960"
                    className="block text-xl text-gray-700 hover:text-green-600 transition-colors"
                  >
                    (809) 616-6960
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-white p-8 rounded-2xl shadow-lg mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-900">WhatsApp</h3>
                </div>
                <div className="space-y-3 ml-18">
                  <a
                    href="https://wa.me/18496576361"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-xl text-gray-700 hover:text-pink-600 transition-colors"
                  >
                    (849) 657-6361
                  </a>
                  <a
                    href="https://wa.me/18496506361"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-xl text-gray-700 hover:text-pink-600 transition-colors"
                  >
                    (849) 650-6361
                  </a>
                </div>
                <div className="mt-6">
                  <a
                    href="https://wa.me/18496576361"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chatear Ahora
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white p-8 rounded-2xl shadow-lg mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-900">Dirección</h3>
                </div>
                <p className="text-xl text-gray-700 ml-18 leading-relaxed">
                  Av. Jiménez de Moya no.19<br />
                  esq. José Contreras<br />
                  Santo Domingo, D.N.<br />
                  República Dominicana
                </p>
              </div>

              {/* Horario */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-900">Horario de Atención</h3>
                </div>
                <div className="ml-18 space-y-2 text-gray-700">
                  <p className="text-lg">
                    <span className="font-bold">Lunes - Viernes:</span> 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-lg">
                    <span className="font-bold">Sábado:</span> 10:00 AM - 4:00 PM
                  </p>
                  <p className="text-lg">
                    <span className="font-bold">Domingo:</span> Cerrado
                  </p>
                  <p className="text-sm text-purple-600 mt-4">
                    * Para eventos, disponibles 24/7 con reserva previa
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-2xl sticky top-24">
                <h2 className="text-3xl font-black text-purple-900 mb-2">Envíanos un Mensaje</h2>
                <p className="text-gray-600 mb-8">
                  Completa el formulario y te contactaremos vía WhatsApp
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-bold text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="telefono" className="block text-sm font-bold text-gray-700 mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        required
                        value={formData.telefono}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                        placeholder="(809) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="evento" className="block text-sm font-bold text-gray-700 mb-2">
                      Tipo de Evento *
                    </label>
                    <select
                      id="evento"
                      name="evento"
                      required
                      value={formData.evento}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                    >
                      <option value="">Selecciona un tipo</option>
                      <option value="Cumpleaños">Cumpleaños</option>
                      <option value="Despedida de Soltero/a">Despedida de Soltero/a</option>
                      <option value="Aniversario">Aniversario</option>
                      <option value="Evento Corporativo">Evento Corporativo</option>
                      <option value="Graduación">Graduación</option>
                      <option value="Quinceaños">Quinceaños</option>
                      <option value="Baby Shower">Baby Shower</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fecha" className="block text-sm font-bold text-gray-700 mb-2">
                        Fecha Estimada
                      </label>
                      <input
                        type="date"
                        id="fecha"
                        name="fecha"
                        value={formData.fecha}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="personas" className="block text-sm font-bold text-gray-700 mb-2">
                        Número de Personas
                      </label>
                      <input
                        type="number"
                        id="personas"
                        name="personas"
                        min="1"
                        value={formData.personas}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                        placeholder="45"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-bold text-gray-700 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      value={formData.mensaje}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors resize-none"
                      placeholder="Cuéntanos más sobre tu evento..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
                  >
                    <Send className="w-6 h-6" />
                    Enviar por WhatsApp
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    Al enviar, serás redirigido a WhatsApp para completar tu consulta
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-purple-900 mb-4">Nuestra Ubicación</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700">Encuéntranos en Santo Domingo</p>
          </div>

          <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl shadow-xl">
            <div className="aspect-video bg-white rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-purple-900 mb-2">
                  Av. Jiménez de Moya no.19 esq. José Contreras
                </h3>
                <p className="text-gray-700 mb-6">Santo Domingo, D.N.</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Av.+Jiménez+de+Moya+no.19+esq.+José+Contreras+Santo+Domingo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-bold hover:from-purple-700 hover:to-pink-700 transition-all"
                >
                  Ver en Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-purple-900 mb-4">Preguntas Frecuentes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto"></div>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "¿Con cuánta anticipación debo reservar?",
                a: "Recomendamos reservar con al menos 2-4 semanas de anticipación, especialmente para fines de semana y fechas especiales. Sin embargo, contáctanos y haremos nuestro mejor esfuerzo para acomodar tu evento."
              },
              {
                q: "¿Cuál es la capacidad máxima del bus?",
                a: "Nuestros buses tienen capacidad para hasta 45 personas. Para grupos más grandes, podemos coordinar múltiples buses."
              },
              {
                q: "¿Puedo personalizar el paquete?",
                a: "¡Absolutamente! Todos nuestros paquetes son personalizables. Podemos ajustar el menú, la música, la decoración y agregar servicios adicionales según tus necesidades."
              },
              {
                q: "¿Qué incluye el open bar?",
                a: "El open bar incluye ron, vodka, whisky, cerveza, refrescos, jugos y agua. También podemos incluir bebidas premium bajo solicitud."
              },
              {
                q: "¿Qué pasa si llueve?",
                a: "Nuestros buses están completamente cubiertos, por lo que la fiesta continúa sin importar el clima. La experiencia es igual de increíble bajo techo."
              },
              {
                q: "¿Necesito pagar un depósito?",
                a: "Sí, requerimos un depósito del 50% para confirmar tu reserva. El saldo restante se paga antes del evento."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-purple-900 mb-3">{faq.q}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
