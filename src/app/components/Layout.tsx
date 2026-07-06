import { Outlet, Link, useLocation } from "react-router";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import { brandColors } from "../utils/brandColors";
import logo from "../../imports/Untitled__1920_x_400_px___4_.png";

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Inicio" },
    { path: "/paquetes", label: "Combos" },
    { path: "/quienes-somos", label: "Nosotros" },
    { path: "/contacto", label: "Contacto" },
    { path: "/reservas", label: "Reservar" },
    { path: "/galeria", label: "Experiencias" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-lg" style={{ borderBottom: '4px solid #a12b88' }}>
        <div className="w-full px-4">
          {/* Desktop header */}
          <div className="hidden lg:grid items-center py-4" style={{ gridTemplateColumns: '1fr auto 1fr' }}>
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity justify-start">
              <img src={logo} alt="Bonche Bus Logo" style={{ height: '52px', width: 'auto', maxWidth: '200px', objectFit: 'contain', display: 'block' }} />
            </Link>
            <nav className="flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2.5 rounded-lg font-bold transition-all text-base ${isActive(link.path) ? "text-white shadow-lg" : "hover:bg-gray-100"}`}
                  style={isActive(link.path) ? { background: 'linear-gradient(to right, #301b5f, #a12b88)' } : { color: '#301b5f' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3 justify-end pl-12">
              <a href="tel:8096196960" className="text-white px-4 py-2.5 rounded-lg flex items-center gap-2 font-bold shadow-md hover:opacity-90 transition-opacity" style={{ background: '#301b5f' }}>
                <Phone className="w-5 h-5" />
                <span>(809) 619-6960</span>
              </a>
              <a href="https://wa.me/18496576361" target="_blank" rel="noopener noreferrer" className="text-white px-4 py-2.5 rounded-lg flex items-center gap-2 font-bold shadow-md hover:opacity-90 transition-opacity" style={{ background: '#a12b88' }}>
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Mobile header: logo izquierda · espacio · botón derecha */}
          <div className="flex lg:hidden items-center justify-between py-3">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img src={logo} alt="Bonche Bus Logo" style={{ height: '44px', width: 'auto', maxWidth: '160px', objectFit: 'contain', display: 'block' }} />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg transition-opacity hover:opacity-90 flex-shrink-0"
              style={{ background: '#301b5f', color: '#fff' }}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 pt-4 border-t border-gray-200">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg font-bold transition-all ${
                      isActive(link.path)
                        ? "text-white shadow-lg"
                        : "hover:bg-gray-100"
                    }`}
                    style={isActive(link.path) ? {
                      background: 'linear-gradient(to right, #301b5f, #a12b88)'
                    } : {
                      color: '#301b5f'
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col sm:flex-row gap-2 mt-4">
                <a
                  href="tel:8096196960"
                  className="text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 font-bold shadow-md hover:opacity-90 transition-all flex-1"
                  style={{ background: '#301b5f' }}
                >
                  <Phone className="w-5 h-5" />
                  <span>(809) 619-6960</span>
                </a>
                <a
                  href="https://wa.me/18496576361"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 font-bold shadow-md hover:opacity-90 transition-all flex-1"
                  style={{ background: '#a12b88' }}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="text-white py-12 px-4" style={{ background: brandColors.gradient }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-2xl font-black mb-4 text-white">
                BONCHE BUS
              </h3>
              <p className="text-white opacity-80 mb-4">
                17 Años de Fiesta Sobre Ruedas. Modelo de referencia en entretenimiento móvil en Santo Domingo.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4 text-white">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-white opacity-80 hover:opacity-100 transition-opacity"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4 text-white">Contacto</h4>
              <div className="space-y-2 text-white opacity-80">
                <p>Tel: (809) 619-6960</p>
                <p>WhatsApp: (849) 657-6361</p>
                <p>WhatsApp: (849) 650-6361</p>
                <p className="mt-4">Av. Jiménez de Moya no.19<br />esq. José Contreras<br />Santo Domingo, D.N.</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white opacity-80 text-sm">
              © 2009-2026 Bonche Bus. Todos los derechos reservados.
            </p>
            <p className="text-white opacity-60 text-xs mt-2">
              Iniciamos como Everest Tour - Hoy somos el referente del entretenimiento sobre ruedas
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
