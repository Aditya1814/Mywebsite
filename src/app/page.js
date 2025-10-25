import Navbar from "../components/Navbar/navbar";
import Hero from "../components/hero/hero";
import About from "../components/About/about";
import Projects from "../components/Projects/projects";
import Contact from "../components/Contact/contact";
import Skills from "../components/Skills/skills";
export default function Home() {
  return (
    <>
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      </div>
    </>
  );
}