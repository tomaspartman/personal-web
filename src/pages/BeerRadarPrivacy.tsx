import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";

const updated = "22 October 2026";
const Block = ({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) => (
  <section id={id} className="scroll-mt-24 border-t border-border py-9 sm:py-11">
    <h2 className="font-display text-3xl sm:text-4xl">{title}</h2>
    <div className="mt-5 space-y-4 leading-relaxed text-foreground/75">{children}</div>
  </section>
);

export default function BeerRadarPrivacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="container max-w-5xl pb-24 pt-32 sm:pt-40">
        <Link to="/beerradar" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="h-4 w-4" /> Back to BeerRadar</Link>
        <div className="border-b border-border pb-12 sm:pb-16">
          <div className="mb-6 flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary"><ShieldCheck className="h-5 w-5 text-accent" /></span><p className="eyebrow">BeerRadar · Privacy & data</p></div>
          <h1 className="display text-display-xl">Privacy Policy<span className="text-accent">.</span></h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-foreground/75">This policy explains how BeerRadar handles information when you use its Android or iOS app or request help through our dedicated support page.</p>
          <p className="mt-5 font-mono text-xs text-muted-foreground">Effective date: {updated} · Last updated: {updated}</p>
        </div>
        <div className="grid gap-12 pt-5 lg:grid-cols-[1fr_14rem]">
          <article className="min-w-0">
            <Block title="Who operates BeerRadar?">
              <p>BeerRadar is operated by Tomas Partman (the app developer). For privacy questions or data rights requests, please use the <Link className="underline underline-offset-4" to="/beerradar#support">BeerRadar support form</Link>. This app-specific form is separate from the contact options on the developer's personal website.</p>
            </Block>
            <Block title="Information we process">
              <p><strong>Account and identity.</strong> If you choose to sign in or create an account, Firebase Authentication processes an account identifier, authentication credentials or tokens, and, depending on your chosen method, your email address and account name. Sign-in options may include email/password, Google and Apple. You may browse many app features as a guest.</p>
              <p><strong>Profile and community.</strong> You may provide a nickname, avatar or profile photo, add friends, join leaderboards, submit venue corrections, feedback and ratings, or publish reviews. Account profile data is saved in Firebase when signed in; leaderboards and explicitly published contributions may be visible to other users. A selected photo may be converted to a smaller image before storage. Avoid entering sensitive personal information in public contributions.</p>
              <p><strong>Diary and visit history.</strong> BeerRadar can store your beer check-ins, ratings, favourite venues, dates, achievements, preferences and game progress locally. If you sign in, relevant diary and progress information may be synchronized to Firebase Cloud Firestore. Check-ins and confirmed visits may include venue names, coordinates and timestamps.</p>
              <p><strong>Location.</strong> With your permission, BeerRadar uses device location to find nearby places, power GPS navigation and offer visit-related features. Location may be processed on your device and venue coordinates may be included in check-ins or visit records you choose to save or synchronize. Optional automatic venue detection or background location is used only if that feature is enabled and the appropriate device permission is granted. You can control these permissions through your device and in-app settings where available.</p>
              <p><strong>Photos and camera.</strong> You can choose a profile photo from your photo library; QR friend scanning may use the camera. BeerRadar does not require general access to your photo library or camera just to browse the beer catalogue.</p>
              <p><strong>Support requests.</strong> When you use the BeerRadar support form, we receive the name, reply email, topic and message you submit, so we can respond. Please do not include passwords or other sensitive information.</p>
              <p><strong>Optional analytics and technical information.</strong> If you enable analytics, Firebase Analytics can process app activity, device/app identifiers and technical usage information in accordance with its SDK operation and the options available on your device. The app also uses Google Firebase services for authentication and data synchronization; these services can process technical information such as IP addresses, device and app details to operate reliably and securely.</p>
            </Block>
            <Block title="How we use this information">
              <p>We process information to provide app functionality (beer discovery, venue navigation, account access, diary synchronization and social features), maintain account security, handle support and correction requests, honor privacy choices, and—when enabled—understand general app usage so we can improve BeerRadar.</p>
              <p>Depending on the processing activity and applicable law, our legal bases may include performance of the service you request, your consent (such as for optional analytics and location permissions), and legitimate interests in maintaining a secure and reliable service. You can withdraw optional permissions and analytics consent.</p>
            </Block>
            <Block title="Services and sharing">
              <p>BeerRadar uses Google Firebase (including Authentication, Cloud Firestore, Cloud Functions, and optionally Analytics) to support its core services. Apple or Google may process information when you choose their sign-in services, and your device's maps service may process navigation details when you open external directions. Venue information may come from third-party data sources.</p>
              <p>The website support form uses Netlify's form-handling infrastructure to accept and deliver requests. These service providers process information under their own applicable privacy and security arrangements. Public leaderboard profiles and intentionally published venue reviews may be visible to other app users. We do not sell personal data or use it to display targeted third-party advertising in BeerRadar.</p>
              <p>Relevant third-party information: <a className="underline underline-offset-4" href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Firebase privacy and security</a> · <a className="underline underline-offset-4" href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer">Netlify privacy</a>.</p>
            </Block>
            <Block title="Storage, security and retention">
              <p>Some settings and diary information remain on your device; account-associated records can be stored in Firebase. We use access controls and other technical measures intended to protect user information, although no online service can guarantee absolute security.</p>
              <p>We retain account-related information while it is needed to operate your account and the features you use, or as otherwise required for legitimate operational or legal purposes. Support messages are retained as needed to handle requests. Third-party providers may apply additional technical retention periods. You may request deletion at any time using the controls described below.</p>
            </Block>
            <Block title="Your privacy choices" id="choices">
              <p><strong>Location:</strong> You can allow, deny or revoke location access in iOS or Android settings. Optional automatic visit detection can be disabled within the app where available.</p>
              <p><strong>Analytics:</strong> Optional Firebase Analytics can be enabled or disabled in BeerRadar's privacy/settings controls. The app is configured to keep optional analytics disabled unless you opt in.</p>
              <p><strong>Profile and contributions:</strong> You can edit profile details and control optional public participation. Some content you deliberately publish may already have been seen by others.</p>
              <p><strong>Account deletion:</strong> Signed-in users can use the account deletion option in the app. You can also follow the <Link className="underline underline-offset-4" to="/beerradar/delete-account">account deletion instructions</Link> or request assistance through the <Link className="underline underline-offset-4" to="/beerradar#support">support form</Link>.</p>
              <p>If you are in a jurisdiction where privacy laws provide additional rights (such as access, rectification, erasure, restriction or objection), you can request help through our support form. We may need to verify that you control the account before fulfilling a request.</p>
            </Block>
            <Block title="International processing">
              <p>Google Firebase, Netlify and other service providers may process data in more than one country. Where applicable, transfers of personal information are handled using the relevant provider safeguards and legal transfer mechanisms.</p>
            </Block>
            <Block title="Children and alcohol-related content">
              <p>BeerRadar contains information about beer and pubs and is intended for users who meet the applicable legal age requirements for alcohol-related content in their location. The app does not sell or deliver alcoholic beverages.</p>
            </Block>
            <Block title="Changes to this policy">
              <p>We may update this policy as features and legal requirements change. The latest published version and its update date will always be available at this address. Material changes will be communicated where required.</p>
            </Block>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/beerradar/delete-account" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background">Account deletion <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/beerradar#support" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm">Contact support</Link>
            </div>
          </article>
          <aside className="hidden lg:block">
            <div className="sticky top-28 border-l border-border pl-5 text-sm text-muted-foreground">
              <p className="eyebrow mb-4">Quick links</p>
              <a className="mb-3 block hover:text-foreground" href="#choices">Privacy choices</a>
              <Link className="mb-3 block hover:text-foreground" to="/beerradar/delete-account">Delete account</Link>
              <Link className="block hover:text-foreground" to="/beerradar#support">Contact support</Link>
            </div>
          </aside>
        </div>
      </main>
      <footer className="border-t border-border"><div className="container flex flex-col justify-between gap-3 py-8 text-xs text-muted-foreground sm:flex-row"><span>© {new Date().getFullYear()} Tomas Partman · BeerRadar</span><Link className="underline underline-offset-4" to="/beerradar">BeerRadar home</Link></div></footer>
    </div>
  );
}