"use client";

import { Marquee } from "@/components/ui/marquee";

const partners = [
  "Delta Construction",
  "Horizon Properties",
  "Atlas Engineering",
  "Greenfield Estates",
  "Metro Development",
  "Apex Industrial",
  "Summit Builders",
  "Titan Infrastructure",
];

export function LogoMarquee() {
  return (
    <section className="border-y border-border/50 bg-muted/30 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-medium tracking-widest text-muted-foreground/60 uppercase">
          Trusted by industry leaders
        </p>
      </div>
      <Marquee pauseOnHover className="[--duration:30s] [--gap:3rem]">
        {partners.map((name) => (
          <div
            key={name}
            className="flex items-center gap-2.5 rounded-full border border-border/50 bg-background px-5 py-2.5 shadow-sm"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-navy/10 font-heading text-xs font-bold text-navy">
              {name
                .split(" ")
                .map((w) => w[0])
                .join("")}
            </div>
            <span className="text-sm font-semibold text-foreground/80 whitespace-nowrap">
              {name}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
