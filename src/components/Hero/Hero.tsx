import { ChevronRight, Car, BatteryCharging } from "lucide-react";
import Logo from "../Logo/Logo";
import "./Hero.css";

export default function Hero() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header id="inicio" className="hero">
      {/* Patrón hexagonal sutil de fondo */}
      <svg className="hero__pattern" aria-hidden="true">
        <defs>
          <pattern id="hexPat" width="56" height="64" patternUnits="userSpaceOnUse">
            <path d="M28 2 L52 16 L52 46 L28 60 L4 46 L4 16 Z" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexPat)" />
      </svg>

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Energía Inteligente para la Movilidad del Futuro</p>
          <h1 className="hero__title">
            Infraestructura de carga eléctrica para hogares, empresas y ciudades inteligentes
          </h1>
          <p className="hero__subtitle">
            Diseñamos, instalamos y mantenemos infraestructura de carga para
            vehículos eléctricos con ingeniería de alto nivel.
          </p>
          <div className="hero__actions">
            <button className="hero__btn hero__btn_primary" onClick={() => go("contacto")}>
              Solicitar cotización <ChevronRight size={18} />
            </button>
            <button className="hero__btn hero__btn_ghost" onClick={() => go("servicios")}>
              Ver servicios
            </button>
          </div>
        </div>

        {/* Firma visual: logo grande + indicador de carga animado */}
        <div className="hero__visual">
          <Logo size={230} dark />
          <div className="hero__charge">
            <Car size={18} color="#00c853" />
            <span className="hero__dot" />
            <span className="hero__dot hero__dot_d2" />
            <span className="hero__dot hero__dot_d3" />
            <BatteryCharging size={18} color="white" />
          </div>
        </div>
      </div>
    </header>
  );
}
