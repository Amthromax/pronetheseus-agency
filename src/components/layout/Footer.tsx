import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Loader2, Mail, MessageCircle, Twitter } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const cols: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Services",
    links: [
      { label: "AI Agents", to: "/services" },
      { label: "n8n Automation", to: "/services" },
      { label: "CRM Automation", to: "/services" },
      { label: "Voice AI", to: "/services" },
      { label: "WhatsApp AI", to: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Case Studies", to: "/case-studies" },
      { label: "Pricing", to: "/pricing" },
      { label: "Careers", to: "/careers" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", to: "/blog" },
      { label: "Industries", to: "/industries" },
      { label: "Templates", to: "/resources" },
      { label: "Playbooks", to: "/resources" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", to: "/privacy" },
      { label: "Terms", to: "/terms" },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const trimmedEmail = email.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);

    if (!isValidEmail) {
      toast.error("Enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      toast.success("Thanks — you're subscribed.");
      setEmail("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/5 bg-black/40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-80 opacity-40"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="container-pad mx-auto max-w-[1400px] py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3.5 group">
              <img src="/logo.png" alt="Pronetheseus Logo" className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110" />
              <span className="font-display text-2xl sm:text-3xl font-extrabold">Pronetheseus</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              AI Employees that work 24/7. We design and ship automation systems for teams
              that want to move at the speed of software.
            </p>
            <form
              noValidate
              className="mt-6 flex overflow-hidden rounded-full border border-white/10 bg-white/5 p-1"
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                aria-label="Email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ff7a00] to-[#c2410c] px-4 py-2 text-sm font-medium text-white transition disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting && <Loader2 className="size-4 animate-spin" aria-hidden />}
                {isSubmitting ? "Subscribing…" : "Subscribe"}
              </button>
            </form>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                {col.title}
              </div>
              <ul className="mt-4 space-y-2">
                {col.links.map((l, i) => (
                  <li key={i}>
                    <Link
                      to={l.to}
                      className="text-sm text-foreground/80 transition hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/5 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Pronetheseus. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {[
              { Icon: Twitter, label: "Twitter" },
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Github, label: "GitHub" },
              { Icon: MessageCircle, label: "WhatsApp" },
              { Icon: Mail, label: "Email" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full glass text-foreground/70 transition hover:text-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}