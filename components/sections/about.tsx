"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CheckCircle } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

const highlights = [
  "Licensed and fully insured professionals",
  "On-time project delivery guaranteed",
  "Transparent pricing with no hidden costs",
  "24/7 emergency service support",
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-navy to-navy-light">
              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")`,
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />

              {/* Floating card */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="rounded-xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
                  <p className="font-heading text-3xl font-bold text-amber">
                    7+
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    Years of Industry Experience
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative corner */}
            <div className="absolute -right-6 -bottom-6 -z-10 h-32 w-32 rounded-2xl bg-amber/20" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-sm font-medium tracking-wider text-amber uppercase">
              About EPVEOT
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Engineering Excellence in Every Project
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              With over seven years of dedicated service, EPVEOT has established
              itself as a trusted leader in the construction and engineering
              industry. Our team of skilled professionals brings expertise,
              innovation, and commitment to every project — from commercial
              developments to residential builds.
            </p>

            <div className="mt-8 space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle
                    size={22}
                    className="shrink-0 text-amber"
                    weight="fill"
                  />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button variant="default" size="lg" className="mt-10">
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
