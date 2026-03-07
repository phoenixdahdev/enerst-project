"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "@phosphor-icons/react";

export function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden">
      {/* Angled background */}
      <div className="absolute inset-0 -skew-y-2 scale-105 bg-gradient-to-r from-amber via-amber to-amber-dark" />

      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none' stroke='%231B2A4A' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative shapes */}
      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border-[3px] border-navy/10" />
      <div className="absolute -left-8 -bottom-8 h-40 w-40 rounded-full border-[3px] border-navy/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between"
        >
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="font-heading text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl">
              Ready to Build
              <br />
              Something Great?
            </h2>
            <p className="mt-4 text-navy/60">
              Let&apos;s discuss your next project. Our team is ready to bring
              your vision to life with precision and expertise.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="gap-2 bg-navy text-white hover:bg-navy-light"
            >
              Start Your Project <ArrowRight size={18} weight="bold" />
            </Button>
            <a
              href="tel:+2348059114989"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-navy/20 px-5 py-3 font-heading text-sm font-bold text-navy transition-colors hover:border-navy/40 hover:bg-navy/5"
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
