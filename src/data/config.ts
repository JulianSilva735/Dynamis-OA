/* ============================================================
   PANEL DE CONTENIDO — DYNAMIS OA S.A.S.
   Único archivo para editar textos, números, contactos,
   productos, fichas técnicas y reglas del chatbot.
   Los componentes leen de aquí; no necesitas tocarlos.
   ============================================================ */

import {
  Plug, BatteryCharging, FileSearch, Home, Building2, Wrench,
  Lightbulb, ShieldCheck, Award, Leaf, CheckCircle2, Zap,
} from "lucide-react";
import type {
  Servicio, Valor, Proyecto, Testimonio, NavItem, Producto, ReglaChat,
} from "../types";

// Imágenes de producto
import p02Instalado from "../assets/P02_cargador_instalado.png";
import p02Portatil from "../assets/P02_cargador_portatil_y_conectores.png";
import wp21Instalado from "../assets/WP21_cargador_instalado.png";
import wp21Variantes from "../assets/WP21_wallbox_variantes.png";
import instCargador from "../assets/monto1.jpeg";
import instCuarto from "../assets/monto2.jpeg";
import instParqueadero from "../assets/monto3.jpeg";
import instLuminaria from "../assets/monto4.jpeg";
import prueba1 from "../assets/prueba1.jpeg";
import prueba2 from "../assets/prueba2.jpeg";

/* ─────────────────────────────────────────
   1. CONTACTO Y REDES  ← lo que más cambia
   ───────────────────────────────────────── */
export const CONTACTO = {
  whatsapp: "573128537307",
  telefono: "3128537307",
  correo: "contacto@dynamisoa.com",
  ciudad: "Pereira, Armenia, Manizales, Cali Colombia",
  instagram: "https://www.instagram.com/jramosse_/",
};

/* ─────────────────────────────────────────
   2. NAVEGACIÓN
   ───────────────────────────────────────── */
export const NAV_ITEMS: NavItem[] = [
  { id: "inicio", label: "Inicio" },
  { id: "nosotros", label: "Nosotros" },
  { id: "servicios", label: "Servicios" },
  { id: "productos", label: "Productos" },
  { id: "proyectos", label: "Proyectos" },
  { id: "clientes", label: "Clientes" },
  { id: "contacto", label: "Contacto" },
];

/* ─────────────────────────────────────────
   3. SERVICIOS
   ───────────────────────────────────────── */
export const SERVICIOS: Servicio[] = [
  { icon: Plug, titulo: "Instalación de cargadores", descripcion: "Montaje certificado de cargadores para vehículos eléctricos en cualquier entorno." },
  { icon: BatteryCharging, titulo: "Infraestructura de carga", descripcion: "Diseño de redes de carga escalables para flotas, edificios y ciudades inteligentes." },
  { icon: FileSearch, titulo: "Estudios eléctricos", descripcion: "Análisis de carga, viabilidad técnica y cumplimiento normativo RETIE." },
  { icon: Home, titulo: "Adecuaciones residenciales", descripcion: "Preparamos tu hogar para la movilidad eléctrica con instalaciones seguras." },
  { icon: Building2, titulo: "Adecuaciones comerciales e industriales", descripcion: "Soluciones eléctricas de alta capacidad para empresas e industria." },
  { icon: Wrench, titulo: "Mantenimiento de estaciones", descripcion: "Planes preventivos y correctivos que garantizan disponibilidad continua." },
  { icon: Lightbulb, titulo: "Soluciones energéticas inteligentes", descripcion: "Gestión eficiente de energía e integración con fuentes renovables." },
];

/* ─────────────────────────────────────────
   4. VALORES
   ───────────────────────────────────────── */
export const VALORES: Valor[] = [
  { icon: Lightbulb, titulo: "Innovación" },
  { icon: ShieldCheck, titulo: "Seguridad" },
  { icon: Award, titulo: "Calidad" },
  { icon: Leaf, titulo: "Sostenibilidad" },
  { icon: CheckCircle2, titulo: "Compromiso" },
  { icon: Zap, titulo: "Excelencia Operacional" },
];

/* ─────────────────────────────────────────
   5. PROYECTOS  (placeholders — cambiar por casos reales)
   ───────────────────────────────────────── */
export const PROYECTOS: Proyecto[] = [
  {
    imagen: instCargador,
    alt: "Técnico de DYNAMIS OA instalando un cargador para vehículo eléctrico",
    titulo: "Instalación de cargador EV",
    descripcion: "Montaje y conexión certificada de cargador en parqueadero residencial.",
  },
  {
    imagen: instCuarto,
    alt: "Técnico de DYNAMIS OA trabajando en cuarto técnico eléctrico",
    titulo: "Adecuación de cuarto técnico",
    descripcion: "Canalización y acometida eléctrica para infraestructura de carga.",
  },
  {
    imagen: instParqueadero,
    alt: "Equipo de DYNAMIS OA trabajando en parqueadero",
    titulo: "Proyecto en parqueadero",
    descripcion: "Instalación de puntos de carga en zona común de parqueadero.",
  },
  {
    imagen: instLuminaria,
    alt: "Técnico de DYNAMIS OA instalando canalización en techo",
    titulo: "Canalización e iluminación",
    descripcion: "Trabajo eléctrico y de canalización en infraestructura existente.",
  },
  {
    imagen: prueba1,
    alt: "Cargador ElectryGo instalado en pared de parqueadero por DYNAMIS OA",
    titulo: "Punto de carga terminado",
    descripcion: "Cargador para vehículo eléctrico instalado y listo para usar en parqueadero residencial, con protección eléctrica dedicada.",
  },
  {
    imagen: prueba2,
    alt: "Detalle de cargador ElectryGo conectado con cableado organizado",
    titulo: "Instalación lista y ordenada",
    descripcion: "Montaje final con conector tipo 2, gestión de cable y tablero de protección, cumpliendo normativa RETIE.",
  },
];

/* ─────────────────────────────────────────
   6. TESTIMONIOS  (placeholders — cambiar por reales)
   ───────────────────────────────────────── */
export const TESTIMONIOS: Testimonio[] = [
  { quote: "La instalación fue impecable y cumplió toda la normativa. El equipo es muy profesional.", autor: "Administración, conjunto residencial" },
  { quote: "Electrificamos nuestra flota sin interrumpir la operación. Excelente acompañamiento técnico.", autor: "Gerencia logística, empresa de transporte" },
  { quote: "El mantenimiento preventivo nos garantiza disponibilidad total de las estaciones.", autor: "Centro comercial, zona EV" },
];

/* ─────────────────────────────────────────
   7. PRODUCTOS Y FICHAS TÉCNICAS
   ───────────────────────────────────────── */
export const PRODUCTOS: Producto[] = [
  {
    modelo: "P02",
    nombre: "Cargador Portátil ElectryGo",
    descripcion:
      "Cargador portátil y versátil, ideal para uso en casa o en ruta. Compatible con distintos conectores y con pantalla de control integrada.",
    imgPrincipal: p02Instalado,
    imgDetalle: p02Portatil,
    altPrincipal: "Cargador portátil P02 ElectryGo instalado en columna",
    altDetalle: "Cargador portátil P02 con sus distintos conectores",
    features: ["Portátil", "Pantalla LCD", "Múltiples conectores", "Certificado OCPP"],
    specs: [
      { label: "Conectores", value: "GB/T, Tipo 2, Tipo 1, Tesla" },
      { label: "Tamaño del paquete", value: "380 × 380 × 110 mm" },
      { label: "Peso", value: "< 3 kg" },
      { label: "Material de la carcasa", value: "Acrílico, PC" },
      { label: "Vida útil de acoplamiento", value: "> 10.000 veces" },
      { label: "Voltaje entrada/salida", value: "110V / 220V" },
      { label: "Corriente máx. de salida", value: "16A / 32A (hasta 50A en Tipo 1)" },
      { label: "Potencia nominal", value: "3.5kW / 7kW / 11kW" },
      { label: "Frecuencia", value: "50Hz / 60Hz" },
      { label: "RCD (Diferencial)", value: "Tipo A + DC6mA" },
      { label: "Interfaz de usuario", value: "Indicador LED, Pantalla LCD" },
      { label: "Temperatura", value: "-30°C ~ +55°C" },
      { label: "Humedad", value: "5% ~ 95%" },
      { label: "Altitud", value: "< 2000 m" },
      { label: "Enfriamiento", value: "Natural" },
      { label: "Protección eléctrica", value: "Sobre/bajo voltaje, sobretemperatura, rayos, fugas y cortocircuitos" },
      { label: "Grado de protección (IP)", value: "IP65" },
      { label: "Grado retardante de llama", value: "UL94 V0" },
      { label: "Material del cable", value: "TPU" },
      { label: "Longitud del cable", value: "5 m (personalizable)" },
      { label: "Fase", value: "Monofásico / Trifásico" },
    ],
  },
  {
    modelo: "WP21",
    nombre: "Wallbox ElectryGo",
    descripcion:
      "Estación de carga de pared para instalación fija en hogar o empresa. Disponible en variantes de color y tipo de conector, con anillo LED de estado.",
    imgPrincipal: wp21Variantes,
    imgDetalle: wp21Instalado,
    altPrincipal: "Wallbox WP21 ElectryGo en variantes blanca y negra",
    altDetalle: "Conector del wallbox WP21 enchufado a un vehículo",
    features: ["Instalación fija", "Anillo LED de estado", "WiFi / Bluetooth", "Certificado OCPP"],
    specs: [
      { label: "Conectores", value: "GB/T, Tipo 2, Tipo 1, Tesla" },
      { label: "Tamaño", value: "235 × 220 × 125 mm" },
      { label: "Tamaño del empaque", value: "410 × 300 × 220 mm" },
      { label: "Peso", value: "< 5 kg" },
      { label: "Material de fabricación", value: "Acrílico, PC" },
      { label: "Ciclo de vida útil", value: "> 10.000 sesiones" },
      { label: "Voltaje entrada/salida", value: "110V / 220V +/- 10%" },
      { label: "Corriente máx. de salida", value: "32A" },
      { label: "Potencia nominal", value: "7kW / 22kW (opción hasta 22kW)" },
      { label: "Frecuencia", value: "50Hz / 60Hz" },
      { label: "RCD (Diferencial)", value: "Tipo A o B + DC6mA" },
      { label: "Interfaz de usuario", value: "Indicador LED" },
      { label: "Comunicación", value: "WiFi, Bluetooth (opcional)" },
      { label: "Temperatura", value: "-30°C ~ +55°C" },
      { label: "Humedad", value: "5% ~ 95%" },
      { label: "Altitud", value: "< 2800 m" },
      { label: "Enfriamiento", value: "Natural" },
      { label: "Protección eléctrica", value: "Sobretensión, subtensión, fugas, sobrecorriente, cortocircuitos y rayos" },
      { label: "Grado de protección (IP)", value: "IP55 carcasa / IP65 pistola de carga" },
      { label: "Grado retardante de llama", value: "UL94 V0" },
      { label: "Material del cable", value: "Poliuretano termoplástico (TPU), cobre" },
      { label: "Longitud del cable", value: "5 m (personalizable)" },
      { label: "Fases", value: "Bifásico (opción monofásico y trifásico)" },
    ],
  },
];

/* ─────────────────────────────────────────
   8. CHATBOT — solo los DATOS (qué responde el bot)
   La lógica de cómo decide está en utils/chatbot.ts
   ───────────────────────────────────────── */
export const REGLAS: ReglaChat[] = [
  {
    claves: ["hola", "buenas", "buenos dias", "buenas tardes", "buenas noches", "hey"],
    respuesta: "¡Hola! 👋 Soy el asistente de DYNAMIS OA. Puedo contarte sobre nuestros servicios, cotizaciones o instalaciones. ¿En qué te ayudo?",
  },
  {
    claves: ["servicio", "que hacen", "qué hacen", "ofrecen"],
    respuesta: "Ofrecemos: ⚡ Instalación de cargadores para vehículos eléctricos, diseño de infraestructura de carga, estudios eléctricos, adecuaciones residenciales/comerciales/industriales, mantenimiento de estaciones y soluciones energéticas inteligentes. ¿Cuál te interesa?",
  },
  {
    claves: ["precio", "costo", "cuanto", "cuánto", "cotiza", "cotización", "presupuesto", "valor"],
    respuesta: "El costo depende del tipo de cargador, la instalación eléctrica existente y la ubicación. Un ingeniero puede darte una cotización a la medida sin compromiso. ¿Quieres que te conecte por WhatsApp? 📲",
    sugerirWhatsApp: true,
  },
  {
    claves: ["casa", "hogar", "residencial", "apartamento", "conjunto"],
    respuesta: "¡Claro! Hacemos adecuaciones eléctricas residenciales e instalamos cargadores en casas, apartamentos y conjuntos. Verificamos la capacidad de tu red y todo cumple normativa RETIE. 🏠⚡",
  },
  {
    claves: ["empresa", "comercial", "industrial", "flota", "negocio", "centro comercial", "edificio"],
    respuesta: "Diseñamos infraestructura de carga para empresas: desde puntos para visitantes hasta electrificación de flotas completas con carga programada y gestión de demanda. 🏢⚡",
  },
  {
    claves: ["mantenimiento", "reparar", "falla", "dañado", "no funciona", "soporte"],
    respuesta: "Ofrecemos planes de mantenimiento preventivo y correctivo para estaciones de carga. Si tienes una falla activa, lo mejor es atenderla por WhatsApp de inmediato. 🔧",
    sugerirWhatsApp: true,
  },
  {
    claves: ["tiempo", "demora", "cuando", "cuándo", "instalacion", "instalación", "instalar"],
    respuesta: "Una instalación residencial típica toma 1 a 2 días tras el estudio eléctrico. Proyectos comerciales o de flota dependen del alcance — te damos cronograma con la cotización. ⏱️",
  },
  {
    claves: ["donde", "dónde", "ubicacion", "ubicación", "ciudad", "cobertura", "atienden"],
    respuesta: "Estamos en Medellín, Colombia 🇨🇴 y atendemos proyectos residenciales, comerciales e industriales. Escríbenos para confirmar cobertura en tu zona.",
  },
  {
    claves: ["normativa", "retie", "certificado", "legal", "garantia", "garantía"],
    respuesta: "Todas nuestras instalaciones cumplen la normativa RETIE, con ingenieros certificados y garantía sobre el trabajo realizado. ✅",
  },
  {
    claves: ["whatsapp", "asesor", "humano", "persona", "llamar", "telefono", "teléfono", "contacto", "hablar"],
    respuesta: "¡Por supuesto! Te conecto con un asesor por WhatsApp. 📲",
    sugerirWhatsApp: true,
  },
  {
    claves: ["gracias", "vale", "perfecto", "ok", "listo"],
    respuesta: "¡Con gusto! ⚡ Si necesitas algo más, aquí estoy. Energía Inteligente para la Movilidad del Futuro.",
  },
];

export const RESPUESTA_DEFAULT: ReglaChat = {
  claves: [],
  respuesta: "Mmm, esa pregunta es mejor que te la responda directamente un asesor. ¿Te conecto por WhatsApp? 📲 También puedo contarte sobre servicios, precios o tiempos de instalación.",
  sugerirWhatsApp: true,
};