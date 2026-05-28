import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20"
    >
      {/* gradient backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.6))]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:60px_60px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 w-full">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-white/70 backdrop-blur"
        >
          <Sparkles size={12} className="text-amber-300" />
          Available for new projects — Q3 2026
        </motion.div> */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 text-[2.6rem] sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-white leading-[1.02]"
        >
          Digital experiences for
          <br />
          brands that{" "}
          <span className="italic font-serif bg-gradient-to-r from-amber-200 via-amber-300 to-orange-400 bg-clip-text text-transparent">
            refuse
          </span>{" "}
          to
          <br />
          look ordinary.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 max-w-xl text-base sm:text-lg text-white/60 leading-relaxed"
        >
          Your digital product shouldn't just look premium, it needs to perform like it. I engineer high-converting, blazing-fast web experiences that capture attention, build immediate trust, and turn visitors into customers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3.5 text-sm font-medium hover:bg-amber-200 transition-all duration-300 shadow-[0_10px_40px_rgba(255,255,255,0.15)]"
          >
            View open projects
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 text-white px-6 py-3.5 text-sm font-medium hover:bg-white/5 transition-all duration-300"
          >
            Start a Project
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl border-t border-white/5 pt-10"
        >
          {[
            ["6+", "Years building"],
            ["40+", "Projects shipped"],
            ["100%", "Client retention"],
            ["12", "Industries served"],
          ].map(([k, v]) => (
            <div key={v}>
              <div className="text-2xl sm:text-3xl font-light text-white">
                {k}
              </div>
              <div className="text-xs text-white/50 mt-1 tracking-wide uppercase">
                {v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
