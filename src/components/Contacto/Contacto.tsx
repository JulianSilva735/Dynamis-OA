import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import "./Contacto.css";

interface FormState {
  nombre: string;
  correo: string;
  telefono: string;
  mensaje: string;
}

const DATOS_CONTACTO = [
  { icon: Phone, texto: "(312) 853-7307" },
  { icon: Mail, texto: "contacto@dynamisoa.com" },
  { icon: MapPin, texto: "Pereira, Armenia, Manizales, Cali (Colombia)" },
];

export default function Contacto() {
  const [form, setForm] = useState<FormState>({ nombre: "", correo: "", telefono: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.correo) return;
    // TODO: conectar con Formspree / EmailJS
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
    setForm({ nombre: "", correo: "", telefono: "", mensaje: "" });
  };

  return (
    <section id="contacto" className="section">
      <div className="container contacto__inner">
        <div>
          <p className="section__eyebrow">Contacto</p>
          <h2 className="section__title contacto__title">Potenciamos tu movilidad eléctrica</h2>
          <p className="contacto__text">
            Cuéntanos tu proyecto y un ingeniero te contactará con una propuesta a la medida.
          </p>

          <ul className="contacto__datos">
            {DATOS_CONTACTO.map((d) => (
              <li key={d.texto} className="contacto__dato">
                <span className="contacto__dato-icon">
                  <d.icon size={18} />
                </span>
                <span className="contacto__dato-texto">{d.texto}</span>
              </li>
            ))}
          </ul>
        </div>

        <form className="contacto__form" onSubmit={handleSubmit} noValidate>
          <input
            className="contacto__input"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Nombre completo"
            required
          />
          <input
            className="contacto__input"
            type="email"
            name="correo"
            value={form.correo}
            onChange={handleChange}
            placeholder="Correo electrónico"
            required
          />
          <input
            className="contacto__input"
            type="tel"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            placeholder="Teléfono"
          />
          <textarea
            className="contacto__input contacto__textarea"
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            placeholder="Cuéntanos sobre tu proyecto…"
            rows={4}
          />
          <button
            type="submit"
            className={`contacto__submit ${enviado ? "contacto__submit_ok" : ""}`}
          >
            {enviado ? "✓ Mensaje enviado" : "Enviar mensaje"}
          </button>
        </form>
      </div>
    </section>
  );
}
