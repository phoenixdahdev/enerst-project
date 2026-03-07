"use client";

import { motion } from "motion/react";
import { ArrowRight, Play } from "@phosphor-icons/react";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { TextAnimate } from "@/components/ui/text-animate";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { cn } from "@/lib/utils";

const stats = [
  { value: 3956, suffix: "", label: "Projects Completed" },
  { value: 851, suffix: "", label: "Expert Workers" },
  { value: 265, suffix: "", label: "Business Partners" },
  { value: 854, suffix: "+", label: "Happy Customers" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-navy"
    >
      {/* Animated grid background */}
      <AnimatedGridPattern
        numSquares={40}
        maxOpacity={0.08}
        duration={5}
        repeatDelay={1}
        className={cn(
          "fill-amber/30 stroke-amber/10",
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        )}
      />

      {/* Gradient overlays */}
      <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-amber/[0.06] blur-[150px]" />
      <div className="absolute -left-32 bottom-1/3 h-80 w-80 rounded-full bg-amber/[0.03] blur-[100px]" />

      {/* Amber diagonal accent */}
      <div className="absolute -right-40 top-0 h-full w-[55%] skew-x-[-6deg] bg-gradient-to-b from-amber/[0.04] to-transparent max-lg:hidden" />

      {/* Main content */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-4 pt-28 pb-32 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* Left — text */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber/20 bg-amber/[0.08] px-4 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
            </span>
            <AnimatedShinyText className="text-xs font-semibold text-amber sm:text-sm">
              Building Since 2017
            </AnimatedShinyText>
          </motion.div>

          <TextAnimate
            as="h1"
            by="word"
            animation="blurInUp"
            duration={1.2}
            className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-white"
          >
            We Build What Others Only Imagine
          </TextAnimate>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-white/50 sm:text-lg"
          >
            Precision-engineered construction services from foundation to
            finish. Commercial, residential, and industrial — delivered on time,
            every time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <InteractiveHoverButton className="border-amber bg-amber text-navy hover:bg-amber-dark">
              Start Your Project
            </InteractiveHoverButton>

            <button className="group flex items-center gap-3 text-sm font-medium text-white/60 transition-colors hover:text-amber">
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
          transition={{ duration: 1, delay: 0.4 }}
          className="relative hidden h-[520px] lg:block"
        >
          {/* Back layer */}
          <div className="absolute right-0 top-8 h-[420px] w-[360px] rotate-3 rounded-3xl bg-gradient-to-br from-navy-light to-[#1d3557] shadow-2xl" />

          {/* Amber layer */}
          <div className="absolute right-10 top-20 h-[380px] w-[320px] -rotate-2 rounded-3xl bg-gradient-to-br from-amber to-amber-dark shadow-xl" />

          {/* Front card */}
          <div className="absolute right-5 top-14 h-[400px] w-[340px] overflow-hidden rounded-3xl border border-white/10 bg-navy/90 shadow-2xl backdrop-blur-sm">
            <AnimatedGridPattern
              numSquares={15}
              maxOpacity={0.06}
              duration={4}
              className="fill-white/20 stroke-white/5"
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
                  transition={{ duration: 1.5, delay: 1.2 }}
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

      {/* Stats strip with NumberTicker */}
      <div className="relative z-10 border-t border-white/[0.06] bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/[0.06] px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className="px-4 py-7 lg:px-6">
              <p className="flex items-baseline gap-0.5 font-heading text-2xl font-bold text-white sm:text-3xl">
                <NumberTicker
                  value={stat.value}
                  delay={0.8 + i * 0.15}
                  className="text-white"
                />
                {stat.suffix && (
                  <span className="text-amber">{stat.suffix}</span>
                )}
              </p>
              <p className="mt-1 text-[11px] text-white/35 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
