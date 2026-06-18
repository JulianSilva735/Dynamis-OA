import { VALORES } from "../../data/config";
import promoGif from "../../assets/dynamis_promo_v4.gif";
import "./Nosotros.css";

export default function Nosotros() {
  return (
    <section id="nosotros" className="section nosotros">
      <div className="container">
        {/* Fila superior: texto + GIF */}
        <div className="nosotros__top">
          <div>
            <p className="section__eyebrow">Nosotros</p>
            <h2 className="section__title nosotros__title">
              Potencia, energía y fuerza en movimiento
            </h2>
            <p className="nosotros__text">
              <strong>Dynamis</strong> proviene del griego y significa potencia,
              energía y capacidad de transformación. Somos una empresa
              especializada en instalación de cargadores para vehículos
              eléctricos, diseño de infraestructura de carga y soluciones
              energéticas inteligentes.
            </p>
            <p className="nosotros__text">
              Con ingenieros en campo y cumplimiento normativo garantizado,
              conectamos energía y futuro para una nueva generación de movilidad.
            </p>
          </div>

          <div className="nosotros__media">
            <img
              className="nosotros__gif"
              src={promoGif}
              alt="Logo animado de DYNAMIS OA con anillo de carga"
              loading="lazy"
            />
          </div>
        </div>

        {/* Fila inferior: valores a lo ancho */}
        <ul className="nosotros__valores">
          {VALORES.map((v) => (
            <li key={v.titulo} className="nosotros__valor">
              <v.icon size={26} className="nosotros__valor-icon" />
              <p className="nosotros__valor-nombre">{v.titulo}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}