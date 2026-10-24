import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { RiMenu4Fill } from "react-icons/ri";
import ThemeToggle from "../context/ThemeToggle";
import { MenuLinks } from "../hooks/useRoute";
import { projects } from "../constants/data";
import { mobileMenu } from "../animation/motion";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let frameId = 0;
    const updateActiveSection = () => {
      const anchor = window.innerHeight * 0.35;
      let currentSection = "#hero";

      for (const { link } of MenuLinks) {
        const section = document.querySelector(link);
        if (!section) continue;
        const bounds = section.getBoundingClientRect();
        if (bounds.top <= anchor && bounds.bottom > anchor) {
          currentSection = link;
          break;
        }
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        currentSection = MenuLinks[MenuLinks.length - 1].link;
      }
      setActiveSection(currentSection);
    };
    const handleScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const searchResults = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return [];
    const sections = MenuLinks.filter((item) =>
      item.name.toLowerCase().includes(normalizedQuery),
    ).map((item) => ({ ...item, type: "Section" }));
    const matchingProjects = projects
      .filter((project) =>
        project.title.toLowerCase().includes(normalizedQuery),
      )
      .map((project) => ({
        name: project.title,
        link: `/projects/${project.id}`,
        type: "Project",
      }));
    return [...sections, ...matchingProjects].slice(0, 6);
  }, [query]);

  const search = (
    <div className="relative w-full">
      <label className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-muted-foreground focus-within:border-primary">
        <FaMagnifyingGlass aria-hidden="true" size={14} />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => setSearchFocused(true)}
          onBlur={() => window.setTimeout(() => setSearchFocused(false), 120)}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setQuery("");
              setSearchFocused(false);
            }
          }}
          placeholder="Search sections or projects"
          aria-label="Search sections or projects"
          className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
        />
      </label>
      <AnimatePresence>
        {searchFocused && query.trim() && (
          <Motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="absolute left-0 right-0 top-full z-[1001] mt-2 overflow-hidden rounded-xl border border-border bg-background p-2 text-left shadow-xl"
          >
            {searchResults.length ? (
              searchResults.map((result) => (
                <a
                  key={`${result.type}-${result.name}`}
                  href={result.link}
                  onClick={() => {
                    setQuery("");
                    setSearchFocused(false);
                    setOpen(false);
                  }}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-primary/10"
                >
                  <span>{result.name}</span>
                  <span className="text-xs text-muted-foreground">{result.type}</span>
                </a>
              ))
            ) : (
              <p className="px-3 py-2 text-sm text-muted-foreground">
                No matching sections or projects.
              </p>
            )}
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[999] px-3 pt-3 text-foreground transition-all sm:px-5 ${
        sticky ? "py-2" : "py-3"
      }`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto max-w-6xl rounded-2xl border border-border/80 bg-background/90 px-4 shadow-[0_12px_42px_-26px_rgba(14,39,31,0.4)] backdrop-blur-xl md:px-6">
        <div className="flex min-h-12 items-center justify-between gap-4">
          <a href="#hero" className="shrink-0 text-2xl font-bold text-glow md:text-3xl">
            Geliet<span className="text-primary">Tech</span>
          </a>
          <div className="hidden w-full max-w-sm md:block">{search}</div>
          <div className="flex shrink-0 items-center gap-4">
            <ThemeToggle />
            <button
              type="button"
              className="cursor-pointer text-2xl text-foreground md:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
            >
              {open ? <IoIosClose size={32} /> : <RiMenu4Fill size={28} />}
            </button>
          </div>
        </div>

        <div className="mt-3 md:hidden">{search}</div>
        <div className="hidden border-t border-border/70 pt-2 md:block">
          <div className="grid grid-cols-5 justify-items-center gap-x-2 gap-y-0">
            {MenuLinks.map((menu) => (
              <a
                key={menu.link}
                href={menu.link}
                aria-current={activeSection === menu.link ? "location" : undefined}
                onClick={() => setActiveSection(menu.link)}
                className={`rounded-full px-2 py-2 text-[11px] font-semibold tracking-wide transition ${
                  activeSection === menu.link
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {menu.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <Motion.button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-20 z-[998] bg-black/30 md:hidden"
            />
            <Motion.div
              variants={mobileMenu}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute right-0 top-full z-[999] grid w-full grid-cols-2 gap-2 border-t border-border bg-background p-5 shadow-xl md:hidden"
            >
              {MenuLinks.map((menu) => (
                <a
                  key={menu.link}
                  href={menu.link}
                  aria-current={activeSection === menu.link ? "location" : undefined}
                  onClick={() => {
                    setActiveSection(menu.link);
                    setOpen(false);
                  }}
                  className={`rounded-lg px-3 py-3 text-left text-sm font-medium ${
                    activeSection === menu.link
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {menu.name}
                </a>
              ))}
            </Motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
