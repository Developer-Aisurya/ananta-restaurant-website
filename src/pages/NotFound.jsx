import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 bg-ink text-ivory">
      <span className="eyebrow text-gold-light text-xs">404</span>
      <h1 className="mt-6 font-display text-4xl md:text-6xl">This table isn't set.</h1>
      <p className="mt-4 text-ivory/60 max-w-md">
        The page you're looking for has wandered off. Let's bring you back to the table.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-3 border border-gold-light text-gold-light px-8 py-4 text-sm uppercase tracking-widest hover:bg-gold-light hover:text-ink transition-colors duration-300"
      >
        Return Home
      </Link>
    </section>
  );
}
