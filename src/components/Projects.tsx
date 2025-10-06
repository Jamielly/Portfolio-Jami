import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "TCC em Inteligência Artificial",
      description: "Análise do impacto da implementação de IA na tomada de decisão em instituições públicas. Estudo aprofundado sobre governança de dados, ética em IA e transformação digital.",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Research"],
      results: "Publicação acadêmica com insights práticos sobre adoção de IA no setor público",
      link: "#"
    },
    {
      title: "Laboratórios TryHackMe",
      description: "Exploração prática de vulnerabilidades de segurança através de cenários realistas. Análise de sistemas, detecção de falhas e elaboração de relatórios técnicos detalhados.",
      technologies: ["Penetration Testing", "Linux", "Network Security", "OSINT"],
      results: "Múltiplos labs completados com relatórios de vulnerabilidades e recomendações",
      link: "#"
    },
    {
      title: "Análise de Dados Educacionais",
      description: "Projeto de análise sobre defasagem escolar utilizando grandes volumes de dados. Visualizações interativas e insights para políticas educacionais.",
      technologies: ["Python", "Pandas", "Matplotlib", "Statistics"],
      results: "Artigo publicado: 'Defasagem Escolar...'",
      link: "#"
    },
    {
      title: "PortSwigger Web Security Academy",
      description: "Estudos avançados em segurança de aplicações web. Exploração de vulnerabilidades OWASP Top 10, incluindo SQL Injection, XSS, CSRF e muito mais.",
      technologies: ["Web Security", "Burp Suite", "SQL Injection", "XSS"],
      results: "Certificações em múltiplos módulos de segurança web",
      link: "#"
    },
    {
      title: "Sistema de Automação Industrial",
      description: "Desenvolvimento de sistemas de controle e monitoramento para automação industrial utilizando PLCs e SCADA. Integração com sistemas de gestão.",
      technologies: ["PLCs", "SCADA", "C#", "Industrial Protocols"],
      results: "Sistema implementado com aumento de 30% em eficiência operacional",
      link: "#"
    },
    {
      title: "Inovação em Captação de Recursos",
      description: "Projeto inovador para otimização de processos de captação de recursos em instituições. Análise de dados e automação de workflows.",
      technologies: ["Data Analysis", "Process Automation", "Business Intelligence"],
      results: "Artigo publicado: 'Uma Inovação na Captação de Recursos...'",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section-spacing">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Projetos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experiências práticas que combinam análise de dados, cibersegurança e desenvolvimento de soluções tecnológicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="card-gradient p-6 hover-glow border-border group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <p className="text-xs text-primary/80 mb-4 italic">
                {project.results}
              </p>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-primary/50 hover:bg-primary/10"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver Mais
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
