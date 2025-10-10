import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "Java", level: 90, category: "Programação" },
    { name: "Python", level: 85, category: "Programação" },
    { name: "C#", level: 80, category: "Programação" },
    { name: "TypeScript", level: 75, category: "Programação" },
    { name: "Back-End Development", level: 88, category: "Desenvolvimento" },
    { name: "Análise de Dados", level: 92, category: "Análise" },
    { name: "Visualização de Dados", level: 87, category: "Análise" },
    { name: "Cibersegurança", level: 85, category: "Segurança" },
    { name: "LGPD", level: 82, category: "Segurança" },
    { name: "PLCs / SCADA", level: 78, category: "Automação" },
    { name: "Metodologias Ágeis", level: 88, category: "Gestão" },
    { name: "Inteligência Artificial", level: 83, category: "IA" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-spacing bg-secondary/30" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Stack Tecnológica
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg">
            Ferramentas e tecnologias que uso para transformar dados em insights e sistemas em fortalezas
          </p>
        </div>

        <div className="grid gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-foreground">{skill.name}</span>
                <span className="text-primary text-sm">{skill.category}</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
