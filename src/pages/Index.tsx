import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";
import AdditionalResources from "@/components/AdditionalResources";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Interests />
      <Contact />
      <AdditionalResources />
      <Footer />
    </div>
  );
};

export default Index;
