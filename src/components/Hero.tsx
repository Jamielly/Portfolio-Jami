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
        <p className="text-lg text-accent mb-4 uppercase tracking-wider font-semibold">
          Análise de Dados, IA e Cibersegurança
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
          Transformo Dados em <span className="gradient-text">Estratégia e Escudos</span> de Proteção.
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Olá! Sou Jami, uma Analista de Dados e Guardiã Ciber em formação. Minha missão é aplicar o rigor da ciência para extrair insights valiosos, construir modelos de IA e fortalecer a segurança de sistemas.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg hover-glow"
            onClick={() => scrollToSection("projects")}
          >
            Ver Estudos de Caso
          </Button>
          <a 
            href="/docs/Jamielly_Reis_Curriculo.pdf"
            download
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-11 px-8 py-6 text-lg border border-primary text-foreground hover:bg-primary/10 font-semibold"
          >
            Baixar CV
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <ChevronDown className="w-8 h-8 text-primary cursor-pointer" onClick={() => scrollToSection("about")} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
