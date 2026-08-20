import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/cuisine", label: "Our Cuisine" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(199,154,75,0.35)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 flex items-center justify-between h-20 md:h-24">
        <Link to="/" className="flex items-baseline gap-2 group" aria-label="Ananta home">
          <span
            className={`font-display text-2xl md:text-3xl tracking-wide transition-colors ${
              scrolled ? "text-ink" : "text-ivory"
            }`}
          >
            Ananta
          </span>
          <span
            className={`hidden sm:inline eyebrow text-[10px] transition-colors ${
              scrolled ? "text-terracotta" : "text-gold-light"
            }`}
          >
            est. 2019
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `link-underline text-sm tracking-wide uppercase font-medium transition-colors ${
                  scrolled ? "text-ink/80 hover:text-terracotta" : "text-ivory/90 hover:text-gold-light"
                } ${isActive ? (scrolled ? "text-terracotta" : "text-gold-light") : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/reservations"
            className={`hidden md:inline-flex items-center gap-2 border px-5 py-2.5 text-sm tracking-wide uppercase transition-all duration-300 ${
              scrolled
                ? "border-ink/20 text-ink hover:border-terracotta hover:text-terracotta"
                : "border-ivory/40 text-ivory hover:border-gold-light hover:text-gold-light"
            }`}
          >
            Reserve a Table
          </Link>
          <button
            onClick={() => setMenuOpen(true)}
            className={`lg:hidden flex flex-col gap-1.5 p-2 ${scrolled ? "text-ink" : "text-ivory"}`}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <span className="block w-6 h-px bg-current" />
            <span className="block w-6 h-px bg-current" />
            <span className="block w-4 h-px bg-current self-end" />
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={LINKS} />
    </header>
  );
}
