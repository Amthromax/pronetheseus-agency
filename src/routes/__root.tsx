import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { Toaster } from "@/components/ui/sonner";
import { SmoothScroll } from "@/components/fx/SmoothScroll";
import { AnimatedBackground } from "@/components/fx/AnimatedBackground";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#070709] px-4 py-20 text-white relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-lg text-center space-y-6 bg-neutral-900/60 p-8 sm:p-12 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-widest">
          Error 404
        </div>

        <h1 className="text-6xl sm:text-7xl font-bold tracking-tight bg-gradient-to-b from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
          Lost in Space
        </h1>

        <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-sm mx-auto">
          The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-neutral-200 shadow-lg hover:shadow-white/10"
          >
            <RollingText>Back to Home</RollingText>
          </Link>
          <Link
            to="/book"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-neutral-800"
          >
            <RollingText>Book a Demo</RollingText>
          </Link>
        </div>

        <div className="pt-6 border-t border-white/5 flex items-center justify-center gap-6 text-xs text-neutral-500">
          <Link to="/services" className="hover:text-white transition">Services</Link>
          <span>•</span>
          <Link to="/solutions" className="hover:text-white transition">Solutions</Link>
          <span>•</span>
          <Link to="/contact" className="hover:text-white transition">Contact</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center p-8 rounded-2xl bg-neutral-900 border border-neutral-800">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Something went wrong
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          An unexpected error occurred while loading this section.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-neutral-200 cursor-pointer"
          >
            Try again
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            <RollingText>Go home</RollingText>
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Make Accuracy — AI Automation & AI Agents that Work 24/7" },
      {
        name: "description",
        content:
          "Make Accuracy builds AI agents, n8n workflows, and custom automation systems that save teams hundreds of hours every month.",
      },
      { name: "author", content: "Make Accuracy" },
      { name: "theme-color", content: "#0a0a0a" },
      { property: "og:site_name", content: "Make Accuracy" },
      { property: "og:title", content: "Make Accuracy — AI Automation & AI Agents" },
      {
        property: "og:description",
        content: "AI Employees that work 24/7. We design and ship automation that pays for itself.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://makeaccuracy.agency/logo-mark.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@makeaccuracy" },
      { name: "twitter:title", content: "Make Accuracy — AI Automation & AI Agents" },
      { name: "twitter:description", content: "AI Employees that work 24/7. Custom automation workflows that scale revenue." },
      { name: "twitter:image", content: "https://makeaccuracy.agency/logo-mark.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/logo-mark.png", type: "image/png" },
      { rel: "icon", href: "/logo.svg", type: "image/svg+xml" },
      { rel: "canonical", href: "https://makeaccuracy.agency" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:ital,wght@0,400..800;1,400..800&family=Instrument+Serif:ital@0;1&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Make Accuracy",
          url: "https://makeaccuracy.agency",
          logo: "https://makeaccuracy.agency/logo-mark.png",
          description:
            "AI automation agency building AI agents, n8n workflows, CRM automation, voice AI, and custom software.",
          sameAs: [
            "https://www.linkedin.com/company/makeaccuracy",
            "https://x.com/makeaccuracy",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:px-4 focus:py-2 focus:bg-amber-500 focus:text-black focus:font-bold focus:rounded-lg focus:shadow-xl"
        >
          Skip to main content
        </a>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

import { CookieConsent } from "@/components/ui/CookieConsent";
import { RollingText } from "@/components/ui/rolling-text";
import { initAnalytics } from "@/lib/analytics";

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll />
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
      <Toaster />
    </QueryClientProvider>
  );
}

