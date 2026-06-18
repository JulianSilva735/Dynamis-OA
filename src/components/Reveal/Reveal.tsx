import type { ReactNode } from "react";
import { useScrollReveal } from "../../hook/useScrollReveal";
import "./Reveal.css";

interface RevealProps {
  children: ReactNode;
  delay?: number;
}

export default function Reveal({ children, delay = 0 }: RevealProps) {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal_visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}