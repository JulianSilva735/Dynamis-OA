import Logo from "../Logo/Logo";
import { Instagram, Facebook } from "lucide-react";
import { CONTACTO } from "../../data/config";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand" >
            <a className="footer__social"
            href={CONTACTO.instagram}
            aria-label="Instagram de DYNAMIS OA"
            target="_blank"
            rel="noopener noreferrer">
            <Instagram size={22} />
          </a>
          <a className="footer__social"
            href={CONTACTO.facebook}
            aria-label="Facebook de DYNAMIS OA"
            target="_blank"
            rel="noopener noreferrer">
            <Facebook size={22} />
          </a>
          <Logo size={36} dark />
          <div className="footer__brand-text">
            <span className="footer__name">
              DYNAMIS <span className="footer__name-accent">OA S.A.S.</span>
            </span>
            <span className="footer__claim">
              Energía Inteligente para la Movilidad del Futuro
            </span>
          </div>
        </div>
        <p className="footer__copy">
          © {new Date().getFullYear()} DYNAMIS OA S.A.S. — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
