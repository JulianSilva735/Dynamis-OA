import { TESTIMONIOS } from "../../data/content";
import "./Clientes.css";

export default function Clientes() {
  return (
    <section id="clientes" className="section clientes">
      <div className="container clientes__inner">
        <p className="section__eyebrow">Clientes</p>
        <h2 className="section__title clientes__title">Confianza que impulsa tu camino</h2>

        <ul className="clientes__grid">
          {TESTIMONIOS.map((t) => (
            <li key={t.autor} className="clientes__card">
              <p className="clientes__quote">“{t.quote}”</p>
              <p className="clientes__autor">{t.autor}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
