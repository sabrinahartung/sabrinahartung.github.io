import { useEffect } from "react";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";
import { useHashRoute } from "./hooks/useHashRoute";

export default function App() {
  const route = useHashRoute();

  // Keep scroll position sensible across route changes:
  //  - detail page → jump to top
  //  - home with a section anchor (#projects, …) → scroll to that section
  //  - home with no anchor → top
  useEffect(() => {
    if (route.name === "project") {
      window.scrollTo(0, 0);
      return;
    }
    const id = window.location.hash.replace(/^#/, "");
    if (id && !id.startsWith("/")) {
      // Wait a frame so the section is mounted before scrolling to it.
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView();
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [route]);

  return (
    <>
      <Background />
      <Navbar />
      {route.name === "project" ? (
        <ProjectDetail slug={route.slug} />
      ) : (
        <main>
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>
      )}
      <Footer />
    </>
  );
}
