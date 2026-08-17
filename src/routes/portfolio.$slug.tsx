import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Lock } from "lucide-react";
import { getPortfolioItem, portfolioItems, type PortfolioItem } from "@/data/portfolio";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const item = getPortfolioItem(params.slug);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Pronetheseus Portfolio` },
          { name: "description", content: loaderData.summary },
          { property: "og:title", content: `${loaderData.title} — Pronetheseus` },
          { property: "og:description", content: loaderData.summary },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Case study — Pronetheseus" }],
  }),
  notFoundComponent: () => (
    <main className="container-pad mx-auto max-w-3xl py-32 text-center">
      <h1 className="font-display text-4xl">Project not found</h1>
      <p className="mt-3 text-muted-foreground">This case study doesn't exist.</p>
      <Link to="/" className="mt-6 inline-flex items-center gap-2 text-brand">
        <ArrowLeft className="size-4" /> Back home
      </Link>
    </main>
  ),
  errorComponent: ({ error, reset }) => (
    <main className="container-pad mx-auto max-w-3xl py-32 text-center">
      <h1 className="font-display text-3xl">Something went wrong</h1>
      <p className="mt-3 text-muted-foreground">{(error as Error)?.message}</p>
      <button onClick={reset} className="mt-6 rounded-full border border-white/10 px-5 py-2 text-sm">Try again</button>
    </main>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const item = Route.useLoaderData() as PortfolioItem;
  const idx = portfolioItems.findIndex((i) => i.slug === item.slug);
  const next = portfolioItems[(idx + 1) % portfolioItems.length];

  return (
    <main className="relative">
      <section className={`relative overflow-hidden bg-gradient-to-br ${item.gradient}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="container-pad relative mx-auto max-w-[1200px] pt-32 pb-24 md:pt-40 md:pb-32">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
            <ArrowLeft className="size-4" /> All work
          </Link>
          <div className="mt-8 text-xs uppercase tracking-widest text-white/80">{item.tag}</div>
          <h1 className="mt-3 font-display text-4xl text-white md:text-6xl">{item.title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">{item.summary}</p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/80">
            <div><div className="text-xs uppercase tracking-widest text-white/60">Client</div><div className="mt-1">{item.client}</div></div>
            <div><div className="text-xs uppercase tracking-widest text-white/60">Year</div><div className="mt-1">{item.year}</div></div>
            <div><div className="text-xs uppercase tracking-widest text-white/60">Category</div><div className="mt-1">{item.category}</div></div>
          </div>
        </div>
      </section>

      <section className="container-pad mx-auto max-w-[1200px] py-20 md:py-28">
        {item.showcase && (
          <div className="mb-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl">
            <img
              src={item.showcase}
              alt={`${item.title} project showcase`}
              loading="lazy"
              className="h-auto w-full"
            />
          </div>
        )}
        <div className="mb-16 flex justify-center">
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-foreground/70"
          >
            <Lock className="size-4" />
            Load more
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {item.outcomes.map((o) => (
            <div key={o.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="font-display text-3xl text-gradient-brand">{o.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{o.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl">The Challenge</h2>
            <p className="mt-3 text-foreground/80">{item.challenge}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl">Our Solution</h2>
            <p className="mt-3 text-foreground/80">{item.solution}</p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl">Stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {item.stack.map((s) => (
              <span key={s} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-foreground/80">{s}</span>
            ))}
          </div>
        </div>

        <div className="mt-20 flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Next project</div>
            <div className="mt-1 font-display text-2xl">{next.title}</div>
          </div>
          <Link to="/portfolio/$slug" params={{ slug: next.slug }} className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-medium text-white">
            View <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}