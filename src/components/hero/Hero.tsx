"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useCallback, useRef, useState } from "react";
import { ARMED_AT, HeroCanvas } from "./HeroCanvas";
import { useWordPhysics } from "./useWordPhysics";

/** Second line carries the accent, the way the Lovable hero did. */
const LINES = [
  { text: "Websites that turn", accent: false },
  { text: "callers into jobs", accent: true },
];

/**
 * Full viewport hero. The copy sits bottom left and drifts up as the page
 * scrolls away, and the whole copy block is pointer-transparent except the
 * CTA, so the field underneath stays reachable everywhere including behind
 * the headline.
 *
 * One gesture: hold anywhere to charge, release to blast. Release over the
 * headline and the same blast knocks the words out of the air, and they fall
 * to the floor of the hero under gravity before lifting back into place.
 */
export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const { registerWord, drop, hitTest } = useWordPhysics(heroRef);
  /*
   * Each line rises out of an overflow-hidden box on load. That mask has to
   * be dropped once the reveal is done, otherwise it crops every word that
   * later flies out of its own line and the blast looks like it is happening
   * behind a letterbox instead of over the whole hero.
   */
  const [revealed, setRevealed] = useState(false);

  const onRelease = useCallback(
    (x: number, y: number, charge: number) => {
      // An ordinary click still pops the field, but it does not get to
      // demolish the headline. That needs a deliberate hold.
      if (charge < ARMED_AT) return;
      if (!hitTest(x, y)) return;
      // Same steep curve as the field. Barely armed nudges the words loose,
      // a full hold throws them across the hero and off the walls.
      const norm = (charge - ARMED_AT) / (1 - ARMED_AT);
      const strength = 0.25 + 1.35 * Math.pow(norm, 1.25);
      drop(x, y, strength);
      // Matches the shock in the field, on phones that support it.
      navigator.vibrate?.(Math.round(20 + charge * 40));
    },
    [drop, hitTest],
  );

  return (
    <section
      ref={heroRef}
      className="relative h-dvh touch-pan-y overflow-hidden"
    >
      <HeroCanvas onRelease={onRelease} />

      <motion.div
        style={{ y, opacity }}
        className="pointer-events-none relative flex h-full flex-col justify-end px-6 pb-16 md:px-10 md:pb-20"
      >
        {/*
          Lovable ran this at 12vw because its headline was three short words.
          Ours is two long lines, which wraps and overflows the viewport at
          that size, so the scale comes down until each line holds on one row.
          select-none only because holding over text otherwise highlights it
          mid gesture.
        */}
        <h1 className="display select-none text-[clamp(2.25rem,7.2vw,8.5rem)]">
          {LINES.map((line, li) => (
            <span
              key={line.text}
              className={`block ${revealed ? "" : "overflow-hidden"}`}
            >
              <motion.span
                className={`block ${line.accent ? "text-primary" : ""}`}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1.1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.5 + li * 0.12,
                }}
                onAnimationComplete={
                  li === LINES.length - 1 ? () => setRevealed(true) : undefined
                }
              >
                {line.text.split(" ").map((word, wi, all) => (
                  <span key={`${word}-${wi}`}>
                    {/*
                      Each word is its own rigid body. The span is only ever
                      transformed, never repositioned, so the line keeps its
                      layout and stays one readable block of real text.
                    */}
                    <span
                      ref={registerWord}
                      className="inline-block will-change-transform"
                    >
                      {word}
                    </span>
                    {wi < all.length - 1 ? " " : ""}
                  </span>
                ))}
              </motion.span>
            </span>
          ))}
        </h1>

        {/*
          The booking CTA that used to sit here now lives only in the fixed
          header (NavBar.tsx), top-right — the same link was appearing
          twice within one scroll of itself, which read as a mistake more
          than emphasis.
        */}
        <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
          <p className="max-w-md text-sm text-muted-foreground">
            We build fast sites for home service businesses anywhere in the
            world and you talk to the person who builds it
          </p>

          <p className="label-xs">Hold anywhere to blast</p>
        </div>
      </motion.div>
    </section>
  );
}
