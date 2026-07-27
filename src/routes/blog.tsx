import { createFileRoute } from "@tanstack/react-router";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { SectionHeading } from "@/components/sections/SectionHeading";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Helleious" },
      { name: "description", content: "Field notes from the frontlines of AI automation." },
      { property: "og:title", content: "Blog — Helleious" },
      { property: "og:description", content: "Playbooks, essays, and tactical guides." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: () => (
    <div className="pt-40">
      <div className="container-pad mx-auto max-w-[1400px]">
        <SectionHeading title="Field notes from the frontlines" />
      </div>
      <BlogPreview />
      <BlogPreview />
    </div>
  ),
});