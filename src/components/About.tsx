// Real content from about/introduction.html and about/hobbies.html
const skills = [
  "Economic Analysis", "Data Science", "R Programming", "Python", "SQL",
  "PowerBI", "Econometrics", "Policy Research", "Market Analysis",
  "Statistical Modeling", "Machine Learning", "ArcGIS",
];

const hobbies = [
  "Rock Climbing", "Mountaineering", "Surfing", "Brazilian Jiu-Jitsu",
  "Tennis", "Travel Photography", "Hiking", "Language Learning",
  "Cooking", "Reading", "Cultural Exploration", "Board Games",
];

export const About = () => {
  return (
    <section id="about" className="border-t border-border bg-background">
      <div className="container py-24 sm:py-32">
        <div className="mb-16 grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-3">
            <p className="eyebrow">Index — 05</p>
          </div>
          <div className="md:col-span-9">
            <h2 className="display text-display-lg text-balance">
              About me <span className="italic text-muted-foreground">— skills & interests.</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow mb-6">Skills & expertise</p>
            <ul className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-border px-4 py-1.5 text-sm text-foreground/80 transition-colors hover:border-foreground hover:text-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-6">
            <p className="eyebrow mb-6">Hobbies & interests</p>
            <ul className="flex flex-wrap gap-2">
              {hobbies.map((h) => (
                <li
                  key={h}
                  className="rounded-full bg-secondary px-4 py-1.5 text-sm text-foreground/80 transition-colors hover:bg-foreground hover:text-background"
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
