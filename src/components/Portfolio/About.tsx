import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-slate-950">
            <img
              src="/Portrait.jpg"
              alt="Jesse Adesoji"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-black/50 border border-white/10 p-4">
              <div className="text-[10px] uppercase tracking-widest text-white/50">
                Currently
              </div>
              <div className="text-sm text-white mt-1">
                Designing & building from Lagos / remote
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-7"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-amber-300/80 mb-4">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.1]">
            A frontend developer who treats the web like a{" "}
            <span className="italic font-serif text-white/70">
              business tool
            </span>
            .
          </h2>
          <div className="mt-8 space-y-5 text-white/65 leading-relaxed max-w-xl">
            <p>
              I&apos;m Jesse Adesoji, a frontend developer and creative
              technologist who treats web developmment as a high-performance
              business tool focused on building fast, modern and visually
              refined digital experiences. I work at the intersection of design
              and engineering, helping brands and businesses turn ideas into
              polished web products that feel intentional at every touchpoint.
            </p>
            <p>
              My toolkit includes React, TypeScript, Tailwind and Framer Motion,
              with a strong focus on clean frontend architecture, performance
              and motion-driven UI.
            </p>
            <p>
              My core stack centers on React, TypeScript, Tailwind, and Next.js.
              However, my real value lies in my systems-first methodology
            </p>
            {/* <p>
              When I&apos;m not building, I&apos;m studying motion design,
              writing about craft, or mentoring junior devs entering the
              industry.
            </p> */}
          </div>

          {/* <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-md">
            {[
              ["React", "TypeScript"],
              ["Tailwind", "Framer Motion"],
              ["Next.js", "Node.js"],
            ].map((row, i) => (
              <div key={i} className="space-y-2">
                {row.map((t) => (
                  <div
                    key={t}
                    className="text-sm text-white/70 border-l border-amber-300/40 pl-3"
                  >
                    {t}
                  </div>
                ))}
              </div>
            ))}
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
