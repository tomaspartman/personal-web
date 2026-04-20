import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { travelEntries } from "@/data/travel";

// Public TopoJSON of world countries (ISO_A3 codes available as properties)
const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Map our travel entries to ISO numeric ids used by world-atlas (id = numeric ISO 3166-1)
const VISITED: Record<string, { slug: string; place: string }> = {
  "860": { slug: "uzbekistan", place: "Uzbekistan" },
  "398": { slug: "kazakhstan", place: "Kazakhstan" },
  "417": { slug: "kyrgyzstan", place: "Kyrgyzstan" },
  "218": { slug: "ecuador", place: "Ecuador" },
  "156": { slug: "china-shanghai", place: "China · Shanghai" },
  "554": { slug: "new-zealand", place: "New Zealand" },
  "642": { slug: "romania", place: "Romania" },
};

// Visited but write-up still in progress — filled, but click opens "in progress" dialog.
const IN_PROGRESS: Record<string, string> = {
  "484": "Mexico",
  "608": "Philippines",
  "804": "Ukraine",
  "703": "Slovakia",
  "203": "Czechia",
  "616": "Poland",
  "440": "Lithuania",
  "276": "Germany",
  "528": "Netherlands",
  "826": "United Kingdom",
  "040": "Austria",
  "756": "Switzerland",
  "380": "Italy",
  "300": "Greece",
  "724": "Spain",
  "620": "Portugal",
  "705": "Slovenia",
  "191": "Croatia",
  "070": "Bosnia and Herzegovina",
  "499": "Montenegro",
  "688": "Serbia",
  "807": "North Macedonia",
  "008": "Albania",
  "100": "Bulgaria",
  "983": "Kosovo",
  "818": "Egypt",
  "788": "Tunisia",
  "268": "Georgia",
  "196": "Cyprus",
  "348": "Hungary",
  "702": "Singapore",
  "764": "Thailand",
};

// Some territories (e.g. Northern Cyprus, Kosovo) share id "-99" in
// world-atlas, so we match them by name instead.
const IN_PROGRESS_BY_NAME = new Set<string>([
  "N. Cyprus",
  "Northern Cyprus",
]);

export const TravelMap = () => {
  const navigate = useNavigate();
  const [hoveredName, setHoveredName] = useState<string | null>(null);
  const [pendingCountry, setPendingCountry] = useState<string | null>(null);

  return (
    <section id="travel" className="border-t border-border bg-background">
      <div className="container py-24 sm:py-32">
        {/* Header */}
        <div className="mb-12 grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-3">
            <p className="eyebrow">Index — 02</p>
          </div>
          <div className="md:col-span-7">
            <h2 className="display text-display-lg text-balance">
              Travel blog{" "}
              <span className="italic text-muted-foreground">
                — stories from the road.
              </span>
            </h2>
            <p className="mt-4 text-sm text-muted-foreground max-w-xl">
              Filled outlines are places I&apos;ve been and written about.
              Click any country to read or to peek at what&apos;s coming.
            </p>
          </div>
          <div className="md:col-span-2 md:text-right">
            <span className="font-mono text-xs text-muted-foreground">
              {travelEntries.length} entries
            </span>
          </div>
        </div>

        {/* Map */}
        <div className="relative border-y border-border bg-secondary/20">
          <div className="aspect-[16/9] w-full overflow-hidden">
            <ComposableMap
              projection="geoEqualEarth"
              projectionConfig={{ scale: 165 }}
              style={{ width: "100%", height: "100%" }}
            >
              <ZoomableGroup center={[10, 15]} zoom={1} maxZoom={5}>
                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const id = String(geo.id);
                      const visited = VISITED[id];
                      const name =
                        (geo.properties as { name?: string }).name ?? "Country";
                      const inProgress =
                        IN_PROGRESS[id] || IN_PROGRESS_BY_NAME.has(name);
                      const filled = !!visited || !!inProgress;

                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          onMouseEnter={() => setHoveredName(name)}
                          onMouseLeave={() => setHoveredName(null)}
                          onClick={() => {
                            if (visited) {
                              navigate(`/travel/${visited.slug}`);
                            } else {
                              setPendingCountry(name);
                            }
                          }}
                          style={{
                            default: {
                              fill: filled
                                ? "hsl(var(--foreground))"
                                : "transparent",
                              stroke: "hsl(var(--foreground))",
                              strokeWidth: 0.4,
                              outline: "none",
                              cursor: "pointer",
                              transition: "fill 200ms ease",
                            },
                            hover: {
                              fill: filled
                                ? "hsl(var(--foreground) / 0.7)"
                                : "hsl(var(--foreground) / 0.12)",
                              stroke: "hsl(var(--foreground))",
                              strokeWidth: 0.6,
                              outline: "none",
                              cursor: "pointer",
                            },
                            pressed: {
                              fill: "hsl(var(--foreground) / 0.5)",
                              outline: "none",
                            },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>
              </ZoomableGroup>
            </ComposableMap>
          </div>

          {/* Hover label */}
          <div className="pointer-events-none absolute left-4 top-4 font-mono text-xs text-muted-foreground">
            {hoveredName ? (
              <span>
                <span className="text-foreground">●</span>{" "}
                {hoveredName.toUpperCase()}
              </span>
            ) : (
              <span>Hover a country</span>
            )}
          </div>

          {/* Legend */}
          <div className="absolute right-4 bottom-4 flex items-center gap-4 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2.5 w-2.5 bg-foreground" />
              Visited
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2.5 w-2.5 border border-foreground" />
              Coming soon
            </span>
          </div>
        </div>

        <p className="mt-4 text-xs text-muted-foreground font-mono">
          Tip — pinch / scroll to zoom, drag to pan.
        </p>

        {/* Instagram callout */}
        <div className="mt-16 border-t border-border pt-10 grid gap-6 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <p className="eyebrow mb-3">Meanwhile —</p>
            <p className="font-display text-2xl sm:text-3xl text-foreground text-balance">
              I try to share my travels on Instagram as I go.{" "}
              <span className="italic text-muted-foreground">
                Photos, snippets, things that didn&apos;t make the blog.
              </span>
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <a
              href="https://www.instagram.com/tomas.partman/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-foreground px-5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Dialog for not-yet-written destinations */}
      <Dialog
        open={!!pendingCountry}
        onOpenChange={(open) => !open && setPendingCountry(null)}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">
              {pendingCountry}
            </DialogTitle>
            <DialogDescription className="pt-2">
              Story&apos;s still being written.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4 py-6">
            <Loader2 className="h-10 w-10 animate-spin text-muted-foreground" />
            <p className="text-sm text-muted-foreground text-center max-w-xs">
              I&apos;m working on this one — notes, photos and memories are
              being put together. Check back soon.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
