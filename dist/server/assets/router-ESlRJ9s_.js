import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createRoute, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, Sparkles, ArrowUpRight, Layout, Code2, Globe, Gauge, Zap, Mail, MapPin, Send, ArrowUp } from "lucide-react";
const appCss = "/assets/styles-DtRhqEoG.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Jesse Adesoji — Frontend Developer" },
      { name: "description", content: "Premium frontend craft for brands that refuse to look ordinary." },
      { name: "author", content: "Jesse Adesoji" },
      { property: "og:title", content: "Jesse Adesoji — Frontend Developer" },
      { property: "og:description", content: "Premium frontend craft for brands that refuse to look ordinary." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@JesseAdesoji" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    motion.header,
    {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, ease: "easeOut" },
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-xl bg-black/60 border-b border-white/5" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxs("nav", { className: "mx-auto max-w-7xl px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("a", { href: "#home", className: "flex items-center gap-2 group", children: /* @__PURE__ */ jsxs("span", { className: "text-white font-medium tracking-tight text-lg", children: [
            "Jesse Adesoji",
            /* @__PURE__ */ jsx("span", { className: "text-amber-300", children: "." })
          ] }) }),
          /* @__PURE__ */ jsx("ul", { className: "hidden md:flex items-center gap-9", children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: l.href,
              className: "text-sm text-white/60 hover:text-white transition-colors duration-300",
              children: l.label
            }
          ) }, l.href)) }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#contact",
              className: "hidden md:inline-flex items-center gap-2 rounded-full bg-white text-black text-sm px-5 py-2.5 font-medium hover:bg-amber-200 transition-all duration-300 shadow-[0_8px_30px_rgba(255,255,255,0.12)]",
              children: "Let's Talk"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              "aria-label": "Menu",
              className: "md:hidden text-white p-2",
              onClick: () => setOpen((v) => !v),
              children: open ? /* @__PURE__ */ jsx(X, { size: 22 }) : /* @__PURE__ */ jsx(Menu, { size: 22 })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            className: "md:hidden bg-black/90 border-t border-white/5 backdrop-blur-xl",
            children: /* @__PURE__ */ jsxs("ul", { className: "px-6 py-6 space-y-4", children: [
              links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                "a",
                {
                  onClick: () => setOpen(false),
                  href: l.href,
                  className: "block text-white/80 text-base",
                  children: l.label
                }
              ) }, l.href)),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                "a",
                {
                  onClick: () => setOpen(false),
                  href: "#contact",
                  className: "inline-flex items-center rounded-full bg-white text-black text-sm px-5 py-2.5 font-medium",
                  children: "Let's Talk"
                }
              ) })
            ] })
          }
        )
      ]
    }
  );
}
function Hero() {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "home",
      className: "relative min-h-screen flex items-center overflow-hidden pt-28 pb-20",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.18),transparent_55%)]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.18),transparent_55%)]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.6))]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:60px_60px]" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 w-full", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-white/70 backdrop-blur",
              children: [
                /* @__PURE__ */ jsx(Sparkles, { size: 12, className: "text-amber-300" }),
                "Available for new projects — Q3 2026"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.h1,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.1 },
              className: "mt-8 text-[2.6rem] sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-white leading-[1.02]",
              children: [
                "Frontend craft for",
                /* @__PURE__ */ jsx("br", {}),
                "brands that",
                " ",
                /* @__PURE__ */ jsx("span", { className: "italic font-serif bg-gradient-to-r from-amber-200 via-amber-300 to-orange-400 bg-clip-text text-transparent", children: "refuse" }),
                " ",
                "to",
                /* @__PURE__ */ jsx("br", {}),
                "look ordinary."
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7, delay: 0.25 },
              className: "mt-8 max-w-xl text-base sm:text-lg text-white/60 leading-relaxed",
              children: "I'm Jesse Adesoji — a frontend developer & creative technologist building fast, premium digital products with React, Tailwind, and an obsession for detail."
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7, delay: 0.35 },
              className: "mt-10 flex flex-wrap items-center gap-4",
              children: [
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "#work",
                    className: "group inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3.5 text-sm font-medium hover:bg-amber-200 transition-all duration-300 shadow-[0_10px_40px_rgba(255,255,255,0.15)]",
                    children: [
                      "View my work",
                      /* @__PURE__ */ jsx(
                        ArrowUpRight,
                        {
                          size: 16,
                          className: "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#contact",
                    className: "inline-flex items-center gap-2 rounded-full border border-white/15 text-white px-6 py-3.5 text-sm font-medium hover:bg-white/5 transition-all duration-300",
                    children: "Get in touch"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 1, delay: 0.6 },
              className: "mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl border-t border-white/5 pt-10",
              children: [
                ["6+", "Years building"],
                ["40+", "Projects shipped"],
                ["100%", "Client retention"],
                ["12", "Industries served"]
              ].map(([k, v]) => /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-2xl sm:text-3xl font-light text-white", children: k }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-white/50 mt-1 tracking-wide uppercase", children: v })
              ] }, v))
            }
          )
        ] })
      ]
    }
  );
}
const services = [
  {
    icon: Layout,
    title: "Web design & UI",
    desc: "Modern, conversion-focused interfaces designed with intention — every pixel earning its place."
  },
  {
    icon: Code2,
    title: "Frontend development",
    desc: "Production-grade React, TypeScript and Tailwind builds — clean, scalable, beautifully animated."
  },
  {
    icon: Globe,
    title: "Marketing sites & landing pages",
    desc: "High-converting websites for startups, agencies and personal brands. Built to win clients."
  },
  {
    icon: Sparkles,
    title: "Creative interactions",
    desc: "Framer Motion, GSAP, micro-interactions and motion language that makes your product feel alive."
  },
  {
    icon: Gauge,
    title: "Performance & SEO",
    desc: "Lighthouse 95+, semantic markup and Core Web Vitals tuned for search and speed."
  },
  {
    icon: Zap,
    title: "Rapid prototyping",
    desc: "From idea to clickable prototype in days — perfect for validating before you scale."
  }
];
function Services() {
  return /* @__PURE__ */ jsx("section", { id: "services", className: "relative py-28 sm:py-36", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.2em] uppercase text-amber-300/80 mb-4", children: "— Services" }),
        /* @__PURE__ */ jsxs("h2", { className: "text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight max-w-2xl leading-[1.05]", children: [
          "What I help",
          " ",
          /* @__PURE__ */ jsx("span", { className: "italic font-serif text-white/70", children: "ambitious teams" }),
          " ",
          "ship."
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-white/55 max-w-sm", children: "From the first wireframe to the final deploy — I handle the full craft of bringing modern web products to life." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5", children: services.map((s, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.5, delay: i * 0.05 },
        className: "group bg-black p-8 sm:p-10 hover:bg-white/[0.03] transition-colors duration-500",
        children: [
          /* @__PURE__ */ jsx("div", { className: "h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-300 group-hover:bg-amber-300/10 group-hover:border-amber-300/30 transition-all", children: /* @__PURE__ */ jsx(s.icon, { size: 18 }) }),
          /* @__PURE__ */ jsx("h3", { className: "mt-6 text-xl text-white font-medium", children: s.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-white/55 leading-relaxed", children: s.desc })
        ]
      },
      s.title
    )) })
  ] }) });
}
const projects = [
  {
    name: "NextHaven Realty",
    category: "Real estate platform",
    year: "2025",
    desc: "A premium property discovery experience with map-led search, saved listings and a high-end editorial aesthetic.",
    tags: ["React", "Next.js", "Mapbox", "Tailwind"],
    gradient: "from-indigo-500/30 via-blue-500/20 to-cyan-400/30"
  },
  {
    name: "Bloom Montessori",
    category: "Education / Montessori school",
    year: "2025",
    desc: "Warm, playful and trustworthy site for a Montessori school — admissions flows, curriculum pages and parent stories.",
    tags: ["React", "Framer Motion", "CMS", "SEO"],
    gradient: "from-amber-400/30 via-orange-400/20 to-rose-400/30"
  },
  {
    name: "Raeset Autos",
    category: "Automotive / Car dealership",
    year: "2025",
    desc: "A sleek, modern showroom experience for a premium auto dealer — inventory filters, financing calculators, and seamless inquiry flows.",
    tags: ["React", "TypeScript", "Tailwind", "Animations"],
    gradient: "from-emerald-400/30 via-teal-400/20 to-cyan-400/30"
  },
  {
    name: "AquaLuxe Pool Construction Company",
    category: "Construction / Luxury pools",
    year: "2024",
    desc: "An elegant, trust-building site for a luxury pool builder — project galleries, service breakdowns, and an instant quote request system.",
    tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
    gradient: "from-sky-400/30 via-blue-400/20 to-indigo-400/30"
  }
];
function Projects() {
  return /* @__PURE__ */ jsx("section", { id: "work", className: "relative py-28 sm:py-36", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.2em] uppercase text-amber-300/80 mb-4", children: "— Selected work" }),
        /* @__PURE__ */ jsxs("h2", { className: "text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.05]", children: [
          "A handful of",
          " ",
          /* @__PURE__ */ jsx("span", { className: "italic font-serif text-white/70", children: "recent builds" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "#contact",
          className: "text-sm text-white/60 hover:text-white inline-flex items-center gap-1.5 transition",
          children: [
            "Start a project ",
            /* @__PURE__ */ jsx(ArrowUpRight, { size: 14 })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-6", children: projects.map((p, i) => /* @__PURE__ */ jsx(
      motion.a,
      {
        href: "#contact",
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.6, delay: i * 0.08 },
        className: "group relative block overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 sm:p-10 hover:border-white/20 transition-all duration-500",
        children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-8 lg:gap-12 items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-xs text-white/40 tracking-wide uppercase", children: [
              /* @__PURE__ */ jsx("span", { children: String(i + 1).padStart(2, "0") }),
              /* @__PURE__ */ jsx("span", { className: "h-px w-6 bg-white/20" }),
              /* @__PURE__ */ jsx("span", { children: p.year })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "mt-5 text-3xl sm:text-4xl font-light text-white group-hover:text-amber-200 transition-colors", children: p.name }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-white/50", children: p.category }),
            /* @__PURE__ */ jsx("p", { className: "mt-5 text-white/65 leading-relaxed max-w-md", children: p.desc }),
            /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: p.tags.map((t) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "text-[11px] tracking-wide uppercase text-white/50 border border-white/10 rounded-full px-3 py-1",
                children: t
              },
              t
            )) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsxs(
            "div",
            {
              className: `relative aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br ${p.gradient} border border-white/10`,
              children: [
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_50%)]" }),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:40px_40px]" }),
                /* @__PURE__ */ jsxs("div", { className: "absolute bottom-5 left-5 right-5 flex items-end justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2.5", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-widest text-white/60", children: "Case study" }),
                    /* @__PURE__ */ jsx("div", { className: "text-sm text-white font-medium", children: p.name })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "h-11 w-11 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-amber-300 group-hover:rotate-45 transition-all duration-500", children: /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 }) })
                ] })
              ]
            }
          ) })
        ] })
      },
      p.name
    )) })
  ] }) });
}
const steps = [
  {
    n: "01",
    title: "Discovery",
    desc: "We start with a deep call to understand your goals, audience and brand. I leave with a focused brief and a clear scope."
  },
  {
    n: "02",
    title: "Design",
    desc: "Wireframes, then high-fidelity design. Typography, motion language and tone are decided early — no surprises later."
  },
  {
    n: "03",
    title: "Build",
    desc: "Production-grade React + Tailwind. Pixel-perfect, accessible, and tuned for speed across every breakpoint."
  },
  {
    n: "04",
    title: "Launch & care",
    desc: "We ship it, monitor it, and iterate. You get a polished product and a partner who actually answers messages."
  }
];
function Process() {
  return /* @__PURE__ */ jsx("section", { id: "process", className: "relative py-28 sm:py-36 border-y border-white/5", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mb-16", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.2em] uppercase text-amber-300/80 mb-4", children: "— Process" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.05]", children: [
        "A calm, considered",
        " ",
        /* @__PURE__ */ jsx("span", { className: "italic font-serif text-white/70", children: "way of working" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden", children: steps.map((s, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: i * 0.08 },
        className: "bg-black p-8 lg:p-10 hover:bg-white/[0.03] transition-colors",
        children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs text-amber-300/80 font-mono", children: s.n }),
          /* @__PURE__ */ jsx("h3", { className: "mt-6 text-xl text-white font-medium", children: s.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-white/55 leading-relaxed", children: s.desc })
        ]
      },
      s.n
    )) })
  ] }) });
}
function About() {
  return /* @__PURE__ */ jsx("section", { id: "about", className: "relative py-28 sm:py-36", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, x: -30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.7 },
        className: "lg:col-span-5",
        children: /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-amber-300/20 via-orange-400/10 to-rose-500/20", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "text-[8rem] font-serif italic text-white/15 leading-none", children: "JA" }) }),
          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-5 left-5 right-5 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 p-4", children: [
            /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-widest text-white/50", children: "Currently" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-white mt-1", children: "Designing & building from Lagos / remote" })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, delay: 0.15 },
        className: "lg:col-span-7",
        children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.2em] uppercase text-amber-300/80 mb-4", children: "— About" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.1]", children: [
            "A frontend developer who treats the web like a",
            " ",
            /* @__PURE__ */ jsx("span", { className: "italic font-serif text-white/70", children: "creative medium" }),
            "."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 space-y-5 text-white/65 leading-relaxed max-w-xl", children: [
            /* @__PURE__ */ jsx("p", { children: "I'm Jesse Adesoji — a frontend developer and creative technologist with 6+ years of shipping fast, modern, and tasteful digital products. I work with founders, agencies and growing brands who care deeply about how their work feels." }),
            /* @__PURE__ */ jsx("p", { children: "My toolkit is React, TypeScript, Tailwind and Framer Motion — but my real specialty is bridging design and engineering so nothing gets lost between Figma and production." }),
            /* @__PURE__ */ jsx("p", { children: "When I'm not building, I'm studying motion design, writing about craft, or mentoring junior devs entering the industry." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-md", children: [
            ["React", "TypeScript"],
            ["Tailwind", "Framer Motion"],
            ["Next.js", "Node.js"]
          ].map((row, i) => /* @__PURE__ */ jsx("div", { className: "space-y-2", children: row.map((t) => /* @__PURE__ */ jsx(
            "div",
            {
              className: "text-sm text-white/70 border-l border-amber-300/40 pl-3",
              children: t
            },
            t
          )) }, i)) })
        ]
      }
    )
  ] }) });
}
function Contact() {
  const [sent, setSent] = useState(false);
  return /* @__PURE__ */ jsxs("section", { id: "contact", className: "relative py-28 sm:py-36", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(251,191,36,0.12),transparent_60%)]" }) }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "lg:col-span-5",
          children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.2em] uppercase text-amber-300/80 mb-4", children: "— Contact" }),
            /* @__PURE__ */ jsxs("h2", { className: "text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.05]", children: [
              "Let's build",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "italic font-serif text-white/70", children: "something great" }),
              "."
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-6 text-white/60 max-w-md leading-relaxed", children: "Tell me a bit about your project — timeline, scope, and what success looks like. I reply within 24 hours." }),
            /* @__PURE__ */ jsxs("div", { className: "mt-10 space-y-5", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "mailto:hello@jesseadesoji.dev",
                  className: "flex items-center gap-4 text-white/80 hover:text-white group",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "h-10 w-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-amber-300/40 group-hover:text-amber-300 transition", children: /* @__PURE__ */ jsx(Mail, { size: 16 }) }),
                    "hello@jesseadesoji.dev"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-white/80", children: [
                /* @__PURE__ */ jsx("span", { className: "h-10 w-10 rounded-full border border-white/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(MapPin, { size: 16 }) }),
                "Lagos, Nigeria — available worldwide"
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.form,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: 0.1 },
          onSubmit: (e) => {
            e.preventDefault();
            setSent(true);
          },
          className: "lg:col-span-7 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur p-6 sm:p-10 space-y-5",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
              /* @__PURE__ */ jsx(Field, { label: "Name", name: "name", placeholder: "Your name", required: true }),
              /* @__PURE__ */ jsx(
                Field,
                {
                  label: "Email",
                  name: "email",
                  type: "email",
                  placeholder: "you@brand.com",
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              Field,
              {
                label: "Company",
                name: "company",
                placeholder: "Optional"
              }
            ),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-xs uppercase tracking-widest text-white/50 mb-2", children: "Project details" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  required: true,
                  rows: 5,
                  placeholder: "Tell me about your project, goals, and timeline…",
                  className: "w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-amber-300/60 focus:ring-0 outline-none transition resize-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "submit",
                disabled: sent,
                className: "group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-7 py-3.5 text-sm font-medium hover:bg-amber-200 transition-all duration-300 disabled:opacity-60",
                children: [
                  sent ? "Message sent — talk soon" : "Send message",
                  !sent && /* @__PURE__ */ jsx(
                    Send,
                    {
                      size: 15,
                      className: "group-hover:translate-x-0.5 transition-transform"
                    }
                  )
                ]
              }
            )
          ]
        }
      )
    ] })
  ] });
}
function Field({
  label,
  ...props
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { className: "block text-xs uppercase tracking-widest text-white/50 mb-2", children: label }),
    /* @__PURE__ */ jsx(
      "input",
      {
        ...props,
        className: "w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-amber-300/60 focus:ring-0 outline-none transition"
      }
    )
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-white/5 py-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row gap-6 items-center justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxs("span", { className: "text-white/70 text-sm font-medium tracking-tight text-base", children: [
        "Jesse Adesoji",
        /* @__PURE__ */ jsx("span", { className: "text-amber-300", children: "." })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-white/70 text-sm", children: "Frontend & Creative Tech" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 text-sm text-white/50", children: [
      /* @__PURE__ */ jsx("a", { href: "#work", className: "hover:text-white transition", children: "Work" }),
      /* @__PURE__ */ jsx("a", { href: "#about", className: "hover:text-white transition", children: "About" }),
      /* @__PURE__ */ jsx("a", { href: "#contact", className: "hover:text-white transition", children: "Contact" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-xs text-white/40", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Jesse Adesoji. All rights reserved."
    ] })
  ] }) });
}
function WhatsAppWidget() {
  return /* @__PURE__ */ jsxs(
    motion.a,
    {
      href: "https://wa.me/2348000000000?text=Hi%20Jesse%2C%20I%27d%20love%20to%20talk%20about%20a%20project.",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Chat on WhatsApp",
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { delay: 1, type: "spring", stiffness: 200, damping: 18 },
      whileHover: { scale: 1.05 },
      className: "fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 group",
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-emerald-400/40 animate-ping" }),
        /* @__PURE__ */ jsx("span", { className: "relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)]", children: /* @__PURE__ */ jsx(
          "svg",
          {
            viewBox: "0 0 32 32",
            width: "26",
            height: "26",
            fill: "currentColor",
            "aria-hidden": "true",
            children: /* @__PURE__ */ jsx("path", { d: "M19.11 17.39c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.28-.74.91-.9 1.1-.17.19-.33.21-.61.07-.28-.14-1.19-.44-2.26-1.4-.84-.75-1.4-1.67-1.57-1.95-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.48l-.55-.01c-.19 0-.5.07-.76.36-.26.28-1 .98-1 2.39 0 1.41 1.03 2.78 1.17 2.97.14.19 2.02 3.08 4.89 4.32.68.29 1.22.46 1.63.59.69.22 1.32.19 1.81.12.55-.08 1.66-.68 1.9-1.34.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.54-.33zM16.02 5.33C10.16 5.33 5.4 10.09 5.4 15.95c0 1.87.49 3.7 1.43 5.31L5.33 26.67l5.53-1.45a10.6 10.6 0 0 0 5.16 1.31h.01c5.86 0 10.62-4.76 10.62-10.62S21.88 5.33 16.02 5.33zm6.18 16.79a8.78 8.78 0 0 1-6.18 2.55h-.01a8.78 8.78 0 0 1-4.47-1.22l-.32-.19-3.28.86.88-3.2-.21-.33a8.74 8.74 0 0 1-1.34-4.64c0-4.83 3.93-8.77 8.77-8.77 2.34 0 4.54.91 6.19 2.57a8.71 8.71 0 0 1 2.57 6.2c0 4.83-3.93 8.77-8.77 8.77z" })
          }
        ) }),
        /* @__PURE__ */ jsx("span", { className: "hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-black/80 backdrop-blur border border-white/10 px-3.5 py-1.5 text-xs text-white opacity-0 group-hover:opacity-100 transition pointer-events-none", children: "Chat on WhatsApp" })
      ]
    }
  );
}
function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scroll = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return /* @__PURE__ */ jsx(AnimatePresence, { children: visible && /* @__PURE__ */ jsx(
    motion.button,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
      transition: { duration: 0.3 },
      onClick: scroll,
      "aria-label": "Scroll to top",
      className: "fixed bottom-5 left-5 sm:bottom-7 sm:left-7 z-40 h-11 w-11 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white flex items-center justify-center hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg",
      children: /* @__PURE__ */ jsx(ArrowUp, { size: 18 })
    }
  ) });
}
const Route = createRoute({
  getParentRoute: () => Route$1,
  path: "/",
  component: Index,
  head: () => ({
    meta: [
      { title: "Jesse Adesoji — Frontend Developer & Creative Technologist" },
      {
        name: "description",
        content: "Jesse Adesoji is a frontend developer and creative technologist building fast, modern, conversion-focused websites with React, Tailwind, and Framer Motion."
      },
      { property: "og:title", content: "Jesse Adesoji — Frontend Developer" },
      {
        property: "og:description",
        content: "Premium frontend craft for brands that refuse to look ordinary."
      }
    ]
  })
});
function Index() {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "min-h-screen bg-black text-white antialiased selection:bg-amber-300 selection:text-black",
      style: { scrollBehavior: "smooth" },
      children: [
        /* @__PURE__ */ jsx(Nav, {}),
        /* @__PURE__ */ jsxs("main", { children: [
          /* @__PURE__ */ jsx(Hero, {}),
          /* @__PURE__ */ jsx(Services, {}),
          /* @__PURE__ */ jsx(Projects, {}),
          /* @__PURE__ */ jsx(Process, {}),
          /* @__PURE__ */ jsx(About, {}),
          /* @__PURE__ */ jsx(Contact, {})
        ] }),
        /* @__PURE__ */ jsx(Footer, {}),
        /* @__PURE__ */ jsx(WhatsAppWidget, {}),
        /* @__PURE__ */ jsx(ScrollToTop, {})
      ]
    }
  );
}
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
