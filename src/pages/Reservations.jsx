import SectionHeading from "../components/SectionHeading";
import ReservationForm from "../components/ReservationForm";
import ScrollReveal from "../components/ScrollReveal";
import { ArchFrame } from "../components/DecorativePattern";

export default function Reservations() {
  return (
    <>
      <section className="relative pt-40 pb-16 md:pt-52 md:pb-20 bg-ink text-ivory overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="eyebrow text-gold-light text-xs md:text-sm">Reservations</span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl leading-tight text-balance">
            Reserve Your Table
          </h1>
          <p className="mt-6 text-ivory/70 max-w-2xl mx-auto leading-relaxed">
            We hold every table for fifteen minutes past its reservation time. For parties larger
            than fourteen, please contact us directly to arrange the Jharokha private room.
          </p>
        </div>
      </section>

      <section className="relative bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 grid lg:grid-cols-12 gap-14">
          <ScrollReveal className="lg:col-span-7">
            <div data-reveal>
              <SectionHeading eyebrow="Book Now" title="Tell Us About Your Evening" />
            </div>
            <div data-reveal className="mt-10">
              <ReservationForm />
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-5 relative">
            <div data-reveal className="relative aspect-[4/5] overflow-hidden">
              <img
                src="/src/assets/reservation.png"
                alt="The Jharokha private dining booth at Ananta"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <ArchFrame className="absolute -top-8 -right-8 w-24 h-36 opacity-30 hidden lg:block" />

            <div data-reveal className="mt-8 bg-charcoal text-ivory p-6 md:p-8">
              <h3 className="font-display text-xl mb-4">Good to Know</h3>
              <ul className="space-y-3 text-sm text-ivory/75 leading-relaxed">
                <li>Smart-casual attire; closed-toe shoes requested.</li>
                <li>Vegetarian, Jain, and allergen-specific menus available on request.</li>
                <li>A 20% service charge applies to parties of six or more.</li>
                <li>Complimentary valet parking after 6pm.</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
