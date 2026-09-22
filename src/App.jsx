import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Projects from "./components/Projects";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Projects />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}