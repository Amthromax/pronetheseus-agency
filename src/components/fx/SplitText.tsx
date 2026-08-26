import { motion, type Variants } from "motion/react";
import { useMemo } from "react";

type Props = {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  triggerOnScroll?: boolean;
  blur?: boolean;
};

/** High-end character/word split text reveal effect for major headings & titles. */
export function SplitText({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.025,
  as: Tag = "span",
  triggerOnScroll = true,
  blur = true,
}: Props) {
  const words = useMemo(() => text.split(" "), [text]);
  const MotionTag = motion(Tag);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const charVariants: Variants = {
    hidden: {
      y: "110%",
      opacity: 0,
      filter: blur ? "blur(8px)" : "none",
    },
    visible: {
      y: "0%",
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <MotionTag
      initial="hidden"
      {...(triggerOnScroll
        ? { whileInView: "visible", viewport: { once: true, amount: 0.2 } }
        : { animate: "visible" })}
      variants={containerVariants}
      className={className}
      aria-label={text}
    >
      {words.map((word, wi) => (
        <span key={wi} className={`inline-block overflow-hidden whitespace-nowrap align-bottom ${wordClassName ?? ""}`}>
          {word.split("").map((ch, ci) => (
            <motion.span
              key={ci}
              aria-hidden
              className="inline-block will-change-transform"
              variants={charVariants}
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