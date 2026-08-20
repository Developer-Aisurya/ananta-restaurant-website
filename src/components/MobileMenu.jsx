import { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { gsap } from "../hooks/useGsap";

export default function MobileMenu({ open, onClose, links }) {
  const panelRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    if (!panelRef.current) return;
    if (open) {
      gsap.set(panelRef.current, { display: "flex" });
      gsap.fromTo(
        panelRef.current,
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 0.65, ease: "power4.inOut" }
      );
      gsap.fromTo(
        itemsRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, delay: 0.25, ease: "power3.out" }
      );
    } else if (panelRef.current) {
      gsap.to(panelRef.current, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: () => gsap.set(panelRef.current, { display: "none" }),
      });
    }
  }, [open]);

  return (
    <div
      ref={panelRef}
      className="fixed inset-0 z-40 hidden flex-col bg-ink text-ivory jali-bg"
      style={{ clipPath: "inset(0 0 100% 0)" }}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-between px-6 h-20">
        <span className="font-display text-2xl">Ananta</span>
        <button onClick={onClose} aria-label="Close menu" className="text-3xl leading-none px-2">
          &times;
        </button>
      </div>
      <nav className="flex-1 flex flex-col justify-center gap-6 px-8" aria-label="Mobile primary">
        {links.map((link, i) => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={onClose}
            ref={(el) => (itemsRef.current[i] = el)}
            className={({ isActive }) =>
              `font-display text-4xl xs:text-5xl ${isActive ? "text-gold" : "text-ivory"} hover:text-gold-light transition-colors`
            }
          >
            {link.label}
          </NavLink>
        ))}
        <Link
          to="/reservations"
          onClick={onClose}
          ref={(el) => (itemsRef.current[links.length] = el)}
          className="mt-4 inline-flex w-fit items-center gap-2 border border-gold px-6 py-3 text-sm uppercase tracking-widest text-gold-light"
        >
          Reserve a Table
        </Link>
      </nav>
    </div>
  );
}
