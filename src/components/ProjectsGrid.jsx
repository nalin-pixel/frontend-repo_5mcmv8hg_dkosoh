import React from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Landing',
    description: 'A Spline-powered hero with smooth scroll storytelling and reactive UI.',
    tags: ['React', 'Spline', 'Framer Motion'],
    links: {
      github: '#',
      live: '#',
    },
  },
  {
    title: 'Realtime Collaboration',
    description: 'WebSockets and CRDTs for seamless multi-user editing experiences.',
    tags: ['FastAPI', 'WebSocket', 'CRDT'],
    links: {
      github: '#',
      live: '#',
    },
  },
  {
    title: 'Design System Kit',
    description: 'A cohesive UI kit with tokens, theming, and accessibility baked in.',
    tags: ['Design System', 'Accessibility', 'Tailwind'],
    links: {
      github: '#',
      live: '#',
    },
  },
];

const ProjectsGrid = () => {
  return (
    <section id="projects" className="relative w-full bg-[#0a0a0a] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <Folder className="text-cyan-300" />
          <h2 className="text-3xl font-semibold">Featured Projects</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <div key={idx} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.08]">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-white/80">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href={p.links.github} aria-label="GitHub" className="rounded-full border border-white/10 p-2 text-white/80 hover:bg-white/10">
                  <Github size={18} />
                </a>
                <a href={p.links.live} aria-label="Live" className="rounded-full border border-white/10 p-2 text-white/80 hover:bg-white/10">
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
