export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-white/70 text-sm font-medium tracking-tight text-base">
            Jesse Adesoji<span className="text-amber-300">.</span>
          </span>
          <span className="text-white/70 text-sm">
            Òye Studios
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm text-white/50">
          <a href="#work" className="hover:text-white transition">
            Work
          </a>
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
        <div className="text-xs text-white/40">
          © {new Date().getFullYear()} Jesse Adesoji. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
