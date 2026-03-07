"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  MagnifyingGlass,
  PencilRuler,
  HardHat,
  HandshakeIcon,
} from "@phosphor-icons/react";
import { ShineBorder } from "@/components/ui/shine-border";

const steps = [
  {
    number: "01",
    icon: MagnifyingGlass,
    title: "Discovery & Assessment",
    description:
      "We visit your site, understand your requirements, evaluate the scope, and identify potential challenges before a single brick is laid.",
  },
  {
    number: "02",
    icon: PencilRuler,
    title: "Planning & Design",
    description:
      "Our engineers draft detailed blueprints, timelines, and budgets. You approve every milestone before we begin.",
  },
  {
    number: "03",
    icon: HardHat,
    title: "Build & Execute",
    description:
      "Licensed professionals execute the project with precision. Regular check-ins keep you informed at every stage.",
  },
  {
    number: "04",
    icon: MagnifyingGlass,
    title: "Deliver & Support",
    description:
      "Final inspection, quality assurance, and handover. We provide ongoing maintenance and support long after completion.",
  },
];

export function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-xl text-center"
        >
          <div className="mx-auto flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-amber" />
            <span className="text-sm font-semibold tracking-widest text-amber uppercase">
              Our Process
            </span>
            <div className="h-px w-10 bg-amber" />
          </div>
          <h2 className="mt-5 font-heading text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
            How We Work
          </h2>
          <p className="mt-4 text-muted-foreground">
            A proven four-step process that takes your project from concept to
            completion — no surprises, no shortcuts.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:shadow-lg"
            >
              <ShineBorder
                shineColor={["#E8A838", "#1B2A4A"]}
                borderWidth={1.5}
                duration={10}
              />

              {/* Step number — large background */}
              <span className="absolute -right-2 -top-4 font-heading text-[80px] font-extrabold leading-none text-muted/60 select-none">
                {step.number}
              </span>

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber/10 transition-colors duration-300 group-hover:bg-amber">
                  <step.icon
                    size={24}
                    className="text-amber transition-colors group-hover:text-white"
                    weight="duotone"
                  />
                </div>

                <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
