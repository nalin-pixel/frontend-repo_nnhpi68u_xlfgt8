import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Neon Dashboard',
    desc: 'A real‑time analytics dashboard with glowing accents and fluid charts.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Interactive 3D Landing',
    desc: 'Spline‑powered hero with buttery parallax and scroll‑based animation.',
    tech: ['React', 'Spline', 'GSAP'],
    demo: '#',
    github: '#',
  },
  {
    title: 'AI Components Kit',
    desc: 'Composable UI building blocks tailored for AI products and chat UIs.',
    tech: ['React', 'shadcn/ui', 'Vite'],
    demo: '#',
    github: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-[#0c0c0c]">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.18),transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold text-white"
        >
          Featured Projects
        </motion.h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="group rounded-xl border border-emerald-400/20 bg-gradient-to-br from-zinc-900/60 to-black p-5 hover:border-emerald-400/40 transition-colors shadow-[0_0_30px_rgba(16,185,129,0.05)] hover:shadow-[0_0_50px_rgba(16,185,129,0.2)]"
            >
              <h3 className="text-white font-medium text-lg">{p.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-400/20">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.demo} className="inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200">
                  <ExternalLink size={16} /> Demo
                </a>
                <a href={p.github} className="inline-flex items-center gap-1 text-gray-300 hover:text-white">
                  <Github size={16} /> Code
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
