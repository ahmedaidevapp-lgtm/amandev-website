import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { publicUrl } from "@/utils/publicUrl";

type AppLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href" | "onClick"> & {
  routerPath: string;
  hash?: string;
  /** Run after same‑tab navigation starts (e.g. close mobile menu). */
  onNavigate?: () => void;
};

/**
 * GitHub Pages serves the site under `/<repo>/`; `<Link to="/en">` can yield browser URLs without
 * that prefix and cause full‑page 404s. We render `<a href>` with the public path, then
 * client‑navigate on normal clicks.
 */
export function AppLink({
  routerPath,
  hash,
  className,
  children,
  onNavigate,
  ...anchorRest
}: AppLinkProps & { children?: ReactNode }) {
  const navigate = useNavigate();
  const fullHref = `${publicUrl(routerPath)}${hash ? `#${hash}` : ""}`;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    onNavigate?.();
    if (hash) {
      navigate({ pathname: routerPath, hash });
    } else {
      navigate(routerPath);
    }
  };

  return (
    <a href={fullHref} onClick={handleClick} className={className} {...anchorRest}>
      {children}
    </a>
  );
}
