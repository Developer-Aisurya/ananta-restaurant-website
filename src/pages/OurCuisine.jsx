import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import { REGIONS } from "../data/regions";
import { BorderRule } from "../components/DecorativePattern";

export default function OurCuisine() {
  const [activeId, setActiveId] = useState(REGIONS[0].id);

  return (
    <>
      <section className="relative pt-40 pb-16 md:pt-52 md:pb-20 bg-ink text-ivory overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="eyebrow text-gold-light text-xs md:text-sm">Our Cuisine</span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl leading-tight text-balance">
            A Visual Journey Through India
          </h1>
          <p className="mt-6 text-ivory/70 max-w-2xl mx-auto leading-relaxed">
            India's cuisines were never one tradition — they are as varied as its languages. Step
            through eight regions, each with its own ingredients, techniques and centuries of
            history.
          </p>
        </div>
      </section>
      
      <div className="sticky top-20 z-20 bg-ivory/95 backdrop-blur-sm border-b border-ink/10">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-4 flex gap-2 overflow-x-auto no-scrollbar">
          {REGIONS.map((region) => (
            <button
              key={region.id}
              onClick={() => setActiveId(region.id)}
              className={`shrink-0 px-5 py-2.5 text-sm uppercase tracking-wide border transition-colors duration-300 ${
                activeId === region.id
                  ? "bg-terracotta border-terracotta text-ivory"
                  : "border-ink/15 text-ink/70 hover:border-terracotta hover:text-terracotta"
              }`}
            >
              {region.name}
            </button>
          ))}
        </div>
      </div>

      {REGIONS.map((region, i) => (
        <RegionSection key={region.id} region={region} reversed={i % 2 === 1} />
      ))}
    </>
  );
}

function RegionSection({ region, reversed }) {
  return (
    <section
      id={region.id}
      className={`relative py-20 md:py-28 ${reversed ? "bg-parchment" : "bg-ivory"}`}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div
          className={`grid md:grid-cols-12 gap-10 md:gap-16 items-center ${
            reversed ? "md:[direction:rtl]" : ""
          }`}
        >
          <ScrollReveal className="md:col-span-6 [direction:ltr]">
            <div data-reveal className="relative aspect-[4/3] overflow-hidden">
              <img
                src={region.image}
                alt={`Signature scene from ${region.name}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-ink/85 text-gold-light px-5 py-3">
                <span className="eyebrow text-[10px]">{region.title}</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-6 [direction:ltr]">
            <div data-reveal>
              <span className="eyebrow text-terracotta text-xs">{region.title}</span>
              <h2 className="mt-3 font-display text-3xl md:text-5xl text-ink">{region.name}</h2>
            </div>
            <p data-reveal className="mt-5 text-ink/70 leading-relaxed max-w-lg">
              {region.story}
            </p>

            <div data-reveal className="mt-8 grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xs uppercase tracking-wide text-ink/45 mb-2">Signature Dishes</h3>
                <ul className="space-y-1 text-ink/75 text-sm">
                  {region.dishes.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wide text-ink/45 mb-2">Core Ingredients</h3>
                <ul className="space-y-1 text-ink/75 text-sm">
                  {region.ingredients.map((ing) => (
                    <li key={ing}>{ing}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div data-reveal className="mt-6 pt-6 border-t border-ink/10">
              <h3 className="text-xs uppercase tracking-wide text-ink/45 mb-2">Traditional Technique</h3>
              <p className="text-ink/70 text-sm italic font-accent text-base">{region.technique}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <BorderRule className="w-full h-3 mt-16 opacity-30" />
    </section>
  );
}
