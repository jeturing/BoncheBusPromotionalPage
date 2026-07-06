import { useState } from "react";
import { useParams, Link } from "react-router";
import { Calendar, Users, Clock, ChevronRight, Sparkles, Send, CheckCircle } from "lucide-react";
import { brandColors } from "../utils/brandColors";

export function Reservas() {
  const { packageId } = useParams();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    // Step 1: Package Selection
    paquete: packageId || "",

    // Step 2: Event Details
    tipoEvento: "",
    fecha: "",
    horaInicio: "",
    numeroPersonas: "",
    duracion: "",

    // Step 3: Personal Info
    nombre: "",
    email: "",
    telefono: "",
    instagram: "",

    // Step 4: Customization
    tematica: "",
    musicaPreferencia: "",
    restriccionesAlimentarias: "",
    serviciosAdicionales: [] as string[],

    // Step 5: Additional Notes
    comentarios: ""
  });

  const packages = [
    { id: "combo-renta", name: "Combo Renta", price: "Cotización personalizada", duration: "4 horas • Máx. 35 personas" },
    { id: "combo-todo-incluido-adultos", name: "Combo Todo Incluido Adultos", price: "Cotización personalizada", duration: "4 horas • 25–40 personas" },
    { id: "combo-despedida-soltera", name: "Combo Despedida de Soltera", price: "Cotización personalizada", duration: "4 horas • 25–40 personas" },
    { id: "combo-adolescentes", name: "Combo Todo Incluido Adolescentes", price: "Cotización personalizada", duration: "4 horas • 25–40 personas" },
    { id: "ocasiones-especiales", name: "Ocasiones Especiales", price: "Cotización personalizada", duration: "Flexible • A medida" }
  ];

  const serviciosAdicionales = [
    "Hora adicional",
    "Hora loca",
    "Karaoke",
    "Stripper"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (servicio: string) => {
    const current = formData.serviciosAdicionales;
    if (current.includes(servicio)) {
      setFormData({
        ...formData,
        serviciosAdicionales: current.filter(s => s !== servicio)
      });
    } else {
      setFormData({
        ...formData,
        serviciosAdicionales: [...current, servicio]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedPackage = packages.find(p => p.id === formData.paquete);

    // Crear mensaje de WhatsApp
    const mensaje = `
*🎉 NUEVA RESERVA - BONCHE BUS 🎉*

*PAQUETE SELECCIONADO:*
${selectedPackage?.name || 'No especificado'}
${selectedPackage?.price || ''}

*DETALLES DEL EVENTO:*
📅 Fecha: ${formData.fecha}
⏰ Hora de inicio: ${formData.horaInicio}
👥 Número de personas: ${formData.numeroPersonas}
⏱️ Duración: ${formData.duracion} horas
🎭 Tipo de evento: ${formData.tipoEvento}

*INFORMACIÓN DE CONTACTO:*
👤 Nombre: ${formData.nombre}
📧 Email: ${formData.email}
📱 Teléfono: ${formData.telefono}
${formData.instagram ? `📷 Instagram: @${formData.instagram}` : ''}

*PERSONALIZACIÓN:*
${formData.tematica ? `🎨 Temática: ${formData.tematica}` : ''}
${formData.musicaPreferencia ? `🎵 Música: ${formData.musicaPreferencia}` : ''}
${formData.restriccionesAlimentarias ? `🍽️ Restricciones alimentarias: ${formData.restriccionesAlimentarias}` : ''}

${formData.serviciosAdicionales.length > 0 ? `*SERVICIOS ADICIONALES:*\n${formData.serviciosAdicionales.map(s => `✓ ${s}`).join('\n')}` : ''}

${formData.comentarios ? `*COMENTARIOS ADICIONALES:*\n${formData.comentarios}` : ''}

---
¡Gracias por elegir Bonche Bus! 🚌🎊
    `.trim();

    const whatsappUrl = `https://wa.me/18496576361?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700 flex items-center justify-center px-4 py-20">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl font-black text-purple-900 mb-4">¡Solicitud Enviada!</h2>
          <p className="text-xl text-gray-700 mb-8">
            Tu solicitud de reserva ha sido enviada por WhatsApp. Nuestro equipo se pondrá en contacto contigo pronto para confirmar los detalles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-bold hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              Volver al Inicio
            </Link>
            <button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
                setFormData({
                  paquete: "",
                  tipoEvento: "",
                  fecha: "",
                  horaInicio: "",
                  numeroPersonas: "",
                  duracion: "",
                  nombre: "",
                  email: "",
                  telefono: "",
                  instagram: "",
                  tematica: "",
                  musicaPreferencia: "",
                  restriccionesAlimentarias: "",
                  serviciosAdicionales: [],
                  comentarios: ""
                });
              }}
              className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-purple-50 transition-all"
            >
              Nueva Reserva
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-4 relative overflow-hidden text-center" style={{ background: brandColors.primary }}>
        <div className="max-w-3xl mx-auto relative z-10">
          <p className="text-white/50 font-bold uppercase tracking-widest text-xs mb-5">Bonche Bus · Santo Domingo</p>
          <h1 className="font-black text-white leading-none mb-4">
            RESERVA TU <span style={{ color: brandColors.secondary }}>BONCHE</span>
          </h1>
          <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-5">
            Fechas limitadas · Reserva con tiempo
          </p>
          <p className="text-white/70 mx-auto" style={{ maxWidth: '420px' }}>
            Completa el formulario y asegura la fiesta más increíble.
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="bg-white py-8 px-4 shadow-md sticky top-0 z-40">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4, 5].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                      s === step
                        ? "bg-gradient-to-br from-purple-600 to-pink-600 text-white scale-110"
                        : s < step
                        ? "bg-green-500 text-white"
                        : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    {s < step ? <CheckCircle className="w-6 h-6" /> : s}
                  </div>
                  <span className="text-xs mt-2 font-semibold text-gray-600 hidden sm:block">
                    {s === 1 && "Paquete"}
                    {s === 2 && "Evento"}
                    {s === 3 && "Contacto"}
                    {s === 4 && "Extras"}
                    {s === 5 && "Confirmar"}
                  </span>
                </div>
                {s < 5 && (
                  <div className={`h-1 flex-1 mx-2 ${s < step ? "bg-green-500" : "bg-gray-300"}`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 px-4 bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8">
            {/* Step 1: Package Selection */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h2 className="text-3xl font-black text-purple-900 mb-2">Selecciona tu Paquete</h2>
                  <p className="text-gray-600">Elige el paquete que mejor se adapte a tu celebración</p>
                </div>

                <div className="space-y-4">
                  {packages.map((pkg) => (
                    <label
                      key={pkg.id}
                      className={`block p-6 border-2 rounded-xl cursor-pointer transition-all ${
                        formData.paquete === pkg.id
                          ? "border-purple-600 bg-purple-50 shadow-lg"
                          : "border-gray-300 hover:border-purple-400 hover:shadow-md"
                      }`}
                    >
                      <input
                        type="radio"
                        name="paquete"
                        value={pkg.id}
                        checked={formData.paquete === pkg.id}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-purple-900 mb-1">{pkg.name}</h3>
                          <p className="text-gray-600">{pkg.duration}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-pink-600">{pkg.price}</p>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>

                <div className="pt-6">
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!formData.paquete}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  >
                    Continuar
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Event Details */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <Calendar className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h2 className="text-3xl font-black text-purple-900 mb-2">Detalles del Evento</h2>
                  <p className="text-gray-600">Cuéntanos más sobre tu celebración</p>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Tipo de Evento *
                  </label>
                  <select
                    name="tipoEvento"
                    required
                    value={formData.tipoEvento}
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
                    <option value="Sweet 16">Sweet 16</option>
                    <option value="Baby Shower">Baby Shower</option>
                    <option value="Reunión Familiar">Reunión Familiar</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Fecha del Evento *
                    </label>
                    <input
                      type="date"
                      name="fecha"
                      required
                      value={formData.fecha}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Hora de Inicio *
                    </label>
                    <input
                      type="time"
                      name="horaInicio"
                      required
                      value={formData.horaInicio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Número de Personas *
                    </label>
                    <input
                      type="number"
                      name="numeroPersonas"
                      required
                      min="1"
                      max="100"
                      value={formData.numeroPersonas}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="45"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Duración (horas) *
                    </label>
                    <select
                      name="duracion"
                      required
                      value={formData.duracion}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                    >
                      <option value="">Selecciona</option>
                      <option value="2">2 horas</option>
                      <option value="3">3 horas</option>
                      <option value="4">4 horas</option>
                      <option value="5">5 horas</option>
                      <option value="6+">6+ horas</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 bg-gray-300 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-400 transition-all"
                  >
                    Atrás
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  >
                    Continuar
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Personal Information */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h2 className="text-3xl font-black text-purple-900 mb-2">Información de Contacto</h2>
                  <p className="text-gray-600">¿Cómo podemos contactarte?</p>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="(809) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Instagram (opcional)
                  </label>
                  <div className="flex items-center border-2 border-gray-300 rounded-lg focus-within:border-purple-500 transition-colors">
                    <span className="px-4 text-gray-500">@</span>
                    <input
                      type="text"
                      name="instagram"
                      value={formData.instagram}
                      onChange={handleChange}
                      className="flex-1 px-2 py-3 focus:outline-none"
                      placeholder="tuusuario"
                    />
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 bg-gray-300 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-400 transition-all"
                  >
                    Atrás
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  >
                    Continuar
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Customization */}
            {step === 4 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h2 className="text-3xl font-black text-purple-900 mb-2">Personaliza tu Experiencia</h2>
                  <p className="text-gray-600">Hazla única y especial</p>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Temática (opcional)
                  </label>
                  <input
                    type="text"
                    name="tematica"
                    value={formData.tematica}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Ej: Años 80, Neón, Tropical, Elegante"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Preferencias Musicales (opcional)
                  </label>
                  <input
                    type="text"
                    name="musicaPreferencia"
                    value={formData.musicaPreferencia}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Ej: Reggaeton, Salsa, Pop, Electrónica"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Restricciones Alimentarias (opcional)
                  </label>
                  <input
                    type="text"
                    name="restriccionesAlimentarias"
                    value={formData.restriccionesAlimentarias}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Ej: Vegetariano, Sin gluten, Alergias"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Servicios Adicionales (opcional)
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {serviciosAdicionales.map((servicio) => (
                      <label
                        key={servicio}
                        className="flex items-center gap-3 p-3 border-2 border-gray-300 rounded-lg hover:border-purple-400 cursor-pointer transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={formData.serviciosAdicionales.includes(servicio)}
                          onChange={() => handleCheckboxChange(servicio)}
                          className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                        />
                        <span className="text-gray-700">{servicio}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 bg-gray-300 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-400 transition-all"
                  >
                    Atrás
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  >
                    Continuar
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Review & Submit */}
            {step === 5 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h2 className="text-3xl font-black text-purple-900 mb-2">Revisa tu Reserva</h2>
                  <p className="text-gray-600">Confirma que todo esté correcto antes de enviar</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl space-y-4">
                  <div>
                    <h3 className="font-bold text-purple-900 mb-2">Paquete</h3>
                    <p className="text-gray-700">{packages.find(p => p.id === formData.paquete)?.name}</p>
                  </div>

                  <div className="border-t border-purple-200 pt-4">
                    <h3 className="font-bold text-purple-900 mb-2">Evento</h3>
                    <p className="text-gray-700">
                      {formData.tipoEvento} • {formData.fecha} • {formData.horaInicio}<br />
                      {formData.numeroPersonas} personas • {formData.duracion} horas
                    </p>
                  </div>

                  <div className="border-t border-purple-200 pt-4">
                    <h3 className="font-bold text-purple-900 mb-2">Contacto</h3>
                    <p className="text-gray-700">
                      {formData.nombre}<br />
                      {formData.email}<br />
                      {formData.telefono}
                      {formData.instagram && <><br />@{formData.instagram}</>}
                    </p>
                  </div>

                  {(formData.tematica || formData.musicaPreferencia || formData.restriccionesAlimentarias) && (
                    <div className="border-t border-purple-200 pt-4">
                      <h3 className="font-bold text-purple-900 mb-2">Personalización</h3>
                      {formData.tematica && <p className="text-gray-700">Temática: {formData.tematica}</p>}
                      {formData.musicaPreferencia && <p className="text-gray-700">Música: {formData.musicaPreferencia}</p>}
                      {formData.restriccionesAlimentarias && <p className="text-gray-700">Restricciones: {formData.restriccionesAlimentarias}</p>}
                    </div>
                  )}

                  {formData.serviciosAdicionales.length > 0 && (
                    <div className="border-t border-purple-200 pt-4">
                      <h3 className="font-bold text-purple-900 mb-2">Servicios Adicionales</h3>
                      <ul className="text-gray-700 space-y-1">
                        {formData.serviciosAdicionales.map((s, i) => (
                          <li key={i}>✓ {s}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Comentarios Adicionales (opcional)
                  </label>
                  <textarea
                    name="comentarios"
                    rows={4}
                    value={formData.comentarios}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    placeholder="¿Algo más que debamos saber?"
                  ></textarea>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-300 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Nota:</strong> Al enviar este formulario, serás redirigido a WhatsApp para confirmar tu reserva con nuestro equipo. Un depósito del 50% es requerido para asegurar tu fecha.
                  </p>
                </div>

                <div className="flex gap-4 pt-6">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 bg-gray-300 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-400 transition-all"
                  >
                    Atrás
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-6 h-6" />
                    Enviar Reserva
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
