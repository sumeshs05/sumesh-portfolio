"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Smooth, inertial scrolling via Lenis. It wraps the browser's own scroll, so
 * the sticky nav, keyboard scrolling and find-in-page keep working. Lenis
 * honours prefers-reduced-motion on its own (smoothing off, jumps instant).
 *
 * `anchors` makes same-page #links (like the nav's /#impact) glide to their
 * target. Lenis reads the CSS `scroll-padding-top` (set in globals.css), so
 * that single value keeps section titles clear of the sticky nav.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.1,
      anchors: true,
      stopInertiaOnNavigate: true,
    });
    return () => lenis.destroy();
  }, []);

  return null;
}
