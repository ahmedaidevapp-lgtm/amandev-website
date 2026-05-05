/** Full browser path including Vite `base` (e.g. /repo/en). Middle‑click / open‑in‑new‑tab safe on GitHub Pages. */
export function publicUrl(routerPath: string): string {
  const raw = import.meta.env.BASE_URL || "/";
  const base = raw.replace(/\/$/, "");
  const p = routerPath.startsWith("/") ? routerPath : `/${routerPath}`;
  return base ? `${base}${p}` : p;
}
