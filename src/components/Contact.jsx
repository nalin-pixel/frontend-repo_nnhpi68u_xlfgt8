import { motion } from 'framer-motion';
import { Send, Linkedin, Github, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold text-white"
        >
          Get In Touch
        </motion.h2>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <form className="rounded-xl border border-emerald-400/20 p-6 bg-gradient-to-br from-zinc-900/60 to-black">
            <div className="grid gap-4">
              <input type="text" placeholder="Your Name" className="w-full rounded-md bg-black/60 border border-emerald-400/30 focus:border-emerald-400/70 outline-none px-4 py-3 text-gray-200 placeholder:text-gray-500" />
              <input type="email" placeholder="Email" className="w-full rounded-md bg-black/60 border border-emerald-400/30 focus:border-emerald-400/70 outline-none px-4 py-3 text-gray-200 placeholder:text-gray-500" />
              <textarea placeholder="Message" rows="5" className="w-full rounded-md bg-black/60 border border-emerald-400/30 focus:border-emerald-400/70 outline-none px-4 py-3 text-gray-200 placeholder:text-gray-500" />
              <button type="button" className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition-colors shadow-[0_0_40px_6px_rgba(16,185,129,0.25)]">
                <Send size={16} /> Send Message
              </button>
            </div>
          </form>
          <div>
            <p className="text-gray-300">I’m open to freelance work, collaborations, and exciting opportunities. Reach out and let’s build something great.</p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="GitHub" className="text-gray-300 hover:text-white"><Github /></a>
              <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-white"><Linkedin /></a>
              <a href="#" aria-label="Email" className="text-gray-300 hover:text-white"><Mail /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
