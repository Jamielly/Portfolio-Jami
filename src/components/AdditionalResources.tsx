import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Download, Youtube, FileText, ExternalLink } from "lucide-react";

const AdditionalResources = () => {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Outros Interesses e Materiais
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Bloco 1 - Currículo */}
          <Card className="card-gradient p-8 border-border hover-glow animate-fade-in-up flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                <Download className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Baixe meu Currículo</h3>
            </div>
            <p className="text-muted-foreground mb-6 flex-grow">
              Conheça mais sobre minha trajetória profissional e acadêmica em formato PDF.
            </p>
            <div className="space-y-3">
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover-glow"
              >
                <a href="/docs/Jamielly Reis_Curriculo.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </Button>
              <a
                href="/docs/Jamielly Reis_Curriculo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm text-primary hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                Visualizar online
              </a>
            </div>
          </Card>

          {/* Bloco 2 - YouTube */}
          <Card className="card-gradient p-8 border-border hover-glow animate-fade-in-up flex flex-col" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                <Youtube className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Meu Canal de Estudos</h3>
            </div>
            <p className="text-muted-foreground mb-6 flex-grow">
              Compartilho reflexões, aprendizados e experiências da minha jornada no mundo da tecnologia e da cibersegurança. Ainda em crescimento, mas com muito conteúdo vindo por aí!
            </p>
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover-glow"
            >
              <a
                href="https://www.youtube.com/channel/UCYaWrmozMN48G_Z76H45RWg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="w-4 h-4 mr-2" />
                Acessar Canal
              </a>
            </Button>
          </Card>

          {/* Bloco 3 - DIO */}
          <Card className="card-gradient p-8 border-border hover-glow animate-fade-in-up flex flex-col" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Perfil na DIO</h3>
            </div>
            <p className="text-muted-foreground mb-6 flex-grow">
              Aqui publico resumos dos meus estudos, projetos e artigos sobre tecnologia, IA e segurança da informação.
            </p>
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover-glow"
            >
              <a
                href="https://www.dio.me/users/jamielly_reis"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="w-4 h-4 mr-2" />
                Visitar Perfil
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdditionalResources;
