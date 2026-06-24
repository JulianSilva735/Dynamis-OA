import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PROYECTOS } from "../../data/config";
import "./Proyectos.css";

export default function Proyectos() {
  const trackRef = useRef<HTMLUListElement>(null);

  /* Desliza el carrusel el ancho de una tarjeta */
  const mover = (direccion: "izq" | "der") => {
    const track = trackRef.current;
    if (!track) return;
    const tarjeta = track.querySelector<HTMLLIElement>(".proyectos__card");
    const paso = tarjeta ? tarjeta.offsetWidth + 24 : 320; // 24 = gap
    track.scrollBy({ left: direccion === "der" ? paso : -paso, behavior: "smooth" });
  };

  return (
    <section id="proyectos" className="section">
      <div className="container">
        <div className="proyectos__header">
          <p className="section__eyebrow">Proyectos</p>
          <h2 className="section__title">Instalaciones que ya están en marcha</h2>
        </div>

        <div className="proyectos__carrusel">
          <button
            className="proyectos__nav proyectos__nav_izq"
            onClick={() => mover("izq")}
            aria-label="Anterior"
          >
            <ChevronLeft size={22} />
          </button>

          <ul className="proyectos__track" ref={trackRef}>
            {PROYECTOS.map((p) => (
              <li key={p.titulo} className="proyectos__card">
                <div className="proyectos__cover">
                  <img
                    className="proyectos__img"
                    src={p.imagen}
                    alt={p.alt}
                    loading="lazy"
                  />
                </div>
                <div className="proyectos__body">
                  <h3 className="proyectos__title">{p.titulo}</h3>
                  <p className="proyectos__text">{p.descripcion}</p>
                </div>
              </li>
            ))}
          </ul>

          <button
            className="proyectos__nav proyectos__nav_der"
            onClick={() => mover("der")}
            aria-label="Siguiente"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}