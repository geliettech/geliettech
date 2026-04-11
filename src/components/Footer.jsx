import { FaArrowUp } from "react-icons/fa6";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative py-10 md:py-16 bg-card border-t border-border">
      <div className="container mx-auto px-4 md:px-8 flex flex-wrap justify-between items-center">
        <p className="text-xs md:text-sm text-muted-foreground">
        &copy; 2023 - {currentYear} ogechiuhegbu.vercel.app. All rights
        reserved.
      </p>
      <a
        href="#hero"
        className="p-2 md:p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition cursor-pointer"
      >
        <FaArrowUp size={20} />
      </a>
      </div>
      
    </footer>
  );
};

export default Footer;
