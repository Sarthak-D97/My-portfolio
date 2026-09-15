"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDownToLine } from "lucide-react";
import { LayoutGroup, motion } from "motion/react";
import { nav, sections, site } from "@/data/profile";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const ids = sections.map((s) => s.id);
const desktopNav = nav.filter((n) => ["About", "Experience", "Lireons", "Projects", "Contact"].includes(n.label));

/** The section whose top is above 40% of the viewport, or the last one when the page is scrolled to the end. */
function activeSection(): string {
  const line = window.innerHeight * 0.4;
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  if (atBottom) return ids[ids.length - 1];
  let current = ids[0];
  for (const id of ids) {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= line) current = id;
  }
  return current;
}

export function Nav() {
  const [active, setActive] = useState<string>("top");
  const [scrolled, setScrolled] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 8);
        setActive(activeSection());
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    // If the viewport grows past the desktop breakpoint while the menu is open, close it so the
    // page is never left inert behind an invisible modal.
    const mq = window.matchMedia("(min-width: 64rem)");
    const onLayoutChange = () => {
      if (mq.matches && dialogRef.current?.open) {
        dialogRef.current.close();
        document.body.style.overflow = "";
      }
    };
    mq.addEventListener("change", onLayoutChange);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      mq.removeEventListener("change", onLayoutChange);
    };
  }, []);

  const current = sections.find((s) => s.id === active) ?? sections[0];

  function openMenu() {
    const d = dialogRef.current;
    if (!d || d.open) return;
    d.showModal();
    document.body.style.overflow = "hidden";
  }
  function closeMenu() {
    const d = dialogRef.current;
    if (d?.open) d.close();
    document.body.style.overflow = "";
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 h-14 border-b bg-bg/[0.88] backdrop-blur-md transition-[border-color] duration-200",
        scrolled ? "border-border" : "border-transparent",
      )}
    >
      <div className="mx-auto flex h-full w-full max-w-[1320px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          <a href="#top" className="meta font-medium whitespace-nowrap text-fg" aria-label={`${site.name} — back to top`}>
            {site.name}
          </a>
          {/* Decorative running index; section headings already convey position to assistive tech. */}
          <span className="label tnum grid size-6 place-items-center border border-border text-muted lg:hidden" aria-hidden="true">
            {current.index}
          </span>
        </div>

        <nav aria-label="Primary" className="hidden lg:block">
          <LayoutGroup id="nav">
          <ul role="list" className="flex items-center gap-7 xl:gap-8">
            {desktopNav.map((item) => {
              const id = item.href.slice(1);
              const isActive = active === id || (id === "projects" && active === "stack") || (id === "contact" && active === "credentials");
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "label relative inline-flex items-baseline py-2 whitespace-nowrap transition-colors duration-200",
                      isActive ? "text-fg" : "text-muted hover:text-fg",
                    )}
                  >
                    {item.label}
                    {isActive ? (
                      <motion.span
                        aria-hidden="true"
                        layoutId="nav-underline"
                        className="absolute inset-x-0 -bottom-px h-px bg-fg"
                        transition={{ type: "spring", stiffness: 500, damping: 40 }}
                      />
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>
          </LayoutGroup>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.resume}
            download
            className="meta link-ink relative hidden whitespace-nowrap text-fg before:absolute before:inset-x-0 before:-inset-y-3 before:content-[''] min-[400px]:inline-flex lg:hidden xl:mr-2 xl:inline-flex"
          >
            Résumé&nbsp;↓
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="label inline-flex h-11 items-center border border-border px-3 text-fg lg:hidden"
            aria-haspopup="dialog"
            onClick={openMenu}
          >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile menu: a native dialog gives us a focus trap, Esc-to-close and an inert page for free.
          No breakpoint class on the dialog itself: it can only be opened from the lg:hidden Menu button. */}
      <dialog
        ref={dialogRef}
        onClose={closeMenu}
        aria-label="Site menu"
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-bg p-0 text-fg backdrop:bg-bg/[0.6]"
      >
        <div className="flex h-full flex-col px-5 py-4 sm:px-8">
          <div className="flex h-11 items-center justify-between">
            <span className="meta font-medium">{site.name}</span>
            <button type="button" onClick={closeMenu} className="label inline-flex h-11 items-center border border-border px-3 text-fg">
              Close
            </button>
          </div>
          <nav aria-label="Mobile" className="mt-6">
            <ol role="list">
              {nav.map((item) => (
                <li key={item.href} className="border-t border-border last:border-b">
                  <a href={item.href} onClick={closeMenu} className="flex items-baseline gap-4 py-5 font-serif text-display-lg text-fg">
                    <span className="label tnum text-accent">{item.index}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <a
            href={site.resume}
            download
            className="mt-auto inline-flex h-12 w-full items-center justify-center gap-2 rounded-btn border border-fg font-sans text-[0.9375rem] font-semibold text-fg"
          >
            <ArrowDownToLine aria-hidden="true" className="size-4" />
            Download résumé · PDF
          </a>
        </div>
      </dialog>
    </header>
  );
}
