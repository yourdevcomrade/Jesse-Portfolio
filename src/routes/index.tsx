import { createRoute } from "@tanstack/react-router";
import { Route as RootRoute } from "./__root";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Services } from "@/components/portfolio/Services";
import { Projects } from "@/components/portfolio/Projects";
import { Process } from "@/components/portfolio/Process";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { WhatsAppWidget } from "@/components/portfolio/WhatsAppWidget";
import { ScrollToTop } from "@/components/portfolio/ScrollToTop";

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: "/",
  component: Index,
  head: () => ({
    meta: [
      { title: "Jesse Adesoji — Frontend Developer & Creative Technologist" },
      {
        name: "description",
        content:
          "Jesse Adesoji is a frontend developer and creative technologist building fast, modern, conversion-focused websites with React, Tailwind, and Framer Motion.",
      },
      { property: "og:title", content: "Jesse Adesoji — Frontend Developer" },
      {
        property: "og:description",
        content:
          "Premium frontend craft for brands that refuse to look ordinary.",
      },
    ],
  }),
});

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
