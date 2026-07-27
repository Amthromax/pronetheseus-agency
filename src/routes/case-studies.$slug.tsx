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
    const title = `${study.company} — Case Study | Helleious`;
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
    <div className="container-pad mx-auto max-w-2xl py-40 text-center">
      <h1 className="font-display text-3xl">Something went wrong</h1>
      <p className="mt-3 text-neutral-600">{error.message}</p>
      <button onClick={reset} className="mt-6 rounded-full border border-neutral-300 px-5 py-2">Try again</button>
    </div>
  ),
  component: CaseStudyPage,
});

function NotFound() {
  return (
    <div className="container-pad mx-auto max-w-2xl py-40 text-center">
      <h1 className="font-display text-4xl">Case study not found</h1>
      <p className="mt-3 text-neutral-600">This client story doesn't exist or has been moved.</p>
      <Link to="/case-studies" className="mt-6 inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2">
        <ArrowLeft className="size-4" /> Back to case studies
      </Link>
    </div>
  );
}

function CaseStudyPage() {
  const { study } = Route.useLoaderData() as { study: CaseStudy };
  const others = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 2);

  return (
    <div className="bg-white text-neutral-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="absolute inset-0">
          <img src={study.hero} alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-white" />
        </div>
        <div className="container-pad relative mx-auto max-w-[1400px] pt-40 pb-20">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900">
            <ArrowLeft className="size-4" /> All case studies
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs uppercase tracking-widest text-neutral-700">{study.industry}</span>
            <span className="rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">LIVE IN PRODUCTION</span>
          </div>
          <h1 className="mt-4 font-display text-4xl leading-tight md:text-6xl">{study.company}</h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-700">{study.after}</p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {study.metrics.map((m) => (
              <div key={m.l} className="rounded-2xl border border-neutral-200 bg-white p-6">
                <div className="font-display text-4xl">{m.v}<span className="ml-1 text-2xl text-neutral-500">{m.s}</span></div>
                <div className="mt-1 text-sm text-neutral-600">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive summary / long-form intro */}
      <section className="border-b border-neutral-200">
        <div className="container-pad mx-auto grid max-w-[1400px] gap-10 py-20 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="text-xs uppercase tracking-widest text-neutral-500">Executive summary</div>
            <h2 className="mt-2 font-display text-3xl">A five-minute read</h2>
            <p className="mt-3 text-sm text-neutral-600">The full story behind the numbers — what we found, what we shipped, and what changed.</p>
            <div className="mt-6 flex items-center gap-2 text-xs text-neutral-500">
              <BookOpen className="size-4" /> 5 min read · Updated 2026
            </div>
          </div>
          <div className="lg:col-span-2 space-y-5 text-[15px] leading-7 text-neutral-700">
            <p>
              When {study.company} first reached out, the {study.industry.toLowerCase()} team was in a
              familiar bind: demand was accelerating faster than the org chart could keep up, and the
              cost of every unanswered request was compounding quietly in the background. They didn't
              need another dashboard. They needed capacity — the kind that shows up on Monday morning
              and doesn't take PTO.
            </p>
            <p>
              Over the following weeks we sat inside the workflow. We shadowed operators, listened to
              recorded calls, read escalation threads, and pulled six quarters of historical data into
              a single warehouse. The pattern was unmistakable: the top {String(study.metrics[2]?.v ?? 40)}%
              of activity was concentrated in a small number of repeatable paths — and those paths were
              exactly the ones a purpose-built agent could own end-to-end.
            </p>
            <p>
              The build itself was deliberately unflashy. We picked boring, proven components
              ({study.customer.stack.slice(0, 3).join(", ")}), wired them through a single orchestration
              layer, and put a human-in-the-loop checkpoint at every decision that carried real risk.
              Then we ran the whole thing in shadow mode against live traffic for a full sprint before
              we let it touch a single customer.
            </p>
            <p>
              By the end of week six the system was live, and by the end of month two the numbers had
              stopped surprising anyone: <strong>{study.metrics[0].v}{study.metrics[0].s}</strong> back
              in the team's hands each month, <strong>{study.metrics[1].v}{study.metrics[1].s}</strong> ROI,
              and — the metric leadership cared about most — a team that could finally spend its time
              on the work that only humans can do.
            </p>
          </div>
        </div>
      </section>

      {/* Customer details */}
      <section className="border-b border-neutral-200">
        <div className="container-pad mx-auto grid max-w-[1400px] gap-10 py-20 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h2 className="font-display text-2xl">About the customer</h2>
            <p className="mt-3 text-sm text-neutral-600">Snapshot of the team we partnered with.</p>
          </div>
          <div className="lg:col-span-2">
            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Detail icon={<Users className="size-4" />} label="Team size" value={study.customer.size} />
              <Detail icon={<MapPin className="size-4" />} label="HQ" value={study.customer.location} />
              <Detail icon={<Globe className="size-4" />} label="Website" value={study.customer.website} />
              <Detail icon={<CheckCircle2 className="size-4" />} label="Founded" value={study.customer.founded} />
            </dl>
            <div className="mt-8">
              <div className="text-xs uppercase tracking-widest text-neutral-500">Stack</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {study.customer.stack.map((s) => (
                  <span key={s} className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700">{s}</span>
                ))}
              </div>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                <div className="text-[10px] uppercase tracking-widest text-neutral-500">Before</div>
                <p className="mt-2 text-sm text-neutral-700">{study.before}</p>
              </div>
              <div className="rounded-2xl border border-neutral-300 bg-neutral-100 p-5">
                <div className="text-[10px] uppercase tracking-widest text-neutral-700">After</div>
                <p className="mt-2 text-sm text-neutral-800">{study.after}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge + approach */}
      <section className="border-b border-neutral-200">
        <div className="container-pad mx-auto grid max-w-[1400px] gap-10 py-20 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl">The challenge</h2>
            <p className="mt-4 text-neutral-700">{study.challenge}</p>
          </div>
          <div>
            <h2 className="font-display text-3xl">Our approach</h2>
            <ul className="mt-4 space-y-3">
              {study.approach.map((a) => (
                <li key={a} className="flex gap-3 text-neutral-700">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-600" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Deep dive: solution architecture */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="container-pad mx-auto max-w-[1400px] py-20">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-neutral-500">Under the hood</div>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">How the system actually works</h2>
            <p className="mt-3 text-neutral-600">
              A short tour of the moving parts. Nothing exotic — every layer was chosen because it
              was the calmest thing that could possibly work.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <Target className="size-5" />, title: "Intent layer", body: "A small classifier routes every incoming message to one of a fixed set of playbooks. Unknown intents fall back to a human — never to a guess." },
              { icon: <Lightbulb className="size-5" />, title: "Reasoning layer", body: "A retrieval-augmented model pulls the exact policy, record, or history it needs before it drafts a reply. No hallucinated facts, no invented balances." },
              { icon: <Shield className="size-5" />, title: "Guardrails", body: "Every outbound action passes a policy check: PII redaction, spend limits, tone review, and a hard stop on anything the model isn't 95% confident about." },
              { icon: <Clock className="size-5" />, title: "Latency budget", body: "Median response under 900ms end-to-end, including retrieval, reasoning, and write-back. Long-running tasks stream progress to the operator in real time." },
              { icon: <TrendingUp className="size-5" />, title: "Learning loop", body: "Every human correction is captured, labelled, and folded into the next week's evaluation run. The system gets measurably better each sprint." },
              { icon: <CheckCircle2 className="size-5" />, title: "Observability", body: "Full trace per interaction: input, retrieved context, reasoning steps, tool calls, and outcome. Debugging a bad reply takes seconds, not hours." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-neutral-200 bg-white p-6">
                <div className="inline-flex size-10 items-center justify-center rounded-full bg-neutral-900 text-white">{c.icon}</div>
                <h3 className="mt-4 font-display text-lg">{c.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery workflow */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="container-pad mx-auto max-w-[1400px] py-20">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-neutral-500">Delivery workflow</div>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">How we shipped it</h2>
            <p className="mt-3 text-neutral-600">A calm, six-phase delivery — from discovery to handover — with weekly demos and full transparency.</p>
          </div>
          <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {study.workflow.map((w, i) => (
              <motion.li
                key={w.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                className="relative rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl text-neutral-400">{w.step}</span>
                  <span className="rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1 text-[10px] uppercase tracking-widest text-neutral-600">{w.duration}</span>
                </div>
                <h3 className="mt-3 font-display text-xl">{w.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{w.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Results in depth */}
      <section className="border-b border-neutral-200">
        <div className="container-pad mx-auto grid max-w-[1400px] gap-12 py-20 lg:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-widest text-neutral-500">Results in depth</div>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">What changed, in plain numbers</h2>
            <p className="mt-4 text-neutral-700">
              We measure everything against the baseline we captured in week one. No moving goalposts,
              no vanity metrics. Here's what {study.company} looked like ninety days after go-live.
            </p>
            <ul className="mt-6 space-y-4 text-neutral-700">
              <li className="flex gap-3"><TrendingUp className="mt-0.5 size-5 shrink-0 text-emerald-600" /><span><strong>{study.metrics[0].v}{study.metrics[0].s}</strong> reclaimed each month — redeployed onto higher-leverage work, not headcount cuts.</span></li>
              <li className="flex gap-3"><TrendingUp className="mt-0.5 size-5 shrink-0 text-emerald-600" /><span><strong>{study.metrics[1].v}{study.metrics[1].s} ROI</strong> inside the first two quarters, before any expansion into adjacent workflows.</span></li>
              <li className="flex gap-3"><TrendingUp className="mt-0.5 size-5 shrink-0 text-emerald-600" /><span><strong>{study.metrics[2].v}{study.metrics[2].s}</strong> lift on the top-line KPI the leadership team had been chasing for a year.</span></li>
              <li className="flex gap-3"><TrendingUp className="mt-0.5 size-5 shrink-0 text-emerald-600" /><span>Zero P0 incidents in the first ninety days of production traffic.</span></li>
            </ul>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8">
            <h3 className="font-display text-2xl">What we didn't measure</h3>
            <p className="mt-3 text-sm text-neutral-700">
              The metrics above are the ones that show up in the board deck. The ones that don't —
              but that the team talks about most — are softer and harder to quantify.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-neutral-700">
              <li>— Operators stopped dreading Monday mornings.</li>
              <li>— Onboarding a new hire dropped from three weeks to five days.</li>
              <li>— The Slack channel that used to be full of fire-drills is now full of product ideas.</li>
              <li>— Leadership finally has the bandwidth to work on the next thing, not just this thing.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Lessons learned */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="container-pad mx-auto max-w-[1400px] py-20">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-neutral-500">Lessons learned</div>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">What we'd tell the next team</h2>
            <p className="mt-3 text-neutral-600">Four things this build taught us that we now apply to every engagement.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { n: "01", t: "Ship the boring version first.", b: "The version that impresses the demo audience is rarely the version that survives a Tuesday afternoon. Start with the calmest possible design and earn every ounce of complexity." },
              { n: "02", t: "Shadow mode is non-negotiable.", b: "Running the system against live traffic without acting on it for one full sprint caught more edge cases than any amount of synthetic testing." },
              { n: "03", t: "Instrument before you optimize.", b: "Every trace, every retrieval, every tool call logged from day one. When something eventually breaks — and it will — you'll find it in minutes instead of days." },
              { n: "04", t: "Design the handover from day one.", b: "The team that inherits the system has to be able to run it without us. That constraint shapes every architectural choice we make." },
            ].map((l) => (
              <div key={l.n} className="rounded-2xl border border-neutral-200 bg-white p-6">
                <div className="font-display text-3xl text-neutral-300">{l.n}</div>
                <h3 className="mt-2 font-display text-xl">{l.t}</h3>
                <p className="mt-2 text-sm text-neutral-600">{l.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image gallery */}
      <section className="border-b border-neutral-200">
        <div className="container-pad mx-auto max-w-[1400px] py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-neutral-500">Gallery</div>
              <h2 className="mt-2 font-display text-3xl md:text-4xl">Inside the build</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {study.gallery.map((g, i) => (
              <motion.figure
                key={g.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                className="group overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={g.src} alt={g.caption} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <figcaption className="px-4 py-3 text-xs text-neutral-600">{g.caption}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-neutral-200">
        <div className="container-pad mx-auto grid max-w-[1400px] gap-12 py-20 lg:grid-cols-3">
          <div>
            <div className="text-xs uppercase tracking-widest text-neutral-500">FAQ</div>
            <h2 className="mt-2 font-display text-3xl">Questions we always get</h2>
            <p className="mt-3 text-sm text-neutral-600">The same handful of questions come up on every intro call. Here are the honest answers.</p>
          </div>
          <div className="lg:col-span-2 divide-y divide-neutral-200">
            {[
              { q: "How long until we're in production?", a: "Six weeks is the median for a build of this shape. Simpler scopes ship in four; regulated environments closer to ten. We give you a concrete timeline at the end of week one and we hold ourselves to it." },
              { q: "What happens if the model gets something wrong?", a: "Every action passes through a guardrail check, and anything below a confidence threshold is routed to a human. When a mistake does slip through, the trace tells us exactly why and the fix ships in the next weekly release." },
              { q: "Who owns the system after launch?", a: "You do. We hand over documentation, runbooks, dashboards, and a trained internal team. We stay on-call for the first ninety days and available on retainer after that — but only if you want us." },
              { q: "How do you price this?", a: "Fixed fee for the build, tied to a written scope and a delivery date. No hourly billing, no scope creep invoices. If we go over on our estimate, that's our problem, not yours." },
              { q: "Can we start smaller?", a: "Yes. Most of our best engagements start with a two-week paid discovery: we ship a working proof-of-concept and a costed plan for the full build. If you don't want to continue, you keep the POC." },
            ].map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="font-display text-lg text-neutral-900">{f.q}</span>
                  <span className="text-neutral-400 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-neutral-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Client feedback */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="container-pad mx-auto max-w-[1400px] py-20">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-neutral-500">Client feedback</div>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">What the team said</h2>
          </div>
          <blockquote className="mt-10 max-w-4xl">
            <Quote className="size-8 text-neutral-300" />
            <p className="mt-4 font-display text-2xl leading-snug text-neutral-900 md:text-3xl">"{study.quote}"</p>
            <footer className="mt-4 text-sm text-neutral-600">— {study.who}, {study.role}</footer>
          </blockquote>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {study.feedback.map((f) => (
              <div key={f.name} className="rounded-2xl border border-neutral-200 bg-white p-6">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`size-4 ${i < f.rating ? "fill-amber-400 text-amber-400" : "text-neutral-300"}`} />
                  ))}
                </div>
                <p className="mt-4 text-sm text-neutral-700">"{f.text}"</p>
                <div className="mt-4 text-xs text-neutral-500">{f.name} · {f.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other case studies */}
      <section className="border-b border-neutral-200">
        <div className="container-pad mx-auto max-w-[1400px] py-20">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl">More client stories</h2>
            <Link to="/case-studies" className="text-sm text-neutral-600 hover:text-neutral-900">View all →</Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/case-studies/$slug"
                params={{ slug: o.slug }}
                className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white transition hover:border-neutral-300 hover:shadow-lg"
              >
                <div className="aspect-[16/7] overflow-hidden bg-neutral-100">
                  <img src={o.hero} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-neutral-500">{o.industry}</div>
                  <h3 className="mt-1 font-display text-2xl">{o.company}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{o.after}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium">Read case study <ArrowRight className="size-4" /></div>
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
    <div>
      <dt className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500">{icon}{label}</dt>
      <dd className="mt-1 text-sm text-neutral-900">{value}</dd>
    </div>
  );
}