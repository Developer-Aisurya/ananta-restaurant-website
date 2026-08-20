import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { CornerOrnament } from "./DecorativePattern";

export default function ChefSection({ compact = false }) {
  return (
    <section className="relative bg-charcoal text-ivory py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid md:grid-cols-2 gap-14 md:gap-20 items-center">
        <ScrollReveal className="relative order-2 md:order-1">
          <div data-reveal className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1200&auto=format&fit=crop"
              alt="Chef Aarav Rao plating a dish at the tandoor line"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <CornerOrnament className="absolute -top-6 -left-6 w-20 h-20 rotate-0 hidden md:block" stroke="#C79A4B" />
          <CornerOrnament className="absolute -bottom-6 -right-6 w-20 h-20 rotate-180 hidden md:block" stroke="#C79A4B" />
        </ScrollReveal>

        <ScrollReveal className="order-1 md:order-2">
          <div data-reveal>
            <SectionHeading
              eyebrow="Executive Chef"
              title="Aarav Rao"
              light
            />
          </div>
          <p data-reveal className="mt-6 text-ivory/75 leading-relaxed text-base md:text-lg">
            Raised in his grandmother's Jaipur kitchen, Chef Aarav spent eighteen months travelling
            across nine Indian states — apprenticing under home cooks, temple kitchens, and the last
            khansamas of royal courts — before opening Ananta's doors.
          </p>
          <p data-reveal className="mt-4 text-ivory/60 leading-relaxed text-base">
            "I don't cook Indian food. I cook Rajasthan, and then I cook Kerala, and then Bengal —
            each on its own terms, the way it was taught to me by the people who inherited it."
          </p>
          {!compact && (
            <div data-reveal className="mt-8 flex gap-10">
              <div>
                <span className="font-display text-3xl text-gold-light">9</span>
                <p className="text-xs uppercase tracking-wide text-ivory/50 mt-1">States Studied</p>
              </div>
              <div>
                <span className="font-display text-3xl text-gold-light">21</span>
                <p className="text-xs uppercase tracking-wide text-ivory/50 mt-1">Years Cooking</p>
              </div>
              <div>
                <span className="font-display text-3xl text-gold-light">6</span>
                <p className="text-xs uppercase tracking-wide text-ivory/50 mt-1">Dining Awards</p>
              </div>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
