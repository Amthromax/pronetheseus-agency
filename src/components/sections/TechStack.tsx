import { Marquee } from "@/components/ui/marquee";
import { SectionHeading } from "./SectionHeading";

const stack = ["OpenAI","Claude","Gemini","n8n","LangChain","Supabase","Firebase","Pinecone","Postgres","Next.js","React","Node.js","Docker","AWS","Azure","Google Cloud","Stripe","Twilio","Resend","Vercel"];
const models = ["GPT","Claude","Gemini","Llama","DeepSeek","Mistral","Grok"];

export function TechStack() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-pad mx-auto max-w-[1400px]">
        <SectionHeading eyebrow="Stack" title="The tools we ship with, every day" />
      </div>
      <div className="mt-14">
        <Marquee speed={45}>{stack.map((t) => (<Chip key={t} label={t} />))}</Marquee>
      </div>
      <div className="mt-6">
        <Marquee speed={35} reverse>{models.map((t) => (<Chip key={t} label={t} accent />))}</Marquee>
      </div>
    </section>
  );
}

function Chip({ label, accent }: { label: string; accent?: boolean }) {
  return (
    <div className={`shrink-0 rounded-2xl border px-5 py-3 text-sm font-medium transition ${accent ? "border-brand/30 bg-brand/5 text-foreground" : "border-white/10 bg-white/[0.03] text-foreground/80"}`}>{label}</div>
  );
}