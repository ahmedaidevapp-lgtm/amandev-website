import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scroll to `#section` after React renders (needed when leaving nested routes like app-development). */
export function ScrollToRouteHash() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    const id = hash.replace(/^#/, "");
    if (!id) return;

    const scroll = () => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    scroll();
    const t = window.setTimeout(scroll, 80);
    const t2 = window.setTimeout(scroll, 240);
    return () => {
      window.clearTimeout(t);
      window.clearTimeout(t2);
    };
  }, [pathname, hash]);

  return null;
}
