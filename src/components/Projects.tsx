import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { useState } from "react";

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
    previewClassName: "bg-background",
    imageClassName: "h-full w-full object-cover",
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
      "https://play-lh.googleusercontent.com/rzH-K6vuyqaPRNIWFxFIexpZi3cMSXRs2m5Zz_z37vqXuV92mnr1gPIsyVzesPssRNFcTA0RTSqZKAO4BQBy=w512-h512-rw",
    imageAlt: "BeerRadar app icon",
    previewClassName: "flex items-center justify-center bg-secondary/60 p-10 sm:p-14",
    imageClassName: "h-48 w-48 object-contain shadow-2xl sm:h-64 sm:w-64",
  },
];

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];
  const currentProject = String(activeIndex + 1).padStart(2, "0");
  const projectCount = String(projects.length).padStart(2, "0");

  const showPreviousProject = () => {
    setActiveIndex((currentIndex) => (currentIndex === 0 ? projects.length - 1 : currentIndex - 1));
  };

  const showNextProject = () => {
    setActiveIndex((currentIndex) => (currentIndex === projects.length - 1 ? 0 : currentIndex + 1));
  };

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

        <div className="relative">
          <button
            type="button"
            onClick={showPreviousProject}
            className="absolute left-3 top-1/2 z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-background/30 bg-foreground text-background shadow-2xl transition-transform hover:scale-105 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:-left-6 sm:h-14 sm:w-14"
            aria-label="Show previous project"
            title="Previous project"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <article key={activeProject.title} className="grid min-h-[430px] gap-px bg-border lg:grid-cols-12">
            <div className="bg-background p-8 sm:p-10 lg:col-span-7">
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="eyebrow">{activeProject.label}</p>
                <span className="font-mono text-xs text-muted-foreground">
                  {currentProject} / {projectCount}
                </span>
              </div>

              <h3 className="font-display text-3xl text-foreground">{activeProject.title}</h3>
              <p className="mt-4 max-w-2xl leading-relaxed text-foreground/80">{activeProject.description}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={activeProject.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-foreground px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  {activeProject.linkLabel}
                  <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={activeProject.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm text-foreground/75 transition-colors hover:border-foreground hover:text-foreground"
                >
                  {activeProject.metaLabel}
                </a>
              </div>
            </div>

            <a
              href={activeProject.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative min-h-[300px] overflow-hidden lg:col-span-5 ${activeProject.previewClassName}`}
              aria-label={`Preview of ${activeProject.title} project`}
            >
              <img
                src={activeProject.imageSrc}
                alt={activeProject.imageAlt}
                loading="lazy"
                referrerPolicy="no-referrer"
                className={`transition-transform duration-500 group-hover:scale-[1.02] ${activeProject.imageClassName}`}
              />
            </a>
          </article>

          <button
            type="button"
            onClick={showNextProject}
            className="absolute right-3 top-1/2 z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-background/30 bg-foreground text-background shadow-2xl transition-transform hover:scale-105 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:-right-6 sm:h-14 sm:w-14"
            aria-label="Show next project"
            title="Next project"
          >
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};
