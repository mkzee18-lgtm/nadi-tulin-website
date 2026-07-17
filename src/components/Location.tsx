import { MapPin } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="relative bg-gradient-to-b from-accent-100/40 to-cream py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal inline-flex items-center gap-2 rounded-full bg-accent-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Location
          </span>
          <h2 className="reveal reveal-delay-1 mt-5 text-3xl font-semibold leading-tight tracking-tight text-primary sm:text-4xl lg:text-[2.75rem]">
            Our Location
          </h2>
          <p className="reveal reveal-delay-2 mt-4 flex items-center justify-center gap-2 text-base text-ink/70">
            <MapPin className="h-4 w-4 text-secondary" />
            Kuala Terengganu, Malaysia
          </p>
        </div>

        <div className="reveal reveal-delay-3 mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-primary/10">
          <iframe
            title="Nadi Tulin Enterprise location map"
            src="https://www.google.com/maps?q=Seberang+Takir+Kuala+Terengganu+Malaysia&output=embed"
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
          />
        </div>
      </div>
    </section>
  );
}
