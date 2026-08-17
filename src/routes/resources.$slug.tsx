import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { getResource, RESOURCES } from "@/lib/resources";

export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }) => {
    const resource = getResource(params.slug);
    if (!resource) throw notFound();
    return { resource };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Resource not found — Pronetheseus" }, { name: "robots", content: "noindex" }] };
    }
    const { resource } = loaderData;
    const title = `${resource.title} — Pronetheseus`;
    return {
      meta: [
        { title },
        { name: "description", content: resource.description },
        { property: "og:title", content: title },
        { property: "og:description", content: resource.description },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="pt-40">
      <div className="container-pad mx-auto max-w-3xl pb-24 text-center">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">Resource</div>
        <h1 className="mt-3 font-display text-4xl">Not found</h1>
        <p className="mt-3 text-muted-foreground">We couldn't find that resource.</p>
        <Link to="/resources" className="mt-8 inline-flex items-center gap-2 text-sm text-brand">
          <ArrowLeft className="size-4" /> Back to resources
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="pt-40">
      <div className="container-pad mx-auto max-w-3xl pb-24 text-center">
        <h1 className="font-display text-3xl">Something went wrong</h1>
        <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
        <button onClick={reset} className="mt-6 text-sm text-brand">Try again</button>
      </div>
    </div>
  ),
  component: ResourceDetail,
});

function ResourceDetail() {
  const { resource } = Route.useLoaderData();
  const others = RESOURCES.filter((r) => r.slug !== resource.slug);

  return (
    <div className="pt-40">
      <article className="container-pad mx-auto max-w-3xl pb-24">
        <Link
          to="/resources"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" /> All resources
        </Link>

        <div className="mt-8 flex items-center gap-4">
          <div className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-[#ff7a00]/20 to-[#c2410c]/10 text-brand ring-1 ring-inset ring-white/10">
            <resource.Icon className="size-5" />
          </div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">{resource.tag}</div>
        </div>

        <h1 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
          <span className="text-gradient">{resource.title}</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">{resource.description}</p>

        <a
          href="#"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
        >
          {resource.cta} →
        </a>

        <div className="mt-14 space-y-8">
          {resource.sections.map((s: { heading: string; body: string }) => (
            <section key={s.heading} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <h2 className="font-display text-2xl">{s.heading}</h2>
              <p className="mt-3 text-muted-foreground">{s.body}</p>
            </section>
          ))}
        </div>

        {others.length > 0 && (
          <div className="mt-20">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">More resources</div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {others.map((r) => (
                <Link
                  key={r.slug}
                  to="/resources/$slug"
                  params={{ slug: r.slug }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-brand/40"
                >
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{r.tag}</div>
                  <div className="mt-1 font-display text-xl">{r.title}</div>
                  <div className="mt-3 text-sm text-brand">Read more →</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}