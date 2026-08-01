import { Logo } from "./Logo";
import { site } from "@/lib/site";

/**
 * Fixed header: logo top-left, booking CTA top-right — the one and only
 * booking button on the page now, moved here from its old spot inline at
 * the base of the hero so the same link no longer appeared twice within a
 * single scroll of itself.
 *
 * The logo and the CTA are two INDEPENDENT `position: fixed` elements,
 * not one fixed header containing both. That split matters and is not
 * just style preference: `position: fixed` always creates its own
 * stacking context, so a `mix-blend-mode` set on something nested INSIDE
 * a fixed wrapper only blends against other content painted within that
 * same wrapper — which is nothing, since the wrapper's own background is
 * transparent — rather than against the real page behind it. That was the
 * actual bug the first version had: the blend was on a div nested inside
 * `<header>`, so it silently blended against nothing and the logo just
 * looked faded instead of inverting. Confirmed by moving the blend to
 * `<header>` itself (matching Trionn's own markup, which puts
 * `mix-blend-difference` directly on `<header>`) and watching it correctly
 * invert to solid black over a white test square. Since the CTA needs to
 * stay OUTSIDE the blend (a violet pill inside a difference blend
 * composites into an unpredictable colour, not a clean invert), it cannot
 * share that header with the logo — so it is its own fixed element instead.
 */
export function NavBar() {
  return (
    <>
      <div className="fixed left-6 top-6 z-50 mix-blend-difference md:left-10">
        <Logo className="text-2xl sm:text-3xl" />
      </div>

      <a
        href={site.bookingUrl}
        className="fixed right-6 top-6 z-50 inline-flex items-center gap-3 border border-primary px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:right-10 sm:px-6 sm:py-3 sm:text-sm"
      >
        {site.bookingLabel}
        <span aria-hidden="true">&rarr;</span>
      </a>
    </>
  );
}
