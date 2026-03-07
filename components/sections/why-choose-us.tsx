"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Medal, Certificate, CurrencyDollar } from "@phosphor-icons/react";

const reasons = [
  {
    icon: Medal,
    number: "7+",
    title: "Years Experience",
    description:
      "Deep industry knowledge across commercial, residential, and industrial sectors.",
  },
  {
    icon: Certificate,
    number: "50+",
    title: "Certifications",
    description:
      "Fully licensed, insured, and certified to the highest industry standards.",
  },
  {
    icon: CurrencyDollar,
    number: "100%",
    title: "Transparent Pricing",
    description:
      "Detailed quotes upfront. No hidden fees, no surprises on completion.",
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
      {/* Diagonal amber accent */}
      <div className="absolute -left-20 top-0 h-full w-40 -skew-x-12 bg-amber/[0.06]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-amber" />
              <span className="text-sm font-semibold tracking-widest text-amber uppercase">
                Why EPVEOT
              </span>
            </div>
            <h2 className="mt-5 font-heading text-3xl font-extrabold text-white sm:text-4xl">
              Why Choose Us
            </h2>
            <p className="mt-4 text-white/40">
              We combine experience, certification, and fair pricing to deliver
              results you can trust — every single time.
            </p>
          </motion.div>

          {/* Right — reason cards */}
          <div className="grid gap-6 sm:grid-cols-3 lg:col-span-8">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-300 hover:border-amber/20 hover:bg-white/[0.06]"
              >
                {/* Big number */}
                <p className="font-heading text-4xl font-extrabold text-amber/80 transition-colors group-hover:text-amber">
                  {reason.number}
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <reason.icon
                    size={20}
                    className="text-amber/60"
                    weight="duotone"
                  />
                  <h3 className="font-heading text-base font-bold text-white">
                    {reason.title}
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-white/40">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
