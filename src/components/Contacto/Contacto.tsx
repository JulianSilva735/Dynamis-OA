import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACTO } from "../../data/config";
import "./Contacto.css";

interface FormState {
  nombre: string;
  correo: string;
  telefono: string;
  mensaje: string;
}

const DATOS_CONTACTO = [
  { icon: Phone, texto: CONTACTO.telefono },
  { icon: Mail, texto: CONTACTO.correo },
  { icon: MapPin, texto: CONTACTO.ciudad },
];

const FORM_VACIO: FormState = { nombre: "", correo: "", telefono: "", mensaje: "" };

export default function Contacto() {
  const [form, setForm] = useState<FormState>(FORM_VACIO);
  const [estado, setEstado] = useState<"idle" | "enviando" | "ok" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.correo) return;

    setEstado("enviando");
    try {
      const res = await fetch(CONTACTO.formspree, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          nombre: form.nombre,
          correo: form.correo,
          telefono: form.telefono,
          mensaje: form.mensaje,
        }),
      });

      if (res.ok) {
        setEstado("ok");
        setForm(FORM_VACIO);
        setTimeout(() => setEstado("idle"), 5000);
      } else {
        setEstado("error");
      }
    } catch {
      setEstado("error");
    }
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
            className={`contacto__submit ${estado === "ok" ? "contacto__submit_ok" : ""}`}
            disabled={estado === "enviando"}
          >
            {estado === "enviando" && "Enviando…"}
            {estado === "ok" && "✓ Mensaje enviado"}
            {estado === "error" && "Error, intenta de nuevo"}
            {estado === "idle" && "Enviar mensaje"}
          </button>

          {estado === "error" && (
            <p className="contacto__error">
              No se pudo enviar. Escríbenos por WhatsApp al {CONTACTO.telefono}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}