import { Card } from "./ui/card";
import { BookOpen, Globe, Lightbulb, Code2, Shield, TrendingUp } from "lucide-react";

const Interests = () => {
  const interests = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Arquitetura de Sistemas",
      description: "Construir soluções escaláveis que unem elegância técnica e impacto real"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança Proativa",
      description: "Antecipar ameaças e criar camadas de defesa inteligentes"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Storytelling com Dados",
      description: "Revelar narrativas ocultas em números e transformá-las em decisão"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Inovação Responsável",
      description: "Explorar tecnologias emergentes com ética e propósito social"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Mentalidade de Crescimento",
      description: "Aprender todos os dias — de código a liderança, de IA a pessoas"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Conexões Globais",
      description: "Compartilhar conhecimento além de fronteiras, culturas e idiomas"
    }
  ];

  return (
    <section id="interests" className="section-spacing">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            O Que Me Move
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg">
            Paixões que moldam minha jornada na tecnologia e guiam minhas escolhas profissionais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <Card
              key={index}
              className="card-gradient p-8 hover-glow border-border text-center group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4 text-primary group-hover:scale-110 transition-transform">
                {interest.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {interest.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {interest.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
