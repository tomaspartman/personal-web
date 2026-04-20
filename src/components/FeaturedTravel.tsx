import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { travelEntries as entries } from "@/data/travel";

export const FeaturedTravel = () => {
  return (
    <section id="travel" className="border-t border-border bg-background">
      <div className="container py-24 sm:py-32">
        <div className="mb-16 grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-3">
            <p className="eyebrow">Index — 02</p>
          </div>
          <div className="md:col-span-7">
            <h2 className="display text-display-lg text-balance">
              Travel blog <span className="italic text-muted-foreground">— stories from the road.</span>
            </h2>
          </div>
          <div className="md:col-span-2 md:text-right">
            <span className="font-mono text-xs text-muted-foreground">{entries.length} entries</span>
          </div>
        </div>

        <ul className="divide-y divide-border border-y border-border">
          {entries.map((e) => (
            <li key={e.slug}>
              <Link
                to={`/travel/${e.slug}`}
                className="group grid grid-cols-12 items-baseline gap-4 py-6 transition-colors hover:bg-secondary/40 -mx-4 px-4"
              >
                <span className="col-span-2 sm:col-span-1 font-mono text-xs text-muted-foreground">{e.n}</span>
                <span className="col-span-9 sm:col-span-10 font-display text-2xl sm:text-3xl text-foreground">
                  {e.place}
                </span>
                <span className="col-span-1 text-right">
                  <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
