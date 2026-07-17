import { User, Phone, MapPin, PhoneCall, Mail, Clock } from 'lucide-react';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal inline-flex items-center gap-2 rounded-full bg-accent-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Contact
          </span>
          <h2 className="reveal reveal-delay-1 mt-5 text-3xl font-semibold leading-tight tracking-tight text-primary sm:text-4xl lg:text-[2.75rem]">
            Get In Touch
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-base text-ink/70">
            We'd love to hear from you. Send us a message or call directly — we respond fast.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <div className="reveal space-y-4">
              <div className="glass rounded-3xl p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <User className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink/55">
                      Contact Person
                    </p>
                    <p className="mt-1 text-base font-semibold text-primary">Ms. Maria Ahmad</p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-3xl p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink/55">
                      Telephone
                    </p>
                    <a
                      href="tel:+60192282166"
                      className="mt-1 block text-base font-semibold text-primary transition-colors hover:text-secondary"
                    >
                      +60 19-2282166
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass rounded-3xl p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink/55">
                      Address
                    </p>
                    <address className="mt-1 not-italic text-sm leading-relaxed text-ink/75">
                      PT20347K, Taman Permint Perdana Fasa 3,<br />
                      Seberang Takir, Kuala Terengganu, Malaysia
                    </address>
                  </div>
                </div>
              </div>

              <div className="glass rounded-3xl p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink/55">
                      Business Hours
                    </p>
                    <p className="mt-1 text-sm text-ink/75">Mon – Sat · 9:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>

              <a
                href="tel:+60192282166"
                className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-glow"
              >
                <PhoneCall className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                Call Ms. Maria Ahmad
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="reveal reveal-delay-2 glass rounded-[2rem] p-7 shadow-soft sm:p-10">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-soft">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-primary">Send Us a Message</h3>
                  <p className="text-xs text-ink/60">We'll reply within one business day</p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
