import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const REVIEWS = [
  {
    name: "Alex Rivera",
    username: "@alexrivera",
    body: "Amthromax automated our entire inbound lead qualification. Speed-to-lead dropped under 30 seconds!",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Sarah Chen",
    username: "@sarah_chen",
    body: "The autonomous agent integration with ClickUp and Slack saved our agency over 40 hours every week.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "David Miller",
    username: "@davidm_ai",
    body: "Flawless deployment in under 3 weeks. Zero platform lock-in and complete codebase ownership.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Elena Rostova",
    username: "@elena_growth",
    body: "Our booking conversion rate jumped 3.4x within 14 days of deploying the AI intake engine.",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Marcus Vance",
    username: "@marcus_vance",
    body: "The SOC2 readiness and zero-retention LLM privacy gave our enterprise security team total confidence.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Jessica Park",
    username: "@jessicapark",
    body: "Best investment we made this year. High reliability, sub-second responses, and beautiful documentation.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Liam Thorne",
    username: "@liamthorne",
    body: "Transformative results for our agency operations. The AI agents handle client intake seamlessly 24/7.",
    img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Sophia Martinez",
    username: "@sophiam_dev",
    body: "Unbelievable efficiency boost! Our team focuses on high-level strategy while Amthromax handles routine tasks.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
  },
];

// Split reviews into 2 distinct rows and duplicate each row for dense continuous marquee coverage
const firstRow = [...REVIEWS.slice(0, 4), ...REVIEWS.slice(0, 4)];
const secondRow = [...REVIEWS.slice(4), ...REVIEWS.slice(4)];

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-72 sm:w-80 cursor-pointer overflow-hidden rounded-[20px] border p-4 shadow-2xs transition-all duration-300 hover:scale-[1.02] hover:shadow-md shrink-0",
        "border-neutral-200/90 bg-[#f4f3ee] hover:bg-neutral-100/90"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img className="rounded-full size-9 object-cover border border-black/5" width="36" height="36" alt={name} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-xs font-bold text-neutral-900 font-sans tracking-tight">
            {name}
          </figcaption>
          <p className="text-[11px] font-medium text-neutral-500 font-mono">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2.5 text-xs text-neutral-700 font-sans leading-relaxed">{body}</blockquote>
    </figure>
  );
};

export function MarqueeReviews() {
  return (
    <section className="relative w-full bg-sandel py-12 sm:py-16 text-neutral-900 overflow-hidden font-sans border-t border-b border-black/5">
      <div className="container-pad mx-auto max-w-[1400px] mb-8 text-center">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-neutral-500">
          Client Feedback & Reviews
        </span>
        <h3 className="mt-1 font-sans text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900">
          Trusted by Industry Pioneers
        </h3>
      </div>

      {/* Dual Row Marquee: Row 1 moves right, Row 2 moves left */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-4">
        <Marquee reverse pauseOnHover speed={35} className="w-full">
          {firstRow.map((review, idx) => (
            <ReviewCard key={`row1-${idx}-${review.username}`} {...review} />
          ))}
        </Marquee>

        <Marquee pauseOnHover speed={35} className="w-full">
          {secondRow.map((review, idx) => (
            <ReviewCard key={`row2-${idx}-${review.username}`} {...review} />
          ))}
        </Marquee>

        {/* Soft edge gradient fades for cinematic focus in the center */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-sandel via-sandel/80 to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-sandel via-sandel/80 to-transparent z-10"></div>
      </div>
    </section>
  );
}
