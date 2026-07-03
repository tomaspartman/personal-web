import { ArrowDown, BarChart3, ClipboardCheck, Gamepad2, Rocket, Search, Sparkles, Store, Target, Users } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";

const proofPoints = [
  { value: "10+", label: "Projects", detail: "Apps and games across multiple store categories" },
  { value: "200M+", label: "Downloads", detail: "Experience with projects at serious scale" },
  { value: "$500k+", label: "Monthly budgets", detail: "User acquisition budgets managed at scale" },
  { value: "Apps + Games", label: "Store experience", detail: "Growth work across both product types" },
  { value: "Launches", label: "From day one", detail: "Involved in multiple launches from the start" },
  { value: "Pre-reg", label: "Launch strategy", detail: "Pre-registration planning, setup, and optimization" },
];

const reviewAreas = [
  {
    icon: Search,
    title: "ASO and store visibility",
    text: "Titles, subtitles, short descriptions, long descriptions, keyword positioning, localization, competitors, and ranking opportunities.",
  },
  {
    icon: Store,
    title: "Store setup and conversion",
    text: "Icon, screenshots, feature graphics, preview videos, ratings, reviews, trust signals, custom product pages, and store experiments.",
  },
  {
    icon: Target,
    title: "Ads and user acquisition",
    text: "Google Ads, Apple Search Ads, campaign structure, budget allocation, creative testing, scaling logic, and new channel implementation.",
  },
  {
    icon: Rocket,
    title: "Launch and scaling",
    text: "Pre-registration campaigns, soft launch learnings, launch preparation, early growth loops, and scaling new apps or games after release.",
  },
  {
    icon: Gamepad2,
    title: "Creative direction",
    text: "Playable ads, video creatives, store asset direction, testing angles, feedback loops, and coordination with creative teams.",
  },
  {
    icon: Users,
    title: "Team collaboration",
    text: "Clear recommendations for product, marketing, UA, design, and creative teams so everyone knows what should happen next.",
  },
];

const processSteps = [
  "Send me your Google Play or App Store link.",
  "Tell me what you need help with and what you want to improve.",
  "I will review the scope and send you a custom proposal.",
];

export default function AppStoreGrowthAudit() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main id="top">
        <section className="border-b border-border bg-background pt-32 sm:pt-40">
          <div className="container pb-24 sm:pb-32">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="eyebrow mb-6">App Store Growth Audit</p>
                <h1 className="display text-display-xl text-balance">
                  Store growth for apps and games.
                </h1>
                <p className="mt-8 max-w-3xl text-lg leading-relaxed text-foreground/75 sm:text-xl">
                  ASO, store setup, ads, custom product pages, and growth strategy for apps and games on Google Play and the App Store.
                </p>
              </div>

              <div className="lg:col-span-4">
                <p className="leading-relaxed text-foreground/75">
                  I help teams understand what is blocking installs, conversion, and scalable growth. Send me your app or game link, tell me what you need help with, and I will prepare a custom proposal.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                  >
                    Request an audit
                    <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href="#review"
                    className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground/80 transition-colors hover:border-foreground hover:text-foreground"
                  >
                    What I review
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
              {proofPoints.map((point) => (
                <div key={point.label} className="bg-background p-6 sm:p-7">
                  <p className="font-display text-4xl text-foreground">{point.value}</p>
                  <p className="eyebrow mt-4">{point.label}</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">{point.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="review" className="border-b border-border bg-secondary/20">
          <div className="container py-24 sm:py-32">
            <div className="mb-14 grid gap-6 md:grid-cols-12 md:items-end">
              <div className="md:col-span-3">
                <p className="eyebrow">What I review</p>
              </div>
              <div className="md:col-span-8">
                <h2 className="display text-display-lg text-balance">
                  Everything around store growth, launch, and acquisition.
                </h2>
              </div>
            </div>

            <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
              {reviewAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <article key={area.title} className="bg-background p-7 sm:p-8">
                    <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                    <h3 className="mt-6 font-display text-2xl text-foreground">{area.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/70">{area.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background">
          <div className="container py-24 sm:py-32">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <p className="eyebrow mb-6">How it works</p>
                <h2 className="display text-display-lg text-balance">
                  No packages. Just the right scope for your app.
                </h2>
              </div>

              <div className="lg:col-span-7">
                <div className="grid gap-px bg-border">
                  {processSteps.map((step, index) => (
                    <div key={step} className="flex gap-5 bg-background p-6 sm:p-8">
                      <span className="font-mono text-sm text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                      <p className="text-lg leading-relaxed text-foreground/80">{step}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <div className="border border-border p-6">
                    <ClipboardCheck className="h-5 w-5 text-accent" aria-hidden="true" />
                    <h3 className="mt-5 font-display text-2xl">Clear priorities</h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                      You get a practical view of what matters first, what can wait, and what could move conversion or growth.
                    </p>
                  </div>
                  <div className="border border-border p-6">
                    <BarChart3 className="h-5 w-5 text-accent" aria-hidden="true" />
                    <h3 className="mt-5 font-display text-2xl">Growth context</h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                      Recommendations are based on store visibility, conversion, paid acquisition, launch stage, and creative testing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary/20">
          <div className="container py-24 sm:py-32">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <p className="eyebrow mb-6">Custom proposal</p>
                <h2 className="display text-display-lg text-balance">
                  Need help with your app or game?
                </h2>
                <p className="mt-6 max-w-2xl leading-relaxed text-foreground/75">
                  Send me your Google Play or App Store link, describe what you want to improve, and I will review the scope and send you a custom proposal.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="border border-border bg-background p-8">
                  <Sparkles className="h-5 w-5 text-accent" aria-hidden="true" />
                  <p className="mt-5 text-lg leading-relaxed text-foreground/80">
                    Useful for new launches, pre-registration campaigns, scaling projects, store conversion issues, ASO reviews, and paid acquisition setup.
                  </p>
                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                  >
                    Send me your app link
                    <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
