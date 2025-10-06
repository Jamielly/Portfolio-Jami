import { GraduationCap, Code, Shield, Brain } from "lucide-react";
import { Card } from "./ui/card";

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Gestão de Sistemas da Informação",
      description: "Pós-graduação (GSI) no IFSP Guarulhos"
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Desenvolvimento Back-End",
      description: "Java, C#, Python, TypeScript"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Cibersegurança",
      description: "Análise de vulnerabilidades e LGPD"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: "Publicações Acadêmicas",
      description: "2 artigos publicados"
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
              Formada em <span className="text-primary font-semibold">Análise e Desenvolvimento de Sistemas</span> com pós-graduação 
              em <span className="text-primary font-semibold">Gestão de Sistemas da Informação (GSI)</span> pelo IFSP Guarulhos, 
              especializada em análise de dados e cibersegurança.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Minha trajetória combina <span className="text-primary font-semibold">programação Back-End</span> (Java, C#, Python), 
              automação industrial com PLCs e SCADA, e metodologias ágeis, sempre com foco em segurança da informação e LGPD.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tenho dois artigos acadêmicos publicados: <span className="text-primary font-semibold">"Defasagem Escolar..."</span> e 
              <span className="text-primary font-semibold"> "Uma Inovação na Captação de Recursos..."</span>, 
              refletindo meu compromisso com pesquisa e inovação.
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
