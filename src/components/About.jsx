import { motion } from 'framer-motion';

const skills = [
  { title: 'UI Engineering', desc: 'Design systems, accessibility, pixel‑perfect UIs' },
  { title: 'React Mastery', desc: 'Hooks, state machines, performance, SSR' },
  { title: 'Animations', desc: 'Framer Motion, micro‑interactions, 60fps' },
  { title: 'Tooling', desc: 'Vite, Astro, Tailwind, Zustand, Vitest' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold text-white"
        >
          About Me
        </motion.h2>
        <div className="mt-6 grid md:grid-cols-[1.1fr,1fr] gap-10 items-start">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 leading-relaxed"
          >
            I’m a front‑end developer obsessed with crafting immersive, performant interfaces. I enjoy bridging design and code to deliver products that feel fast, polished, and accessible.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {skills.map((s, i) => (
              <div
                key={s.title}
                className="rounded-lg border border-emerald-400/20 bg-gradient-to-br from-zinc-900/60 to-black p-4 shadow-[0_0_30px_rgba(16,185,129,0.05)] hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-shadow"
              >
                <h3 className="text-white font-medium">{s.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{s.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
