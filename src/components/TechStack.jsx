import { motion } from 'framer-motion';
import { ReactLogoIcon } from './icons';
import { Code2, Server, Zap, Cpu, MonitorSmartphone, Database } from 'lucide-react';

const techs = [
  { name: 'React', icon: ReactLogoIcon },
  { name: 'Tailwind', icon: Zap },
  { name: 'TypeScript', icon: Code2 },
  { name: 'Framer Motion', icon: MonitorSmartphone },
  { name: 'Node/Express', icon: Server },
  { name: 'MongoDB', icon: Database },
];

export default function TechStack() {
  return (
    <section id="tech" className="relative py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold text-white"
        >
          Tech Stack
        </motion.h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {techs.map(({ name, icon: Icon }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-lg border border-emerald-400/20 bg-gradient-to-br from-zinc-900/60 to-black p-4 text-center hover:border-emerald-400/40 hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] transition"
            >
              <div className="mx-auto h-10 w-10 text-emerald-300 flex items-center justify-center">
                <Icon size={28} />
              </div>
              <div className="mt-2 text-gray-200 text-sm">{name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
