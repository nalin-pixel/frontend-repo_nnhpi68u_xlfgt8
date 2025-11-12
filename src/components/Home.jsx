import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#0b0b0b]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-28 pb-16 grid md:grid-cols-2 items-center gap-8">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-semibold leading-tight text-white"
          >
            Hi, I’m <span className="text-emerald-400">Jayvee</span>
            <br /> a Front‑End Developer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}
            className="mt-4 text-lg text-gray-300 max-w-xl"
          >
            I craft sleek, modern web experiences with a focus on performance, accessibility, and delightful micro‑interactions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
            className="mt-8 flex gap-3"
          >
            <a
              href="#projects"
              className="px-5 py-3 rounded-md bg-emerald-500 text-black font-medium shadow-[0_0_40px_6px_rgba(16,185,129,0.45)] hover:bg-emerald-400 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-md border border-emerald-400/50 text-emerald-300 hover:text-emerald-200 hover:border-emerald-300/60 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute -inset-20 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.18),transparent_50%)]" />
    </section>
  );
}
