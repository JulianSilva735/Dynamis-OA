import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PRODUCTOS } from "../../data/config";
import "./Producto.css";

export default function Productos() {
  const [abierto, setAbierto] = useState<string | null>(null);

  const toggle = (modelo: string) =>
    setAbierto((prev) => (prev === modelo ? null : modelo));

  return (
    <section id="productos" className="section productos">
      <div className="container">
        <div className="productos__header">
          <p className="section__eyebrow">Productos</p>
          <h2 className="section__title">Cargadores que instalamos</h2>
        </div>

        <ul className="productos__grid">
          {PRODUCTOS.map((p) => {
            const estaAbierto = abierto === p.modelo;
            return (
              <li key={p.modelo} className="productos__card">
                {/* Imagen principal a ancho completo (sin recortes raros) */}
                <div className="productos__imagen-wrap">
                  <img
                    className="productos__img"
                    src={p.imgPrincipal}
                    alt={p.altPrincipal}
                    loading="lazy"
                  />
                  <span className="productos__modelo">Modelo {p.modelo}</span>
                </div>

                <div className="productos__body">
                  <h3 className="productos__nombre">{p.nombre}</h3>
                  <p className="productos__desc">{p.descripcion}</p>

                  <ul className="productos__features">
                    {p.features.map((f) => (
                      <li key={f} className="productos__feature">{f}</li>
                    ))}
                  </ul>

                  <button
                    className="productos__toggle"
                    onClick={() => toggle(p.modelo)}
                    aria-expanded={estaAbierto}
                  >
                    Ficha técnica
                    <ChevronDown
                      size={18}
                      className={`productos__chevron ${estaAbierto ? "productos__chevron_abierto" : ""}`}
                    />
                  </button>

                  {/* Tabla de especificaciones desplegable */}
                  <div className={`productos__specs-wrap ${estaAbierto ? "productos__specs-wrap_abierto" : ""}`}>
                    <div className="productos__specs-inner">
                      <table className="productos__specs">
                        <tbody>
                          {p.specs.map((s) => (
                            <tr key={s.label} className="productos__spec-row">
                              <th className="productos__spec-label">{s.label}</th>
                              <td className="productos__spec-value">{s.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}