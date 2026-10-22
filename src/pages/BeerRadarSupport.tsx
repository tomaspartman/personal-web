import { useState, type FormEvent } from "react";
import { ArrowRight, BookOpen, Compass, ExternalLink, HelpCircle, MapPin, Route, Shield, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";

const PLAY_URL = "https://play.google.com/store/apps/details?id=tomaspartman.beerradar";

const features = [
  { icon: MapPin, name: "Find nearby pubs", details: "Discover pubs and taprooms around you, with a focus on Czechia and Slovakia." },
  { icon: Compass, name: "GPS beer compass", details: "Point toward a selected venue or continue in your preferred map app." },
  { icon: BookOpen, name: "Your beer diary", details: "Keep a record of discovered beers and visited places, with achievements and progress." },
  { icon: Route, name: "Beer routes", details: "Pick the beers you want to try and explore where to find them." },
];

const faqs = [
  { q: "Do I need an account?", a: "You can explore the catalogue as a guest. Some optional features, including cloud synchronization and social features, require signing in." },
  { q: "Why is location permission requested?", a: "Your location is used to find nearby venues and guide the compass. You can change the permission in your device settings." },
  { q: "Can I use BeerRadar offline?", a: "The app includes an offline beer catalogue. Online updates, maps, sign-in and synchronization may require a connection." },
  { q: "How do I report an incorrect venue?", a: "Use the in-app reporting feature or send us the venue name, location and correction using the support form below." },
  { q: "How do I delete my BeerRadar account?", a: "Open Profile in the app and select the account deletion option. See the separate account deletion page for details." },
];

function SupportForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("bot-field") || "").trim()) return;
    data.set("form-name", "beerradar-support");
    setStatus("sending");
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const field = "mt-2 block w-full rounded-none border-0 border-b border-border bg-transparent px-0 py-3 text-foreground outline-none focus:border-accent focus:ring-0";
  return (
    <form name="beerradar-support" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={submit} className="space-y-6">
      <input type="hidden" name="form-name" value="beerradar-support" />
      <p className="hidden" aria-hidden="true"><label>Do not fill this in <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-sm font-medium">Your name <input name="name" required maxLength={100} autoComplete="name" className={field} /></label>
        <label className="block text-sm font-medium">Your email <input name="email" required type="email" maxLength={200} autoComplete="email" className={field} /></label>
      </div>
      <label className="block text-sm font-medium">What can we help with?
        <select name="subject" required className={field} defaultValue="">
          <option value="" disabled>Select a topic</option>
          <option value="Technical issue">Technical issue</option>
          <option value="Incorrect venue or beer information">Incorrect venue or beer information</option>
          <option value="Account or data request">Account or data request</option>
          <option value="Feedback">Feedback</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <label className="block text-sm font-medium">Message
        <textarea name="message" required minLength={10} maxLength={3000} rows={5} className={field} placeholder="Tell us what happened. Include your phone model and app version if relevant." />
      </label>
      <p className="text-xs leading-relaxed text-muted-foreground">We use your contact details and message only to handle your support request. See our <Link to="/beerradar/privacy" className="underline underline-offset-4">Privacy Policy</Link>.</p>
      <button disabled={status === "sending"} type="submit" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85 disabled:opacity-50">
        {status === "sending" ? "Sending…" : "Send support request"} <ArrowRight className="h-4 w-4" />
      </button>
      {status === "sent" && <p role="status" className="text-sm text-foreground">Thank you. Your request has been submitted.</p>}
      {status === "error" && <p role="alert" className="text-sm text-destructive">We couldn't submit your request. Please try again shortly.</p>}
    </form>
  );
}

export default function BeerRadarSupport() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-[#17362d] pt-32 text-[#fff6df] sm:pt-40">
          <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-16 h-[28rem] w-[28rem] rounded-full border border-[#d6b66b]/25 sm:h-[37rem] sm:w-[37rem]" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 top-32 h-80 w-80 rounded-full border border-[#d6b66b]/25 sm:h-[29rem] sm:w-[29rem]" />
          <div className="container relative pb-20 sm:pb-28">
            <div className="mb-12 flex items-center gap-3 font-mono text-sm font-semibold tracking-widest">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d6b66b] text-[#17362d]"><Compass className="h-6 w-6" /></span>
              BEERRADAR
              <span className="rounded-full border border-[#d6b66b]/40 px-3 py-1 text-[10px] font-normal uppercase text-[#e7d6ad]">Official support</span>
            </div>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[#d6b66b]">Find your next stop</p>
            <h1 className="display max-w-5xl text-[clamp(3.5rem,9vw,7.5rem)]">Discover beer.<span className="mt-2 block italic text-[#d6b66b]">Find your way.</span></h1>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-[#fff6df]/80">Discover new beers, find nearby pubs, navigate by GPS compass and remember your favourite stops with BeerRadar.</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#d6b66b] px-6 py-3 text-sm font-semibold text-[#17362d] hover:opacity-90"><Smartphone className="h-4 w-4" /> Google Play <ExternalLink className="h-4 w-4" /></a>
              <a href="#support" className="inline-flex items-center gap-2 rounded-full border border-[#fff6df]/50 px-6 py-3 text-sm font-medium hover:border-[#fff6df]">Get support <ArrowRight className="h-4 w-4" /></a>
            </div>
            <p className="mt-5 text-sm text-[#fff6df]/60">iOS release in preparation.</p>
          </div>
        </section>

        <section className="container py-20 sm:py-28">
          <p className="eyebrow mb-5">About BeerRadar</p>
          <h2 className="display max-w-3xl text-display-lg">Made for the curious beer explorer.</h2>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-2">
            {features.map(({ icon: Icon, name, details }) => (
              <article key={name} className="bg-background p-8 sm:p-10">
                <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                <h3 className="mt-6 font-display text-3xl">{name}</h3>
                <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{details}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-secondary/25">
          <div className="container grid gap-12 py-20 sm:py-28 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-5">Help center</p>
              <h2 className="display text-display-lg">A few quick answers.</h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">Have a question about finding pubs, location permissions, your diary or your account? Start here or send a support request below.</p>
            </div>
            <div className="lg:col-span-7">
              <div className="mb-5 flex items-center gap-2"><HelpCircle className="h-5 w-5 text-accent" /><p className="eyebrow">Frequently asked questions</p></div>
              <div className="divide-y divide-border border-y border-border">
                {faqs.map(({ q, a }) => (
                  <details key={q} className="group py-5">
                    <summary className="cursor-pointer list-none pr-5 font-medium">{q}<span className="float-right text-lg text-muted-foreground">+</span></summary>
                    <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="support" className="container grid gap-12 py-20 sm:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-5">Contact support</p>
            <h2 className="display text-display-lg">How can we help?</h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">Send a request about app problems, data questions, or incorrect venue information. No public support email is required.</p>
          </div>
          <div className="lg:col-span-7"><SupportForm /></div>
        </section>

        <section className="border-t border-border bg-secondary/20">
          <div className="container py-16">
            <p className="eyebrow mb-4">Trust and safety</p>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div><h2 className="font-display text-3xl">Your data matters.</h2><p className="mt-3 max-w-xl text-muted-foreground">Learn more about personal data, permissions, privacy rights and account deletion.</p></div>
              <div className="flex flex-wrap gap-4 text-sm"><Link className="inline-flex items-center gap-2 underline underline-offset-4" to="/beerradar/privacy"><Shield className="h-4 w-4" /> Privacy Policy</Link><Link className="underline underline-offset-4" to="/beerradar/delete-account">Delete account</Link></div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border"><div className="container flex flex-col justify-between gap-3 py-8 text-xs text-muted-foreground sm:flex-row"><span>© {new Date().getFullYear()} Tomas Partman · BeerRadar</span><a className="underline underline-offset-4" href="/">Back to tomaspartman.com</a></div></footer>
    </div>
  );
}
