"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Buildings,
  Users,
  Handshake,
  Star,
} from "@phosphor-icons/react";

const stats = [
  { icon: Buildings, value: "3,956", label: "Projects Completed" },
  { icon: Users, value: "851", label: "Expert Workers" },
  { icon: Handshake, value: "265", label: "Business Partners" },
  { icon: Star, value: "854+", label: "Happy Customers" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-navy"
    >
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='white'/%3E%3C/svg%3E")`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light/30 to-navy" />
      <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-amber/[0.07] blur-[120px]" />
      <div className="absolute -left-32 bottom-1/4 h-80 w-80 rounded-full bg-amber/[0.04] blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 inline-block rounded-full bg-amber/10 px-4 py-2 text-sm font-medium text-amber"
        >
          Construction & Engineering Excellence
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl font-heading text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-7xl"
        >
          Building with{" "}
          <span className="text-amber">Precision</span>,<br />
          Driven by <span className="text-amber">Passion</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/50"
        >
          Comprehensive construction and engineering services — from site
          development to structural design. We deliver projects that stand the
          test of time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button variant="accent" size="lg" className="gap-2">
            Start Your Project <ArrowRight size={18} weight="bold" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:bg-white/10 hover:text-white"
          >
            Explore Services
          </Button>
        </motion.div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-white/10 bg-white/[0.03] backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber/10">
                <stat.icon size={24} className="text-amber" weight="duotone" />
              </div>
              <div>
                <p className="font-heading text-2xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-xs text-white/40">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
