// Real content from about/academic.html and about/professional.html
type Item = {
  period: string;
  title: string;
  place: string;
  summary: string;
  bullets: string[];
};

const academic: Item[] = [
  {
    period: "2021 – 2024",
    title: "Master's Degree in Economic Policy",
    place: "Masaryk University, Brno, Czechia",
    summary:
      "Specialized in economic policy analysis and quantitative methods, with a focus on econometric modeling and policy evaluation.",
    bullets: [
      "Thesis: \"The Development of Economic Policy in the United States of America\"",
      "International Trade · Economic Policy · R Language · Econometrics",
      "Marketing · Spanish Language",
    ],
  },
  {
    period: "2022",
    title: "Erasmus Exchange Program",
    place: "Universidad de Cantabria, Santander, Spain",
    summary:
      "Studied Business Economics within a Spanish academic setting, deepening my grasp of market analysis and firm strategy.",
    bullets: [
      "Studied courses in English and Spanish",
      "Completed numerous team projects with students from around the world",
      "Presented project outcomes in English to international student audiences",
      "Embraced Erasmus life abroad, adapting to a multicultural environment",
    ],
  },
  {
    period: "2017 – 2021",
    title: "Bachelor's Degree in Security & Strategic Studies and Economic Policy",
    place: "Masaryk University, Brno, Czechia",
    summary:
      "Acquired multidisciplinary expertise in security and strategic studies alongside economic policy, emphasizing strategic risk assessment, policy design, and analytical methodologies.",
    bullets: [
      "Built a strong foundation in both security studies and economic policy principles",
      "Developed strategic analysis and policy evaluation skills through interdisciplinary coursework",
      "Collaborated on team-based projects addressing real-world security and economic challenges",
      "Thesis: \"Cryptocurrencies and Their Use in Illicit Trade\"",
    ],
  },
  {
    period: "2013 – 2017",
    title: "High School Diploma",
    place: "Gymnázium Vršavská cesta 1, Žilina, Slovakia",
    summary:
      "Completed a rigorous eight-year program at one of Slovakia's most prestigious selective gymnasia, fostering deep expertise across sciences, humanities, and languages.",
    bullets: [
      "Third-ranked selective gymnasium in Slovakia",
      "Comprehensive, interdisciplinary curriculum across sciences, humanities and languages",
      "Passed Maturita exams in Mathematics, Slovak Language, English (B2), Economics and History — all with the highest marks",
      "Participated in international history competitions abroad, representing the school",
    ],
  },
];

const academicSkills = ["Microsoft PowerBI", "Economics", "Behavioral Economics", "ArcGIS Products", "R", "SQL"];
const courses = [
  "AI For Everyone", "Introduction to AI", "Bitcoin & Cryptocurrency Technologies",
  "Apple Search Ads", "Blockchain Basics", "Web3 and Blockchain Fundamentals",
  "Fundamentals of Digital Marketing",
];
const profSkills = [
  "Growth Marketing", "Market Research", "Organic Growth Strategies",
  "Analytical Skills", "Digital Marketing", "GitHub", "Policy Analysis",
  "International Economics",
];

export const Background = () => {
  return (
    <section id="background" className="border-t border-border bg-secondary/30">
      <div className="container py-24 sm:py-32">
        <div className="mb-16 grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-3">
            <p className="eyebrow">Index — 06</p>
          </div>
          <div className="md:col-span-9">
            <h2 className="display text-display-lg text-balance">
              Background <span className="italic text-muted-foreground">— academic & professional.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-muted-foreground">
              My educational journey & scholarly pursuits.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <ol className="relative grid gap-px bg-border">
          {academic.map((item) => (
            <li key={item.title} className="bg-background p-8 sm:p-10">
              <div className="grid gap-6 md:grid-cols-12">
                <div className="md:col-span-3">
                  <div className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {item.period}
                  </div>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-display text-2xl sm:text-3xl text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.place}</p>
                  <p className="mt-4 max-w-2xl text-foreground/80 leading-relaxed">
                    {item.summary}
                  </p>
                  <ul className="mt-6 space-y-2 text-sm text-foreground/75">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 inline-block h-px w-3 shrink-0 bg-muted-foreground" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* Skills · Courses · Skills */}
        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {[
            { label: "Academic Skills", items: academicSkills },
            { label: "Courses",         items: courses },
            { label: "Professional Skills", items: profSkills },
          ].map((group) => (
            <div key={group.label}>
              <p className="eyebrow mb-5">{group.label}</p>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((i) => (
                  <li
                    key={i}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground/80"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Professional CTA */}
        <div className="mt-20 grid gap-px bg-border sm:grid-cols-2">
          <a
            href="https://www.linkedin.com/in/tomaspartman/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-background p-8 transition-colors hover:bg-secondary"
          >
            <p className="eyebrow mb-4">Professional Profile</p>
            <h3 className="font-display text-2xl text-foreground">
              Complete information about my career and experience
            </h3>
            <span className="mt-6 inline-block link-underline text-sm">
              View LinkedIn Profile ↗
            </span>
          </a>
          <a
            href="#contact"
            className="group bg-background p-8 transition-colors hover:bg-secondary"
          >
            <p className="eyebrow mb-4">Resume & Details</p>
            <h3 className="font-display text-2xl text-foreground">
              Request my most recent resume or any additional information
            </h3>
            <span className="mt-6 inline-block link-underline text-sm">
              Email me →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
