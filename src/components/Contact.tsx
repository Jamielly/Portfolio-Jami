import { Card } from "./ui/card";
import { Linkedin, Github } from "lucide-react";

const Contact = () => {

  return (
    <section id="contact" className="section-spacing bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Vamos Construir Algo Juntos?
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg">
            Quer proteger seus dados ou transformá-los em insights estratégicos? Me encontre nas redes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Card className="card-gradient p-8 border-border hover-glow animate-fade-in-up">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold mb-2">LinkedIn</h4>
                <p className="text-sm text-muted-foreground mb-2">Conecte-se comigo profissionalmente</p>
                <a 
                  href="https://www.linkedin.com/in/jamielly-reis/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  linkedin.com/in/jamielly-reis
                </a>
              </div>
            </div>
          </Card>

          <Card className="card-gradient p-8 border-border hover-glow animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold mb-2">GitHub</h4>
                <p className="text-sm text-muted-foreground mb-2">Explore meus projetos e contribuições</p>
                <a 
                  href="https://github.com/Jamielly" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  github.com/Jamielly
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
