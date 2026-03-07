"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Meridian Office Complex",
    category: "Commercial",
    className: "sm:col-span-2 sm:row-span-2",
    aspect: "aspect-square sm:aspect-auto sm:h-full",
    gradient: "from-[#1a2744] via-navy-light to-[#3d5a80]",
  },
  {
    title: "Oakwood Residences",
    category: "Residential",
    className: "",
    aspect: "aspect-[4/3]",
    gradient: "from-[#2d3436] to-[#636e72]",
  },
  {
    title: "PowerGrid Substation",
    category: "Industrial",
    className: "",
    aspect: "aspect-[4/3]",
    gradient: "from-[#1d3557] to-[#457b9d]",
  },
  {
    title: "Harbor View Mall",
    category: "Commercial",
    className: "",
    aspect: "aspect-[4/3]",
    gradient: "from-[#2c3e50] to-[#4a6fa5]",
  },
  {
    title: "Metro Rail Extension",
    category: "Infrastructure",
    className: "sm:col-span-2",
    aspect: "aspect-[4/3] sm:aspect-[2.5/1]",
    gradient: "from-navy via-[#243B55] to-[#141E30]",
  },
];

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-amber" />
              <span className="text-sm font-semibold tracking-widest text-amber uppercase">
                Our Portfolio
              </span>
            </div>
            <h2 className="mt-5 font-heading text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
              Recent Projects
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button variant="outline" className="gap-2">
              View All Projects <ArrowUpRight size={16} />
            </Button>
          </motion.div>
        </div>

        {/* Bento grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl ${project.className}`}
            >
              <div
                className={`${project.aspect} bg-gradient-to-br ${project.gradient} min-h-[200px]`}
              >
                {/* Texture */}
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")`,
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Darken on hover */}
                <div className="absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/50" />

                {/* Bottom gradient for text legibility */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Category badge — reveals on hover */}
                <div className="absolute left-4 top-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:left-6 sm:top-6">
                  <span className="rounded-full bg-amber px-3 py-1 text-xs font-bold text-navy">
                    {project.category}
                  </span>
                </div>

                {/* Title + arrow */}
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 sm:p-6">
                  <h3 className="font-heading text-lg font-bold text-white sm:text-xl">
                    {project.title}
                  </h3>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/0 transition-all duration-300 group-hover:bg-amber">
                    <ArrowUpRight
                      size={18}
                      className="text-white/0 transition-all group-hover:text-navy"
                      weight="bold"
                    />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
