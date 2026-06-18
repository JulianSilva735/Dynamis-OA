import { useEffect, useState } from "react";
import { useScrollReveal } from "../../hook/useScrollReveal";

interface ContadorProps {
  hasta: number;
  sufijo?: string;
  duracion?: number; // ms
}

export default function Contador({ hasta, sufijo = "", duracion = 1600 }: ContadorProps) {
  const { ref, visible } = useScrollReveal<HTMLSpanElement>();
  const [valor, setValor] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let inicio: number | null = null;

    const animar = (t: number) => {
      if (inicio === null) inicio = t;
      const progreso = Math.min((t - inicio) / duracion, 1);
      // easing suave (ease-out)
      const eased = 1 - Math.pow(1 - progreso, 3);
      setValor(Math.round(eased * hasta));
      if (progreso < 1) requestAnimationFrame(animar);
    };

    const id = requestAnimationFrame(animar);
    return () => cancelAnimationFrame(id);
  }, [visible, hasta, duracion]);

  return (
    <span ref={ref}>
      {valor}
      {sufijo}
    </span>
  );
}