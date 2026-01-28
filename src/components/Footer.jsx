import { ArrowUp } from "lucide-react";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="py-12 px-4 relative bg-card  border-t border-border">
      <div className="container flex flex-wrap justify-between items-center">
        <p className="text-sm text-muted-foreground">
        &copy; 2023 - {currentYear} ogechiuhegbu.vercel.app. All rights
        reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
      </div>
      
    </footer>
  );
};

export default Footer;
