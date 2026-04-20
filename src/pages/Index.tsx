import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { About } from "@/components/About";
import { Background } from "@/components/Background";
import { TravelMap } from "@/components/TravelMap";
import { BooksStrip } from "@/components/BooksStrip";
import { Mountains } from "@/components/Mountains";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Intro />
        <About />
        <Background />
        <TravelMap />
        <Mountains />
        <BooksStrip />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
