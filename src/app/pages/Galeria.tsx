import { useState } from "react";
import { X, Play, Images, Video } from "lucide-react";
import { brandColors } from "../utils/brandColors";

import g3 from "../../imports/WhatsApp_Image_2026-05-19_at_12.21.50-1.jpeg";
import g10 from "../../imports/WhatsApp_Image_2026-05-19_at_13.08.57.jpeg";
import g11 from "../../imports/WhatsApp_Image_2026-05-19_at_13.08.58.jpeg";
import g13 from "../../imports/WhatsApp_Image_2026-05-19_at_13.08.58__2_.jpeg";
import g14 from "../../imports/WhatsApp_Image_2026-05-19_at_13.08.58__3_.jpeg";
import g16 from "../../imports/WhatsApp_Image_2026-05-19_at_13.08.59.jpeg";
import video1 from "../../imports/WhatsApp_Video_2026-05-19_at_13.08.57.mp4";

const photos = [g3, g10, g11, g13, g14, g16];

type Tab = "fotos" | "videos";

export function Galeria() {
  const [activeTab, setActiveTab] = useState<Tab>("fotos");
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-4 relative overflow-hidden text-center" style={{ background: brandColors.primary }}>
        <div className="max-w-3xl mx-auto relative z-10">
          <p className="text-white/50 font-bold uppercase tracking-widest text-xs mb-5">Bonche Bus · Santo Domingo</p>
          <h1 className="font-black text-white leading-none mb-4">
            EXPERI<span style={{ color: brandColors.secondary }}>ENCIAS</span>
          </h1>
          <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-5">
            Fotos y videos reales · Sin filtros
          </p>
          <p className="text-white/70 mx-auto" style={{ maxWidth: '420px' }}>
            Momentos reales vividos en el Bonche Bus.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white py-6 px-4 sticky top-0 z-30 shadow-sm">
        <div className="max-w-4xl mx-auto flex gap-3 justify-center">
          <button
            onClick={() => setActiveTab("fotos")}
            className="flex items-center gap-2 px-8 py-3 rounded-full font-black text-sm transition-all"
            style={activeTab === "fotos"
              ? { background: brandColors.primary, color: "white" }
              : { background: "#f3f4f6", color: brandColors.primary }
            }
          >
            <Images className="w-4 h-4" />
            Fotos (6)
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className="flex items-center gap-2 px-8 py-3 rounded-full font-black text-sm transition-all"
            style={activeTab === "videos"
              ? { background: brandColors.primary, color: "white" }
              : { background: "#f3f4f6", color: brandColors.primary }
            }
          >
            <Video className="w-4 h-4" />
            Videos (1)
          </button>
        </div>
      </section>

      {/* Photos Grid */}
      {activeTab === "fotos" && (
        <section className="py-12 px-4 bg-gray-50 min-h-screen">
          <div className="max-w-7xl mx-auto">
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {photos.map((src, i) => (
                <div
                  key={i}
                  className="break-inside-avoid rounded-xl overflow-hidden shadow-md cursor-pointer group relative"
                  onClick={() => setLightbox(src)}
                >
                  <img
                    src={src}
                    alt={`Bonche Bus foto ${i + 1}`}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all w-10 h-10 rounded-full bg-white/80 flex items-center justify-center">
                      <Images className="w-5 h-5" style={{ color: brandColors.primary }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Videos */}
      {activeTab === "videos" && (
        <section className="py-12 px-4 bg-gray-50 min-h-screen">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl overflow-hidden shadow-xl bg-black">
                <video
                  src={video1}
                  controls
                  className="w-full h-auto"
                  poster={g17}
                >
                  Tu navegador no soporta el elemento de video.
                </video>
                <div className="p-4" style={{ background: brandColors.primary }}>
                  <p className="text-white font-black flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    Bonche Bus en acción
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-all"
            onClick={() => setLightbox(null)}
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={lightbox}
            alt="Vista ampliada"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* CTA */}
      <section className="py-16 px-4 text-white text-center" style={{ background: brandColors.gradient }}>
        <h2 className="text-4xl font-black mb-4">¿Quieres ser parte de la experiencia?</h2>
        <p className="text-xl text-white/90 mb-8">Reserva tu Bonche Bus y crea recuerdos inolvidables</p>
        <a
          href="https://wa.me/18496576361"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-white px-10 py-4 rounded-full font-black text-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-xl"
          style={{ background: brandColors.primary }}
        >
          Reservar Ahora
        </a>
      </section>
    </div>
  );
}
