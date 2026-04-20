// Mountains section — personal note + animated SVG with a hiker
// walking left-to-right across a hand-drawn mountain ridge in an infinite loop.

export const Mountains = () => {
  return (
    <section
      id="mountains"
      aria-labelledby="mountains-heading"
      className="border-t border-border/60 bg-background"
    >
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <header className="mb-10 md:mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Soon
          </p>
          <h2
            id="mountains-heading"
            className="mt-3 font-serif text-4xl md:text-5xl leading-tight"
          >
            Mountains.
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground">
            <p>
              Mountains are where I feel most at home. The slow rhythm of
              walking uphill, the air thinning out, the silence on a ridge at
              sunrise — there is nothing quite like it.
            </p>
            <p>
              I'm putting together a small collection of photos from the trails
              I've loved most. Coming soon to this page.
            </p>
          </div>
        </header>

        {/* Animated mountain ridge with walking hiker */}
        <div className="relative overflow-hidden rounded-lg border border-border/60 bg-muted/20">
          <svg
            viewBox="0 0 800 220"
            className="block h-auto w-full"
            role="img"
            aria-label="Line-drawn mountains with a small hiker walking from left to right"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Distant ridge */}
            <path
              d="M0 170 L120 110 L200 140 L300 90 L400 130 L500 80 L620 120 L720 95 L800 130"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.25"
              strokeWidth="1.2"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {/* Foreground ridge — the path the hiker walks on */}
            <path
              id="ridge"
              d="M0 180 L100 130 L180 160 L280 100 L380 150 L480 90 L600 140 L720 110 L800 150"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.85"
              strokeWidth="1.6"
              strokeLinejoin="round"
              strokeLinecap="round"
            />

            {/* Hiker — small stick figure with a backpack, follows the ridge */}
            <g>
              <animateMotion
                dur="14s"
                repeatCount="indefinite"
                rotate="auto"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
              >
                <mpath href="#ridge" />
              </animateMotion>

              {/* Translate so feet sit ON the path (path y is at feet level) */}
              <g transform="translate(0,-12)" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none">
                {/* Head */}
                <circle cx="0" cy="-10" r="2.2" fill="currentColor" />
                {/* Body */}
                <line x1="0" y1="-8" x2="0" y2="0" />
                {/* Backpack */}
                <rect x="-3.2" y="-7" width="3" height="5" rx="0.6" fill="currentColor" opacity="0.85" stroke="none" />
                {/* Walking legs — animated */}
                <line x1="0" y1="0" x2="-2" y2="6">
                  <animate attributeName="x2" values="-2;2;-2" dur="0.6s" repeatCount="indefinite" />
                </line>
                <line x1="0" y1="0" x2="2" y2="6">
                  <animate attributeName="x2" values="2;-2;2" dur="0.6s" repeatCount="indefinite" />
                </line>
                {/* Trekking pole */}
                <line x1="0" y1="-4" x2="3" y2="6" strokeOpacity="0.7" />
              </g>
            </g>
          </svg>
        </div>

        <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground/70">
          Photos coming soon →
        </p>
      </div>
    </section>
  );
};
