import { Link } from "react-router-dom";
import { BorderRule } from "./DecorativePattern";

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory/70 pt-20 pb-8 relative">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          <div>
            <span className="font-display text-3xl text-ivory">Ananta</span>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              A dining house gathering India's regional cuisines, art and hospitality under one
              roof — where heritage meets modern luxury.
            </p>
            <div className="flex gap-4 mt-6">
              {["Instagram", "Facebook", "X"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs uppercase tracking-wide link-underline hover:text-gold-light transition-colors"
                  aria-label={`Ananta on ${s}`}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="eyebrow text-gold-light text-xs mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Menu", "/menu"],
                ["Our Cuisine", "/cuisine"],
                ["Gallery", "/gallery"],
                ["Reservations", "/reservations"],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="link-underline hover:text-gold-light transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-gold-light text-xs mb-4">Visit</h4>
            <address className="not-italic text-sm space-y-2 leading-relaxed">
              <p>14 Malabar Terrace</p>
              <p>Cuffe Parade, Mumbai 400005</p>
              <p>
                <a href="tel:+912266010143" className="link-underline hover:text-gold-light">
                  +91 22 6601 0143
                </a>
              </p>
              <p>
                <a href="mailto:reservations@ananta.in" className="link-underline hover:text-gold-light">
                  reservations@ananta.in
                </a>
              </p>
            </address>
          </div>

          <div>
            <h4 className="eyebrow text-gold-light text-xs mb-4">Hours</h4>
            <ul className="text-sm space-y-2">
              <li className="flex justify-between gap-4">
                <span>Lunch</span>
                <span>12:00 – 15:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Dinner</span>
                <span>19:00 – 23:30</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Monday</span>
                <span className="text-ivory/40">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <BorderRule className="w-full h-4 my-10 opacity-40" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/40">
          <p>&copy; {new Date().getFullYear()} Ananta Dining House. All rights reserved.</p>
          <p>Design &amp; craft, in service of heritage.</p>
        </div>
      </div>
    </footer>
  );
}
