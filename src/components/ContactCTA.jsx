import React from 'react';
import { Mail } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section id="contact" className="relative w-full bg-[#0a0a0a] py-24 text-white">
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-10 text-center backdrop-blur">
        <h2 className="text-3xl font-semibold">Let’s build something remarkable</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/80">
          I’m open to collaborations, freelance work, and interesting conversations about product, design, and engineering.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black shadow-lg transition hover:opacity-90"
          >
            <Mail size={18} /> Email me
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            View résumé
          </a>
        </div>
      </div>
      <footer className="mx-auto mt-10 max-w-4xl px-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Your Name. Built with care.
      </footer>
    </section>
  );
};

export default ContactCTA;
