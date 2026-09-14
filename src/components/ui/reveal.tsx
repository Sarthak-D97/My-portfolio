import { Children, cloneElement, isValidElement, type CSSProperties, type ElementType, type ReactElement, type ReactNode } from "react";

type Tag = "div" | "ul" | "ol" | "li" | "article" | "section" | "p" | "span" | "figure";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger between direct children, in seconds. When set, the children reveal instead of the wrapper. */
  stagger?: number;
  /** Delay before this element reveals, in seconds. */
  delay?: number;
  as?: Tag;
};

type Attrs = { "data-reveal"?: string; style?: CSSProperties };

/** Tailwind preflight strips list markers, which makes WebKit drop the list role; restore it explicitly. */
const listRole = (as: Tag) => (as === "ul" || as === "ol" ? "list" : undefined);

/**
 * Fades + lifts into view once, driven by CSS (see globals.css) and a single IntersectionObserver
 * (<RevealObserver /> in the layout). Server components only: the HTML is complete and visible
 * without JavaScript; the hidden state is switched on only after hydration.
 */
export function Reveal({ children, className, stagger, delay = 0, as = "div" }: RevealProps) {
  const Tag = as as ElementType;
  if (stagger === undefined) {
    return (
      <Tag className={className} role={listRole(as)} data-reveal="" style={delay ? ({ "--d": `${delay}s` } as CSSProperties) : undefined}>
        {children}
      </Tag>
    );
  }
  let i = 0;
  const staggered = Children.map(children, (child) => {
    if (!isValidElement<Attrs>(child)) return child;
    const d = delay + i++ * stagger;
    const el = child as ReactElement<Attrs>;
    return cloneElement(el, {
      "data-reveal": "",
      style: { ...(el.props.style ?? {}), "--d": `${d.toFixed(2)}s` } as CSSProperties,
    });
  });
  return (
    <Tag className={className} role={listRole(as)}>
      {staggered}
    </Tag>
  );
}

/** A child of a staggered <Reveal stagger={…}>. Any element works; this just keeps call sites tidy. */
export function RevealItem({ children, className, as = "div", ...rest }: { children: ReactNode; className?: string; as?: Tag } & Attrs) {
  const Tag = as as ElementType;
  return (
    <Tag className={className} {...rest}>
      {children}
    </Tag>
  );
}
