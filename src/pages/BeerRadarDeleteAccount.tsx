import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";

export default function BeerRadarDeleteAccount() {
  return <div className="min-h-screen bg-background text-foreground">
    <SiteHeader />
    <main className="container max-w-4xl pb-28 pt-32 sm:pt-40">
      <Link to="/beerradar" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="h-4 w-4"/> Back to BeerRadar</Link>
      <p className="eyebrow mb-5">BeerRadar account and data</p>
      <h1 className="display text-display-xl">Delete your account.</h1>
      <p className="mt-8 max-w-3xl text-lg leading-relaxed text-foreground/75">You can request deletion of your BeerRadar account and associated cloud data directly from the app. You can also contact BeerRadar support using the form on the BeerRadar page.</p>
      <section className="mt-12 border-y border-border py-10">
        <h2 className="font-display text-3xl">Delete from within BeerRadar</h2>
        <ol className="mt-6 list-decimal space-y-4 pl-6 leading-relaxed text-foreground/75">
          <li>Open BeerRadar on your phone and sign in to the account you want to delete.</li>
          <li>Open your <strong>Profile</strong> and find the account deletion option in the account/settings area.</li>
          <li>Read the confirmation and confirm the deletion request.</li>
          <li>The app will request server-confirmed deletion. If the operation fails, your account remains active and you can try again or contact support.</li>
        </ol>
      </section>
      <section className="border-b border-border py-10">
        <h2 className="font-display text-3xl">What is deleted?</h2>
        <p className="mt-5 leading-relaxed text-foreground/75">The deletion process is designed to remove the account and its account-associated Firebase records, such as the synced diary, profile and progress. Some locally stored data may remain on your device until removed from the app or device. Certain records may be retained when required by law, security or other legitimate obligations. Specific deletion behavior must be validated against the deployed server function.</p>
      </section>
      <section className="py-10">
        <ShieldCheck className="h-6 w-6 text-accent" />
        <h2 className="mt-5 font-display text-3xl">Need help?</h2>
        <p className="mt-4 leading-relaxed text-foreground/75">If you cannot access the app, need assistance or want to make another privacy request, use the dedicated BeerRadar support form. Select “Account or data request” and give us enough information to identify the request. Never send your password.</p>
        <Link to="/beerradar#support" className="mt-7 inline-flex rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background">Open BeerRadar support</Link>
      </section>
      <p className="text-sm text-muted-foreground">Read the <Link className="underline underline-offset-4" to="/beerradar/privacy">BeerRadar Privacy Policy</Link> for more information.</p>
    </main>
  </div>;
}