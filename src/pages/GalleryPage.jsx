import { useMemo, useState } from "react";
import Gallery from "../components/Gallery";
import { GALLERY } from "../data/content";

const CATEGORIES = ["All", ...Array.from(new Set(GALLERY.map((g) => g.category)))];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");

  const items = useMemo(
    () => (filter === "All" ? GALLERY : GALLERY.filter((g) => g.category === filter)),
    [filter]
  );

  return (
    <>
      <section className="relative pt-40 pb-16 md:pt-52 md:pb-20 bg-ink text-ivory overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="eyebrow text-gold-light text-xs md:text-sm">Gallery</span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl leading-tight text-balance">
            Moments From the Room
          </h1>
          <p className="mt-6 text-ivory/70 max-w-2xl mx-auto leading-relaxed">
            Food, craft, and the details that shape an evening at Ananta.
          </p>
        </div>
      </section>

      <section className="relative bg-ivory py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-10">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`shrink-0 px-5 py-2.5 text-sm uppercase tracking-wide border transition-colors duration-300 ${
                  filter === c
                    ? "bg-terracotta border-terracotta text-ivory"
                    : "border-ink/15 text-ink/70 hover:border-terracotta hover:text-terracotta"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <Gallery items={items} key={filter} />
        </div>
      </section>
    </>
  );
}
