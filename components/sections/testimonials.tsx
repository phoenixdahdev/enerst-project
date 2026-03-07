"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Star, Quotes } from "@phosphor-icons/react";

const featured = {
  quote:
    "EPVEOT completely transformed our office space. Their project management was flawless — they communicated at every stage, handled unexpected challenges without missing a beat, and delivered ahead of schedule. We've already contracted them for our next two projects.",
  name: "Michael Okonkwo",
  role: "CEO",
  company: "Delta Construction Ltd",
  rating: 5,
};

const others = [
  {
    quote:
      "We've worked with many contractors, but EPVEOT stands out for their reliability and quality. Our facility upgrade was delivered on time and under budget.",
    name: "Aisha Mohammed",
    role: "Facility Manager",
    company: "Horizon Properties",
    rating: 5,
  },
  {
    quote:
      "Professional, skilled, and genuinely committed to excellence. They handled our industrial project with the highest standards of safety and precision.",
    name: "David Chen",
    role: "Project Director",
    company: "Atlas Engineering",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-amber" weight="fill" />
      ))}
    </div>
  );
}

function Initials({ name }: { name: string }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy font-heading text-sm font-bold text-white">
      {name
        .split(" ")
        .map((n) => n[0])
        .join("")}
    </div>
  );
}

export function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-muted/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-amber" />
            <span className="text-sm font-semibold tracking-widest text-amber uppercase">
              Testimonials
            </span>
          </div>
          <h2 className="mt-5 font-heading text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* Featured testimonial — large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative overflow-hidden rounded-2xl bg-navy p-8 sm:p-10 lg:col-span-3"
          >
            <Quotes
              size={64}
              className="absolute right-6 top-6 text-white/[0.04]"
              weight="fill"
            />

            <Stars count={featured.rating} />

            <blockquote className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl sm:leading-relaxed">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>

            <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber font-heading text-sm font-bold text-navy">
                {featured.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="font-heading font-bold text-white">
                  {featured.name}
                </p>
                <p className="text-sm text-white/40">
                  {featured.role}, {featured.company}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Smaller testimonials stacked */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {others.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.12 }}
                className="flex-1 rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:border-amber/20 hover:shadow-md"
              >
                <Stars count={t.rating} />

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <Initials name={t.name} />
                  <div>
                    <p className="font-heading text-sm font-bold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
