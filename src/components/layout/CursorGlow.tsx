import { useEffect, useRef, useState } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setEnabled(true);

    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const fps = 12;
    const interval = 1000 / fps;
    let lastTime = performance.now();

    const tick = (currentTime: number) => {
      raf = requestAnimationFrame(tick);
      const delta = currentTime - lastTime;

      if (delta >= interval) {
        lastTime = currentTime - (delta % interval);

        x += (tx - x) * 0.25;
        y += (ty - y) * 0.25;
        if (ref.current) {
          ref.current.style.transform = `translate3d(${x - 250}px, ${y - 250}px, 0)`;
        }
      }
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[90] h-[500px] w-[500px] rounded-full opacity-60 mix-blend-screen"
      style={{
        background:
          "radial-gradient(circle, rgba(255,122,0,0.32) 0%, rgba(255,122,0,0.10) 30%, transparent 60%)",
        filter: "blur(20px)",
      }}
    />
  );
}