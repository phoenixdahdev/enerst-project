"use client";

import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { TextAnimate } from "@/components/ui/text-animate";
import { NumberTicker } from "@/components/ui/number-ticker";
import { cn } from "@/lib/utils";
import { properties, getLocations, getPropertyTypes } from "@/lib/data/properties";

export function PropertiesHero() {
  const available = properties.filter((p) => p.status === "available").length;
  const locationCount = getLocations().length;
  const typeCount = getPropertyTypes().length;

  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-16 lg:pt-36 lg:pb-20">
      <AnimatedGridPattern
        numSquares={25}
        maxOpacity={0.06}
        duration={5}
        repeatDelay={1}
        className={cn(
          "fill-amber/30 stroke-amber/10",
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
        )}
      />

      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-amber/[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-px w-10 bg-amber" />
          <span className="text-sm font-semibold tracking-widest text-amber uppercase">
            Property Listings
          </span>
        </div>

        <TextAnimate
          as="h1"
          by="word"
          animation="blurInUp"
          duration={1}
          className="mt-5 max-w-2xl font-heading text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl"
        >
          Find Your Perfect Space
        </TextAnimate>

        <p className="mt-4 max-w-lg text-base text-white/40">
          Browse our curated selection of properties across Anambra state — from
          affordable flats to luxury mansions.
        </p>

        {/* Quick stats */}
        <div className="mt-10 flex flex-wrap gap-8 border-t border-white/[0.06] pt-8">
          <div>
            <p className="flex items-baseline gap-1 font-heading text-2xl font-bold text-white">
              <NumberTicker value={available} className="text-white" delay={0.3} />
            </p>
            <p className="text-xs text-white/35">Available</p>
          </div>
          <div>
            <p className="flex items-baseline gap-1 font-heading text-2xl font-bold text-white">
              <NumberTicker value={locationCount} className="text-white" delay={0.5} />
            </p>
            <p className="text-xs text-white/35">Locations</p>
          </div>
          <div>
            <p className="flex items-baseline gap-1 font-heading text-2xl font-bold text-white">
              <NumberTicker value={typeCount} className="text-white" delay={0.7} />
            </p>
            <p className="text-xs text-white/35">Property Types</p>
          </div>
        </div>
      </div>
    </section>
  );
}
