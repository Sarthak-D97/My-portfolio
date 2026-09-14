import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/utils";

type Props<T extends ElementType> = { as?: T; className?: string } & ComponentPropsWithoutRef<T>;

/** Page-width wrapper: 1320px max, fluid side gutters. */
export function Container<T extends ElementType = "div">({ as, className, ...rest }: Props<T>) {
  const Tag = (as ?? "div") as ElementType;
  return <Tag className={cn("mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12", className)} {...rest} />;
}
