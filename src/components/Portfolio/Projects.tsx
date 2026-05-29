import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Raeset Autos",
    category: "Automotive / Car dealership",
    year: "2026",
    desc: "A sleek, modern showroom experience for a premium auto dealer. Inventory filters, and seamless inquiry flows.",
    tags: ["React", "TypeScript", "Tailwind", "Animations"],
    gradient: "from-emerald-400/30 via-teal-400/20 to-cyan-400/30",
  },
  {
    name: "AquaLuxe Pool Construction Company",
    category: "Construction / Luxury pools",
    year: "2026",
    desc: "An elegant, trust-building site for a luxury pool builder. Project galleries, service breakdowns, and an automated response system.",
    tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
    gradient: "from-sky-400/30 via-blue-400/20 to-indigo-400/30",
  },
  {
    name: "NextHaven Realty",
    category: "Real estate platform",
    year: "2025",
    desc: "A premium property discovery experience with map-led search, saved listings and a high-end editorial aesthetic.",
    tags: ["React", "Next.js", "Mapbox", "Tailwind"],
    gradient: "from-indigo-500/30 via-blue-500/20 to-cyan-400/30",
  },
  {
    name: "Bloom Montessori",
    category: "Education / Montessori school",
    year: "2025",
    desc: "Warm, playful and trustworthy site for a Montessori school that contains admissions flows, curriculum pages and parent stories.",
    tags: ["React", "Framer Motion", "CMS", "SEO"],
    gradient: "from-amber-400/30 via-orange-400/20 to-rose-400/30",
  },
];

export function Projects() {
  return (
    <section id="work" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            {/* <p className="text-xs tracking-[0.2em] uppercase text-amber-300/80 mb-4">
              Selected work
            </p> */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.05]">
              A handful of{" "}
              <span className="italic font-serif text-white/70">
                recent projects
              </span>
              .
            </h2>
          </div>
          <a
            href="#contact"
            className="text-sm text-white/60 hover:text-white inline-flex items-center gap-1.5 transition"
          >
            Start a project <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <motion.a
              href="#contact"
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 sm:p-10 hover:border-white/20 transition-all duration-500"
            >
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3 text-xs text-white/40 tracking-wide uppercase">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <span className="h-px w-6 bg-white/20" />
                    <span>{p.year}</span>
                  </div>
                  <h3 className="mt-5 text-3xl sm:text-4xl font-light text-white group-hover:text-amber-200 transition-colors">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-white/50">{p.category}</p>
                  <p className="mt-5 text-white/65 leading-relaxed max-w-md">
                    {p.desc}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] tracking-wide uppercase text-white/50 border border-white/10 rounded-full px-3 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div
                    className={`relative aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br ${p.gradient} border border-white/10`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_50%)]" />
                    <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:40px_40px]" />
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                      <div className="rounded-xl bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2.5">
                        <div className="text-[10px] uppercase tracking-widest text-white/60">
                          Case study
                        </div>
                        <div className="text-sm text-white font-medium">
                          {p.name}
                        </div>
                      </div>
                      <div className="h-11 w-11 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-amber-300 group-hover:rotate-45 transition-all duration-500">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
