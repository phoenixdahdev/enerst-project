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

const services = [
  {
    icon: Fan,
    title: "Air Conditioning",
    description:
      "Professional HVAC installation, maintenance, and repair services for optimal climate control in any environment.",
  },
  {
    icon: Lightning,
    title: "Electrical Installation",
    description:
      "Complete electrical solutions from wiring to panel upgrades, ensuring safety and code compliance.",
  },
  {
    icon: HardHat,
    title: "General Building",
    description:
      "Full-service construction and renovation for commercial, residential, and industrial properties.",
  },
  {
    icon: ShieldCheck,
    title: "Security Systems",
    description:
      "Advanced security installations including CCTV, access control, and integrated alarm systems.",
  },
  {
    icon: Wrench,
    title: "Service & Maintenance",
    description:
      "Reliable ongoing maintenance programs to keep your facilities running at peak performance.",
  },
  {
    icon: House,
    title: "House Extensions",
    description:
      "Expert home expansion services that seamlessly blend with your existing architecture and design.",
  },
];

export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="bg-muted/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-medium tracking-wider text-amber uppercase">
            What We Offer
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Our Professional Services
          </h2>
          <p className="mt-4 text-muted-foreground">
            Comprehensive solutions tailored to meet the demands of modern
            construction and engineering projects.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group rounded-xl border border-border bg-background p-8 transition-all duration-300 hover:border-amber/30 hover:shadow-lg hover:shadow-amber/5"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-amber/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-amber">
                <service.icon
                  size={28}
                  className="text-amber transition-colors group-hover:text-white"
                  weight="duotone"
                />
              </div>
              <h3 className="mt-6 font-heading text-xl font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-amber transition-all group-hover:gap-3"
              >
                Learn More <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
