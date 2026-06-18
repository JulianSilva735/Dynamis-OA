import p02Instalado from "../assets/P02_cargador_instalado.png";
import p02Portatil from "../assets/P02_cargador_portatil_y_conectores.png";
import wp21Instalado from "../assets/WP21_cargador_instalado.png";
import wp21Variantes from "../assets/WP21_wallbox_variantes.png";

import {
  Plug, BatteryCharging, FileSearch, Home, Building2, Wrench,
  Lightbulb, ShieldCheck, Award, Leaf, CheckCircle2, Zap,
} from "lucide-react";
import type { Servicio, Valor, Proyecto, Testimonio, NavItem, Producto } from "../types";

export const NAV_ITEMS: NavItem[] = [
  { id: "inicio", label: "Inicio" },
  { id: "nosotros", label: "Nosotros" },
  { id: "servicios", label: "Servicios" },
  { id: "proyectos", label: "Proyectos" },
  { id: "clientes", label: "Clientes" },
  { id: "contacto", label: "Contacto" },
  { id: "productos", label: "Productos" }
];

export const SERVICIOS: Servicio[] = [
  { icon: Plug, titulo: "Instalación de cargadores", descripcion: "Montaje certificado de cargadores para vehículos eléctricos en cualquier entorno." },
  { icon: BatteryCharging, titulo: "Infraestructura de carga", descripcion: "Diseño de redes de carga escalables para flotas, edificios y ciudades inteligentes." },
  { icon: FileSearch, titulo: "Estudios eléctricos", descripcion: "Análisis de carga, viabilidad técnica y cumplimiento normativo RETIE." },
  { icon: Home, titulo: "Adecuaciones residenciales", descripcion: "Preparamos tu hogar para la movilidad eléctrica con instalaciones seguras." },
  { icon: Building2, titulo: "Adecuaciones comerciales e industriales", descripcion: "Soluciones eléctricas de alta capacidad para empresas e industria." },
  { icon: Wrench, titulo: "Mantenimiento de estaciones", descripcion: "Planes preventivos y correctivos que garantizan disponibilidad continua." },
  { icon: Lightbulb, titulo: "Soluciones energéticas inteligentes", descripcion: "Gestión eficiente de energía e integración con fuentes renovables." },
];

export const VALORES: Valor[] = [
  { icon: Lightbulb, titulo: "Innovación" },
  { icon: ShieldCheck, titulo: "Seguridad" },
  { icon: Award, titulo: "Calidad" },
  { icon: Leaf, titulo: "Sostenibilidad" },
  { icon: CheckCircle2, titulo: "Compromiso" },
  { icon: Zap, titulo: "Excelencia Operacional" },
];

export const PROYECTOS: Proyecto[] = [
  { tag: "Residencial", titulo: "Carga en conjunto residencial", descripcion: "12 puntos de carga inteligente con gestión de demanda compartida.", stat: "12 cargadores" },
  { tag: "Comercial", titulo: "Centro comercial — zona EV", descripcion: "Estación de carga rápida DC para visitantes con monitoreo remoto.", stat: "60 kW DC" },
  { tag: "Industrial", titulo: "Electrificación de flota logística", descripcion: "Infraestructura para flota de última milla con carga nocturna programada.", stat: "8 vehículos" },
];

export const TESTIMONIOS: Testimonio[] = [
  { quote: "La instalación fue impecable y cumplió toda la normativa. El equipo es muy profesional.", autor: "Administración, conjunto residencial" },
  { quote: "Electrificamos nuestra flota sin interrumpir la operación. Excelente acompañamiento técnico.", autor: "Gerencia logística, empresa de transporte" },
  { quote: "El mantenimiento preventivo nos garantiza disponibilidad total de las estaciones.", autor: "Centro comercial, zona EV" },
];
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