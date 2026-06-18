import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../Logo/Logo";
import { NAV_ITEMS } from "../../data/content";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar_scrolled" : ""}`}>
      <div className="container navbar__inner">
        <button className="navbar__brand" onClick={() => go("inicio")}>
          <Logo size={40} dark={!scrolled} />
          <span className="navbar__brand-text">
            <span className="navbar__name">
              DYNAMIS <span className="navbar__name-accent">OA</span>
            </span>
            <span className="navbar__sas">S.A.S.</span>
          </span>
        </button>

        <div className="navbar__links">
          {NAV_ITEMS.map((n) => (
            <button key={n.id} className="navbar__link" onClick={() => go(n.id)}>
              {n.label}
            </button>
          ))}
          <button className="navbar__cta" onClick={() => go("contacto")}>
            Solicitar cotización
          </button>
        </div>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className="navbar__mobile">
          {NAV_ITEMS.map((n) => (
            <button key={n.id} className="navbar__mobile-link" onClick={() => go(n.id)}>
              {n.label}
            </button>
          ))}
          <button className="navbar__cta navbar__cta_full" onClick={() => go("contacto")}>
            Solicitar cotización
          </button>
        </div>
      )}
    </nav>
  );
}
