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
    <section id="about" ref={ref} className="relative bg-background py-24 lg:py-32">
      {/* Decorative top accent */}
      <div className="absolute left-0 top-0 h-1 w-32 bg-amber lg:w-48" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left visual — 5 cols */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative lg:col-span-5"
          >
            {/* Main block */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-navy-light to-navy">
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")`,
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30" />

              {/* Vertical amber stripe */}
              <div className="absolute right-6 top-0 h-full w-1 bg-amber/30" />
              <div className="absolute right-6 top-0 h-1/3 w-1 bg-amber" />
            </div>

            {/* Overlapping experience card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-6 z-10 rounded-2xl border border-amber/20 bg-navy p-6 shadow-2xl sm:-right-10"
            >
              <p className="font-heading text-5xl font-extrabold text-amber">
                7<span className="text-white">+</span>
              </p>
              <p className="mt-1 text-sm font-medium text-white/60">
                Years of
                <br />
                Experience
              </p>
            </motion.div>

            {/* Decorative dot grid */}
            <div
              className="absolute -left-6 -top-6 -z-10 h-24 w-24 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(#E8A838 1.5px, transparent 1.5px)",
                backgroundSize: "10px 10px",
              }}
            />
          </motion.div>

          {/* Right content — 7 cols */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-amber" />
              <span className="text-sm font-semibold tracking-widest text-amber uppercase">
                About EPVEOT
              </span>
            </div>

            <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              Engineering Excellence
              <br />
              in Every Project
            </h2>

            <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
              With over seven years of dedicated service, EPVEOT has established
              itself as a trusted leader in the construction and engineering
              industry. Our team of skilled professionals brings expertise,
              innovation, and unwavering commitment to every project.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-3 rounded-lg bg-muted/60 px-4 py-3"
                >
                  <CheckCircle
                    size={20}
                    className="mt-0.5 shrink-0 text-amber"
                    weight="fill"
                  />
                  <span className="text-sm text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            <Button variant="default" size="lg" className="mt-10 gap-2">
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
