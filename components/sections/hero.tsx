"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Buildings,
  Users,
  Handshake,
  Star,
  Play,
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
      className="relative min-h-screen overflow-hidden bg-navy"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Amber diagonal accent */}
      <div className="absolute -right-40 top-0 h-full w-[55%] skew-x-[-6deg] bg-gradient-to-b from-amber/[0.06] to-transparent max-lg:hidden" />

      {/* Main content — two columns */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-4 pt-28 pb-32 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* Left — text */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3"
          >
            <div className="h-px w-10 bg-amber" />
            <span className="text-sm font-semibold tracking-widest text-amber uppercase">
              Since 2017
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-white"
          >
            We Build What
            <br />
            <span className="relative">
              Others Only
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M2 10C50 4 150 2 298 6"
                  stroke="#E8A838"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            <span className="text-amber">Imagine</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-white/50 sm:text-lg"
          >
            Precision-engineered construction services from foundation to
            finish. Commercial, residential, and industrial — delivered on time,
            every time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button variant="accent" size="lg" className="gap-2">
              Start Your Project <ArrowRight size={18} weight="bold" />
            </Button>
            <button className="group flex items-center gap-3 text-sm font-medium text-white/70 transition-colors hover:text-amber">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/20 transition-all group-hover:border-amber group-hover:bg-amber/10">
                <Play size={16} weight="fill" className="ml-0.5" />
              </span>
              Watch Showreel
            </button>
          </motion.div>
        </div>

        {/* Right — geometric composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative hidden h-[520px] lg:block"
        >
          {/* Back layer */}
          <div className="absolute right-0 top-8 h-[420px] w-[360px] rotate-3 rounded-3xl bg-gradient-to-br from-navy-light to-[#1d3557] shadow-2xl" />

          {/* Amber layer */}
          <div className="absolute right-10 top-20 h-[380px] w-[320px] -rotate-2 rounded-3xl bg-gradient-to-br from-amber to-amber-dark shadow-xl" />

          {/* Front card — project preview */}
          <div className="absolute right-5 top-14 h-[400px] w-[340px] overflow-hidden rounded-3xl border border-white/10 bg-navy/90 shadow-2xl backdrop-blur-sm">
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='white'/%3E%3C/svg%3E")`,
                backgroundSize: "20px 20px",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/80 to-transparent p-8">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <span className="text-xs text-white/50">Active Project</span>
              </div>
              <p className="mt-2 font-heading text-lg font-bold text-white">
                Harbor View Complex
              </p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="h-full rounded-full bg-amber"
                />
              </div>
              <p className="mt-1.5 text-xs text-white/40">75% Complete</p>
            </div>
          </div>

          {/* Floating satisfaction card */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-1/3 z-20 rounded-2xl border border-border bg-white px-5 py-4 shadow-xl"
          >
            <p className="font-heading text-3xl font-extrabold text-navy">
              98<span className="text-amber">%</span>
            </p>
            <p className="text-xs text-muted-foreground">
              Client Satisfaction
            </p>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.7,
            }}
            className="absolute -right-2 bottom-24 z-20 rounded-xl bg-amber px-4 py-2.5 shadow-lg"
          >
            <p className="font-heading text-xs font-bold text-navy">
              ISO 9001 Certified
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <div className="relative z-10 border-t border-white/[0.06] bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/[0.06] px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.12 }}
              className="flex items-center gap-4 py-7 px-4 lg:px-6"
            >
              <stat.icon
                size={22}
                className="shrink-0 text-amber"
                weight="duotone"
              />
              <div>
                <p className="font-heading text-xl font-bold text-white sm:text-2xl">
                  {stat.value}
                </p>
                <p className="text-[11px] text-white/35">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
