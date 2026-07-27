import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Helleious" },
      { name: "description", content: "Join a senior team building the AI backbone of ambitious companies." },
      { property: "og:title", content: "Careers — Helleious" },
      { property: "og:description", content: "We hire senior operators, engineers, and designers." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Page,
});

const roles = [
  { title: "Senior AI Engineer", location: "Remote · Global" },
  { title: "Automation Architect", location: "Remote · Global" },
  { title: "Full-stack Engineer", location: "Remote · EU" },
  { title: "Product Designer", location: "Remote · Global" },
];

function Page() {
  return (
    <div className="pt-40">
      <div className="container-pad mx-auto max-w-[1400px]">
        <SectionHeading eyebrow="Careers" title="Do the best work of your career" description="Remote-first, senior-only, and shipping to production every week." />
        <div className="mx-auto mt-14 max-w-3xl divide-y divide-white/5 overflow-hidden rounded-3xl border border-white/10 glass">
          {roles.map((r) => (
            <div key={r.title} className="flex items-center justify-between p-6 transition hover:bg-white/5">
              <div>
                <div className="font-display text-2xl">{r.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{r.location}</div>
              </div>
              <button className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10">Apply</button>
            </div>
          ))}
        </div>
      </div>
      <ContactCTA />
    </div>
  );
}