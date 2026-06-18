interface LogoProps {
  size?: number;
  dark?: boolean; // true cuando está sobre fondo oscuro
}

/* Concepto del manual: Energía (rayo) + Conector + Hexágono */
export default function Logo({ size = 44, dark = false }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <defs>
        <linearGradient id="hexGrad" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="#003b73" />
          <stop offset="100%" stopColor="#00c853" />
        </linearGradient>
      </defs>
      <path
        d="M50 4 L89 26 L89 74 L50 96 L11 74 L11 26 Z"
        stroke="url(#hexGrad)"
        strokeWidth="9"
        strokeLinejoin="round"
        fill={dark ? "rgba(255,255,255,0.04)" : "white"}
      />
      <path d="M55 22 L36 54 L48 54 L44 78 L66 44 L53 44 Z" fill="#003b73" />
      <circle cx="68" cy="70" r="9" fill="#00c853" />
      <rect x="64.8" y="66" width="2.5" height="9" rx="1" fill="white" />
      <rect x="68.8" y="66" width="2.5" height="9" rx="1" fill="white" />
    </svg>
  );
}
