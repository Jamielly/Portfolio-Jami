import { Card } from "./ui/card";
import { Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-spacing bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg">
            Vamos conversar sobre tecnologia, dados ou cibersegurança?
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center max-w-2xl mx-auto">
          <Card className="card-gradient p-8 border-border hover-glow flex-1 animate-fade-in-up">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                <Linkedin className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold mb-2 text-xl">LinkedIn</h4>
                <a 
                  href="https://www.linkedin.com/in/jamielly-reis/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  linkedin.com/in/jamielly-reis
                </a>
              </div>
            </div>
          </Card>

          <Card className="card-gradient p-8 border-border hover-glow flex-1 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                <Github className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold mb-2 text-xl">GitHub</h4>
                <a 
                  href="https://github.com/Jamielly" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
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
