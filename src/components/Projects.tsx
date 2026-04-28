export const Projects = () => {
  return (
    <section id="projects" className="border-t border-border bg-secondary/20">
      <div className="container py-24 sm:py-32">
        <div className="mb-16 grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-3">
            <p className="eyebrow">Index — 03</p>
          </div>
          <div className="md:col-span-9">
            <h2 className="display text-display-lg text-balance">
              Projects <span className="italic text-muted-foreground">— things I&apos;m building.</span>
            </h2>
          </div>
        </div>

        <article className="grid gap-px bg-border lg:grid-cols-12">
          <div className="bg-background p-8 sm:p-10 lg:col-span-7">
            <p className="eyebrow mb-4">Featured project</p>
            <h3 className="font-display text-3xl text-foreground">CivicMap</h3>
            <p className="mt-4 max-w-2xl leading-relaxed text-foreground/80">
              Interactive civic platform that helps people discover local places, community points, and city data in a
              simple visual map experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://civicmap.tomaspartman.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-foreground px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Open project ↗
              </a>
              <a
                href="https://civicmap.tomaspartman.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm text-foreground/75 transition-colors hover:border-foreground hover:text-foreground"
              >
                civicmap.tomaspartman.com
              </a>
            </div>
          </div>

          <a
            href="https://civicmap.tomaspartman.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-background lg:col-span-5"
            aria-label="Preview of CivicMap project"
          >
            <img
              src="/civicmap-preview.svg"
              alt="CivicMap project preview"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </a>
        </article>
      </div>
    </section>
  );
};
