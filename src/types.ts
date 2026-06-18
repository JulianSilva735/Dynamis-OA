import type { LucideIcon } from "lucide-react";

export interface Servicio {
  icon: LucideIcon;
  titulo: string;
  descripcion: string;
}

export interface Valor {
  icon: LucideIcon;
  titulo: string;
}

export interface Proyecto {
  tag: string;
  titulo: string;
  descripcion: string;
  stat: string;
}

export interface Testimonio {
  quote: string;
  autor: string;
}

export interface NavItem {
  id: string;
  label: string;
}

/* --- ChatBot --- */
export interface Mensaje {
  de: "bot" | "usuario";
  texto: string;
  whatsapp?: boolean;
}

export interface ReglaChat {
  claves: string[];
  respuesta: string;
  sugerirWhatsApp?: boolean;
}

export interface SpecRow {
  label: string;
  value: string;
}

export interface Producto {
  modelo: string;
  nombre: string;
  descripcion: string;
  imgPrincipal: string;
  imgDetalle: string;
  altPrincipal: string;
  altDetalle: string;
  features: string[];
  specs: SpecRow[];
}