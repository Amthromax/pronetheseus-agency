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
      { title: "Contact — Pronetheseus" },
      { name: "description", content: "Book a free 30-minute strategy call with the Pronetheseus team." },
      { property: "og:title", content: "Contact — Pronetheseus" },
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
    <div className="min-h-screen bg-sandel text-neutral-900 pt-36 pb-20">
      <div className="container-pad mx-auto max-w-[1400px]">
        <SectionHeading title="Let's talk about your automation stack" description="Book a call or send a note — we reply within a business day." />
      </div>
      <section className="container-pad mx-auto mt-10 max-w-[1400px]">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          {/* Left Column: Contact Form + Company Background Cards */}
          <div className="space-y-4">
            <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border border-sandel-border bg-sandel-card p-6 md:p-7 shadow-xs">
              <div className="grid gap-3.5 sm:grid-cols-2">
                <Field label="Name" error={errors.name?.message}><input {...register("name")} className="cf-input" placeholder="Your name" /></Field>
                <Field label="Email" error={errors.email?.message}><input {...register("email")} type="email" className="cf-input" placeholder="you@company.com" /></Field>
                <div className="sm:col-span-2">
                  <Field label="Company (optional)" error={errors.company?.message}><input {...register("company")} className="cf-input" placeholder="Acme Inc." /></Field>
                </div>
                <div className="sm:col-span-2">
                  <Field label="What are you looking to build?" error={errors.message?.message}>
                    <textarea {...register("message")} rows={4} className="cf-input resize-none" placeholder="Tell us about your business and where you'd like automation..." />
                  </Field>
                </div>
              </div>
              <button disabled={isSubmitting} className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#ff7a00] to-[#c2410c] px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.01] disabled:opacity-60 shadow-[0_8px_20px_-8px_rgba(255,122,0,0.6)] cursor-pointer">
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
              <style>{`.cf-input{width:100%;background:#F5EBE6;border:1px solid #E5D5CB;border-radius:10px;padding:10px 12px;font-size:13.5px;outline:none;color:#18181b}.cf-input::placeholder{color:rgb(120,120,128)}.cf-input:focus{border-color:rgba(255,122,0,0.8);box-shadow:0 0 0 3px rgba(255,122,0,0.15)}`}</style>
            </form>
            <InfoCard Icon={Building2} title="Pronetheseus Technologies" body="An AI automation studio building AI Employees, n8n workflows, CRM automations and voice agents for growing teams worldwide." />
            <InfoCard Icon={MapPin} title="Headquartered in India" body="Registered office · Mumbai, Maharashtra, India — with a fully remote delivery team across London, New York, Dubai and Singapore." />
          </div>

          {/* Right Column: Direct Channels + Working Hours */}
          <div className="space-y-4">
            <InfoCard Icon={CalendarDays} title="Book a strategy call" body="30-minute call with a principal engineer. Free, actionable, no sales pressure." cta="Open calendar" ctaTo="/book" />
            <InfoCard Icon={Mail} title="Email us directly" body="info@pronetheseus.com — we reply within one business day." />
            <InfoCard Icon={Phone} title="Call or WhatsApp" body="+91 86829 19009 · Mon–Fri, available across IST & GMT timezones." />
            <InfoCard Icon={Clock} title="Working hours" body="Monday – Friday · 9:00 AM to 7:00 PM IST. Async support over email on weekends." />
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="block text-sm font-medium text-neutral-800">
      <div className="mb-1.5">{label}</div>
      {children}
      {error && <div className="mt-1 text-xs text-red-600">{error}</div>}
    </label>
  );
}

function InfoCard({ Icon, title, body, cta, ctaTo }: { Icon: ComponentType<{ className?: string }>; title: string; body: string; cta?: string; ctaTo?: string; }) {
  return (
    <div className="rounded-2xl border border-sandel-border bg-sandel-card p-6 shadow-xs">
      <div className="grid size-10 place-items-center rounded-xl bg-[#ff7a00]/10 text-[#ff7a00] border border-[#ff7a00]/20">
        <Icon className="size-4" />
      </div>
      <div className="mt-4 font-display text-xl font-bold text-neutral-900">{title}</div>
      <p className="mt-1.5 text-sm text-neutral-600 font-sans leading-relaxed">{body}</p>
      {cta && (
        ctaTo ? (
          <Link to={ctaTo} className="mt-3 inline-block text-sm font-semibold text-[#ff7a00] hover:underline">{cta} →</Link>
        ) : (
          <button className="mt-3 text-sm font-semibold text-[#ff7a00] hover:underline cursor-pointer">{cta} →</button>
        )
      )}
    </div>
  );
}