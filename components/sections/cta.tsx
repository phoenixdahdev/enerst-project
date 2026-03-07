"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Phone, ArrowRight } from "@phosphor-icons/react";
import { Ripple } from "@/components/ui/ripple";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden bg-navy py-28 lg:py-36"
    >
      <Ripple
        mainCircleSize={300}
        mainCircleOpacity={0.08}
        numCircles={6}
        className="[&>div]:border-amber/20"
      />

      {/* Amber glow */}
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/[0.06] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block rounded-full border border-amber/20 bg-amber/10 px-4 py-1.5 text-xs font-semibold text-amber">
            Let&apos;s Build Together
          </span>

          <h2 className="mt-6 font-heading text-3xl font-extrabold text-white sm:text-4xl lg:text-6xl">
            Ready to Build
            <br />
            Something{" "}
            <span className="text-amber">Great?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-white/40">
            Let&apos;s discuss your next project. Our team is ready to bring
            your vision to life with precision and expertise.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <InteractiveHoverButton className="border-amber bg-amber text-navy hover:bg-amber-dark">
              Start Your Project
            </InteractiveHoverButton>

            <a
              href="tel:+2348059114989"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/70 backdrop-blur-sm transition-all hover:border-amber/30 hover:text-amber"
            >
              <Phone size={18} weight="fill" />
              (234) 80 591 149 89
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
