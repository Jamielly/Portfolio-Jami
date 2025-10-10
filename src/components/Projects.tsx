import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "IA e Cibersegurança: Vulnerabilidades em Sistemas Inteligentes",
      description: "Desafio: Sistemas de IA enfrentam novas ameaças específicas que demandam análise especializada. Solução: Pesquisa aprofundada sobre vulnerabilidades, governança de dados e ética aplicada à segurança em IA.",
      technologies: ["Python", "Cybersecurity", "AI Security", "Research"],
      results: "Mapeamento de vetores de ataque em sistemas de IA e framework de análise de riscos",
      link: "https://github.com/Jamielly/Analise_CyberSegurity"
    },
    {
      title: "Pentesting Prático: Laboratórios TryHackMe",
      description: "Desafio: Detectar e explorar vulnerabilidades em ambientes realistas. Solução: Execução de cenários de pentest, análise de sistemas, OSINT e documentação técnica detalhada de cada descoberta.",
      technologies: ["Penetration Testing", "Linux", "Network Security", "OSINT"],
      results: "+15 labs concluídos com relatórios técnicos e recomendações de remediação implementáveis",
      link: "https://github.com/Jamielly"
    },
    {
      title: "Análise de Dados Educacionais: Defasagem Escolar",
      description: "Desafio: Compreender o impacto da defasagem escolar no desempenho acadêmico. Solução: Análise estatística de grandes volumes de dados educacionais com visualizações que orientam políticas públicas.",
      technologies: ["Python", "Pandas", "Matplotlib", "Statistics"],
      results: "Artigo publicado na RGTI Fatec Guarulhos - insights aplicados em instituições de ensino",
      link: "https://rgti.fatecguarulhos.edu.br/ojs33/index.php/rgti/article/view/62"
    },
    {
      title: "Segurança Web Avançada: PortSwigger Academy",
      description: "Desafio: Dominar técnicas de exploração das vulnerabilidades OWASP Top 10. Solução: Treinamento prático com Burp Suite explorando SQL Injection, XSS, CSRF e falhas de autenticação em ambientes controlados.",
      technologies: ["Web Security", "Burp Suite", "SQL Injection", "XSS"],
      results: "Certificações em segurança web + metodologia de testes documentada para aplicações reais",
      link: "https://github.com/Jamielly"
    },
    {
      title: "Automação Industrial Inteligente",
      description: "Desafio: Modernizar processos industriais com monitoramento em tempo real. Solução: Desenvolvimento de sistema de controle com PLCs e SCADA integrado a plataformas de gestão empresarial.",
      technologies: ["PLCs", "SCADA", "C#", "Industrial Protocols"],
      results: "Aumento de 30% na eficiência operacional + redução de 40% em tempo de resposta a incidentes",
      link: "https://github.com/Jamielly"
    },
    {
      title: "Captação de Recursos com Inteligência de Dados",
      description: "Desafio: Otimizar processos de captação em ONGs com recursos limitados. Solução: Análise de dados, automação de workflows e dashboard de BI para tomada de decisão estratégica no terceiro setor.",
      technologies: ["Data Analysis", "Process Automation", "Business Intelligence"],
      results: "Artigo publicado na Revista EXATECCA IV (IFSP) - modelo replicável para outras instituições",
      link: "https://revista.gru.ifsp.edu.br/exatecca/article/view/265"
    }
  ];

  return (
    <section id="projects" className="section-spacing">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Projetos & Resultados
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Desafios reais transformados em soluções mensuráveis através de análise de dados, cibersegurança e tecnologia aplicada
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
