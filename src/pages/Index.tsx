import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { About } from "@/components/About";
import { Background } from "@/components/Background";
import { BooksStrip } from "@/components/BooksStrip";
import { Mountains } from "@/components/Mountains";
import { Footer } from "@/components/Footer";

const TravelMap = lazy(() =>
  import("@/components/TravelMap").then((module) => ({ default: module.TravelMap })),
);

const DeferredTravelMap = () => {
  const markerRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;

    const target = markerRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldLoad(true);
        observer.disconnect();
      },
      { rootMargin: "350px 0px" },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [shouldLoad]);

  if (!shouldLoad) {
    return (
      <section id="travel" className="border-t border-border bg-background" aria-label="Travel map loading">
        <div ref={markerRef} className="container py-24 sm:py-32">
          <div className="mb-12 grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-3">
              <p className="eyebrow">Index — 02</p>
            </div>
            <div className="md:col-span-7">
              <h2 className="display text-display-lg text-balance">
                Travel blog <span className="italic text-muted-foreground">— stories from the road.</span>
              </h2>
            </div>
          </div>
          <div className="aspect-[16/9] w-full animate-pulse border-y border-border bg-secondary/20" />
        </div>
      </section>
    );
  }

  return (
    <Suspense
      fallback={
        <section id="travel" className="border-t border-border bg-background" aria-label="Travel map loading">
          <div className="container py-24 sm:py-32">
            <div className="aspect-[16/9] w-full animate-pulse border-y border-border bg-secondary/20" />
          </div>
        </section>
      }
    >
      <TravelMap />
    </Suspense>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Intro />
        <About />
        <Background />
        <DeferredTravelMap />
        <Mountains />
        <BooksStrip />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
