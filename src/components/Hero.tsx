import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse-glow"></div>
        <div className="absolute w-96 h-96 bg-accent/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          Transformo Dados em Segurança
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
          Analista de Dados & Especialista em Cibersegurança
        </p>
        <p className="text-lg md:text-xl text-muted-foreground/80 mb-12 max-w-2xl mx-auto">
          Unindo inteligência analítica e proteção digital para decisões mais confiáveis e sistemas mais seguros
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg hover-glow"
            onClick={() => scrollToSection("projects")}
          >
            Ver Projetos
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-foreground hover:bg-primary/10 font-semibold px-8 py-6 text-lg"
            onClick={() => scrollToSection("contact")}
          >
            Vamos Conversar
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <ChevronDown className="w-8 h-8 text-primary cursor-pointer" onClick={() => scrollToSection("about")} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
