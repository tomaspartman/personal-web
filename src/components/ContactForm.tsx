import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

export const ContactForm = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Honeypot — Netlify will silently drop submissions that fill this.
    const honeypot = (form.elements.namedItem("bot-field") as HTMLInputElement)?.value;
    if (honeypot) return;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
       const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value || "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    setSending(true);
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          name,
          email,
          subject,
          message,
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      toast({
        title: "✓ Message sent",
        description: "Thanks — I'll get back to you soon.",
      });
      form.reset();
    } catch {
      toast({
        title: "Couldn't send the message",
        description: "Please try again, or email me directly at hello@tomaspartman.com.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      className="space-y-6"
    >
      {/* Required by Netlify so the function knows which form this is */}
      <input type="hidden" name="form-name" value="contact" />

      {/* Honeypot field — hidden from humans */}
      <p className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" autoComplete="off" />
        </label>
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name *" name="name" type="text" required autoComplete="name" />
        <Field label="Email *" name="email" type="email" required autoComplete="email" />
      </div>
      <Field label="Subject" name="subject" type="text" autoComplete="off" maxLength={120} />
      <Field label="Message *" name="message" textarea required minLength={10} maxLength={2000} />

      <button
        type="submit"
        disabled={sending}
        aria-busy={sending}
        className="inline-flex h-12 items-center rounded-full bg-foreground px-7 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {sending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
};

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  autoComplete?: string;
  minLength?: number;
  maxLength?: number;
};

const Field = ({
  label,
  name,
  type = "text",
  required,
  textarea,
  autoComplete,
  minLength,
  maxLength,
}: FieldProps) => {
  return (
    <label className="block">
      <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          autoComplete={autoComplete}
          minLength={minLength}
          maxLength={maxLength}
          className="mt-2 block w-full resize-none border-0 border-b border-border bg-transparent py-2 text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none focus:ring-0"
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          minLength={minLength}
          maxLength={maxLength}
          className="mt-2 block w-full border-0 border-b border-border bg-transparent py-2 text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none focus:ring-0"
        />
      )}
    </label>
  );
};
