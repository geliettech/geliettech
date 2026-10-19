import { FaArrowUp, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-card/70 py-8 md:py-10">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-5 px-4 md:px-8">
        <div className="text-left">
          <p className="font-semibold">Ogechi Juliet Uhegbu</p>
          <p className="mt-1 text-xs text-muted-foreground">
            © 2023 - 2026 · Designed and built with care.❤️
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/geliettech"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="rounded-full border border-border p-3 text-muted-foreground transition hover:border-primary hover:text-primary"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="#hero"
            aria-label="Back to top"
            className="rounded-xl bg-primary p-3 text-primary-foreground transition hover:-translate-y-1 hover:bg-accent"
          >
            <FaArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
