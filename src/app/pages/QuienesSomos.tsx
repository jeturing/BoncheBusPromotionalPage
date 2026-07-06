import { Calendar, Award, Users, Sparkles, Music, Building2, Heart } from "lucide-react";
import { brandColors } from "../utils/brandColors";
import img1 from "../../imports/WhatsApp_Image_2026-05-19_at_12.21.49.jpeg";
import img2 from "../../imports/WhatsApp_Image_2026-05-19_at_12.21.50.jpeg";

export function QuienesSomos() {
  const timeline = [
    {
      year: "2009",
      title: "Los Inicios - Everest Tour",
      description: "Comenzamos como una pequeña agencia de viajes dedicada a excursiones escolares y viajes de graduación. Con pasión por crear experiencias memorables, sentamos las bases de lo que hoy es Bonche Bus.",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      year: "2010-2015",
      title: "Expansión de Servicios",
      description: "Ampliamos nuestros servicios hacia empresas, iglesias y organizaciones. Desarrollamos experiencias más personalizadas y comenzamos a consolidar nuestra presencia en Santo Domingo.",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      year: "2016",
      title: "Nace Bonche Bus",
      description: "Revolucionamos el entretenimiento móvil creando el concepto de fiesta sobre ruedas. Nuestra propuesta innovadora permite recorrer las principales avenidas de la capital con amenidades como open bar, picadera gourmet, DJ en vivo y staff especializado.",
      icon: <Music className="w-6 h-6" />
    },
    {
      year: "2017-2020",
      title: "Crecimiento y Reconocimiento",
      description: "Nos convertimos en anfitriones de destacadas figuras del mundo artístico: Dotol Nastra, videos musicales, Jossie Esteban, Show de Carlos Durán, caravanas de equipos deportivos. Atendemos grupos desde 200 hasta miles de personas.",
      icon: <Award className="w-6 h-6" />
    },
    {
      year: "2021-Presente",
      title: "Líderes del Entretenimiento Móvil",
      description: "Nos consolidamos como el referente del turismo y entretenimiento sobre ruedas. Colaboramos con Planeta Alofoke y seguimos innovando para crear experiencias únicas que combinan fiesta, cultura y momentos inolvidables.",
      icon: <Sparkles className="w-6 h-6" />
    }
  ];

  const valores = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Pasión por la Excelencia",
      description: "Cada evento es tratado con dedicación y profesionalismo para garantizar experiencias inolvidables."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Enfoque en el Cliente",
      description: "Tu satisfacción es nuestra prioridad. Creamos experiencias personalizadas que superan expectativas."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Compromiso con la Calidad",
      description: "16 años de trayectoria respaldados por la confianza de miles de clientes satisfechos."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Innovación Constante",
      description: "Siempre buscamos nuevas formas de hacer que tu celebración sea única y especial."
    }
  ];

  const logros = [
    { numero: "16+", texto: "Años de Experiencia" },
    { numero: "10,000+", texto: "Eventos Realizados" },
    { numero: "50,000+", texto: "Clientes Felices" },
    { numero: "100+", texto: "Empresas Atendidas" }
  ];

  const artistas = [
    "Dotol Nastra",
    "Jossie Esteban",
    "Carlos Durán",
    "Planeta Alofoke",
    "Videos Musicales de Artistas Urbanos",
    "Caravanas de Equipos Deportivos"
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-4 relative overflow-hidden text-center" style={{ background: brandColors.primary }}>
        <div className="max-w-3xl mx-auto relative z-10">
          <p className="text-white/50 font-bold uppercase tracking-widest text-xs mb-5">Bonche Bus · Santo Domingo</p>
          <h1 className="font-black text-white leading-none mb-4">
            QUIÉNES <span style={{ color: brandColors.secondary }}>SOMOS</span>
          </h1>
          <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-5">
            Desde 2009 · Entretenimiento sobre ruedas
          </p>
          <p className="text-white/70 mx-auto" style={{ maxWidth: '420px' }}>
            Más de 16 años llevando alegría por las calles de Santo Domingo.
          </p>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-purple-900 mb-4">Nuestra Historia</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Un viaje que comenzó con un sueño y se convirtió en el referente del entretenimiento móvil en República Dominicana
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-6 items-start ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2">
                  <div className={`bg-gradient-to-br ${
                    index % 3 === 0 ? "from-purple-100 to-pink-100" :
                    index % 3 === 1 ? "from-pink-100 to-orange-100" :
                    "from-orange-100 to-yellow-100"
                  } p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`bg-gradient-to-br ${
                        index % 3 === 0 ? "from-purple-500 to-pink-500" :
                        index % 3 === 1 ? "from-pink-500 to-orange-500" :
                        "from-orange-500 to-yellow-500"
                      } text-white p-3 rounded-full`}>
                        {item.icon}
                      </div>
                      <span className="text-3xl font-black text-purple-900">{item.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-purple-900 mb-3">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="md:w-1/2 flex items-center justify-center">
                  <div className="w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-orange-500 hidden md:block"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logros */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Nuestros Logros</h2>
            <div className="w-24 h-1 bg-yellow-300 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {logros.map((logro, index) => (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all"
              >
                <div className="text-5xl md:text-6xl font-black text-yellow-300 mb-3">
                  {logro.numero}
                </div>
                <div className="text-white font-bold text-lg">{logro.texto}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-purple-900 mb-4">Nuestros Valores</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700">Lo que nos define y guía en cada experiencia que creamos</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {valores.map((valor, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center mb-6">
                  {valor.icon}
                </div>
                <h3 className="text-2xl font-bold text-purple-900 mb-4">{valor.title}</h3>
                <p className="text-gray-700 leading-relaxed">{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artistas Destacados */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-purple-900 mb-4">Han Confiado en Nosotros</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700">Artistas, empresas y personalidades que han elegido Bonche Bus</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {artistas.map((artista, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 text-center"
              >
                <Music className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-purple-900">{artista}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lo Que Nos Hace Únicos */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-purple-900 mb-6">
                Lo Que Nos Hace Únicos
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mb-8"></div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-900 mb-2">Experiencia Completa</h3>
                    <p className="text-gray-700">Open bar, picadera gourmet, DJ en vivo y staff especializado. Todo incluido para que solo te preocupes por disfrutar.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-pink-900 mb-2">Transparencia y Confianza</h3>
                    <p className="text-gray-700">16 años de trayectoria respaldados por miles de clientes satisfechos y referencias verificables.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-orange-900 mb-2">Flexibilidad y Personalización</h3>
                    <p className="text-gray-700">Adaptamos cada experiencia a tus necesidades, desde grupos pequeños hasta eventos masivos de miles de personas.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-900 mb-2">Innovación Constante</h3>
                    <p className="text-gray-700">Fuimos pioneros del concepto y seguimos siendo el modelo de referencia que combina fiesta, compartir y cultura.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={img2}
                alt="Bonche Bus Experience"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-pink-900/20 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl shadow-2xl">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-purple-900" />
              </div>
              <h3 className="text-3xl font-black text-yellow-300 mb-4">Nuestra Misión</h3>
              <p className="text-white text-lg leading-relaxed">
                Crear experiencias inolvidables que combinen entretenimiento, cultura y momentos especiales,
                superando las expectativas de nuestros clientes y estableciendo el estándar de excelencia
                en el turismo y entretenimiento móvil de República Dominicana.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl shadow-2xl">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-purple-900" />
              </div>
              <h3 className="text-3xl font-black text-yellow-300 mb-4">Nuestra Visión</h3>
              <p className="text-white text-lg leading-relaxed">
                Ser la empresa líder en entretenimiento móvil del Caribe, reconocida por nuestra innovación,
                calidad de servicio y capacidad de transformar cada celebración en una experiencia única
                que nuestros clientes atesoren para siempre.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
