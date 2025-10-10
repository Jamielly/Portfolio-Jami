import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, Calendar, Hash } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      institution: "Ada",
      courses: [
        {
          title: "Elas+ Tech | Data Analytics",
          date: "Out 2025",
          credential: "51a6933b-9485-8af1-20aa-44a5b27f66d3",
          skills: ["Python", "Análise exploratória de dados"]
        },
        {
          title: "Coders 2024 | Engenharia de Dados",
          date: "Jun 2024",
          credential: "c913c155-2b5a-a946-c114-3034b7ba392e",
          skills: ["Análise exploratória de dados"]
        },
        {
          title: "Vem Ser Tech | Back End",
          date: "Mar 2024",
          credential: "Programação de Computadores - Aplicativos Específicos",
          skills: ["Banco de dados", "Desenvolvimento web", "JavaScript"]
        }
      ]
    },
    {
      institution: "Red Hat",
      courses: [
        {
          title: "Red Hat System Administration I (RH124 - RHA) - Ver. 9.3",
          date: "Jun 2025",
          credential: "d2132b55-5e18-41ce-9588-747dfdf874db",
          skills: ["Administração de sistemas Linux", "Automação de processos", "Gestão de servidores"]
        }
      ]
    },
    {
      institution: "Saber Aprendizes",
      courses: [
        {
          title: "Aprendiz em Técnicas Administrativas",
          date: "Abr 2025",
          credential: "2024011097M43QUA440TEV994588",
          skills: ["Gestão de projetos", "Administração"]
        }
      ]
    },
    {
      institution: "Aspire Institute",
      courses: [
        {
          title: "Aspire Leaders Program",
          date: "Fev 2024",
          credential: "Gestão de Pessoas com Ênfase em Liderança Organizacional",
          skills: ["Inglês", "Liderança", "Comunicação"]
        }
      ]
    },
    {
      institution: "Amazon Web Services (AWS)",
      courses: [
        {
          title: "AWS Educate Machine Learning Foundations",
          date: "Nov 2023",
          credential: "",
          skills: ["AWS CloudFormation", "Machine Learning", "Computação em nuvem"]
        },
        {
          title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
          date: "Out 2023",
          credential: "",
          skills: ["AWS CloudFormation", "Cloud Computing", "Infraestrutura em Nuvem"]
        }
      ]
    },
    {
      institution: "DIO (Digital Innovation One)",
      courses: [
        {
          title: "Bootcamp - Desenvolvimento Java com AWS",
          date: "Set 2023",
          credential: "C76D3F3C",
          skills: ["AWS CloudFormation", "Desenvolvimento Java", "Integração de sistemas"]
        }
      ]
    },
    {
      institution: "Instituto PROA",
      courses: [
        {
          title: "Plataforma PROA",
          date: "Ago 2023",
          credential: "9424115015JS",
          skills: ["Fundamentos de Programação", "Soft Skills Profissionais", "Comunicação"]
        }
      ]
    },
    {
      institution: "Instituto Federal de Educação, Ciência e Tecnologia de São Paulo (IFSP)",
      courses: [
        {
          title: "Introdução à Língua Japonesa para Iniciantes 1",
          date: "Jul 2019",
          credential: "",
          skills: ["Cultura japonesa", "Comunicação básica", "Escrita e leitura introdutória"]
        }
      ]
    }
  ];

  return (
    <section id="certifications" className="section-spacing bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Certificações & Cursos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada certificação é mais do que um papel: é um registro do que me move — aprender, testar e construir segurança com propósito.
          </p>
        </div>

        <div className="space-y-8">
          {certifications.map((cert, instIndex) => (
            <div key={instIndex} className="space-y-4">
              <h3 className="text-2xl font-bold text-primary mb-4 animate-fade-in">
                {cert.institution}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {cert.courses.map((course, courseIndex) => (
                  <Card
                    key={courseIndex}
                    className="card-gradient p-6 hover-glow border-border group animate-scale-in"
                    style={{ animationDelay: `${(instIndex * cert.courses.length + courseIndex) * 0.1}s` }}
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                        <Award className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold group-hover:text-primary transition-colors leading-tight">
                          {course.title}
                        </h4>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{course.date}</span>
                      </div>

                      {course.credential && (
                        <div className="flex items-start gap-2 text-xs text-muted-foreground/80">
                          <Hash className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span className="break-all">{course.credential}</span>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 pt-2">
                        {course.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;