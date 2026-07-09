import { useMemo, useState } from "react";
import { Search, Layers, LocateFixed, ParkingCircle, Car } from "lucide-react";

type ZoneKey = "A" | "B" | "C";

const ZONE_COLORS: Record<ZoneKey, string> = {
  A: "#dc2626",
  B: "#f59e0b",
  C: "#22c55e",
};

const ZONES: Array<{ key: ZoneKey; path: string; label: string }> = [
  { key: "C", label: "Zóna C", path: "M40,70 L120,40 L210,60 L250,130 L170,190 L90,170 Z" },
  { key: "B", label: "Zóna B", path: "M120,90 L190,80 L225,130 L180,170 L120,155 L95,120 Z" },
  { key: "A", label: "Zóna A", path: "M140,105 L180,98 L195,128 L168,148 L138,136 Z" },
];

const PARKINGS = [
  { name: "Parkovací dům DOMINI", x: 164, y: 122, capacity: "52 voľných" },
  { name: "Benešova", x: 146, y: 114, capacity: "18 voľných" },
  { name: "Janáčkovo divadlo", x: 156, y: 98, capacity: "74 voľných" },
];

export const ParkingMapReplica = () => {
  const [enabled, setEnabled] = useState<Record<ZoneKey, boolean>>({ A: true, B: true, C: true });
  const [query, setQuery] = useState("");

  const visibleZones = useMemo(() => ZONES.filter((zone) => enabled[zone.key]), [enabled]);

  return (
    <section className="border-t border-border bg-background">
      <div className="container py-24 sm:py-32">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Map mockup — parking</p>
            <h2 className="display text-display-lg">Replika mapy parkovania (štýl Brno)</h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              Interaktívny prototyp s vrstvami zón A/B/C, orientačnými parkovacími domami a ovládacími prvkami.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-2xl border border-border bg-card p-4">
            <div className="relative mb-4">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Hľadať ulicu alebo parkovanie"
                className="h-10 w-full rounded-md border border-border bg-background pl-9 pr-3 text-sm"
              />
            </div>

            <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <Layers className="h-3.5 w-3.5" /> Vrstvy
            </p>
            <div className="space-y-2">
              {(Object.keys(ZONE_COLORS) as ZoneKey[]).map((key) => (
                <label key={key} className="flex cursor-pointer items-center justify-between rounded-md border border-border px-3 py-2 text-sm">
                  <span className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full" style={{ background: ZONE_COLORS[key] }} />
                    Zóna {key}
                  </span>
                  <input
                    type="checkbox"
                    checked={enabled[key]}
                    onChange={() => setEnabled((prev) => ({ ...prev, [key]: !prev[key] }))}
                  />
                </label>
              ))}
            </div>

            <div className="mt-5 rounded-xl bg-secondary/40 p-3 text-xs text-muted-foreground">
              <p className="flex items-center gap-2 text-foreground"><Car className="h-3.5 w-3.5" /> Parkovacie domy</p>
              <p className="mt-1">Klikni na bod v mape a zobrazí sa orientačná dostupnosť.</p>
            </div>
          </aside>

          <div className="relative overflow-hidden rounded-2xl border border-border bg-[#f5f5f4]">
            <div className="absolute right-4 top-4 z-10 flex flex-col gap-2">
              <button className="rounded-md border border-border bg-background p-2"><LocateFixed className="h-4 w-4" /></button>
              <button className="rounded-md border border-border bg-background p-2"><ParkingCircle className="h-4 w-4" /></button>
            </div>

            <svg viewBox="0 0 300 230" className="h-full min-h-[520px] w-full">
              <rect x="0" y="0" width="300" height="230" fill="#e7e5e4" />
              <path d="M15,30 L280,30" stroke="#d4d4d4" strokeWidth="8" />
              <path d="M35,205 L265,45" stroke="#d4d4d4" strokeWidth="10" />
              <path d="M30,130 L280,155" stroke="#d4d4d4" strokeWidth="6" />

              {visibleZones.map((zone) => (
                <path key={zone.key} d={zone.path} fill={ZONE_COLORS[zone.key]} fillOpacity="0.45" stroke={ZONE_COLORS[zone.key]} strokeWidth="1.5" />
              ))}

              {PARKINGS.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())).map((item) => (
                <g key={item.name}>
                  <circle cx={item.x} cy={item.y} r="4" fill="#111827" />
                  <rect x={item.x + 6} y={item.y - 11} width="80" height="18" rx="4" fill="#111827" />
                  <text x={item.x + 10} y={item.y + 1} fontSize="7" fill="white">{item.capacity}</text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
