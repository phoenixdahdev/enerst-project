"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Fan,
  Lightning,
  HardHat,
  ShieldCheck,
  Wrench,
  House,
  ArrowRight,
} from "@phosphor-icons/react";
import { ShineBorder } from "@/components/ui/shine-border";
import type { Icon } from "@phosphor-icons/react";

interface Service {
  icon: Icon;
  title: string;
  description: string;
}

const featured: Service = {
  icon: Lightning,
  title: "Electrical Installation",
  description:
    "Complete electrical engineering solutions — from high-voltage industrial wiring to smart building systems. We handle design, installation, testing, and certification to the highest safety standards.",
};

const services: Service[] = [
  {
    icon: Fan,
    title: "Air Conditioning",
    description:
      "Professional HVAC installation and maintenance for optimal climate control.",
  },
  {
    icon: HardHat,
    title: "General Building",
    description:
      "Full-service construction and renovation across all property types.",
  },
  {
    icon: ShieldCheck,
    title: "Security Systems",
    description:
      "Advanced CCTV, access control, and integrated alarm installations.",
  },
  {
    icon: Wrench,
    title: "Service & Maintenance",
    description:
      "Ongoing maintenance programs keeping your facilities at peak performance.",
  },
  {
    icon: House,
    title: "House Extensions",
    description:
      "Expert home expansions that blend seamlessly with existing architecture.",
  },
];

export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="relative bg-muted/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header — left-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-amber" />
            <span className="text-sm font-semibold tracking-widest text-amber uppercase">
              What We Offer
            </span>
          </div>
          <h2 className="mt-5 font-heading text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
            Our Professional Services
          </h2>
          <p className="mt-4 text-muted-foreground">
            Comprehensive solutions tailored to meet the demands of modern
            construction and engineering.
          </p>
        </motion.div>

        {/* Featured service */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="group relative mt-12 overflow-hidden rounded-2xl bg-navy"
        >
          <ShineBorder
            shineColor={["#E8A838", "#D4952E", "#E8A838"]}
            borderWidth={1.5}
            duration={12}
          />
          <div className="grid items-center lg:grid-cols-5">
            <div className="relative flex items-center justify-center bg-gradient-to-br from-amber to-amber-dark p-12 lg:col-span-2 lg:p-16">
              <featured.icon
                size={80}
                className="text-navy"
                weight="duotone"
              />
              <div className="absolute -right-6 -bottom-6 h-32 w-32 rounded-full border border-navy/10" />
              <div className="absolute -right-12 -bottom-12 h-48 w-48 rounded-full border border-navy/5" />
            </div>
            <div className="p-8 lg:col-span-3 lg:p-12">
              <span className="inline-block rounded-full bg-amber/10 px-3 py-1 text-xs font-semibold text-amber">
                Featured Service
              </span>
              <h3 className="mt-4 font-heading text-2xl font-bold text-white sm:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-3 max-w-lg leading-relaxed text-white/50">
                {featured.description}
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 font-medium text-amber transition-all hover:gap-3"
              >
                Learn More <ArrowRight size={16} weight="bold" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Service grid */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.07 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-background p-7 transition-all duration-300 hover:border-amber/30 hover:shadow-lg hover:shadow-amber/5"
            >
              <div className="absolute left-0 top-0 h-full w-0.5 bg-amber opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber/10 transition-all duration-300 group-hover:bg-amber">
                <service.icon
                  size={24}
                  className="text-amber transition-colors group-hover:text-white"
                  weight="duotone"
                />
              </div>
              <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
