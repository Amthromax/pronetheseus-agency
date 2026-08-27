import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Stagger, staggerItem } from "@/components/ui/reveal";
import { motion } from "motion/react";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Pronetheseus" },
      { name: "description", content: "The senior team behind Pronetheseus and the beliefs that guide our work." },
      { property: "og:title", content: "About — Pronetheseus" },
      { property: "og:description", content: "Meet the team building the AI backbone of ambitious companies." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: Page,
});

const values = [
  { title: "Ship weekly", desc: "Real demos every Friday, not quarterly steering committees." },
  { title: "Senior only", desc: "Every engagement is led by a principal engineer." },
  { title: "Own the outcome", desc: "We measure success in hours saved and revenue moved." },
  { title: "Design counts", desc: "AI systems should feel effortless — and beautiful." },
];
const team = [
  { name: "Kishore Kanth", role: "Founder & CEO" },
  { name: "Gnaneswari ", role: "Head of Automation Designs " },
];

function Page() {
  return (
    <div className="min-h-screen bg-sandel text-neutral-900 pt-36 pb-20">
      <div className="container-pad mx-auto max-w-[1400px]">
        <SectionHeading title="We build the AI backbone of ambitious companies" description="A boutique studio of senior engineers, designers, and operators. We take on a limited number of engagements each quarter." />
      </div>
      <section className="container-pad mx-auto mt-16 max-w-[1400px]">
        <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <motion.div key={v.title} variants={staggerItem} className="rounded-2xl border border-sandel-border bg-sandel-card p-6 shadow-xs">
              <div className="font-display text-xl font-bold text-neutral-900">{v.title}</div>
              <p className="mt-2 text-sm text-neutral-600 font-sans leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </Stagger>
      </section>
      <section className="container-pad mx-auto mt-20 max-w-[1400px]">
        <SectionHeading title="The humans behind Pronetheseus" />
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {team.map((m, i) => (
            <motion.div key={m.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="group w-full rounded-2xl border border-sandel-border bg-sandel-card p-5 sm:w-[320px] shadow-xs">
              <div className="aspect-square w-full rounded-xl bg-gradient-to-br from-[#ff7a00]/30 via-[#c2410c]/20 to-neutral-800 flex items-center justify-center text-4xl font-serif text-white font-bold">
                {m.name.charAt(0)}
              </div>
              <div className="mt-4 font-display text-xl font-bold text-neutral-900">{m.name}</div>
              <div className="text-sm font-medium text-neutral-600">{m.role}</div>
            </motion.div>
          ))}
        </div>
      </section>
      <ContactCTA />
    </div>
  );
}