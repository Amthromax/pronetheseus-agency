import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Building2, CalendarDays, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { ComponentType, ReactNode } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Helleious" },
      { name: "description", content: "Book a free 30-minute strategy call with the Helleious team." },
      { property: "og:title", content: "Contact — Helleious" },
      { property: "og:description", content: "30-minute strategy call. Concrete plan, no fluff." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Page,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(80),
  email: z.string().trim().email("Valid email required").max(120),
  company: z.string().trim().max(120).optional(),
  message: z.string().trim().min(10, "Tell us a bit more").max(2000),
});
type FormData = z.infer<typeof schema>;

function Page() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = async (_: FormData) => {
    await new Promise((r) => setTimeout(r, 700));
    toast.success("Message received — we'll be in touch within 24 hours.");
    reset();
  };
  return (
    <div className="pt-40">
      <div className="container-pad mx-auto max-w-[1400px]">
        <SectionHeading title="Let's talk about your automation stack" description="Book a call or send a note — we reply within a business day." />
      </div>
      <section className="container-pad mx-auto mt-20 max-w-[1400px]">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl border border-white/10 glass p-8 md:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" error={errors.name?.message}><input {...register("name")} className="cf-input" placeholder="Your name" /></Field>
              <Field label="Email" error={errors.email?.message}><input {...register("email")} type="email" className="cf-input" placeholder="you@company.com" /></Field>
              <div className="sm:col-span-2">
                <Field label="Company (optional)" error={errors.company?.message}><input {...register("company")} className="cf-input" placeholder="Acme Inc." /></Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="What are you looking to build?" error={errors.message?.message}>
                  <textarea {...register("message")} rows={5} className="cf-input resize-none" placeholder="Tell us about your business and where you'd like automation..." />
                </Field>
              </div>
            </div>
            <button disabled={isSubmitting} className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#ff7a00] to-[#c2410c] px-6 py-3.5 text-sm font-medium text-white transition hover:scale-[1.01] disabled:opacity-60">
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
            <style>{`.cf-input{width:100%;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:12px 14px;font-size:14px;outline:none;color:inherit}.cf-input::placeholder{color:rgb(148,148,158)}.cf-input:focus{border-color:rgba(255,122,0,0.5);box-shadow:0 0 0 4px rgba(255,122,0,0.1)}`}</style>
          </form>
          <div className="space-y-4">
            <InfoCard Icon={CalendarDays} title="Book a strategy call" body="30-minute call with a principal engineer. Free, actionable, no sales pressure." cta="Open calendar" ctaTo="/book" />
            <InfoCard Icon={Mail} title="Email us directly" body="info@helleious.com — we reply within one business day." />
            <InfoCard Icon={Phone} title="Call or WhatsApp" body="+91 90000 00000 · Mon–Fri, available across IST & GMT timezones." />
            <InfoCard Icon={Building2} title="Helleious Technologies" body="An AI automation studio building AI Employees, n8n workflows, CRM automations and voice agents for growing teams worldwide." />
            <InfoCard Icon={MapPin} title="Headquartered in India" body="Registered office · Mumbai, Maharashtra, India — with a fully remote delivery team across London, New York, Dubai and Singapore." />
            <InfoCard Icon={Clock} title="Working hours" body="Monday – Friday · 9:00 AM to 7:00 PM IST. Async support over email on weekends." />
          </div>
        </div>
      </section>
      <div className="h-24" />
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="block text-sm">
      <div className="mb-2 text-foreground/80">{label}</div>
      {children}
      {error && <div className="mt-1 text-xs text-brand">{error}</div>}
    </label>
  );
}

function InfoCard({ Icon, title, body, cta, ctaTo }: { Icon: ComponentType<{ className?: string }>; title: string; body: string; cta?: string; ctaTo?: string; }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <div className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-[#ff7a00]/25 to-[#c2410c]/10 text-brand ring-1 ring-inset ring-white/10">
        <Icon className="size-4" />
      </div>
      <div className="mt-4 font-display text-2xl">{title}</div>
      <p className="mt-1 text-sm text-muted-foreground">{body}</p>
      {cta && (
        ctaTo ? (
          <Link to={ctaTo} className="mt-3 inline-block text-sm text-brand hover:underline">{cta} →</Link>
        ) : (
          <button className="mt-3 text-sm text-brand hover:underline">{cta} →</button>
        )
      )}
    </div>
  );
}