import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-8 flex items-center justify-between text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <button onClick={backToTop} className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200">
          <ArrowUp size={16} /> Back to Top
        </button>
      </div>
    </footer>
  );
}
