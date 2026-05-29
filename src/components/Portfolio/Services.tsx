import { motion } from "framer-motion";
import { Code2, Layout, ShoppingBag, CloudLightning } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Conversion-Driven UI/UX design",
    desc: "Interfaces designed with intent. Every pixel is optimized to guide user behavior, reduce friction, and increase retention",
  },
  {
    icon: Code2,
    title: "Frontend development",
    desc: "Production-ready React, TypeScript and Tailwind architecture — clean, scalable, beautifully animated.",
  },
  {
    icon: CloudLightning,
    title: "High-converting landing pages",
    desc: "Strategic landing pages and marketing sites built for startups, service providers and agencies. Designed to articulate your value proposition and predictably acquire high-ticket clients..",
  },
  {
    icon: ShoppingBag,
    title: "eCommerce Development",
    desc: "Custom online stores engineered for speed and conversion. Built with robust frontend architecture to ensure your store scales effortlessly, and predictably turns traffic into revenue.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-amber-300/80 mb-4">
              Services
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight max-w-2xl leading-[1.05]">
              What I help{" "}
              <span className="italic font-serif text-white/70">
                brands & businesses
              </span>{" "}
              with.
            </h2>
          </div>
          <p className="text-white/55 max-w-sm">
            From the first wireframe to the final deploy, I build digital
            infrastructure designed to drive business growth and bring your web
            products to life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group bg-black p-8 sm:p-10 hover:bg-white/[0.03] transition-colors duration-500"
            >
              <div className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-300 group-hover:bg-amber-300/10 group-hover:border-amber-300/30 transition-all">
                <s.icon size={18} />
              </div>
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
