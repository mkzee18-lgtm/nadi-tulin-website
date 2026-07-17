import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '60192282166';

type Status = 'idle' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in your name, email, and message.');
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!emailOk) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    const lines = [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      form.phone.trim() ? `Phone: ${form.phone.trim()}` : null,
      '',
      form.message.trim(),
    ].filter(Boolean);

    const text = encodeURIComponent(
      `Hello Nadi Tulin Enterprise, I'd like to inquire:\n\n${lines.join('\n')}`,
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');

    setStatus('success');
    setForm({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setStatus('idle'), 6000);
  };

  const inputClass =
    'w-full rounded-2xl border border-primary/15 bg-white/70 px-4 py-3 text-sm text-ink placeholder-ink/40 outline-none transition-all duration-300 focus:border-primary/40 focus:bg-white focus:ring-2 focus:ring-primary/15';

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-xs font-semibold text-ink/70">
            Full Name <span className="text-secondary">*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            value={form.name}
            onChange={update('name')}
            placeholder="Your name"
            className={inputClass}
            required
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-xs font-semibold text-ink/70">
            Email <span className="text-secondary">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            value={form.email}
            onChange={update('email')}
            placeholder="you@example.com"
            className={inputClass}
            required
            autoComplete="email"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-phone" className="mb-1.5 block text-xs font-semibold text-ink/70">
          Phone <span className="text-ink/40">(optional)</span>
        </label>
        <input
          id="cf-phone"
          type="tel"
          value={form.phone}
          onChange={update('phone')}
          placeholder="+60 12-345 6789"
          className={inputClass}
          autoComplete="tel"
        />
      </div>

      <div>
        <label htmlFor="cf-message" className="mb-1.5 block text-xs font-semibold text-ink/70">
          Message <span className="text-secondary">*</span>
        </label>
        <textarea
          id="cf-message"
          rows={4}
          value={form.message}
          onChange={update('message')}
          placeholder="Tell us about your inquiry or order..."
          className={`${inputClass} resize-none`}
          required
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          {errorMsg}
        </div>
      )}

      {status === 'success' && (
        <div className="flex items-center gap-2 rounded-2xl bg-green-50 px-4 py-3 text-sm text-green-700">
          <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
          Opening WhatsApp with your message... Thank you for reaching out!
        </div>
      )}

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
      >
        <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
        Send via WhatsApp
      </button>

      <p className="text-center text-xs text-ink/50">
        Your message will open in WhatsApp — no account needed to send.
      </p>
    </form>
  );
}
