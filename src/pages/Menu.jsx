import { useMemo, useState } from "react";
import SectionHeading from "../components/SectionHeading";
import MenuFilter from "../components/MenuFilter";
import DishCard from "../components/DishCard";
import ScrollReveal from "../components/ScrollReveal";
import { DISHES, MENU_CATEGORIES } from "../data/dishes";

export default function Menu() {
  const [category, setCategory] = useState("all");
  const [diet, setDiet] = useState("all");

  const filtered = useMemo(() => {
    return DISHES.filter((d) => {
      const categoryMatch = category === "all" || d.category === category;
      const dietMatch = diet === "all" || (diet === "veg" ? d.veg : !d.veg);
      return categoryMatch && dietMatch;
    });
  }, [category, diet]);

  return (
    <>
      <section className="relative pt-40 pb-16 md:pt-52 md:pb-20 bg-ink text-ivory overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="eyebrow text-gold-light text-xs md:text-sm">The Menu</span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl leading-tight text-balance">
            Nine Kitchens, One Table
          </h1>
          <p className="mt-6 text-ivory/70 max-w-2xl mx-auto leading-relaxed">
            Every dish is prepared to its region's own standard — filter by course or dietary
            preference to build your evening.
          </p>
        </div>
      </section>

      <section className="relative bg-ivory py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="sticky top-20 z-20 bg-ivory/95 backdrop-blur-sm py-4 -mx-6 px-6 md:-mx-10 md:px-10 border-b border-ink/10">
            <MenuFilter
              categories={MENU_CATEGORIES}
              active={category}
              onChange={setCategory}
              dietFilter={diet}
              onDietChange={setDiet}
            />
          </div>

          {filtered.length === 0 ? (
            <div className="py-24 text-center text-ink/50">
              <p className="font-display text-2xl mb-2">No dishes match this combination.</p>
              <p className="text-sm">Try a different course or dietary filter.</p>
            </div>
          ) : (
            <ScrollReveal
              as="div"
              key={`${category}-${diet}`}
              className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              stagger={0.06}
            >
              {filtered.map((dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </ScrollReveal>
          )}
        </div>
      </section>

      <section className="relative bg-charcoal text-ivory py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionHeading
            eyebrow="A Note on Spice"
            title="Every dish is calibrated, not diluted."
            align="center"
            light
          />
          <p className="mt-6 text-ivory/70 leading-relaxed max-w-xl mx-auto">
            Our spice markers reflect the dish's traditional heat level. If you would prefer a
            gentler or bolder preparation, our kitchen is glad to adjust — simply let your server
            know.
          </p>
        </div>
      </section>
    </>
  );
}
