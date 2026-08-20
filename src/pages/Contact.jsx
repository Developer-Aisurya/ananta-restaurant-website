import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";
import ContactForm from "../components/ContactForm";
import FaqAccordion from "../components/FaqAccordion";
import { FAQS } from "../data/content";

export default function Contact() {
  return (
    <>
      <section className="relative pt-40 pb-16 md:pt-52 md:pb-20 bg-ink text-ivory overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="eyebrow text-gold-light text-xs md:text-sm">Contact</span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl leading-tight text-balance">
            Find Us, Reach Us
          </h1>
        </div>
      </section>

      <section className="relative bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid lg:grid-cols-12 gap-14">
          <ScrollReveal className="lg:col-span-5">
            <div data-reveal>
              <SectionHeading eyebrow="Details" title="Visit Ananta" />
            </div>

            <dl data-reveal className="mt-8 space-y-6 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-wide text-ink/45 mb-1">Address</dt>
                <dd className="text-ink/75">14 Malabar Terrace, Cuffe Parade, Mumbai 400005</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-ink/45 mb-1">Phone</dt>
                <dd className="text-ink/75">
                  <a href="tel:+912266010143" className="link-underline hover:text-terracotta">
                    +91 22 6601 0143
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-ink/45 mb-1">Email</dt>
                <dd className="text-ink/75">
                  <a href="mailto:reservations@ananta.in" className="link-underline hover:text-terracotta">
                    reservations@ananta.in
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-ink/45 mb-1">Hours</dt>
                <dd className="text-ink/75 space-y-1">
                  <p>Tue – Sun · Lunch 12:00 – 15:00</p>
                  <p>Tue – Sun · Dinner 19:00 – 23:30</p>
                  <p>Monday · Closed</p>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-ink/45 mb-1">Follow</dt>
                <dd className="flex gap-4 text-ink/75">
                  {["Instagram", "Facebook", "X"].map((s) => (
                    <a key={s} href="#" className="link-underline hover:text-terracotta">
                      {s}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>

            <div
              data-reveal
              className="mt-10 aspect-[4/3] bg-charcoal text-ivory/50 flex flex-col items-center justify-center gap-2 relative overflow-hidden"
              role="img"
              aria-label="Map showing Ananta's location in Cuffe Parade, Mumbai"
            >
              <div className="jali-bg absolute inset-0 opacity-20" />
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="relative">
                <path
                  d="M12 22s7-7.58 7-13a7 7 0 10-14 0c0 5.42 7 13 7 13z"
                  stroke="#C79A4B"
                  strokeWidth="1.4"
                />
                <circle cx="12" cy="9" r="2.4" stroke="#C79A4B" strokeWidth="1.4" />
              </svg>
              <span className="relative eyebrow text-xs">Interactive map integration area</span>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-7">
            <div data-reveal>
              <SectionHeading eyebrow="Write to Us" title="Send a Message" />
            </div>
            <div data-reveal className="mt-8">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading eyebrow="Before You Arrive" title="Frequently Asked" align="center" />
          <div className="mt-14">
            <FaqAccordion items={FAQS} />
          </div>
        </div>
      </section>
    </>
  );
}
