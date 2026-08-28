import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Clock, Globe, Lightbulb, MapPin, Quote, Shield, Star, Target, TrendingUp, Users } from "lucide-react";
import { caseStudies, getCaseStudy, type CaseStudy } from "@/data/case-studies";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Case study not found" }, { name: "robots", content: "noindex" }] };
    }
    const { study } = loaderData;
    const title = `${study.company} — Case Study | Pronetheseus`;
    const description = `${study.after} How we delivered measurable outcomes for ${study.company}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: study.hero },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: study.hero },
      ],
    };
  },
  notFoundComponent: NotFound,
  errorComponent: ({ error, reset }) => (
    <div className="container-pad mx-auto max-w-2xl py-40 text-center bg-sandel min-h-screen">
      <h1 className="font-sans text-3xl font-bold">Something went wrong</h1>
      <p className="mt-3 text-neutral-600">{error.message}</p>
      <button onClick={reset} className="mt-6 rounded-full border border-neutral-300 px-5 py-2">Try again</button>
    </div>
  ),
  component: CaseStudyPage,
});

function NotFound() {
  return (
    <div className="container-pad mx-auto max-w-2xl py-40 text-center bg-sandel min-h-screen">
      <h1 className="font-sans text-4xl font-bold">Case study not found</h1>
      <p className="mt-3 text-neutral-600">This client story doesn't exist or has been moved.</p>
      <Link to="/case-studies" className="mt-6 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-sandel-card px-5 py-2 text-sm font-semibold">
        <ArrowLeft className="size-4" /> Back to case studies
      </Link>
    </div>
  );
}

function CaseStudyPage() {
  const { study } = Route.useLoaderData() as { study: CaseStudy };
  const others = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 2);

  return (
    <div className="bg-sandel text-neutral-900 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-sandel-border">
        <div className="absolute inset-0">
          <img src={study.hero} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5ECE0]/70 via-[#F5ECE0]/90 to-[#F5ECE0]" />
        </div>
        <div className="container-pad relative mx-auto max-w-[1400px] pt-32 sm:pt-40 pb-16">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-neutral-900 font-sans">
            <ArrowLeft className="size-4" /> All case studies
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-sandel-border bg-sandel-card px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-700">{study.industry}</span>
            <span className="rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1 text-xs font-mono font-bold text-emerald-700">LIVE IN PRODUCTION</span>
          </div>
          <h1 className="mt-4 font-sans text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">{study.company}</h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-neutral-700 font-sans">{study.after}</p>
          
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {study.metrics.map((m) => (
              <div key={m.l} className="rounded-2xl border border-sandel-border bg-sandel-card p-6 shadow-2xs">
                <div className="font-sans text-4xl font-extrabold text-neutral-900">{m.v}<span className="ml-1 text-2xl text-[#ff7a00] font-bold">{m.s}</span></div>
                <div className="mt-1 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive summary / long-form intro */}
      <section className="border-b border-sandel-border">
        <div className="container-pad mx-auto grid max-w-[1400px] gap-10 py-16 sm:py-20 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">Executive summary</div>
            <h2 className="mt-2 font-sans text-3xl font-bold">Comprehensive Case Breakdown</h2>
            <p className="mt-3 text-sm text-neutral-600 font-sans">The full story behind the numbers — what we audited, what we engineered, and what changed.</p>
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-neutral-500">
              <BookOpen className="size-4 text-[#ff7a00]" /> 5 min read · Updated 2026
            </div>
          </div>
          <div className="lg:col-span-2 space-y-5 text-sm sm:text-base leading-relaxed text-neutral-700 font-sans">
            <p>
              When {study.company} first reached out, the {study.industry.toLowerCase()} team was in a
              familiar bind: demand was accelerating faster than operational capacity could keep up, and the
              cost of every delayed inquiry was compounding quietly in the background. They didn't
              need another dashboard. They needed autonomous execution capability.
            </p>
            <p>
              Over the following weeks we sat inside the workflow. We shadowed operators, analyzed
              recorded calls, read escalation threads, and pulled historical operational logs into
              a single audit framework. The pattern was unmistakable: the top {String(study.metrics[2]?.v ?? 40)}%
              of repetitive activity was concentrated in small, repeatable paths — exactly the ones a purpose-built AI engine could own end-to-end.
            </p>
            <p>
              The build itself was deliberately robust. We picked enterprise-grade components
              ({study.customer.stack.slice(0, 4).join(", ")}), wired them through a single orchestration
              layer, and put a human-in-the-loop checkpoint at every decision carrying risk.
              Then we ran the system in shadow mode against live traffic before full production cutover.
            </p>
            <p>
              By month two, the numbers had stopped surprising anyone: <strong>{study.metrics[0].v}{study.metrics[0].s}</strong> back
              in the team's hands each month, <strong>{study.metrics[1].v}{study.metrics[1].s}</strong> ROI,
              and a team that could finally spend its time on high-value human work.
            </p>
          </div>
        </div>
      </section>

      {/* Customer details */}
      <section className="border-b border-sandel-border">
        <div className="container-pad mx-auto grid max-w-[1400px] gap-10 py-16 sm:py-20 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h2 className="font-sans text-2xl font-bold">About the Customer</h2>
            <p className="mt-3 text-sm text-neutral-600 font-sans">Snapshot of the organization we partnered with.</p>
          </div>
          <div className="lg:col-span-2">
            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Detail icon={<Users className="size-4 text-[#ff7a00]" />} label="Team size" value={study.customer.size} />
              <Detail icon={<MapPin className="size-4 text-[#ff7a00]" />} label="HQ" value={study.customer.location} />
              <Detail icon={<Globe className="size-4 text-[#ff7a00]" />} label="Website" value={study.customer.website} />
              <Detail icon={<CheckCircle2 className="size-4 text-[#ff7a00]" />} label="Founded" value={study.customer.founded} />
            </dl>
            <div className="mt-8">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">Tech Stack & Infrastructure</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {study.customer.stack.map((s) => (
                  <span key={s} className="rounded-md border border-sandel-border bg-sandel-card px-3 py-1 text-xs font-mono font-semibold text-neutral-700">{s}</span>
                ))}
              </div>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-red-200/80 bg-red-50/50 p-5">
                <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-600">Before AI System</div>
                <p className="mt-2 text-xs sm:text-sm text-neutral-800 font-sans">{study.before}</p>
              </div>
              <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/50 p-5">
                <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-700">After AI System</div>
                <p className="mt-2 text-xs sm:text-sm text-neutral-900 font-bold font-sans">{study.after}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge + approach */}
      <section className="border-b border-sandel-border">
        <div className="container-pad mx-auto grid max-w-[1400px] gap-10 py-16 sm:py-20 lg:grid-cols-2">
          <div>
            <h2 className="font-sans text-3xl font-bold">The Challenge</h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-700 font-sans leading-relaxed">{study.challenge}</p>
          </div>
          <div>
            <h2 className="font-sans text-3xl font-bold">Our Approach</h2>
            <ul className="mt-4 space-y-3">
              {study.approach.map((a) => (
                <li key={a} className="flex gap-3 text-sm sm:text-base text-neutral-800 font-sans">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-600" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Delivery workflow */}
      <section className="border-b border-sandel-border bg-sandel/50">
        <div className="container-pad mx-auto max-w-[1400px] py-16 sm:py-20">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">Delivery Pathway</div>
            <h2 className="mt-2 font-sans text-3xl font-bold md:text-4xl">Step-by-step implementation</h2>
            <p className="mt-3 text-sm text-neutral-600 font-sans">A structured six-phase engineering pipeline from discovery to full production handover.</p>
          </div>
          <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {study.workflow.map((w, i) => (
              <motion.li
                key={w.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="relative rounded-2xl border border-sandel-border bg-sandel-card p-6 shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-[#ff7a00]">{w.step}</span>
                  <span className="rounded-md border border-sandel-border bg-sandel px-2.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider text-neutral-700">{w.duration}</span>
                </div>
                <h3 className="mt-3 font-sans text-lg font-bold text-neutral-900">{w.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">{w.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Verified Client Testimonials */}
      <section className="border-b border-sandel-border">
        <div className="container-pad mx-auto max-w-[1400px] py-16 sm:py-20">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">Client Testimonial & Feedback</div>
            <h2 className="mt-2 font-sans text-3xl font-bold md:text-4xl">Executive Feedback</h2>
          </div>
          
          {/* Main Executive Quote */}
          <blockquote className="mt-8 rounded-2xl border border-sandel-border bg-sandel-card p-8 shadow-sm max-w-4xl">
            <Quote className="size-8 text-[#ff7a00]" />
            <p className="mt-4 font-sans text-xl sm:text-2xl font-bold leading-snug text-neutral-900">"{study.quote}"</p>
            <footer className="mt-4 text-xs sm:text-sm font-semibold text-neutral-600 font-sans">— {study.who}, {study.role} at {study.company}</footer>
          </blockquote>

          {/* Detailed Feedback Cards */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {study.feedback.map((f) => (
              <div key={f.name} className="rounded-xl border border-sandel-border bg-sandel-card p-5 shadow-2xs">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`size-4 ${i < f.rating ? "fill-amber-400 text-amber-400" : "text-neutral-300"}`} />
                  ))}
                </div>
                <p className="mt-3 text-xs sm:text-sm text-neutral-700 font-sans italic">"{f.text}"</p>
                <div className="mt-4 pt-3 border-t border-sandel-border/60 text-xs font-bold text-neutral-900 font-sans">{f.name} <span className="font-normal text-neutral-500">· {f.role}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other case studies */}
      <section className="border-b border-sandel-border">
        <div className="container-pad mx-auto max-w-[1400px] py-16 sm:py-20">
          <div className="flex items-end justify-between">
            <h2 className="font-sans text-3xl font-bold">More Client Stories</h2>
            <Link to="/case-studies" className="text-xs sm:text-sm font-bold text-neutral-700 hover:text-[#ff7a00] font-sans">View all stories →</Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/case-studies/$slug"
                params={{ slug: o.slug }}
                className="group overflow-hidden rounded-2xl border border-sandel-border bg-sandel-card transition hover:border-neutral-400 hover:shadow-lg"
              >
                <div className="aspect-[16/7] overflow-hidden bg-neutral-200">
                  <img src={o.hero} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">{o.industry}</div>
                  <h3 className="mt-1 font-sans text-xl font-bold text-neutral-900 group-hover:text-[#ff7a00] transition-colors">{o.company}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 font-sans line-clamp-2">{o.after}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-neutral-900 group-hover:text-[#ff7a00]">Read case study <ArrowRight className="size-3.5" /></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}

function Detail({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-sandel-border bg-sandel-card p-4">
      <dt className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">{icon}{label}</dt>
      <dd className="mt-1 text-sm font-bold text-neutral-900 font-sans">{value}</dd>
    </div>
  );
}