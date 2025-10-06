const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Jami. Todos os direitos reservados.
        </p>
        <p className="text-muted-foreground/60 text-sm mt-2">
          Desenvolvido com React, TypeScript e Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
