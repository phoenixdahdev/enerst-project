"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Medal, Certificate, CurrencyDollar } from "@phosphor-icons/react";

const reasons = [
  {
    icon: Medal,
    title: "7+ Years Experience",
    description:
      "Decades of combined expertise in construction and engineering across commercial, residential, and industrial sectors.",
  },
  {
    icon: Certificate,
    title: "Certified Professionals",
    description:
      "Fully licensed, insured, and certified team delivering industry-leading standards on every project.",
  },
  {
    icon: CurrencyDollar,
    title: "Competitive Pricing",
    description:
      "Transparent, affordable rates backed by detailed quotes — no hidden costs, no surprises.",
  },
];

export function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-navy py-24 lg:py-32"
    >
      {/* Decorative glows */}
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-amber/[0.06] blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-amber/[0.04] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-medium tracking-wider text-amber uppercase">
            Why EPVEOT
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-white/50">
            We combine experience, certification, and value to deliver
            construction services you can trust.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="group text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber/10 transition-all duration-300 group-hover:bg-amber/20">
                <reason.icon
                  size={32}
                  className="text-amber"
                  weight="duotone"
                />
              </div>
              <h3 className="mt-6 font-heading text-xl font-bold text-white">
                {reason.title}
              </h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-white/50">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
