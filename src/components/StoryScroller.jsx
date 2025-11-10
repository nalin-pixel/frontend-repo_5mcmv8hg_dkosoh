import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Layers, Cpu, Sparkles } from 'lucide-react';

const Section = ({ icon: Icon, title, text, index }) => {
  return (
    <div className="relative mx-auto max-w-5xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
      >
        <div className="flex items-center gap-3 text-cyan-300">
          <Icon size={22} />
          <span className="text-sm uppercase tracking-widest text-white/70">Chapter {index}</span>
        </div>
        <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">{title}</h3>
        <p className="mt-3 text-white/80">{text}</p>
      </motion.div>
    </div>
  );
};

const ParallaxBackdrop = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -100]);
  const y2 = useTransform(scrollY, [0, 600], [0, -200]);

  return (
    <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
      <motion.div style={{ y: y1 }} className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <motion.div style={{ y: y2 }} className="absolute -right-20 top-80 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
    </div>
  );
};

const StoryScroller = () => {
  return (
    <section id="story" className="relative w-full bg-gradient-to-b from-black to-[#0a0a0a] text-white">
      <ParallaxBackdrop />
      <Section
        icon={Code2}
        title="Foundations: Clean, readable code"
        text="I architect systems with clarity and maintainability in mind, prioritizing performance and developer experience."
        index={1}
      />
      <Section
        icon={Layers}
        title="Interfaces that feel alive"
        text="From micro-interactions to immersive narratives, I build UIs that are delightful and purposeful."
        index={2}
      />
      <Section
        icon={Cpu}
        title="Scalable architecture"
        text="I bring together modern tooling and cloud-native patterns so products grow without friction."
        index={3}
      />
      <div className="mx-auto max-w-5xl px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-8 backdrop-blur"
        >
          <div>
            <h4 className="text-xl font-semibold">Let’s collaborate</h4>
            <p className="mt-1 text-white/80">Have a product in mind? I can help you design, build, and ship it.</p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-black shadow-lg transition hover:opacity-90">
            <Sparkles size={18} /> Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default StoryScroller;
