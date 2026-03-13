"use client";

import { MagnifyingGlass, X } from "@phosphor-icons/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import type {
  PropertyFilterState,
  PropertyType,
  ListingType,
} from "@/lib/types/property";
import { getLocations, getPropertyTypes } from "@/lib/data/properties";

interface PropertyFilterProps {
  filters: PropertyFilterState;
  onChange: (filters: PropertyFilterState) => void;
  resultCount: number;
  totalCount: number;
}

export function PropertyFilter({
  filters,
  onChange,
  resultCount,
  totalCount,
}: PropertyFilterProps) {
  const locations = getLocations();
  const types = getPropertyTypes();

  const update = (partial: Partial<PropertyFilterState>) =>
    onChange({ ...filters, ...partial });

  const hasActiveFilters =
    filters.search ||
    filters.type !== "all" ||
    filters.listingType !== "all" ||
    filters.location !== "all" ||
    filters.bedrooms > 0;

  const clearAll = () =>
    onChange({
      search: "",
      type: "all",
      listingType: "all",
      location: "all",
      bedrooms: 0,
      priceRange: [0, Infinity],
      sortBy: "featured",
    });

  return (
    <div className="rounded-xl border border-border bg-background p-4 shadow-sm sm:p-6">
      {/* Search */}
      <div className="relative">
        <MagnifyingGlass
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        <input
          type="text"
          placeholder="Search by name, location..."
          value={filters.search}
          onChange={(e) => update({ search: e.target.value })}
          className="h-11 w-full rounded-lg border border-border bg-muted/30 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-amber focus:ring-1 focus:ring-amber/50"
        />
      </div>

      {/* Filter row */}
      <div className="mt-4 flex flex-wrap gap-3">
        <Select
          value={filters.listingType}
          onValueChange={(v) => update({ listingType: v as ListingType | "all" })}
        >
          <SelectTrigger className="h-9 w-auto min-w-[130px] text-xs">
            <SelectValue placeholder="Listing Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Listings</SelectItem>
            <SelectItem value="rent">For Rent</SelectItem>
            <SelectItem value="sale">For Sale</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={filters.type}
          onValueChange={(v) => update({ type: v as PropertyType | "all" })}
        >
          <SelectTrigger className="h-9 w-auto min-w-[130px] text-xs">
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            {types.map((t) => (
              <SelectItem key={t} value={t} className="capitalize">
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={filters.location}
          onValueChange={(v) => update({ location: v })}
        >
          <SelectTrigger className="h-9 w-auto min-w-[130px] text-xs">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Locations</SelectItem>
            {locations.map((loc) => (
              <SelectItem key={loc} value={loc}>
                {loc}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={String(filters.bedrooms)}
          onValueChange={(v) => update({ bedrooms: Number(v) })}
        >
          <SelectTrigger className="h-9 w-auto min-w-[120px] text-xs">
            <SelectValue placeholder="Bedrooms" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">Any Beds</SelectItem>
            <SelectItem value="1">1+ Bed</SelectItem>
            <SelectItem value="2">2+ Beds</SelectItem>
            <SelectItem value="3">3+ Beds</SelectItem>
            <SelectItem value="4">4+ Beds</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={filters.sortBy}
          onValueChange={(v) =>
            update({ sortBy: v as PropertyFilterState["sortBy"] })
          }
        >
          <SelectTrigger className="h-9 w-auto min-w-[140px] text-xs">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-asc">Price: Low → High</SelectItem>
            <SelectItem value="price-desc">Price: High → Low</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
          </SelectContent>
        </Select>

        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAll}
            className="gap-1.5 text-xs text-muted-foreground"
          >
            <X size={14} />
            Clear
          </Button>
        )}
      </div>

      {/* Result count */}
      <p className="mt-4 text-xs text-muted-foreground">
        Showing{" "}
        <span className="font-semibold text-foreground">{resultCount}</span> of{" "}
        {totalCount} properties
      </p>
    </div>
  );
}
