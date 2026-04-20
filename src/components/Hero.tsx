import heroImg from "@/assets/hero.jpg";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-background">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Tomas Partman"
          className="h-full w-full object-cover opacity-95 dark:opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 flex min-h-[100svh] flex-col justify-end pb-20 pt-32">
        <div className="max-w-4xl animate-fade-up">
          <p className="eyebrow mb-6 flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-foreground/60" />
            Hello, I'm Tomas
          </p>
          <h1 className="display text-display-xl text-balance text-foreground">
            Discover my world<br />
            <span className="italic text-foreground/70">through lens and pen.</span>
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-base sm:text-lg text-muted-foreground leading-relaxed">
            Growth Marketer · Data-Driven Strategist · Global Explorer.
            Turning user-behaviour data into rapid growth while discovering
            new cultures around the world.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
            <a href="#travel" className="link-underline font-medium">Read the travel blog →</a>
            <a href="#books" className="link-underline text-muted-foreground hover:text-foreground">Books</a>
          </div>
        </div>

        <a
          href="#intro"
          aria-label="Scroll down"
          className="mt-16 inline-flex items-center gap-2 self-start text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowDown className="h-3 w-3 animate-bounce" />
          Scroll
        </a>
      </div>
    </section>
  );
};
