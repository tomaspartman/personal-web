export const Intro = () => {
  return (
    <section id="intro" className="container py-32 sm:py-40">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-3">
          <p className="eyebrow">Index — 01</p>
        </div>
        <div className="md:col-span-9">
          <p className="display text-display-md text-balance text-foreground">
            I pair analytical rigor with creative experimentation —
            a Master's in Economic Policy, Erasmus in Spain, and hands-on
            work scaling mobile apps across global markets.
          </p>
          <p className="mt-8 max-w-2xl text-muted-foreground leading-relaxed">
            From ASO and paid acquisition to AI-powered creative testing,
            I focus on driving installs, revenue, and retention. When I'm not
            A/B-testing icons or optimizing growth funnels, you'll catch me on
            a mountain trail, climbing wall, or immersing myself in a new
            language and culture.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 text-sm">
            {[
              { k: "Master's", v: "Econ. Policy" },
              { k: "Based in", v: "Brno, CZ" },
              { k: "Erasmus", v: "Santander, ES" },
              { k: "Languages", v: "EN · ES · SK" },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {s.k}
                </div>
                <div className="mt-2 font-display text-2xl">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
