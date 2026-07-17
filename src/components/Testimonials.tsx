import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Aishah Rahman',
    role: 'Boutique Owner, KL',
    rating: 5,
    text: 'The quality of Nadi Tulin\'s batik sarongs is unmatched. My customers always come back asking for more. Truly premium craftsmanship.',
    initial: 'A',
  },
  {
    name: 'James Tan',
    role: 'Fashion Designer',
    rating: 5,
    text: 'As a designer, I rely on consistent, high-quality textiles. Nadi Tulin delivers every time. The colors are vibrant and the fabric is superb.',
    initial: 'J',
  },
  {
    name: 'Siti Nurhaliza',
    role: 'Retailer, Singapore',
    rating: 5,
    text: 'Fast customer service and competitive pricing. I\'ve been importing their sarongs for two years now and never been disappointed.',
    initial: 'S',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal inline-flex items-center gap-2 rounded-full bg-accent-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Testimonials
          </span>
          <h2 className="reveal reveal-delay-1 mt-5 text-3xl font-semibold leading-tight tracking-tight text-primary sm:text-4xl lg:text-[2.75rem]">
            What Our Customers Say
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-base text-ink/70">
            Trusted by retailers, designers, and batik lovers worldwide.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className={`reveal reveal-delay-${i + 1} group relative flex flex-col rounded-3xl glass p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-soft`}
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-accent-300/60" aria-hidden="true" />

              <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="h-4.5 w-4.5 fill-secondary text-secondary" />
                ))}
              </div>

              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-ink/80">
                "{t.text}"
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-primary/10 pt-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-lg font-semibold text-white shadow-soft">
                  {t.initial}
                </span>
                <div>
                  <p className="text-sm font-semibold text-primary">{t.name}</p>
                  <p className="text-xs text-ink/60">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
