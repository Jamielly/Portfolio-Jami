import { Card } from "./ui/card";
import { Briefcase, GraduationCap, Award, FileText } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Pós-Graduação em Gestão de Sistemas da Informação (GSI)",
      organization: "IFSP Guarulhos",
      period: "Em andamento",
      description: "Aprofundamento em gestão estratégica de TI, governança de dados, segurança da informação e liderança em transformação digital — unindo visão de negócio e expertise técnica.",
      type: "education"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Análise e Desenvolvimento de Sistemas",
      organization: "FATEC Guarulhos",
      period: "Conclusão: 2023.2",
      description: "Formação completa em desenvolvimento de software, arquitetura de sistemas, banco de dados e metodologias ágeis — com ênfase em soluções escaláveis e seguras.",
      type: "education"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Técnico em Automação Industrial",
      organization: "IFSP Guarulhos",
      period: "Conclusão: 2022.1",
      description: "Base técnica em automação, programação de PLCs, sistemas SCADA e controle de processos — onde começou minha jornada na interseção entre hardware e software.",
      type: "education"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Desenvolvimento Back-End & APIs",
      organization: "Experiência Profissional",
      period: "Múltiplos projetos",
      description: "Criação de sistemas robustos e escaláveis com Java, C#, Python e TypeScript. Arquitetura de microsserviços, integração de APIs e otimização de performance em ambientes de produção.",
      type: "work"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Automação Industrial & Sistemas Embarcados",
      organization: "Experiência Técnica",
      period: "Diversos projetos",
      description: "Programação de PLCs, desenvolvimento de interfaces SCADA e implementação de soluções que conectam chão de fábrica a sistemas de gestão — aumentando eficiência operacional.",
      type: "work"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Artigo: Defasagem Escolar e Impacto na Vida Acadêmica",
      organization: "RGTI - Revista Guarulhos de Tecnologia da Informação",
      period: "Publicado",
      description: "Análise estatística com grandes volumes de dados educacionais para compreender fatores de risco e propor políticas públicas baseadas em evidências — impacto mensurável na educação.",
      type: "publication"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Artigo: Inovação em Captação de Recursos para ONGs",
      organization: "Revista EXATECCA IV - IFSP Guarulhos",
      period: "Publicado",
      description: "Pesquisa aplicada sobre otimização de processos no terceiro setor usando análise de dados, automação e inteligência de negócios — modelo replicável para instituições sem fins lucrativos.",
      type: "publication"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certificações & Treinamentos em Segurança",
      organization: "TryHackMe, PortSwigger Web Security Academy",
      period: "Contínuo",
      description: "Formação prática avançada em pentest, exploração de vulnerabilidades OWASP Top 10, análise de malware e defesa proativa — mantendo-me atualizada com as ameaças mais recentes.",
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
            Trajetória & Conquistas
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg">
            Educação sólida, experiência prática e contribuições para a comunidade técnica
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
