import { createRoute } from "@tanstack/react-router";
import { Route as RootRoute } from "./__root";

import { Nav } from "@/components/Portfolio/Nav";
import { Hero } from "@/components/Portfolio/Hero";
import { Services } from "@/components/Portfolio/Services";
import { Projects } from "@/components/Portfolio/Projects";
import { Process } from "@/components/Portfolio/Process";
import { About } from "@/components/Portfolio/About";
import { Contact } from "@/components/Portfolio/Contact";
import { Footer } from "@/components/Portfolio/Footer";
import { WhatsAppWidget } from "@/components/Portfolio/WhatsAppWidget";
import { ScrollToTop } from "@/components/Portfolio/ScrollToTop";

function Index() {
  return (
    <div
      className="min-h-screen bg-black text-white antialiased selection:bg-amber-300 selection:text-black"
      style={{ scrollBehavior: "smooth" }}
    >
      <Nav />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
      <ScrollToTop />
    </div>
  );
}

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: "/",
  component: Index,

  head: () => ({
    title: "Jesse Adesoji — Frontend Developer & Creative Technologist",
    meta: [
      {
        name: "description",
        content:
          "Jesse Adesoji is a frontend developer and creative technologist building fast, modern, conversion-focused websites with React, Tailwind, and Framer Motion.",
      },
      {
        property: "og:title",
        content: "Jesse Adesoji — Frontend Developer",
      },
      {
        property: "og:description",
        content:
          "Premium frontend craft for brands that refuse to look ordinary.",
      },
    ],
  }),
});
