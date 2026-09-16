import { useState } from "react";
import { Share2, Check, Copy, Linkedin, Twitter } from "lucide-react";
import { toast } from "sonner";
import { trackEvent } from "@/lib/analytics";

interface SocialShareProps {
  title?: string;
  url?: string;
  className?: string;
}

export function SocialShare({
  title = "Make Accuracy — AI Automation & AI Agents that Work 24/7",
  url,
  className = "",
}: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = typeof window !== "undefined" ? url || window.location.href : "https://makeaccuracy.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    toast.success("Link copied to clipboard!");
    trackEvent("share_copy_link", "SocialShare", shareUrl);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTwitterShare = () => {
    trackEvent("share_twitter", "SocialShare", shareUrl);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      title
    )}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, "_blank", "noopener,noreferrer");
  };

  const handleLinkedinShare = () => {
    trackEvent("share_linkedin", "SocialShare", shareUrl);
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      shareUrl
    )}`;
    window.open(linkedinUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 mr-2 flex items-center gap-1.5">
        <Share2 className="size-3.5 text-amber-500" /> Share
      </span>

      <button
        onClick={handleTwitterShare}
        aria-label="Share on X (Twitter)"
        className="rounded-full p-2 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600 transition-colors cursor-pointer"
        title="Share on X"
      >
        <Twitter className="size-4" />
      </button>

      <button
        onClick={handleLinkedinShare}
        aria-label="Share on LinkedIn"
        className="rounded-full p-2 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600 transition-colors cursor-pointer"
        title="Share on LinkedIn"
      >
        <Linkedin className="size-4" />
      </button>

      <button
        onClick={handleCopy}
        aria-label="Copy page link"
        className="rounded-full p-2 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600 transition-colors cursor-pointer"
        title="Copy link"
      >
        {copied ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
      </button>
    </div>
  );
}
