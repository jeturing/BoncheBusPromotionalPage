import { Link } from "react-router";
import { Calendar, Users, Music, Sparkles, Gift, PartyPopper, Star, Trophy, Zap, Crown, Wine, MapPin, Plane, Clock, Heart, Flag, Dumbbell, Mic2 } from "lucide-react";
import { brandColors } from "../utils/brandColors";
import pkg1 from "../../imports/Screenshot_2026-06-13_at_7.31.11_AM.png";
import pkg2 from "../../imports/WhatsApp_Image_2026-05-19_at_13.08.58__1_.jpeg";
import pkg3 from "../../imports/Screenshot_2026-06-13_at_8.00.55_AM.png";
import pkg4 from "../../imports/Screenshot_2026-06-13_at_8.04.42_AM.png";
import pkg5 from "../../imports/Screenshot_2026-06-13_at_8.09.48_AM.png";

export function Paquetes() {
  const combos = [
    {
      id: "combo-renta",
      title: "COMBO RENTA",
      subtitle: "La Experiencia Esencial",
      duration: "4 horas",
      capacity: "Máximo 35 personas",
      image: pkg1,
      features: [
        "Recorrido por las principales avenidas de Santo Domingo",
        "4 fundas de hielo incluidas",
        "Visita a discoteca",
        "DJ profesional",
        "Bartender",
        "Chofer"
      ],
      note: null,
      color: brandColors.gradient
    },
    {
      id: "combo-todo-incluido-adultos",
      title: "COMBO TODO INCLUIDO ADULTOS",
      subtitle: "La Fiesta Completa",
      duration: "4 horas",
      capacity: "25 mínimo – 40 máximo",
      image: pkg2,
      popular: true,
      features: [
        "Recorrido por las principales avenidas de Santo Domingo",
        "Open Bar Internacional",
        "Picadera Gourmet",
        "Visita a discoteca",
        "DJ profesional",
        "Bartender"
      ],
      note: "El costo varía según la cantidad de personas. Si no dispones de 25 personas, contamos con paquetes desde 10 personas en adelante — confirma y personaliza.",
      color: brandColors.gradientReverse
    },
    {
      id: "combo-despedida-soltera",
      title: "COMBO DESPEDIDA DE SOLTERA",
      subtitle: "¡Alerta: Despedida Épica!",
      duration: "4 horas",
      capacity: "25 mínimo – 40 máximo",
      image: pkg3,
      features: [
        "Recorrido por las principales avenidas de Santo Domingo",
        "Open Bar Internacional",
        "Picadera Gourmet",
        "Visita a discoteca",
        "DJ profesional",
        "Bartender"
      ],
      note: "El costo varía según la cantidad de personas. Si no dispones de 25 personas, contamos con paquetes desde 10 personas en adelante — confirma y personaliza.",
      color: brandColors.gradient
    },
    {
      id: "combo-adolescentes",
      title: "COMBO TODO INCLUIDO ADOLESCENTES",
      subtitle: "Sin Alcohol, Toda la Diversión",
      duration: "4 horas",
      capacity: "25 mínimo – 40 máximo",
      image: pkg4,
      features: [
        "Recorrido por las principales avenidas de Santo Domingo",
        "Open Bar sin alcohol",
        "Picadera Gourmet",
        "DJ profesional",
        "Bartender",
        "Hora Loca"
      ],
      note: "El costo varía según la cantidad de personas. Si no dispones de 25 personas, contamos con paquetes desde 10 personas en adelante — confirma y personaliza. (Se requiere la presencia de un padre o tutor)",
      color: brandColors.gradientReverse
    },
    {
      id: "ocasiones-especiales",
      title: "Ocasiones Especiales",
      subtitle: "Tu Sueño, Nuestra Misión",
      duration: "Flexible",
      capacity: "A medida",
      image: pkg5,
      features: [
        "Paquetes totalmente personalizables",
        "Temáticas especiales (80s, 90s, tropical, neón, elegante)",
        "Servicios adicionales disponibles",
        "Rutas personalizadas según tus preferencias",
        "Amenidades especiales a solicitud",
        "Flexibilidad total en horarios y duración",
        "Atención personalizada desde la consulta"
      ],
      occasions: [
        { icon: <Plane className="w-5 h-5" />, name: "Traslado desde aeropuerto" },
        { icon: <MapPin className="w-5 h-5" />, name: "Traslados dentro del D.N." },
        { icon: <Crown className="w-5 h-5" />, name: "Bonche fuera de Santo Domingo: Santiago, La Romana, Juan Dolio, Punta Cana, entre otros" },
        { icon: <Trophy className="w-5 h-5" />, name: "Graduaciones" },
        { icon: <Heart className="w-5 h-5" />, name: "Caravana LGBT" },
        { icon: <Dumbbell className="w-5 h-5" />, name: "Caravana con equipos deportivos" },
        { icon: <Flag className="w-5 h-5" />, name: "Caravana política" },
        { icon: <Gift className="w-5 h-5" />, name: "Quinceaños" },
        { icon: <Music className="w-5 h-5" />, name: "Videos Musicales" },
        { icon: <Users className="w-5 h-5" />, name: "Reuniones Familiares" }
      ],
      note: null,
      color: brandColors.gradient
    }
  ];

  const addOns = [
    { name: "Hora adicional", icon: <Clock className="w-6 h-6" /> },
    { name: "Hora loca", icon: <PartyPopper className="w-6 h-6" /> },
    { name: "Karaoke", icon: <Mic2 className="w-6 h-6" /> },
    { name: "Stripper", icon: <Sparkles className="w-6 h-6" /> }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-4 relative overflow-hidden text-center" style={{ background: brandColors.primary }}>
        <div className="max-w-3xl mx-auto relative z-10">
          <p className="text-white/50 font-bold uppercase tracking-widest text-xs mb-5">Bonche Bus · Santo Domingo</p>
          <h1 className="font-black text-white leading-none mb-4">
            NUESTROS <span style={{ color: brandColors.secondary }}>COMBOS</span>
          </h1>
          <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-5">
            Todos los combos son cotizables · Sin precio fijo
          </p>
          <p className="text-white/70 mx-auto" style={{ maxWidth: '420px' }}>
            Escoge tu experiencia. Todo a bordo, todo a tu medida.
          </p>
        </div>
      </section>

      {/* Combos */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16" id="combos-list">
            {combos.map((pkg, index) => (
              <div
                key={pkg.id}
                id={pkg.id}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden scroll-mt-24"
                style={pkg.popular ? { boxShadow: `0 0 0 4px ${brandColors.secondary}` } : {}}
              >
                {pkg.popular && (
                  <div className="text-center py-3" style={{ background: brandColors.gradientReverse }}>
                    <span className="text-white font-black text-lg flex items-center justify-center gap-2">
                      <Star className="w-6 h-6" />
                      COMBO MÁS POPULAR
                      <Star className="w-6 h-6" />
                    </span>
                  </div>
                )}

                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                  {/* Image */}
                  <div className={`relative h-96 md:h-auto ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 opacity-20" style={{ background: pkg.color }}></div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-12">
                    <div className="inline-block text-white px-4 py-2 rounded-full text-sm font-bold mb-4" style={{ background: pkg.color }}>
                      {pkg.subtitle}
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: brandColors.primary }}>
                      {pkg.title}
                    </h2>

                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Calendar className="w-5 h-5" style={{ color: brandColors.secondary }} />
                        <span className="font-semibold">{pkg.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Users className="w-5 h-5" style={{ color: brandColors.primary }} />
                        <span className="font-semibold">{pkg.capacity}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-bold text-lg mb-3" style={{ color: brandColors.primary }}>Incluye:</h3>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <span className="text-green-500 mt-1 font-bold">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {pkg.occasions && (
                      <div className="mb-6">
                        <h3 className="font-bold text-lg mb-3" style={{ color: brandColors.primary }}>Ideal para:</h3>
                        <div className="grid grid-cols-1 gap-2">
                          {pkg.occasions.map((occasion, i) => (
                            <div key={i} className="flex items-center gap-2 text-gray-700 p-2 rounded-lg" style={{ background: `${brandColors.primary}10` }}>
                              <span style={{ color: brandColors.primary }}>{occasion.icon}</span>
                              <span className="text-sm font-semibold">{occasion.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {pkg.note && (
                      <div className="p-4 rounded-xl mb-6" style={{ background: `linear-gradient(135deg, ${brandColors.primary}15, ${brandColors.secondary}15)` }}>
                        <p className="text-sm font-semibold" style={{ color: brandColors.primary }}>
                          <Star className="w-4 h-4 inline mr-2" />
                          {pkg.note}
                        </p>
                      </div>
                    )}

                    <Link
                      to={`/reservas/${pkg.id}`}
                      className="flex items-center justify-center gap-3 text-white px-8 py-4 rounded-full font-black text-xl hover:shadow-xl transition-all transform hover:scale-105 hover:opacity-90"
                      style={{ background: brandColors.primary }}
                    >
                      <Zap className="w-6 h-6" />
                      RESERVAR AHORA
                      <Sparkles className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Adicionales */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4" style={{ color: brandColors.primary }}>Servicios Adicionales</h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ background: brandColors.gradient }}></div>
            <p className="text-xl text-gray-700">Personaliza tu experiencia aún más</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all flex items-center justify-between"
                style={{ background: `linear-gradient(135deg, ${brandColors.primary}15, ${brandColors.secondary}15)` }}
              >
                <h3 className="text-xl font-bold" style={{ color: brandColors.primary }}>{addon.name}</h3>
                <span style={{ color: brandColors.secondary }}>{addon.icon}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: brandColors.gradient }}>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            ¿Necesitas Algo Diferente?
          </h2>
          <p className="text-xl md:text-2xl text-white font-bold mb-12">
            Creamos el paquete perfecto para ti
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/reservas"
              className="inline-flex items-center gap-3 text-white px-10 py-5 rounded-full text-xl md:text-2xl font-black transition-all transform hover:scale-105 shadow-2xl hover:opacity-90"
              style={{ background: brandColors.primary }}
            >
              <Gift className="w-7 h-7" />
              COTIZAR PAQUETE A MEDIDA
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-3 bg-white px-10 py-5 rounded-full text-xl md:text-2xl font-black transition-all transform hover:scale-105 shadow-2xl hover:opacity-90"
              style={{ color: brandColors.secondary }}
            >
              <Crown className="w-7 h-7" />
              HABLAR CON ASESOR
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
