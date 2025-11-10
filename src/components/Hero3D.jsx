import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowDown, Rocket } from 'lucide-react';

const Hero3D = () => {
  const handleScrollNext = () => {
    const next = document.getElementById('story');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
          <Rocket size={16} className="text-white/70" />
          Building delightful software experiences
        </div>
        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Hi, I’m <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">a Software Developer</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          I craft interactive products with clean code, modern design, and a love for storytelling.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <a
            href="#projects"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black shadow-lg shadow-white/20 transition hover:opacity-90"
          >
            View Projects
          </a>
          <button
            onClick={handleScrollNext}
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Learn my approach
          </button>
        </div>
      </div>

      <button
        onClick={handleScrollNext}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/20 bg-black/40 p-3 text-white/80 backdrop-blur transition hover:bg-white/10"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
};

export default Hero3D;
