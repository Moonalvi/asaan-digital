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
      <div className="fixed left-4 top-4 z-50 mix-blend-difference sm:left-6 sm:top-6 md:left-10">
        <Logo className="text-base sm:text-2xl md:text-3xl" />
      </div>

      <a
        href={site.bookingUrl}
        className="fixed right-4 top-4 z-50 inline-flex items-center gap-1.5 whitespace-nowrap border border-primary px-3 py-2 text-[10px] uppercase tracking-[0.1em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:right-6 sm:top-6 sm:gap-3 sm:px-5 sm:py-2.5 sm:text-xs sm:tracking-[0.2em] md:right-10 md:px-6 md:py-3 md:text-sm"
      >
        {/* Full label has room once the logo has shrunk out of the way past
            sm; below that, the 15-min detail is the first thing to drop
            since "book a call" alone still says everything a thumb needs. */}
        <span className="sm:hidden">Book a call</span>
        <span className="hidden sm:inline">{site.bookingLabel}</span>
        <span aria-hidden="true">&rarr;</span>
      </a>
    </>
  );
}
