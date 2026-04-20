import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "About",      href: "#about" },
  { label: "Background", href: "#background" },
  { label: "Travel",     href: "#travel" },
  { label: "Books",      href: "#books" },
];

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-background/75 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-foreground" />
          <span>tomas partman</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-underline text-foreground/70 hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden sm:inline-flex h-9 items-center rounded-full border border-foreground px-4 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Get in touch
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
