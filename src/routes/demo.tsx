import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ArrowRight, Bot, CheckCircle2, RefreshCw, Send, Sparkles, User } from "lucide-react";

export const Route = createFileRoute("/demo")({
  head: () => ({
    meta: [
      { title: "AI Agent Demo — Helleious" },
      { name: "description", content: "Try a live preview of a Helleious AI agent handling real customer questions, then book a consult to build your own." },
      { property: "og:title", content: "AI Agent Demo — Helleious" },
      { property: "og:description", content: "Interactive preview of a production-style AI agent. Ask about pricing, booking, or handoff — see how it responds." },
      { property: "og:url", content: "/demo" },
    ],
    links: [{ rel: "canonical", href: "/demo" }],
  }),
  component: DemoPage,
});

type Role = "agent" | "user";
type Msg = { id: string; role: Role; text: string; ts: number };

type Reply = { text: string; suggestions?: string[] };

const AGENT_NAME = "Ava";
const AGENT_ROLE = "Helleious concierge";

const GREETING: Msg = {
  id: "seed-1",
  role: "agent",
  ts: Date.now(),
  text: `Hi, I'm ${AGENT_NAME} — the Helleious concierge agent. I can answer questions about our services, pricing, and timelines, or help you book a strategy call. What are you working on?`,
};

const STARTER_SUGGESTIONS = [
  "What do you actually build?",
  "How much does an agent cost?",
  "How long does a project take?",
  "Can you integrate with our stack?",
];

function reply(input: string): Reply {
  const q = input.toLowerCase();

  if (/(price|cost|pricing|budget|how much)/.test(q)) {
    return {
      text: "Most engagements land between $8k and $35k depending on scope. A focused single-workflow agent starts around $8k; multi-channel deployments with evals and monitoring sit in the $20–35k range. I can pull an exact quote once we scope the workflow on a call.",
      suggestions: ["Book a consult", "What's included?", "Do you offer retainers?"],
    };
  }
  if (/(time|timeline|how long|when|deliver|weeks|days)/.test(q)) {
    return {
      text: "Typical timeline is 2–4 weeks from kickoff to production. Week 1 is scoping and eval design, week 2 is the first working agent, weeks 3–4 are guardrails, monitoring, and rollout. Faster if the workflow is well-defined.",
      suggestions: ["Book a consult", "What do you need from us?"],
    };
  }
  if (/(integrat|n8n|zapier|hubspot|salesforce|slack|stack|api|crm|tool)/.test(q)) {
    return {
      text: "Yes — we regularly integrate with HubSpot, Salesforce, Slack, Notion, Airtable, Zendesk, Intercom, and anything with a REST API. For orchestration we default to n8n or code, depending on the reliability requirements.",
      suggestions: ["Book a consult", "How much does it cost?"],
    };
  }
  if (/(build|do|services|offer|what.*(you|helleious))/.test(q)) {
    return {
      text: "We build production AI agents end-to-end: scoping the workflow, wiring tools and retrieval, adding evals and guardrails, then deploying with monitoring. Voice, chat, and internal copilots are the three shapes we ship most.",
      suggestions: ["How much does it cost?", "How long does it take?", "Can I see examples?"],
    };
  }
  if (/(example|case stud|portfolio|work|clients)/.test(q)) {
    return {
      text: "A few recent ones: a voice agent handling 60% of inbound sales calls for a home-services company, an inbox triage agent saving a support team ~25 hours/week, and an internal RFP copilot cutting response time from days to hours.",
      suggestions: ["Book a consult", "How do you measure results?"],
    };
  }
  if (/(measure|metric|roi|result|eval)/.test(q)) {
    return {
      text: "Every agent ships with an eval suite tied to the business metric — deflection rate, time saved, conversion lift, or cost per resolved ticket. You get a dashboard, not vibes.",
      suggestions: ["Book a consult", "What's included?"],
    };
  }
  if (/(book|call|consult|meeting|schedule|talk|demo)/.test(q)) {
    return {
      text: "Easy — the strategy call is free and 30 minutes. Pick a slot on the booking page and we'll come prepared with a concrete plan for your workflow.",
      suggestions: ["Book a consult"],
    };
  }
  if (/(handoff|human|escalate|takeover|agent transfer)/.test(q)) {
    return {
      text: "Handoff is built in. The agent detects intent, spend, or sentiment thresholds and transfers with full context — transcript, extracted entities, and a suggested next action — to a human on Slack, email, or your helpdesk.",
      suggestions: ["Book a consult", "How do you handle guardrails?"],
    };
  }
  if (/(guardrail|safe|hallucin|risk|compliance|pii|gdpr)/.test(q)) {
    return {
      text: "Guardrails cover three layers: input validation, tool-scope restrictions, and output evals with a policy model. PII is redacted before it hits any third-party model, and we can deploy inside your VPC if compliance requires it.",
      suggestions: ["Book a consult", "What's included?"],
    };
  }
  if (/(need from us|what.*(us|we)|onboard|kickoff|start)/.test(q)) {
    return {
      text: "One 30-minute call to scope the workflow, read/write access to the tools the agent will use, and a point of contact for the first week. That's it — we handle the rest.",
      suggestions: ["Book a consult"],
    };
  }
  if (/(retainer|support|maintenance|ongoing)/.test(q)) {
    return {
      text: "Yes — post-launch we offer a monthly retainer covering monitoring, eval regressions, prompt/tuning changes, and new capabilities. Most clients start at 10 hours/month.",
      suggestions: ["Book a consult", "How much does it cost?"],
    };
  }
  if (/(hi|hello|hey|yo|sup)\b/.test(q)) {
    return {
      text: "Hey! Happy to help. Are you exploring a specific workflow, or scoping AI more broadly?",
      suggestions: STARTER_SUGGESTIONS,
    };
  }
  return {
    text: "Good question. The honest answer is it depends on your workflow — I can give you a real answer on a 30-minute call, or I can try to break it down further here. What part matters most: cost, timeline, or fit with your stack?",
    suggestions: ["Cost", "Timeline", "Fit with our stack", "Book a consult"],
  };
}

function DemoPage() {
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>(STARTER_SUGGESTIONS);
  const [typing, setTyping] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    inputRef.current?.focus();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const send = useCallback((raw: string) => {
    const text = raw.trim();
    if (!text || typing) return;
    const userMsg: Msg = { id: `u-${Date.now()}`, role: "user", text, ts: Date.now() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setSuggestions([]);
    setTyping(true);
    const r = reply(text);
    const delay = Math.min(1400, 500 + text.length * 20);
    timeoutRef.current = setTimeout(() => {
      setMessages((m) => [...m, { id: `a-${Date.now()}`, role: "agent", text: r.text, ts: Date.now() }]);
      setSuggestions(r.suggestions ?? []);
      setTyping(false);
      requestAnimationFrame(() => inputRef.current?.focus());
    }, delay);
  }, [typing]);

  const reset = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMessages([{ ...GREETING, id: `seed-${Date.now()}`, ts: Date.now() }]);
    setSuggestions(STARTER_SUGGESTIONS);
    setInput("");
    setTyping(false);
    requestAnimationFrame(() => inputRef.current?.focus());
  }, []);

  const capabilities = useMemo(
    () => [
      "Answers pricing, scope, and timeline questions in your voice",
      "Books meetings and hands off to a human with full context",
      "Integrates with HubSpot, Slack, Zendesk, and anything with an API",
      "Ships with evals, guardrails, and a monitoring dashboard",
    ],
    [],
  );

  return (
    <div className="pt-40">
      <div className="container-pad mx-auto max-w-[1400px] pb-24">
        <SectionHeading
          eyebrow="Live demo"
          title="Talk to a Helleious AI agent"
          description="This is a scripted preview of the kind of concierge agent we ship — same shape, same tone. Ask about pricing, timelines, integrations, or handoff."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          {/* Chat panel */}
          <div className="flex min-h-[560px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-[#ff7a00]/20 to-[#c2410c]/10 text-brand ring-1 ring-inset ring-white/10">
                  <Bot className="size-4" />
                </div>
                <div>
                  <div className="font-display text-base leading-tight">{AGENT_NAME}</div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-emerald-400" />
                    {AGENT_ROLE} · online
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted-foreground transition hover:text-foreground"
              >
                <RefreshCw className="size-3.5" /> Reset
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-6">
              {messages.map((m) => (
                <MessageRow key={m.id} msg={m} />
              ))}
              {typing && <TypingRow />}
            </div>

            {suggestions.length > 0 && !typing && (
              <div className="flex flex-wrap gap-2 border-t border-white/10 px-5 py-3">
                {suggestions.map((s) =>
                  s === "Book a consult" ? (
                    <Link
                      key={s}
                      to="/book"
                      className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1.5 text-xs font-medium text-background transition hover:opacity-90"
                    >
                      <Sparkles className="size-3.5" /> {s}
                    </Link>
                  ) : (
                    <button
                      key={s}
                      type="button"
                      onClick={() => send(s)}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted-foreground transition hover:border-brand/40 hover:text-foreground"
                    >
                      {s}
                    </button>
                  ),
                )}
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-white/10 bg-white/[0.02] px-4 py-3"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about pricing, timelines, integrations…"
                aria-label="Message the demo agent"
                className="flex-1 bg-transparent px-2 py-2 text-sm outline-none placeholder:text-muted-foreground/60"
              />
              <button
                type="submit"
                disabled={!input.trim() || typing}
                className="inline-flex size-9 items-center justify-center rounded-full bg-brand text-background transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Send message"
              >
                <Send className="size-4" />
              </button>
            </form>
          </div>

          {/* Side panel */}
          <aside className="flex flex-col gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">What this agent can do</div>
              <ul className="mt-4 space-y-3">
                {capabilities.map((c) => (
                  <li key={c} className="flex gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
                    <span className="text-foreground/80">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-brand/30 bg-gradient-to-br from-[#ff7a00]/15 to-[#c2410c]/5 p-6">
              <div className="text-xs uppercase tracking-widest text-brand">Ready for the real thing?</div>
              <div className="mt-3 font-display text-2xl leading-tight">Book a 30-minute strategy call</div>
              <p className="mt-3 text-sm text-foreground/70">
                We'll scope your workflow, sketch the agent, and share a concrete plan with pricing — no pitch deck.
              </p>
              <Link
                to="/book"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
              >
                Book a consult <ArrowRight className="size-4" />
              </Link>
              <div className="mt-3 text-xs text-muted-foreground">Free · 30 min · no obligation</div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-xs text-muted-foreground">
              Note: this preview uses a scripted response set to keep it fast and predictable. Production agents we ship are powered by live models, your tools, and your data.
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function MessageRow({ msg }: { msg: Msg }) {
  const isUser = msg.role === "user";
  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""}`}>
      <div
        className={`grid size-8 shrink-0 place-items-center rounded-full ring-1 ring-inset ring-white/10 ${
          isUser ? "bg-white/10 text-foreground" : "bg-gradient-to-br from-[#ff7a00]/20 to-[#c2410c]/10 text-brand"
        }`}
      >
        {isUser ? <User className="size-4" /> : <Bot className="size-4" />}
      </div>
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "bg-brand text-background"
            : "bg-white/[0.04] text-foreground/90 ring-1 ring-inset ring-white/10"
        }`}
      >
        {msg.text}
      </div>
    </div>
  );
}

function TypingRow() {
  return (
    <div className="flex gap-3">
      <div className="grid size-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#ff7a00]/20 to-[#c2410c]/10 text-brand ring-1 ring-inset ring-white/10">
        <Bot className="size-4" />
      </div>
      <div className="rounded-2xl bg-white/[0.04] px-4 py-3 ring-1 ring-inset ring-white/10" aria-label="Agent is typing">
        <div className="flex gap-1">
          <span className="size-1.5 animate-bounce rounded-full bg-foreground/60 [animation-delay:-0.3s]" />
          <span className="size-1.5 animate-bounce rounded-full bg-foreground/60 [animation-delay:-0.15s]" />
          <span className="size-1.5 animate-bounce rounded-full bg-foreground/60" />
        </div>
      </div>
    </div>
  );
}