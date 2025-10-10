import { GraduationCap, Code, Shield, Brain } from "lucide-react";
import { Card } from "./ui/card";

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Visão Estratégica",
      description: "Pós-graduação em GSI aplicada à segurança"
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Desenvolvimento Robusto",
      description: "Back-End com foco em performance"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Defesa Proativa",
      description: "Detecção de vulnerabilidades e conformidade"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: "Pesquisa & Inovação",
      description: "Artigos publicados em revistas científicas"
    }
  ];

  return (
    <section id="about" className="section-spacing">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-up">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              <span className="text-primary font-semibold">Dados contam histórias. Eu traduzo essas histórias em segurança.</span>
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Minha jornada começou com a curiosidade de entender como sistemas funcionam e evoluiu para a missão de protegê-los. 
              Formada em <span className="text-primary font-semibold">Análise e Desenvolvimento de Sistemas</span> e 
              pós-graduada em <span className="text-primary font-semibold">Gestão de Sistemas da Informação (GSI)</span> pelo IFSP Guarulhos, 
              encontrei na interseção entre análise de dados e cibersegurança o espaço perfeito para transformar informação em confiança.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Trabalho com <span className="text-primary font-semibold">Back-End</span> (Java, C#, Python, TypeScript), 
              automação industrial, metodologias ágeis e LGPD — sempre buscando o equilíbrio entre inovação tecnológica e proteção robusta. 
              Já publiquei dois artigos acadêmicos que refletem meu compromisso com pesquisa aplicada e impacto social.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Acredito que segurança não é apenas sobre prevenir ataques, mas sobre construir confiança. 
              E é essa visão que guia cada projeto, análise e linha de código que produzo.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-scale-in">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="card-gradient p-6 hover-glow border-border"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
