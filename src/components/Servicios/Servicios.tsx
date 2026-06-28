import { SERVICIOS } from "../../data/config";
import "./Servicios.css";

export default function Servicios() {
  return (
    <section id="servicios" className="section servicios">
      <div className="container">
        <div className="servicios__header">
          <p className="section__eyebrow">Servicios</p>
          <h2 className="section__title">Soluciones especializadas de alta calidad</h2>
        </div>

        <ul className="servicios__grid">
          {SERVICIOS.map((s) => (
            <li key={s.titulo} className="servicios__card">
              <div className="servicios__icon">
                <s.icon size={24} color="white" />
              </div>
              <h3 className="servicios__card-title">{s.titulo}</h3>
              <p className="servicios__card-text">{s.descripcion}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
