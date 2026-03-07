"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "@phosphor-icons/react";

export function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden py-24 lg:py-32">
      {/* Amber gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber via-amber to-amber-dark" />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%231B2A4A'/%3E%3C/svg%3E")`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Decorative circles */}
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10" />
      <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-white/[0.07]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Ready to Build Something Great?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-navy/70">
            Let&apos;s discuss your next project. Our team is ready to bring
            your vision to life with precision and expertise.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="default"
              size="lg"
              className="gap-2 bg-navy text-white hover:bg-navy-light"
            >
              Start Your Project <ArrowRight size={18} weight="bold" />
            </Button>
            <a
              href="tel:+2348059114989"
              className="inline-flex items-center gap-2 font-heading text-lg font-bold text-navy transition-colors hover:text-navy-light"
            >
              <Phone size={22} weight="fill" />
              (234) 80 591 149 89
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
