import { CheckCircle2 } from 'lucide-react';

const POINTS = [
  'Premium-grade batik textiles',
  'Preserving Malaysian heritage',
  'Local & international supply',
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="reveal relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-primary/10 lg:ml-0">
              <img
                src="https://images.pexels.com/photos/6313434/pexels-photo-6313434.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Artisan crafting traditional Malaysian batik"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative frame */}
            <div className="pointer-events-none absolute -bottom-4 -right-4 h-32 w-32 rounded-3xl border-2 border-dashed border-secondary/40" aria-hidden="true" />
            <div className="glass absolute -top-5 -left-5 hidden rounded-2xl px-5 py-3 shadow-soft sm:block">
              <p className="text-2xl font-semibold text-primary">10+</p>
              <p className="text-xs uppercase tracking-wider text-ink/60">Years of craft</p>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span className="reveal inline-flex items-center gap-2 rounded-full bg-accent-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              About Us
            </span>
            <h2 className="reveal reveal-delay-1 mt-5 text-3xl font-semibold leading-tight tracking-tight text-primary sm:text-4xl lg:text-[2.75rem]">
              About Nadi Tulin Enterprise
            </h2>
            <p className="reveal reveal-delay-2 mt-5 text-base leading-relaxed text-ink/75">
              Nadi Tulin Enterprise is a Malaysian company specializing in supplying
              high-quality Batik Sarongs. We are committed to preserving Malaysian
              heritage while providing premium textile products to customers locally
              and internationally.
            </p>

            <ul className="reveal reveal-delay-3 mt-7 space-y-3">
              {POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-secondary" />
                  <span className="text-sm font-medium text-ink/80">{point}</span>
                </li>
              ))}
            </ul>

            <div className="reveal reveal-delay-4 mt-8 grid grid-cols-3 gap-4">
              {[
                { value: '100%', label: 'Authentic' },
                { value: 'Premium', label: 'Materials' },
                { value: 'Global', label: 'Shipping' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="glass rounded-2xl px-4 py-4 text-center shadow-card transition-transform duration-300 hover:-translate-y-1"
                >
                  <p className="text-lg font-semibold text-primary">{s.value}</p>
                  <p className="mt-0.5 text-xs uppercase tracking-wider text-ink/55">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
