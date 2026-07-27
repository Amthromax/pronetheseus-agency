import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";

const posts = [
  { title: "The playbook for shipping your first AI agent in 30 days", tag: "Playbook", read: "8 min read" },
  { title: "Voice AI is quietly rewriting the contact center — here's how", tag: "Voice AI", read: "6 min read" },
  { title: "n8n vs Zapier vs Make: what we actually deploy in 2026", tag: "Automation", read: "10 min read" },
];

export function BlogPreview() {
  return (
    <section className="relative container-pad mx-auto max-w-[1400px] py-24 md:py-32">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading center={false} title="Field notes from the frontlines of AI" description="Written by the engineers actually shipping these systems into production." />
        <Link to="/blog" className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10">Read all posts <ArrowUpRight className="size-4" /></Link>
      </div>
      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {posts.map((p, i) => (
          <motion.article key={i} whileHover={{ y: -4 }} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-6">
            <div className="aspect-[16/10] w-full rounded-2xl bg-gradient-to-br from-[#ff7a00]/30 via-[#c2410c]/20 to-black" />
            <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
              <span className="rounded-full border border-brand/30 bg-brand/10 px-2 py-0.5 text-brand">{p.tag}</span>
              <span>{p.read}</span>
            </div>
            <h3 className="mt-3 font-display text-2xl">{p.title}</h3>
            <div className="mt-4 inline-flex items-center gap-1 text-sm text-brand">Read article <ArrowUpRight className="size-4" /></div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}