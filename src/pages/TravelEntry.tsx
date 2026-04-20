import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { getEntryBySlug, travelEntries } from "@/data/travel";

const TravelEntry = () => {
  const { slug } = useParams<{ slug: string }>();
  const entry = slug ? getEntryBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (entry) {
      document.title = `${entry.place} — Travel notes`;
    }
  }, [entry]);

  if (!entry) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <main className="container py-32">
          <p className="eyebrow mb-4">404</p>
          <h1 className="display text-display-lg mb-6">Destination not found</h1>
          <Link to="/#travel" className="link-underline text-sm">
            ← Back to travel index
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const idx = travelEntries.findIndex((e) => e.slug === entry.slug);
  const prev = travelEntries[(idx - 1 + travelEntries.length) % travelEntries.length];
  const next = travelEntries[(idx + 1) % travelEntries.length];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <article className="container pt-32 pb-24 sm:pt-40 sm:pb-32">
          <Link
            to="/#travel"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="h-4 w-4" />
            Travel index
          </Link>

          <header className="grid gap-6 md:grid-cols-12 md:items-end mb-16">
            <div className="md:col-span-3">
              <p className="eyebrow">Entry — {entry.n}</p>
              <p className="font-mono text-xs text-muted-foreground mt-2">
                {entry.year} · {entry.region}
              </p>
            </div>
            <div className="md:col-span-9">
              <h1 className="display text-display-lg text-balance">
                {entry.place}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
                {entry.summary}
              </p>
            </div>
          </header>

          <div className="grid gap-12 md:grid-cols-12 border-t border-border pt-16">
            <div className="md:col-span-7 md:col-start-1">
              <p className="text-base sm:text-lg leading-relaxed text-foreground/90">
                {entry.intro}
              </p>
            </div>

            <aside className="md:col-span-4 md:col-start-9">
              <p className="eyebrow mb-4">Moments</p>
              <ul className="space-y-3">
                {entry.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm text-foreground/80 border-b border-border pb-3 last:border-0"
                  >
                    <span className="font-mono text-xs text-muted-foreground shrink-0 mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <nav className="mt-24 grid grid-cols-2 gap-6 border-t border-border pt-8">
            <Link
              to={`/travel/${prev.slug}`}
              className="group flex flex-col gap-1 text-left"
            >
              <span className="font-mono text-xs text-muted-foreground">← Previous</span>
              <span className="font-display text-xl group-hover:text-foreground transition-colors">
                {prev.place}
              </span>
            </Link>
            <Link
              to={`/travel/${next.slug}`}
              className="group flex flex-col gap-1 text-right items-end"
            >
              <span className="font-mono text-xs text-muted-foreground">Next →</span>
              <span className="font-display text-xl group-hover:text-foreground transition-colors inline-flex items-center gap-2">
                {next.place}
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </nav>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default TravelEntry;
