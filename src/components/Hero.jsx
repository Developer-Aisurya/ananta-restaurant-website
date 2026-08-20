import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap, useGsapContext } from "../hooks/useGsap";
import { MandalaMotif } from "./DecorativePattern";

export default function Hero() {
  const rootRef = useRef(null);
  const headlineRef = useRef(null);

  useGsapContext(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.fromTo(
      ".hero-bg",
      { scale: 1.18, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2.2, ease: "power2.out" }
    )
      .fromTo(".hero-eyebrow", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.9 }, "-=1.4")
      .fromTo(
        ".hero-line",
        { yPercent: 120 },
        { yPercent: 0, duration: 1.1, stagger: 0.12 },
        "-=0.6"
      )
      .fromTo(".hero-sub", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.9 }, "-=0.5")
      .fromTo(".hero-cta", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }, "-=0.5")
      .fromTo(".hero-motif", { opacity: 0, rotate: -8 }, { opacity: 0.5, rotate: 0, duration: 1.4 }, "-=1.2")
      .fromTo(".hero-scroll", { opacity: 0 }, { opacity: 1, duration: 0.8 }, "-=0.3");
  }, [], rootRef);

  return (
    <section ref={rootRef} className="relative h-[100svh] w-full overflow-hidden bg-ink">
      <div
        className="hero-bg absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage:
            "url('/amritsari-fish-tikka.png')",
        }}
        role="img"
        aria-label="Warmly lit interior of Ananta restaurant with tandoor flames and spice-laden tables"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/65 to-ink/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/70" />

      <MandalaMotif className="hero-motif absolute -right-16 -top-16 w-72 h-72 md:w-[28rem] md:h-[28rem] opacity-0" stroke="#E0C289" />
      <MandalaMotif className="hero-motif absolute -left-24 bottom-0 w-64 h-64 md:w-96 md:h-96 opacity-0" stroke="#E0C289" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <span className="hero-eyebrow eyebrow text-gold-light text-xs md:text-sm mb-6 opacity-0">
          A Dining House of Indian Heritage — Since 2019
        </span>

        <h1
          ref={headlineRef}
          className="font-display text-ivory text-[13vw] leading-[0.98] sm:text-[9vw] md:text-[6.4vw] lg:text-[5.6vw] max-w-6xl"
        >
          <span className="block overflow-hidden">
            <span className="hero-line block">A Taste of India,</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line block italic font-accent text-gold-light/95">Told Through</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line block">Fire &amp; Spice.</span>
          </span>
        </h1>

        <p className="hero-sub mt-8 max-w-xl text-ivory/75 text-base md:text-lg leading-relaxed opacity-0">
          Nine regions. One table. Ananta gathers India's most storied kitchens —
          from Awadhi courts to Kerala's spice coast — under a single roof.
        </p>

        <div className="hero-cta mt-10 flex flex-col xs:flex-row items-center gap-4 opacity-0">
          <Link
            to="/menu"
            className="btn-magnetic inline-flex items-center gap-3 bg-terracotta text-ivory px-8 py-4 text-sm uppercase tracking-widest hover:bg-terracotta-light transition-colors duration-300"
          >
            Explore Menu
          </Link>
          <Link
            to="/reservations"
            className="btn-magnetic inline-flex items-center gap-3 border border-ivory/40 text-ivory px-8 py-4 text-sm uppercase tracking-widest hover:border-gold-light hover:text-gold-light transition-colors duration-300"
          >
            Reserve a Table
          </Link>
        </div>
      </div>

      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0">
        <span className="eyebrow text-[10px] text-ivory/60">Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-gold-light/80 to-transparent" />
      </div>
    </section>
  );
}
