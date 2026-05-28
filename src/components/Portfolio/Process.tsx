import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Discovery & Strategy",
    desc: "We start with a deep call to understand your goals, audience and project scope. I establish a crystal-clear technical brief so we build exactly what your business needs to win.",
  },
  {
    n: "02",
    title: "High-Fidelity Prototyping",
    desc: "We map out user flows and craft high-end UI prototypes. You see exactly how the product will look, feel, and convert before a single line of code is written.",
  },
  {
    n: "03",
    title: "Build",
    desc: "The design is translated into clean, responsive React and Tailwind code. Built for speed, flawless responsiveness, accessibility, and long-term maintainability.",
  },
  {
    n: "04",
    title: "Launch & care",
    desc: "We deploy seamlessly. I don't just hand over code and vanish, you get a polished digital asset and a technical partner committed to your platform's success.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-28 sm:py-36 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-amber-300/80 mb-4">
              Process
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight max-w-2xl leading-[1.05]">
              No guesswork, <br /> no missed deadlines, and
              <span className="italic font-serif text-white/70">
                {" "}
                absolutely no scope creep
              </span>
              .
            </h2>
          </div>
          <p className="text-white/55 max-w-sm">
            I follow a structured, systems-driven approach to get your product or store to market efficiently.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-black p-8 lg:p-10 hover:bg-white/[0.03] transition-colors"
            >
              <div className="text-xs text-amber-300/80 font-mono">{s.n}</div>
              <h3 className="mt-6 text-xl text-white font-medium">{s.title}</h3>
              <p className="mt-3 text-sm text-white/55 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
