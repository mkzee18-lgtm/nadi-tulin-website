import { useState, type FormEvent } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    setErrorMsg('');

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

    const { error } = await supabase.from('contact_inquiries').insert({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      message: form.message.trim(),
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or call us directly.');
      return;
    }

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
          Thank you! Your message has been sent. We'll get back to you soon.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
