import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Estudos em Inteligência Artificial e Atualidades",
      description: "Análise avançada em cibersegurança aplicada à inteligência artificial. Estudo sobre vulnerabilidades em sistemas de IA, governança de dados e ética em segurança digital.",
      technologies: ["Python", "Cybersecurity", "AI Security", "Research"],
      results: "Pesquisa acadêmica sobre segurança em sistemas de inteligência artificial",
      link: "https://github.com/Jamielly/Analise_CyberSegurity"
    },
    {
      title: "Laboratórios TryHackMe",
      description: "Exploração prática de vulnerabilidades de segurança através de cenários realistas. Análise de sistemas, detecção de falhas e elaboração de relatórios técnicos detalhados com foco em pentesting e OSINT.",
      technologies: ["Penetration Testing", "Linux", "Network Security", "OSINT"],
      results: "Múltiplos labs completados com relatórios de vulnerabilidades e recomendações de segurança",
      link: "https://github.com/Jamielly"
    },
    {
      title: "Defasagem Escolar no Andamento da Vida Acadêmica",
      description: "Análise sobre impacto da defasagem escolar na motivação e desempenho dos alunos utilizando grandes volumes de dados educacionais. Visualizações interativas e insights para políticas públicas educacionais.",
      technologies: ["Python", "Pandas", "Matplotlib", "Statistics"],
      results: "Artigo publicado na RGTI Fatec Guarulhos",
      link: "https://rgti.fatecguarulhos.edu.br/ojs33/index.php/rgti/article/view/62"
    },
    {
      title: "Laboratórios PortSwigger Web Security Academy",
      description: "Estudos avançados em segurança de aplicações web. Exploração prática de vulnerabilidades OWASP Top 10, incluindo SQL Injection, XSS, CSRF, autenticação quebrada e controle de acesso.",
      technologies: ["Web Security", "Burp Suite", "SQL Injection", "XSS"],
      results: "Certificações em múltiplos módulos de segurança web e práticas de hacking ético",
      link: "https://github.com/Jamielly"
    },
    {
      title: "Sistema de Automação Industrial",
      description: "Desenvolvimento de sistemas de controle e monitoramento para automação industrial utilizando PLCs e SCADA. Integração com sistemas de gestão empresarial e otimização de processos produtivos.",
      technologies: ["PLCs", "SCADA", "C#", "Industrial Protocols"],
      results: "Sistema implementado com aumento de 30% em eficiência operacional",
      link: "https://github.com/Jamielly"
    },
    {
      title: "Inovação em Captação de Recursos",
      description: "Projeto inovador para otimização de processos de captação de recursos em instituições sem fins lucrativos. Análise de dados, automação de workflows e inteligência de negócios aplicada ao terceiro setor.",
      technologies: ["Data Analysis", "Process Automation", "Business Intelligence"],
      results: "Artigo publicado na Revista EXATECCA IV - IFSP Guarulhos",
      link: "https://revista.gru.ifsp.edu.br/exatecca/article/view/265"
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
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Projeto
                  </a>
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
