import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const sizeStyles = {
  sm: "h-9 w-9 text-[1.0625rem]",
  md: "h-10 w-10 text-xl",
  lg: "h-14 w-14 text-[1.375rem] tracking-wide",
} as const;

export type LogoMarkProps = {
  size?: keyof typeof sizeStyles;
  className?: string;
} & Omit<HTMLAttributes<HTMLSpanElement>, "children">;

export function LogoMark({ size = "md", className, ...props }: LogoMarkProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 select-none items-center justify-center rounded-full border border-border/70 bg-popover font-mono font-semibold text-primary shadow-[inset_0_1px_2px_rgba(0,0,0,0.45)]",
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      <span className="translate-y-px leading-none">A</span>
    </span>
  );
}
