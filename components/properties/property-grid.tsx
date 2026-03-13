"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { HouseLine } from "@phosphor-icons/react";
import { PropertyCard } from "./property-card";
import { PropertyFilter } from "./property-filter";
import { getFilteredProperties } from "@/lib/data/properties";
import type { Property, PropertyFilterState } from "@/lib/types/property";

export function PropertyGrid({
  properties,
}: {
  properties: Property[];
}) {
  const [filters, setFilters] = useState<PropertyFilterState>({
    search: "",
    type: "all",
    listingType: "all",
    location: "all",
    bedrooms: 0,
    priceRange: [0, Infinity],
    sortBy: "featured",
  });

  const filtered = getFilteredProperties(filters);

  return (
    <section className="bg-muted/30 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PropertyFilter
          filters={filters}
          onChange={setFilters}
          resultCount={filtered.length}
          totalCount={properties.length}
        />

        {filtered.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="mt-16 flex flex-col items-center justify-center py-16 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
              <HouseLine size={32} className="text-muted-foreground" weight="duotone" />
            </div>
            <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
              No properties found
            </h3>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Try adjusting your filters or search terms to find what you&apos;re
              looking for.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
