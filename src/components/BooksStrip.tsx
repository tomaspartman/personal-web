// Tomas's read books (from Goodreads). Personal picks at the top, then chronological.
type Book = {
  title: string;
  author: string;
  note: string;
  rating: 1 | 2 | 3 | 4 | 5;
  read: string; // when finished
};

const books: Book[] = [
  // — Featured personal picks (kept from the original site) —
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    note: "Epic fantasy — friendship, courage, sacrifice, and unmatched world-building.",
    rating: 5, read: "Personal favourite",
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    note: "Cognitive, agricultural, and scientific revolutions — and what it means to be human.",
    rating: 5, read: "Personal favourite",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    note: "A practical, research-backed framework for building good habits and breaking bad ones.",
    rating: 5, read: "Personal favourite",
  },

  // — Recently read (Goodreads) —
  {
    title: "Down and Out in Paris and London",
    author: "George Orwell",
    note: "Half-memoir, half-reportage. Orwell's wandering through dish-pits and doss-houses, told without self-pity and with a quiet, biting humor.",
    rating: 4, read: "Oct 2025",
  },
  {
    title: "Fire and Fury: Inside the Trump White House",
    author: "Michael Wolff",
    note: "A behind-the-curtain account of the early Trump administration — chaotic, gossipy, and hard to put down regardless of where you stand.",
    rating: 3, read: "Feb 2025",
  },
  {
    title: "Alice in Wonderland",
    author: "Jane Carruth (after Lewis Carroll)",
    note: "Returning to a childhood classic as an adult — odder, wittier and more nonsensical than I remembered.",
    rating: 4, read: "Jan 2025",
  },
  {
    title: "The Upstarts: How Uber, Airbnb and the New Silicon Valley Are Changing the World",
    author: "Brad Stone",
    note: "How two startups bent law, labor and city life around themselves — a clear-eyed history of the sharing economy.",
    rating: 4, read: "Dec 2024",
  },
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    note: "A lone astronaut, an impossible problem, and one of the most charming first-contact stories in years.",
    rating: 5, read: "Sep 2024",
  },
  {
    title: "Spev sirén: Putovanie do srdca ukrajinskej vojny",
    author: "Tomáš Forró",
    note: "A Slovak journalist's reporting from inside the Ukrainian war — close, human, and deeply uncomfortable.",
    rating: 5, read: "Jul 2024",
  },
  {
    title: "God Is Not Great: How Religion Poisons Everything",
    author: "Christopher Hitchens",
    note: "Hitchens at full tilt — sharp, learned, often angry, always entertaining to argue with in your head.",
    rating: 4, read: "Jul 2024",
  },
  {
    title: "Smrť sa volá Engelchen",
    author: "Ladislav Mňačko",
    note: "A Slovak war novel about partisans, guilt, and the small terrible choices people make. A classic for a reason.",
    rating: 5, read: "Feb 2024",
  },
  {
    title: "The Hobbit: An Unexpected Journey — Annual 2013",
    author: "Paddy Kempshall",
    note: "A beautifully illustrated companion to the film — a gentle re-entry into Middle-earth.",
    rating: 4, read: "Feb 2024",
  },
  {
    title: "Factfulness: Ten Reasons We're Wrong About the World",
    author: "Hans Rosling",
    note: "A calm, data-driven correction to almost every gloomy assumption you carry about the state of the world.",
    rating: 5, read: "Jan 2024",
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    note: "Why uninterrupted focus is becoming rare and valuable — and how to actually build it.",
    rating: 4, read: "Dec 2023",
  },
  {
    title: "Talking to Strangers: What We Should Know About the People We Don't Know",
    author: "Malcolm Gladwell",
    note: "Why we're so bad at reading people we don't know — and the costly mistakes that follow.",
    rating: 4, read: "Dec 2023",
  },
  {
    title: "Rich Dad, Poor Dad",
    author: "Robert T. Kiyosaki",
    note: "Two competing money mindsets, told as a memoir. Useful framing even where the advice is debatable.",
    rating: 4, read: "Jun 2023",
  },
  {
    title: "Dune (Dune #1)",
    author: "Frank Herbert",
    note: "Politics, religion, ecology and prophecy on a desert planet — still the gold standard of science fiction.",
    rating: 5, read: "Jun 2023",
  },
  {
    title: "Dune Messiah (Dune #2)",
    author: "Frank Herbert",
    note: "Shorter, darker, and a deliberate undoing of the hero myth Herbert built in book one.",
    rating: 4, read: "Jun 2023",
  },
  {
    title: "Children of Dune (Dune #3)",
    author: "Frank Herbert",
    note: "The next generation of Atreides, and the long shadow of Paul's choices.",
    rating: 4, read: "Jun 2023",
  },
  {
    title: "Svedectvo o živote v KĽDR",
    author: "Nina Špitálníková",
    note: "First-hand testimony of life inside North Korea — quiet, specific, and chilling.",
    rating: 5, read: "Jun 2023",
  },
  {
    title: "Michail Strogov",
    author: "Jules Verne",
    note: "A 19th-century courier races across Tsarist Siberia — old-school adventure storytelling at its best.",
    rating: 4, read: "2023",
  },
];

const Stars = ({ value }: { value: number }) => (
  <span aria-label={`${value} of 5 stars`} className="font-mono text-xs tracking-[0.15em] text-foreground/80">
    {"★".repeat(value)}
    <span className="text-muted-foreground/40">{"★".repeat(5 - value)}</span>
  </span>
);

export const BooksStrip = () => {
  return (
    <section id="books" className="border-t border-border">
      <div className="container py-24 sm:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow mb-6">Index — 04</p>
            <h2 className="display text-display-md text-balance">
              Books worth sharing.
            </h2>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              A growing list of books I've read and found valuable —
              for personal growth, creativity, or understanding the world a
              little better. Updated as I close the back cover.
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              {books.length} titles · with my rating
            </p>
          </div>

          <div className="md:col-span-8">
            <ul className="divide-y divide-border border-y border-border">
              {books.map((b) => (
                <li key={b.title} className="py-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="font-display text-xl sm:text-2xl text-foreground text-balance">
                      {b.title}
                    </div>
                    <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                      {b.read}
                    </span>
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    <span>{b.author}</span>
                    <span className="text-muted-foreground/40">·</span>
                    <Stars value={b.rating} />
                  </div>
                  <p className="mt-3 max-w-2xl text-sm text-foreground/80 leading-relaxed">
                    {b.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
