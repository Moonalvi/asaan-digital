import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/sections/About";
import { Difference } from "@/components/sections/Difference";
import { Faq } from "@/components/sections/Faq";
import { Founders } from "@/components/sections/Founders";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { TrustStrip } from "@/components/sections/TrustStrip";

/**
 * Sections get composed here one at a time, in the order they are built.
 * Nothing is imported until it exists, so the page always reflects what is
 * genuinely finished.
 */
export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Process />
      <Difference />
      <Founders />
      <Faq />
      <TrustStrip />
    </>
  );
}
