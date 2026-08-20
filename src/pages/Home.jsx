import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";
import DishCard from "../components/DishCard";
import ChefSection from "../components/ChefSection";
import CuisineCard from "../components/CuisineCard";
import Gallery from "../components/Gallery";
import TestimonialCarousel from "../components/TestimonialCard";
import { DISHES } from "../data/dishes";
import { REGIONS } from "../data/regions";
import { GALLERY, TESTIMONIALS } from "../data/content";
import { ArchFrame, PaisleyMotif, BorderRule } from "../components/DecorativePattern";

const FEATURED_IDS = ["d9", "d10", "d17", "d3", "d6", "d19"];

export default function Home() {
  const featured = DISHES.filter((d) => FEATURED_IDS.includes(d.id));

  return (
    <>
      <Hero />

      <section className="relative py-24 md:py-32 bg-ivory jali-bg">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <span data-reveal className="eyebrow text-terracotta text-xs md:text-sm">
              Our Statement
            </span>
            <p
              data-reveal
              className="mt-6 font-display text-2xl sm:text-3xl md:text-4xl leading-snug text-ink text-balance"
            >
              India is not one cuisine. It is nine, forty, a hundred — each shaped by its own
              rivers, courts, and kitchens. Ananta exists to hold that plurality with
              <span className="italic text-terracotta"> honesty</span>, not to flatten it into one
              idea of what "Indian food" should taste like.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative bg-ivory pb-24 md:pb-32">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid md:grid-cols-12 gap-10 items-center">
          <ScrollReveal className="md:col-span-5 relative order-2 md:order-1">
            <div data-reveal className="relative aspect-[4/5] overflow-hidden">
              <img
                src="/welcome.png"
                alt="Ananta restaurant chef and staff welcoming guests in an Indian heritage dining space"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <ArchFrame className="absolute -bottom-10 -right-10 w-32 h-44 opacity-40 hidden md:block" />
          </ScrollReveal>

          <ScrollReveal className="md:col-span-7 md:pl-8 order-1 md:order-2">
            <div data-reveal>
              <SectionHeading
                eyebrow="Welcome to Ananta"
                title="A house built on inheritance, not imitation."
              />
            </div>
            <p data-reveal className="mt-6 text-ink/70 leading-relaxed text-base md:text-lg max-w-xl">
              Ananta — meaning "the infinite" — opened in 2019 with a single premise: that India's
              culinary traditions deserve the same reverence given to French or Japanese haute
              cuisine, served without compromise, and without translation for unfamiliar palates.
            </p>
            <p data-reveal className="mt-4 text-ink/60 leading-relaxed max-w-xl">
              Every dish on our table can be traced to a region, a technique, and often a single
              family recipe — researched, apprenticed, and carried into our kitchen with intention.
            </p>
            <Link
              data-reveal
              to="/about"
              className="mt-8 inline-flex items-center gap-3 text-terracotta uppercase text-sm tracking-widest link-underline"
            >
              Our Full Story &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative bg-charcoal py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <SectionHeading
              eyebrow="From the Kitchen"
              title="Signature Dishes"
              light
              description="A selection of the plates our guests return for — each one a doorway into a different region of India."
            />
            <Link
              to="/menu"
              className="shrink-0 inline-flex items-center gap-3 text-gold-light uppercase text-sm tracking-widest link-underline"
            >
              View Full Menu &rarr;
            </Link>
          </div>
          <ScrollReveal
            as="div"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            stagger={0.1}
          >
            {featured.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="relative bg-maroon text-ivory py-24 md:py-32 overflow-hidden">
        <PaisleyMotif className="absolute -top-10 -left-10 w-40 h-56 opacity-10 rotate-12" fill="#F6EFE4" />
        <PaisleyMotif className="absolute -bottom-10 -right-10 w-40 h-56 opacity-10 -rotate-12" fill="#F6EFE4" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <span data-reveal className="eyebrow text-gold-light text-xs md:text-sm">
              The Signature Experience
            </span>
            <h2 data-reveal className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-balance">
              The Ananta Tasting Journey
            </h2>
            <p data-reveal className="mt-6 text-ivory/75 leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
              An eight-course procession through India's coastline, courts and deserts — narrated
              tableside by our culinary team, paired with spice-forward drinks, and closed with a
              ceremonial pour of masala chai from a century-old brass kettle.
            </p>
            <div data-reveal className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" /> 8 Courses
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" /> 2.5 Hours
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" /> ₹4,200 per guest
              </span>
            </div>
            <Link
              data-reveal
              to="/reservations"
              className="mt-10 inline-flex items-center gap-3 border border-gold-light text-gold-light px-8 py-4 text-sm uppercase tracking-widest hover:bg-gold-light hover:text-maroon transition-colors duration-300"
            >
              Reserve the Tasting Journey
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <SectionHeading
              eyebrow="A Journey Across States"
              title="Nine Regions, One Table"
              description="Each region at Ananta is treated as its own cuisine — distinct spice logic, technique, and story."
            />
            <Link
              to="/cuisine"
              className="shrink-0 inline-flex items-center gap-3 text-terracotta uppercase text-sm tracking-widest link-underline"
            >
              Explore Our Cuisine &rarr;
            </Link>
          </div>
          <ScrollReveal
            as="div"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"
            stagger={0.08}
          >
            {REGIONS.slice(0, 4).map((region) => (
              <CuisineCard key={region.id} region={region} onSelect={() => {}} />
            ))}
          </ScrollReveal>
        </div>
      </section>

      <ChefSection />

      <section className="relative bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <SectionHeading
              eyebrow="Inside Ananta"
              title="Gallery"
              description="Food, craft, and the quiet architectural details that shape the room."
            />
            <Link
              to="/gallery"
              className="shrink-0 inline-flex items-center gap-3 text-terracotta uppercase text-sm tracking-widest link-underline"
            >
              Full Gallery &rarr;
            </Link>
          </div>
          <Gallery items={GALLERY.slice(0, 6)} />
        </div>
      </section>

      <section className="relative bg-ink py-24 md:py-32 jali-bg">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="Guest Words" title="What They Remember" align="center" light />
          <div className="mt-16">
            <TestimonialCarousel testimonials={TESTIMONIALS} />
          </div>
        </div>
      </section>

      <section className="relative bg-terracotta py-24 md:py-32 overflow-hidden">
        <BorderRule className="absolute top-0 left-0 w-full h-4 opacity-40" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <span className="eyebrow text-ivory/80 text-xs md:text-sm">Join Us</span>
          <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl text-ivory leading-tight text-balance">
            Your table is being kept warm.
          </h2>
          <p className="mt-5 text-ivory/85 max-w-xl mx-auto leading-relaxed">
            Reservations are recommended two weeks in advance for weekend dining, and one week
            ahead for the Tasting Journey.
          </p>
          <Link
            to="/reservations"
            className="mt-10 inline-flex items-center gap-3 bg-ink text-ivory px-10 py-4 text-sm uppercase tracking-widest hover:bg-charcoal transition-colors duration-300"
          >
            Reserve a Table
          </Link>
        </div>
        <BorderRule className="absolute bottom-0 left-0 w-full h-4 opacity-40 rotate-180" />
      </section>
    </>
  );
}
