import { Award, BadgeCheck, Headphones, Tag } from 'lucide-react';

const FEATURES = [
  {
    icon: Award,
    title: 'Premium Quality',
    desc: 'Only the finest batik textiles make it to our customers — carefully selected for excellence.',
  },
  {
    icon: BadgeCheck,
    title: 'Authentic Malaysian Batik',
    desc: 'Genuine craftsmanship rooted in Malaysian heritage and traditional techniques.',
  },
  {
    icon: Headphones,
    title: 'Fast Customer Service',
    desc: 'Responsive, friendly support from our dedicated team whenever you need us.',
  },
  {
    icon: Tag,
    title: 'Competitive Pricing',
    desc: 'Premium products at fair, competitive prices for both local and international buyers.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="relative bg-gradient-to-b from-cream to-accent-100/40 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal inline-flex items-center gap-2 rounded-full bg-accent-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Why Choose Us
          </span>
          <h2 className="reveal reveal-delay-1 mt-5 text-3xl font-semibold leading-tight tracking-tight text-primary sm:text-4xl lg:text-[2.75rem]">
            The Nadi Tulin Difference
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-base text-ink/70">
            Four reasons customers trust us with their batik needs.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <article
                key={f.title}
                className={`reveal reveal-delay-${i + 1} group glass rounded-3xl p-7 text-center shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-soft`}
              >
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-soft transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-primary">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{f.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
