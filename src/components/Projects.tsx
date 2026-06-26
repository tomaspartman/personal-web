const projects = [
  {
    label: "Featured project",
    title: "CivicMap",
    description:
      "CIVICMAP is a cross-border civic tech platform for Slovakia and Czechia where residents can report local issues on an interactive map, add photos, and vote on problems that affect them. Municipalities get a transparent dashboard to track reports from new to resolved and improve trust with citizens.",
    href: "https://civicmap.tomaspartman.com",
    linkLabel: "Open project",
    metaLabel: "civicmap.tomaspartman.com",
    imageSrc: "/CivicMap_Screen.png",
    imageAlt: "CivicMap project preview",
  },
  {
    label: "Mobile app",
    title: "BeerRadar",
    description:
      "BeerRadar is a GPS beer compass for craft and draft beer on tap. It helps people search by brand or style, find nearby pubs, bars, and taprooms across Czechia and Slovakia, plan pub crawl routes, and track pints in a beer diary.",
    href: "https://play.google.com/store/apps/details?id=tomaspartman.beerradar",
    linkLabel: "Open app",
    metaLabel: "Google Play",
    imageSrc:
      "https://play-lh.googleusercontent.com/32LS2RGfp0d0sF9bkAW6DKW4lFsmAaeOfD5sRXvJHCZnHOXOI5J4DLaof_sd3LOXiVWl9CV6EpDkbVgdfcgrvA=w960-h540-rw",
    imageAlt: "BeerRadar app preview from Google Play",
  },
];

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

        <div className="grid gap-px bg-border">
          {projects.map((project) => (
            <article key={project.title} className="grid gap-px bg-border lg:grid-cols-12">
              <div className="bg-background p-8 sm:p-10 lg:col-span-7">
                <p className="eyebrow mb-4">{project.label}</p>
                <h3 className="font-display text-3xl text-foreground">{project.title}</h3>
                <p className="mt-4 max-w-2xl leading-relaxed text-foreground/80">{project.description}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-foreground px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
                  >
                    {project.linkLabel} ↗
                  </a>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm text-foreground/75 transition-colors hover:border-foreground hover:text-foreground"
                  >
                    {project.metaLabel}
                  </a>
                </div>
              </div>

              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative min-h-[280px] overflow-hidden bg-background sm:min-h-[360px] lg:col-span-5"
                aria-label={`Preview of ${project.title} project`}
              >
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
