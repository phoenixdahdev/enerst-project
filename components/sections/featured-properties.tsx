"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { PropertyCard } from "@/components/properties/property-card";
import { Button } from "@/components/ui/button";
import { getFeaturedProperties } from "@/lib/data/properties";

const featured = getFeaturedProperties().slice(0, 3);

export function FeaturedProperties() {
  if (featured.length === 0) return null;

  return (
    <section id="properties" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-px w-10 bg-amber" />
          <span className="text-sm font-semibold tracking-widest text-amber uppercase">
            Properties
          </span>
        </div>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-heading text-2xl font-extrabold text-foreground sm:text-3xl lg:text-4xl">
            Featured Properties
          </h2>
          <Button variant="outline" className="gap-2 self-start" asChild>
            <Link href="/properties">
              View All Properties
              <ArrowRight size={16} weight="bold" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
