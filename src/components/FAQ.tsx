import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'What makes Nadi Tulin batik sarongs premium?',
    a: 'Our sarongs are crafted using high-quality fabrics and authentic Malaysian batik techniques. Each piece undergoes strict quality control to ensure vibrant colors, durable material, and traditional craftsmanship.',
  },
  {
    q: 'Do you ship internationally?',
    a: 'Yes. We supply batik sarongs both locally within Malaysia and internationally. We have shipped to over 15 countries worldwide. Contact us for shipping details and rates to your location.',
  },
  {
    q: 'Can I order in bulk for my business?',
    a: 'Absolutely. We work with boutiques, retailers, and fashion designers. We offer competitive pricing for bulk orders. Reach out to Ms. Maria Ahmad at +60 19-2282166 to discuss your requirements.',
  },
  {
    q: 'How do I care for my batik sarong?',
    a: 'We recommend hand-washing in cold water with mild detergent, avoiding direct sunlight when drying, and ironing on the reverse side to preserve the vibrant batik colors and fabric quality.',
  },
  {
    q: 'Are your batik products authentically Malaysian?',
    a: 'Yes, all our batik sarongs are authentically Malaysian, crafted using traditional techniques that preserve Malaysian heritage. We are committed to keeping this cultural art form alive.',
  },
  {
    q: 'How can I contact Nadi Tulin Enterprise?',
    a: 'You can reach Ms. Maria Ahmad at +60 19-2282166, use the contact form on this page, or visit us at PT20347K, Taman Permint Perdana Fasa 3, Seberang Takir, Kuala Terengganu, Malaysia.',
  },
];

function FaqItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`reveal reveal-delay-${(index % 4) + 1} overflow-hidden rounded-2xl glass shadow-card transition-all duration-300 hover:shadow-soft`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-primary sm:text-base">{faq.q}</span>
        <span
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>
      <div
        className={`grid transition-all duration-400 ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-ink/75">{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <span className="reveal inline-flex items-center gap-2 rounded-full bg-accent-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            FAQ
          </span>
          <h2 className="reveal reveal-delay-1 mt-5 text-3xl font-semibold leading-tight tracking-tight text-primary sm:text-4xl lg:text-[2.75rem]">
            Frequently Asked Questions
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-base text-ink/70">
            Everything you need to know about our batik products.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {FAQS.map((f, i) => (
            <FaqItem key={f.q} faq={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
