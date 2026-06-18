import { Zap } from "lucide-react";
import { PROYECTOS } from "../../data/content";
import "./Proyectos.css";

export default function Proyectos() {
  return (
    <section id="proyectos" className="section">
      <div className="container">
        <div className="proyectos__header">
          <p className="section__eyebrow">Proyectos</p>
          <h2 className="section__title">Infraestructura que ya está en marcha</h2>
        </div>

        <ul className="proyectos__grid">
          {PROYECTOS.map((p) => (
            <li key={p.titulo} className="proyectos__card">
              {/* Reemplazar por <img> con fotos reales del cliente */}
              <div className="proyectos__cover">
                <Zap size={42} color="white" />
              </div>
              <div className="proyectos__body">
                <span className="proyectos__tag">{p.tag}</span>
                <h3 className="proyectos__title">{p.titulo}</h3>
                <p className="proyectos__text">{p.descripcion}</p>
                <p className="proyectos__stat">{p.stat}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
