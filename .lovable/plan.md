# Amthromax — Premium AI Automation Agency Site

## Stack note (important)
This project runs on **TanStack Start + React 19 + Vite + Tailwind v4**, not Next.js 15. All requested capabilities (SSR, routing, metadata/OG, static-ish generation, server functions) are covered by this stack. I'll use:
- TanStack Router file-based routes + `head()` for SEO/OG/JSON-LD
- Tailwind v4 tokens in `src/styles.css` (red/black dark theme)
- shadcn/ui + Lucide icons + Framer Motion (`motion/react`) + GSAP + Lenis
- React Hook Form + Zod for forms
- Three.js (light usage) + Lottie for accents
- TanStack Query for any async data

I'll skip Spline (heavy, external) unless you want it — I'll build equivalent WebGL/Canvas visuals instead. Live chat, CMS backend, and analytics are stubbed UI (no backend enabled unless you ask).

## Design system
- Palette: near-black base (`#08080A`), elevated surfaces, crimson→ruby red brand gradient (`#FF2A45 → #B3001B`), subtle white text tiers.
- Typography: Display serif-adjacent geometric (Instrument Serif for editorial headings) + Inter/Geist for body. Loaded via `<link>` in `__root.tsx`.
- Tokens: gradients, glass surfaces, glow shadows, red rings, noise texture — all as CSS variables mapped in `@theme inline`.
- Motion: page-level Lenis smooth scroll, section reveals (fade/blur/slide/stagger), magnetic buttons, cursor spotlight, marquees, scroll-linked parallax, gradient orbs, particle field, animated grid.

## Routes
```
/                 Home (all landing sections)
/services         Services index
/services/$slug   Service detail (dynamic)
/solutions        Solutions overview
/industries       Industries grid + detail expansions
/case-studies     Portfolio list w/ filters
/case-studies/$   Case study detail
/pricing          Pricing tiers + comparison
/resources        Resource library
/blog             Blog index
/blog/$slug       Blog post
/about            About / team / values / timeline
/careers          Hiring
/contact          Contact + booking + map
/privacy          Legal
/terms            Legal
*                 404 (root notFoundComponent)
```

## Home page sections (order)
1. Sticky glass navbar with mega menu (Services dropdown), scroll-reactive bg, animated wordmark, "Book Strategy Call" magnetic CTA
2. Hero — massive headline, dual CTAs, animated particles + grid + gradient orbs + floating glass cards + mouse parallax, stat row (100+ / 25+ / 98% / 5000+)
3. Trusted-by infinite marquee (logo chips)
4. Services grid — 12 premium tilt cards, icon, description, benefits, CTA
5. Interactive process timeline (7 steps, scroll-linked)
6. Automation workflow showcase — SVG node graph with animated flowing paths, click a template to play
7. Industries — 12 expanding cards
8. Case studies — before/after, hours saved, ROI, revenue, quote
9. ROI calculator — inputs → animated counter outputs
10. Pricing — 3 tiers + feature comparison table
11. Testimonials — glass carousel
12. Traditional vs Amthromax comparison table
13. Tech stack marquee (OpenAI, Claude, n8n, Supabase, etc.) + AI models row
14. Portfolio filter grid
15. Animated stats band
16. FAQ accordion
17. Blog preview cards
18. Newsletter
19. Contact/booking teaser
20. Large footer (5 columns + social + newsletter + legal)

## Premium extras (globally mounted)
- Custom cursor with spotlight glow
- Scroll progress bar
- Floating CTA + back-to-top
- Command palette (⌘K) with route search
- Cookie consent bar
- Exit-intent modal
- AI chatbot demo widget (canned responses, no backend)
- Voice AI demo (waveform visual, mock)
- AI readiness quiz (multi-step, results screen)

## File structure
```
src/
  routes/                (all pages above)
  components/
    layout/              Navbar, Footer, Shell, CursorGlow, ScrollProgress, FloatingCTA, CookieBar, CommandPalette
    hero/                Hero, ParticleField, GradientOrbs, GridBackdrop, FloatingCards
    sections/            Services, Process, WorkflowShowcase, Industries, CaseStudies, ROICalculator, Pricing, Testimonials, Comparison, TechStack, AIModels, Portfolio, Stats, FAQ, BlogPreview, Newsletter, ContactTeaser
    ui/                  shadcn primitives + custom (MagneticButton, GlassCard, GradientText, TiltCard, Marquee, Counter, RevealText)
    interactive/         Chatbot, VoiceDemo, WorkflowPlayground, ReadinessQuiz
  data/                  services.ts, industries.ts, caseStudies.ts, pricing.ts, testimonials.ts, faqs.ts, posts.ts, team.ts
  hooks/                 useLenis, useMagnetic, useMousePosition, useReveal, useHydrated
  lib/                   motion.ts (variants), seo.ts (head helpers), utils.ts
  styles.css             tokens, theme, utilities
```

## SEO / metadata
- `__root.tsx`: charset, viewport, site name, Organization JSON-LD, default OG (no og:image at root)
- Every route: unique title, description, og:title/description/url, canonical (relative)
- Home + case-study leaves get og:image once hero images are generated
- Blog posts: Article JSON-LD; services: Service JSON-LD; FAQ: FAQPage JSON-LD

## Accessibility & performance
- Semantic landmarks, one `<main>` per route, `h-dvh` for mobile hero
- All icon buttons get `aria-label`; focus-visible rings on brand red
- Respect `prefers-reduced-motion` — disable heavy particle/parallax
- Lazy-load Three.js + heavy interactive widgets behind `<ClientOnly>`/`React.lazy`
- Generated hero/case-study images uploaded via `lovable-assets` to keep repo light
- Images use aspect wrappers + `loading="lazy"` where appropriate

## Forms
- Contact + Newsletter + Quiz use React Hook Form + Zod, client-side validation, toast confirmation (no backend wired; submit handler is a mock unless you enable Lovable Cloud)

## What I'll defer unless you confirm
- Real backend (Cloudflare/Supabase) for form submissions, blog CMS, booking calendar — currently mocked
- Spline embeds — replaced with custom Three.js/CSS visuals
- Google Maps embed — will use a stylized static map placeholder unless you provide an API key
- Real client logos — will use stylized wordmark chips (no fake brand logos)

## Build order
1. Design tokens, fonts, base layout shell, navbar, footer, cursor/scroll/CTA globals
2. Reusable primitives (MagneticButton, GlassCard, TiltCard, Marquee, Counter, RevealText, GradientText)
3. Home hero + all landing sections top-to-bottom
4. Secondary routes (services, industries, case-studies, pricing, about, contact, blog, legal, 404)
5. Interactive widgets (chatbot, voice demo, workflow playground, quiz, command palette)
6. SEO metadata pass across all routes
7. A11y + reduced-motion pass, image generation for hero/case studies

This is a very large build — expect it to span several turns. Confirm and I'll start with the design system + shell + hero, then iterate section by section.