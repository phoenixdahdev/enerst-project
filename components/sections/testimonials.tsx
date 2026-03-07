"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Star, Quotes } from "@phosphor-icons/react";

const testimonials = [
  {
    quote:
      "EPVEOT transformed our office space beyond expectations. Their attention to detail and project management was impeccable from start to finish.",
    name: "Michael Okonkwo",
    role: "CEO, Delta Construction Ltd",
    rating: 5,
  },
  {
    quote:
      "We've worked with many contractors, but EPVEOT stands out for their reliability and quality. They delivered our facility upgrade on time and under budget.",
    name: "Aisha Mohammed",
    role: "Facility Manager, Horizon Properties",
    rating: 5,
  },
  {
    quote:
      "Professional, skilled, and genuinely committed to excellence. EPVEOT handled our industrial project with the highest standards of safety and precision.",
    name: "David Chen",
    role: "Project Director, Atlas Engineering",
    rating: 5,
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-muted/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-medium tracking-wider text-amber uppercase">
            Testimonials
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-muted-foreground">
            Trusted by businesses and homeowners across the region.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
              className="group relative rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:border-amber/20 hover:shadow-lg hover:shadow-amber/5"
            >
              <Quotes
                size={40}
                className="text-amber/20"
                weight="fill"
              />

              <div className="mt-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="text-amber"
                    weight="fill"
                  />
                ))}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-6 border-t border-border pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy font-heading text-sm font-bold text-white">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-heading text-sm font-bold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
