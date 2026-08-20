import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";
import ChefSection from "../components/ChefSection";
import Timeline from "../components/Timeline";
import { TIMELINE } from "../data/content";
import { ArchFrame, MandalaMotif } from "../components/DecorativePattern";

export default function About() {
  return (
    <>
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 bg-ink text-ivory overflow-hidden">
        <MandalaMotif className="absolute -right-20 -top-20 w-72 h-72 opacity-10" stroke="#E0C289" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="eyebrow text-gold-light text-xs md:text-sm">Our Story</span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl leading-tight text-balance">
            An Inheritance, Not an Invention
          </h1>
          <p className="mt-6 text-ivory/70 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
            Ananta was never conceived as a restaurant concept. It began as a promise — to carry a
            grandmother's recipes, and the recipes of a hundred other kitchens across India, into a
            room worthy of them.
          </p>
        </div>
      </section>

      <section className="relative bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center">
          <ScrollReveal className="md:col-span-6 relative">
            <div data-reveal className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop"
                alt="Whole spices sorted in brass trays at dawn"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <ArchFrame className="absolute -top-10 -left-10 w-28 h-40 opacity-30 hidden md:block" />
          </ScrollReveal>
          <ScrollReveal className="md:col-span-6">
            <div data-reveal>
              <SectionHeading eyebrow="Origins" title="It began in a notebook, not a business plan." />
            </div>
            <p data-reveal className="mt-6 text-ink/70 leading-relaxed">
              In 1978, Kamla Rao began recording her recipes in a set of spiral notebooks in
              Jaipur — laal maas, dal baati, and a hundred small techniques she had learned from her
              own mother. Those notebooks passed to her grandson, Aarav, who taught himself to cook
              from their fading ink.
            </p>
            <p data-reveal className="mt-4 text-ink/60 leading-relaxed">
              What started as an attempt to preserve one family's Rajasthani cooking became, over
              two decades, a mission to do the same for every region willing to share its kitchen
              with him.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative bg-forest text-ivory py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeading eyebrow="Philosophy" title="Authenticity is a discipline, not a decoration." align="center" light />
          <div className="mt-14 grid sm:grid-cols-3 gap-10 text-left">
            {[
              {
                title: "Regional Integrity",
                text: "We never blend regional techniques for convenience. A Chettinad masala is ground the Chettinad way, every time.",
              },
              {
                title: "Traceable Ingredients",
                text: "Our spice is sourced directly from farming cooperatives in Kerala, Rajasthan and the Northeast — never a generic blend.",
              },
              {
                title: "Apprenticed Technique",
                text: "Every cook on our line has trained under a regional specialist, not simply studied a recipe card.",
              },
            ].map((item) => (
              <div key={item.title} data-reveal>
                <h3 className="font-display text-xl text-gold-light">{item.title}</h3>
                <p className="mt-3 text-ivory/70 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ChefSection />

      <section className="relative bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center">
          <ScrollReveal className="md:col-span-6 order-2 md:order-1">
            <div data-reveal>
              <SectionHeading
                eyebrow="Atithi Devo Bhava"
                title="'The guest is God' — an ancient phrase, still our operating principle."
              />
            </div>
            <p data-reveal className="mt-6 text-ink/70 leading-relaxed">
              This Sanskrit maxim, drawn from the Taittiriya Upanishad, has guided Indian
              hospitality for millennia. At Ananta, it shapes something concrete: a host team
              trained to remember names and preferences, a kitchen that will always accommodate a
              dietary need, and a room designed so no guest ever waits to be welcomed.
            </p>
          </ScrollReveal>
          <ScrollReveal className="md:col-span-6 order-1 md:order-2 relative">
            <div data-reveal className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1200&auto=format&fit=crop"
                alt="Ananta's dining room, warmly lit with brass fixtures"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative bg-charcoal text-ivory py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading eyebrow="History" title="How We Got Here" light />
          <div className="mt-16">
            <Timeline items={TIMELINE} light />
          </div>
        </div>
      </section>
    </>
  );
}
