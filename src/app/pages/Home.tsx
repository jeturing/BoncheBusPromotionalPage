import { Link } from "react-router";
import { Phone, MessageCircle, Users, Music, Award, Zap, Gift, TrendingUp, Trophy, Snowflake } from "lucide-react";
import { brandColors } from "../utils/brandColors";
import img0 from "../../imports/Untitled_design__5_.jpg";
import imgMobile from "../../imports/Screenshot_2026-06-13_at_1.11.55_PM.png";
import img2 from "../../imports/WhatsApp_Image_2026-05-19_at_12.21.50-1.jpeg";
import comboRenta from "../../imports/Screenshot_2026-06-13_at_7.31.11_AM.png";
import comboAdultos from "../../imports/WhatsApp_Image_2026-05-19_at_13.08.58__1_.jpeg";
import comboDespedida from "../../imports/Screenshot_2026-06-13_at_8.00.55_AM.png";
import comboAdolescentes from "../../imports/Screenshot_2026-06-13_at_8.04.42_AM.png";
import video1 from "../../imports/WhatsApp_Video_2026-05-19_at_13.08.57.mp4";

export function Home() {
  return (
    <div>

      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden" style={{ height: 'var(--hero-h)', minHeight: 'var(--hero-min)' }}>
        <style>{`
          :root { --hero-h: 100svh; --hero-min: 500px; }
          @media (max-width: 639px) { :root { --hero-h: 60svh; --hero-min: 320px; } }
        `}</style>
        {/* Desktop */}
        <img
          src={img0}
          alt="Bonche Bus"
          className="absolute inset-0 w-full h-full object-cover object-center hidden sm:block"
        />
        {/* Mobile */}
        <img
          src={imgMobile}
          alt="Bonche Bus"
          className="absolute inset-0 w-full h-full object-cover object-center block sm:hidden"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(5,2,15,0.85) 0%, rgba(5,2,15,0.6) 50%, rgba(5,2,15,0.1) 100%)' }}
        />
        <div className="absolute inset-0 flex items-center px-6 md:px-16 lg:px-24">
          <div style={{ maxWidth: '540px' }}>
            <h1 className="font-black text-white mb-4" style={{ fontSize: 'clamp(32px, 6vw, 88px)', lineHeight: 1.05 }}>
              LA FIESTA EMPIEZA EN <span style={{ color: brandColors.secondary }}>EL CAMINO</span>
            </h1>
            <p className="font-bold mb-2" style={{ color: '#d45ec0', fontSize: 'clamp(14px, 2vw, 22px)' }}>
              17 Años de Fiesta Sobre Ruedas
            </p>
            <p className="text-white/70 italic mb-8" style={{ fontSize: 'clamp(13px, 1.5vw, 18px)' }}>
              "En el camino es que se goza"
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/reservas"
                className="text-white font-black rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity shadow-xl"
                style={{ background: brandColors.primary, padding: 'clamp(10px,1.5vw,16px) clamp(20px,3vw,36px)', fontSize: 'clamp(13px,1.2vw,16px)' }}
              >
                <Zap className="w-4 h-4 flex-shrink-0" />
                ¡RESERVA AHORA!
              </Link>
              <Link
                to="/paquetes"
                className="text-white font-black rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity shadow-xl"
                style={{ background: brandColors.secondary, padding: 'clamp(10px,1.5vw,16px) clamp(20px,3vw,36px)', fontSize: 'clamp(13px,1.2vw,16px)' }}
              >
                <Gift className="w-4 h-4 flex-shrink-0" />
                Ver Combos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── BUS SHOWCASE ── */}
      <section className="py-14 md:py-20 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Imagen primero en móvil */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={img2}
                alt="Interior Bonche Bus"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
            {/* Texto */}
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-white font-bold mb-5 text-sm" style={{ background: brandColors.gradient }}>
                <TrendingUp className="w-4 h-4" />
                NUESTRO BUS PREMIUM
              </div>
              <h2 className="font-black mb-5" style={{ color: brandColors.primary }}>
                El Bus Más Exclusivo de Santo Domingo
              </h2>
              <p className="text-gray-600 mb-7 leading-relaxed">
                Más que transporte, es una discoteca móvil de lujo. Con iluminación LED profesional,
                sonido de última generación y ambiente inigualable, transformamos cada recorrido en una experiencia memorable.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <Users className="w-8 h-8" />, value: '45', label: 'PERSONAS', color: brandColors.primary },
                  { icon: <Trophy className="w-8 h-8" />, value: '100%', label: 'DIVERSIÓN', color: brandColors.secondary },
                  { icon: <Snowflake className="w-8 h-8" />, value: 'A/C', label: 'CLIMATIZADO', color: brandColors.secondary },
                  { icon: <Zap className="w-8 h-8" />, value: 'LED', label: 'ILUMINACIÓN', color: brandColors.primary },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl" style={{ background: `${item.color}12`, border: `2px solid ${item.color}30` }}>
                    <div style={{ color: item.color }} className="mb-2">{item.icon}</div>
                    <div className="text-2xl font-black" style={{ color: item.color }}>{item.value}</div>
                    <div className="text-xs font-bold mt-0.5" style={{ color: item.color }}>{item.label}</div>
                  </div>
                ))}
              </div>
              <Link
                to="/reservas"
                className="inline-flex items-center gap-2 text-white font-black px-8 py-4 rounded-full hover:opacity-90 transition-opacity shadow-xl"
                style={{ background: brandColors.primary }}
              >
                <Zap className="w-5 h-5" />
                RESERVA TU EXPERIENCIA
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-14 md:py-20 px-5 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black mb-4" style={{ color: brandColors.primary }}>
              ¿Por Qué Elegir Bonche Bus?
            </h2>
            <div className="w-24 h-2 mx-auto rounded-full" style={{ background: brandColors.gradient }}></div>
            <p className="font-bold mt-4" style={{ color: brandColors.secondary }}>
              La Experiencia de Entretenimiento Premium
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: <Music className="w-10 h-10 text-white" />, title: 'EXPERIENCIA COMPLETA', desc: 'Open bar premium, DJ profesional en vivo, sonido de última generación y ambiente exclusivo en cada recorrido.', color: brandColors.primary, gradient: brandColors.gradient },
              { icon: <Award className="w-10 h-10 text-white" />, title: '17 AÑOS DE EXCELENCIA', desc: 'Desde 2009 creando momentos inolvidables. Confianza de Dotol Nastra, Jossie Esteban y Planeta Alofoke.', color: brandColors.secondary, gradient: brandColors.gradientReverse },
              { icon: <Users className="w-10 h-10 text-white" />, title: 'PARA TODA OCASIÓN', desc: 'Cumpleaños, despedidas, corporativos, graduaciones. Capacidad desde 45 hasta miles de personas.', color: brandColors.primary, gradient: brandColors.gradient },
            ].map((item, i) => (
              <div key={i} className="text-center p-7 rounded-2xl shadow-lg" style={{ background: `${item.color}10`, border: `2px solid ${item.color}` }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 shadow-md" style={{ background: item.gradient }}>
                  {item.icon}
                </div>
                <h3 className="font-black mb-3" style={{ color: item.color, fontSize: '16px' }}>{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMBOS ── */}
      <section className="py-14 md:py-20 px-5" style={{ background: brandColors.secondary }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black text-white mb-3">Nuestros Combos</h2>
            <div className="w-24 h-1 bg-white/40 mx-auto mb-4 rounded-full"></div>
            <p className="text-white/80 font-semibold">Experiencias Premium de Entretenimiento</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { id: "combo-renta", title: "Combo Renta", desc: "4 horas · Máx. 35 personas", img: comboRenta },
              { id: "combo-todo-incluido-adultos", title: "Todo Incluido Adultos", desc: "Open Bar · Picadera · DJ", img: comboAdultos, popular: true },
              { id: "combo-despedida-soltera", title: "Despedida de Soltera", desc: "Open Bar · Picadera · DJ", img: comboDespedida },
              { id: "combo-adolescentes", title: "Todo Incluido Adolescentes", desc: "Sin alcohol · Picadera · DJ", img: comboAdolescentes },
            ].map((pkg) => (
              <div key={pkg.id} className={`bg-white rounded-2xl flex flex-col overflow-hidden shadow-lg ${pkg.popular ? 'ring-2 ring-white' : ''}`}>
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img src={pkg.img} alt={pkg.title} className="w-full h-full object-cover" loading="lazy" />
                  {pkg.popular && (
                    <div className="absolute top-2 left-2 text-white text-xs font-black uppercase py-1 px-2 rounded-full" style={{ background: brandColors.primary, fontSize: '10px' }}>
                      Popular
                    </div>
                  )}
                </div>
                <div className="p-3 flex flex-col flex-1">
                  <h3 className="font-black mb-1" style={{ color: brandColors.primary, fontSize: '12px', lineHeight: 1.3 }}>{pkg.title}</h3>
                  <p className="text-gray-400 mb-3 flex-1" style={{ fontSize: '11px' }}>{pkg.desc}</p>
                  <div className="flex gap-1.5">
                    <Link
                      to={`/paquetes#${pkg.id}`}
                      className="flex-1 flex items-center justify-center border font-black hover:opacity-80 transition-opacity rounded-lg"
                      style={{ borderColor: brandColors.primary, color: brandColors.primary, fontSize: '11px', minHeight: '32px' }}
                    >
                      Ver más
                    </Link>
                    <Link
                      to={`/reservas/${pkg.id}`}
                      className="flex-1 flex items-center justify-center text-white font-black hover:opacity-90 transition-opacity rounded-lg"
                      style={{ background: brandColors.primary, fontSize: '11px', minHeight: '32px' }}
                    >
                      Reservar
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/paquetes"
              className="inline-flex items-center gap-2 bg-white font-black px-10 py-4 rounded-full hover:opacity-90 transition-opacity shadow-xl"
              style={{ color: brandColors.primary }}
            >
              <Gift className="w-5 h-5" />
              VER TODOS LOS COMBOS
            </Link>
          </div>
        </div>
      </section>

      {/* ── VIDEO ── */}
      <section className="py-14 md:py-20 px-5" style={{ background: brandColors.primary }}>
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <video
              src={video1}
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              className="w-full block"
              style={{ maxHeight: '560px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 md:py-20 px-5 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-black mb-5" style={{ color: brandColors.primary }}>
            ¿Listo Para Tu Experiencia?
          </h2>
          <p className="font-bold mb-10" style={{ color: brandColors.secondary }}>
            Contáctanos y Crea Momentos Inolvidables
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/18496576361"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-black px-8 py-4 rounded-full hover:opacity-90 transition-opacity shadow-xl flex items-center justify-center gap-3"
              style={{ background: brandColors.secondary }}
            >
              <MessageCircle className="w-6 h-6 flex-shrink-0" />
              Escríbenos por WhatsApp
            </a>
            <a
              href="tel:8096196960"
              className="text-white font-black px-8 py-4 rounded-full hover:opacity-90 transition-opacity shadow-xl flex items-center justify-center gap-3"
              style={{ background: brandColors.primary }}
            >
              <Phone className="w-6 h-6 flex-shrink-0" />
              Llamar Ahora
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
