import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  rel?: string;
  /** Extend the tap target to ~44px vertically without moving the underline. */
  hitArea?: boolean;
  /** Hide the trailing arrow (e.g. for button-styled links that add their own). */
  noArrow?: boolean;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "rel" | "children">;

/**
 * A link that opens in a new tab: the "↗" is decorative for assistive tech, and the new-tab
 * behaviour is announced with visually-hidden text.
 */
export function ExternalLink({ href, children, className, rel, hitArea = false, noArrow = false, ...rest }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel={rel ?? "noopener noreferrer"}
      className={cn(hitArea && "relative before:absolute before:inset-x-0 before:-inset-y-3 before:content-['']", className)}
      {...rest}
    >
      {children}
      {noArrow ? null : <span aria-hidden="true">&nbsp;↗</span>}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
