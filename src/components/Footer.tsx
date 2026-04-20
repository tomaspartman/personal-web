import { ContactForm } from "./ContactForm";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/tomaspartman/" },
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/tomaspartman/" },
  { label: "GitHub",    href: "https://github.com/tomaspartman" },
  { label: "Twitter",   href: "https://x.com/PartmanTomas" },
  { label: "Facebook",  href: "https://www.facebook.com/tomas.o.partman/" },
];

export const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border bg-background">
      <div className="container py-24 sm:py-32">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow mb-8">Contact me</p>
            <h2 className="display text-display-lg text-balance">
              Send me a message<br />
              <span className="italic text-muted-foreground">
                and I'll get back to you as soon as possible.
              </span>
            </h2>

            <div className="mt-12">
              <p className="eyebrow mb-6">Elsewhere</p>
              <ul className="grid grid-cols-2 gap-y-3 text-sm">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-foreground/80 hover:text-foreground"
                    >
                      {s.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-6">
            <ContactForm />
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-2 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono">© {new Date().getFullYear()} Tomas Partman</span>
          <span className="font-mono">tomaspartman.com</span>
        </div>
      </div>
    </footer>
  );
};
