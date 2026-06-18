import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Zap } from "lucide-react";
import type { Mensaje } from "../../types";
import { buscarRespuesta } from "../../utils/chatbot";
import { CONTACTO } from "../../data/config";
import "./ChatBot.css";

const MENSAJE_BIENVENIDA: Mensaje = {
  de: "bot",
  texto:
    "¡Hola! 👋 Soy el asistente virtual de DYNAMIS OA. Pregúntame sobre cargadores eléctricos, servicios o cotizaciones.",
};

export default function ChatBot() {
  const [abierto, setAbierto] = useState(false);
  const [mensajes, setMensajes] = useState<Mensaje[]>([MENSAJE_BIENVENIDA]);
  const [input, setInput] = useState("");
  const [escribiendo, setEscribiendo] = useState(false);
  const finRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    finRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensajes, escribiendo, abierto]);

  /* Link de WhatsApp con la última consulta del usuario como contexto */
  const linkWhatsApp = (): string => {
    const ultimaPregunta =
      [...mensajes].reverse().find((m) => m.de === "usuario")?.texto ?? "";
    const texto = encodeURIComponent(
      `Hola DYNAMIS OA 👋 Vengo del chat de la página web.${
        ultimaPregunta ? ` Mi consulta: "${ultimaPregunta}"` : ""
      }`
    );
    return `https://wa.me/${CONTACTO.whatsapp}?text=${texto}`;
  };

  const enviar = () => {
    const texto = input.trim();
    if (!texto) return;

    setMensajes((prev) => [...prev, { de: "usuario", texto }]);
    setInput("");
    setEscribiendo(true);

    // Pequeño delay para que se sienta natural
    setTimeout(() => {
      const regla = buscarRespuesta(texto);
      setMensajes((prev) => [
        ...prev,
        { de: "bot", texto: regla.respuesta, whatsapp: regla.sugerirWhatsApp },
      ]);
      setEscribiendo(false);
    }, 700);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      enviar();
    }
  };

  return (
    <>
      <button
        className={`chatbot__fab ${abierto ? "chatbot__fab_abierto" : ""}`}
        onClick={() => setAbierto(!abierto)}
        aria-label={abierto ? "Cerrar chat" : "Abrir chat"}
      >
        {abierto ? <X size={30} /> : <MessageCircle size={30} />}
      </button>
      {abierto && (
  <div className="chatbot">
    <div className="chatbot__header">
      <span className="chatbot__avatar">
        <Zap size={18} />
      </span>
      <div>
        <p className="chatbot__nombre">Asistente DYNAMIS OA</p>
        <p className="chatbot__estado">Normalmente responde al instante</p>
      </div>
    </div>

    <div className="chatbot__mensajes">
      {mensajes.map((m, i) => (
        <div
          key={i}
          className={`chatbot__fila ${
            m.de === "usuario" ? "chatbot__fila_usuario" : ""
          }`}
        >
          <div
            className={`chatbot__burbuja ${
              m.de === "usuario"
                ? "chatbot__burbuja_usuario"
                : "chatbot__burbuja_bot"
            }`}
          >
            {m.texto}
          </div>

          {/* CORREGIDO: Se agregó la etiqueta de apertura <a> */}
          {m.whatsapp && (
            <a
              className="chatbot__whatsapp"
              href={linkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.668-1.612-.916-2.207-.241-.579-.486-.5-.668-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Continuar en WhatsApp
            </a>
          )}
        </div>
      ))}

      {escribiendo && (
        <div className="chatbot__burbuja chatbot__burbuja_bot">
          escribiendo…
        </div>
      )}
      <div ref={finRef} />
    </div>

    <div className="chatbot__input-zona">
      <input
        className="chatbot__input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Escribe tu pregunta…"
      />
      <button
        className="chatbot__enviar"
        onClick={enviar}
        aria-label="Enviar"
      >
        <Send size={18} />
      </button>
    </div>
  </div>
)}
    </>
  );
}