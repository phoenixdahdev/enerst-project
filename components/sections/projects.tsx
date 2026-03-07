"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";

const projects = [
  {
    title: "Meridian Office Complex",
    category: "Commercial",
    span: "lg:col-span-2",
    gradient: "from-navy via-navy-light to-[#3d5a80]",
  },
  {
    title: "Oakwood Residences",
    category: "Residential",
    span: "",
    gradient: "from-[#2d3436] via-[#4a6572] to-[#636e72]",
  },
  {
    title: "PowerGrid Substation",
    category: "Industrial",
    span: "",
    gradient: "from-navy-light via-[#1d3557] to-navy",
  },
  {
    title: "Harbor View Mall",
    category: "Commercial",
    span: "lg:col-span-2",
    gradient: "from-[#2c3e50] via-[#34495e] to-[#4a6fa5]",
  },
];

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-medium tracking-wider text-amber uppercase">
            Our Portfolio
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Recent Projects
          </h2>
          <p className="mt-4 text-muted-foreground">
            A selection of projects that showcase our commitment to quality
            craftsmanship and engineering precision.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl ${project.span}`}
            >
              <div
                className={`aspect-[4/3] bg-gradient-to-br ${project.gradient} ${project.span ? "lg:aspect-[2/1]" : ""}`}
              >
                {/* Grid texture */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")`,
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-navy/0 transition-colors duration-300 group-hover:bg-navy/40" />

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                  <div className="translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="inline-block rounded-full bg-amber/20 px-3 py-1 text-xs font-medium text-amber backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="mt-3 flex items-end justify-between">
                    <h3 className="font-heading text-xl font-bold text-white sm:text-2xl">
                      {project.title}
                    </h3>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber/0 transition-all duration-300 group-hover:bg-amber">
                      <ArrowUpRight
                        size={20}
                        className="text-white/0 transition-colors group-hover:text-white"
                        weight="bold"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
