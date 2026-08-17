import { SectionHeading } from "./SectionHeading";
import { Marquee } from "@/components/ui/marquee";
import { Bot, Sparkles, LineChart, Headphones, Megaphone, PenTool, Code2, Database, type LucideIcon } from "lucide-react";
import portrait from "@/assets/agent-portrait.png.asset.json";
import portrait2 from "@/assets/agent-portrait-2.png.asset.json";
import portrait3 from "@/assets/agent-portrait-3.png.asset.json";
import portrait4 from "@/assets/agent-portrait-4.png.asset.json";
import portrait5 from "@/assets/agent-portrait-5.png.asset.json";
import portrait6 from "@/assets/agent-portrait-6.png.asset.json";
import portrait7 from "@/assets/agent-portrait-7.png.asset.json";
import portrait8 from "@/assets/agent-portrait-8.png.asset.json";

type Agent = { name: string; role: string; Icon: LucideIcon; gradient: string; image?: string; preserveColor?: boolean };

const agents: Agent[] = [
  { name: "AI Reputation Specialist", role: "Reviews & brand sentiment", Icon: Sparkles, gradient: "from-stone-500 via-amber-800 to-stone-900", image: portrait8.url, preserveColor: true },
  { name: "AI Sales Assistant", role: "Qualifies & closes leads", Icon: Megaphone, gradient: "from-fuchsia-500 via-purple-600 to-violet-700", image: portrait4.url, preserveColor: true },
  { name: "AI Data Analyst", role: "Insights & dashboards", Icon: LineChart, gradient: "from-lime-400 via-emerald-500 to-cyan-500", image: portrait3.url, preserveColor: true },
  { name: "AI Inside Salesperson", role: "Outbound at scale", Icon: Bot, gradient: "from-slate-700 via-zinc-800 to-neutral-900", image: portrait6.url, preserveColor: true },
  { name: "AI Support Agent", role: "24/7 customer care", Icon: Headphones, gradient: "from-fuchsia-500 via-purple-500 to-indigo-500", image: portrait2.url, preserveColor: true },
  { name: "AI Content Writer", role: "SEO copy & campaigns", Icon: PenTool, gradient: "from-amber-400 via-orange-500 to-orange-500", image: portrait.url, preserveColor: true },
  { name: "AI Ops Engineer", role: "Workflow automations", Icon: Code2, gradient: "from-violet-500 via-purple-600 to-fuchsia-600", image: portrait5.url, preserveColor: true },
  { name: "AI Data Cleaner", role: "Enrichment & dedupe", Icon: Database, gradient: "from-amber-400 via-yellow-500 to-orange-500", image: portrait7.url, preserveColor: true },
];

function AgentCard({ agent }: { agent: Agent }) {
  const { Icon } = agent;
  return (
    <div
      className="group relative h-[420px] w-[260px] shrink-0 rounded-3xl p-[1.5px] transition-[transform,box-shadow,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-3 hover:scale-[1.03] hover:shadow-[0_40px_90px_-20px_rgba(0,0,0,0.75)]"
    >
      <div className="relative h-full w-full overflow-hidden rounded-[calc(1.5rem-1px)]">
        <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient}`} />
        {agent.image && (
          <img
            src={agent.image}
            alt={agent.name}
            className={`absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 ${agent.preserveColor ? "opacity-100" : "mix-blend-luminosity opacity-90"}`}
            draggable={false}
          />
        )}
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_120%,rgba(0,0,0,0.65),transparent_60%)]" />
        {/* Cinematic vignette that intensifies on hover */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 bg-[radial-gradient(80%_60%_at_50%_20%,rgba(255,255,255,0.18),transparent_70%)]" />

        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
          <h3 className="max-w-[70%] text-lg font-semibold leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
            {agent.name}
          </h3>
          <div className="grid size-9 place-items-center rounded-full bg-white/20 text-white backdrop-blur-md ring-1 ring-white/40 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-[15deg] group-hover:scale-110">
            <Icon className="size-4" />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="rounded-2xl bg-black/40 px-4 py-3 text-xs font-medium text-white/90 backdrop-blur-md ring-1 ring-white/15 transition-colors duration-500 group-hover:bg-black/55">
            {agent.role}
          </div>
        </div>

        {/* Light sweep */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-full"
        />
      </div>
    </div>
  );
}

export function Industries() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-pad mx-auto max-w-[1400px]">
        <SectionHeading
          title="Meet your AI workforce"
          description="A network of specialized AI agents leveraging world-class automations to drive real results across every function of your business."
        />
      </div>

      <div className="relative mt-16 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <Marquee speed={55} className="py-4">
          {agents.map((a) => (
            <AgentCard key={`a-${a.name}`} agent={a} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}