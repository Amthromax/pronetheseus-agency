import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { RESOURCES } from "@/lib/resources";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Helleious" },
      { name: "description", content: "Templates, playbooks, and guides for teams shipping AI." },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: () => (
    <div className="pt-40">
      <div className="container-pad mx-auto max-w-[1400px] pb-24">
        <SectionHeading eyebrow="Resources" title="Playbooks, templates, and guides" />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {RESOURCES.map((r) => (
            <Link
              key={r.slug}
              to="/resources/$slug"
              params={{ slug: r.slug }}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-brand/40"
            >
              <div className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-[#ff7a00]/20 to-[#c2410c]/10 text-brand ring-1 ring-inset ring-white/10">
                <r.Icon className="size-4" />
              </div>
              <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{r.tag}</div>
              <div className="mt-1 font-display text-2xl">{r.title}</div>
              <div className="mt-4 text-sm text-brand">Free download →</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  ),
});