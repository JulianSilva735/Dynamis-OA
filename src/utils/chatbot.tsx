import type { ReglaChat } from "../types";
import { REGLAS, RESPUESTA_DEFAULT } from "../data/config";

/* Normaliza texto: minúsculas y sin tildes para comparar */
export const normalizar = (t: string): string =>
  t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

/* Recorre las reglas y devuelve la primera que coincida (o la default) */
export const buscarRespuesta = (texto: string): ReglaChat => {
  const limpio = normalizar(texto);
  return (
    REGLAS.find((r) => r.claves.some((k) => limpio.includes(normalizar(k)))) ??
    RESPUESTA_DEFAULT
  );
};