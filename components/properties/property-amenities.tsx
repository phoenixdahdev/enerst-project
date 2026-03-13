"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CheckCircle } from "@phosphor-icons/react";

export function PropertyAmenities({ amenities }: { amenities: string[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mt-10">
      <h2 className="font-heading text-lg font-bold text-foreground">
        Amenities & Features
      </h2>
      <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {amenities.map((amenity, i) => (
          <motion.div
            key={amenity}
            initial={{ opacity: 0, x: 15 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="flex items-center gap-3 rounded-lg bg-muted/60 px-4 py-3"
          >
            <CheckCircle
              size={18}
              className="shrink-0 text-amber"
              weight="fill"
            />
            <span className="text-sm text-foreground">{amenity}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
