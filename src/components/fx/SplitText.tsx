import { motion } from "motion/react";
import { useMemo } from "react";

type Props = {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
};

/** Character-by-character reveal with word-safe wrapping. */
export function SplitText({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.025,
  as: Tag = "span",
}: Props) {
  const words = useMemo(() => text.split(" "), [text]);
  const MotionTag = motion(Tag);
  return (
    <MotionTag
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      className={className}
      aria-label={text}
    >
      {words.map((word, wi) => (
        <span key={wi} className={`inline-block whitespace-nowrap ${wordClassName ?? ""}`}>
          {word.split("").map((ch, ci) => (
            <motion.span
              key={ci}
              aria-hidden
              className="inline-block will-change-transform"
              variants={{
                hidden: { y: "110%", opacity: 0, filter: "blur(8px)" },
                visible: { y: "0%", opacity: 1, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {ch}
            </motion.span>
          ))}
          {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </MotionTag>
  );
}