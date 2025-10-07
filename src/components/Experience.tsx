import { Card } from "./ui/card";
import { Briefcase, GraduationCap, Award, FileText } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Pós-Graduação em Gestão de Sistemas da Informação (GSI)",
      organization: "IFSP Guarulhos",
      period: "Em andamento",
      description: "Especialização em gestão estratégica de TI, governança de dados, segurança da informação e transformação digital.",
      type: "education"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Análise e Desenvolvimento de Sistemas",
      organization: "FATEC Guarulhos",
      period: "Conclusão: 2023.2",
      description: "Graduação focada em desenvolvimento de software, banco de dados, engenharia de software e gestão de projetos.",
      type: "education"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Técnico em Automação Industrial",
      organization: "IFSP Guarulhos",
      period: "Conclusão: 2022.1",
      description: "Formação técnica em automação industrial, programação de PLCs, sistemas SCADA e controle de processos.",
      type: "education"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Desenvolvimento Back-End",
      organization: "Experiência Profissional",
      period: "Múltiplos projetos",
      description: "Desenvolvimento de sistemas robustos utilizando Java, C#, Python e TypeScript. Integração de APIs e arquitetura de microsserviços.",
      type: "work"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Automação Industrial",
      organization: "Experiência Técnica",
      period: "Diversos projetos",
      description: "Programação e configuração de PLCs, desenvolvimento de sistemas SCADA e otimização de processos industriais.",
      type: "work"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Artigo: Defasagem Escolar",
      organization: "Publicação Acadêmica",
      period: "Publicado",
      description: "Pesquisa sobre defasagem escolar com análise de dados educacionais e propostas de intervenção baseadas em evidências.",
      type: "publication"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Artigo: Inovação na Captação de Recursos",
      organization: "Publicação Acadêmica",
      period: "Publicado",
      description: "Estudo sobre otimização de processos de captação de recursos utilizando análise de dados e automação.",
      type: "publication"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certificações em Cibersegurança",
      organization: "TryHackMe & PortSwigger",
      period: "Contínuo",
      description: "Laboratórios práticos em penetration testing, análise de vulnerabilidades e segurança de aplicações web.",
      type: "certification"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "education": return "border-l-blue-500";
      case "work": return "border-l-green-500";
      case "publication": return "border-l-purple-500";
      case "certification": return "border-l-orange-500";
      default: return "border-l-primary";
    }
  };

  return (
    <section id="experience" className="section-spacing bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Experiência & Formação
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg">
            Trajetória acadêmica, profissional e publicações
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className={`card-gradient p-6 hover-glow border-l-4 ${getTypeColor(exp.type)} animate-slide-in-right`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <span className="text-sm text-primary">{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground font-medium mb-2">
                      {exp.organization}
                    </p>
                    <p className="text-muted-foreground/80 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
