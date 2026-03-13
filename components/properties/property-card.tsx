"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { MapPin, Bed, Bathtub, Ruler } from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";
import { ShineBorder } from "@/components/ui/shine-border";
import type { Property } from "@/lib/types/property";
import { formatPrice } from "@/lib/data/properties";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:border-amber/30 hover:shadow-lg hover:shadow-amber/5"
    >
      {property.isFeatured && (
        <ShineBorder
          shineColor={["#E8A838", "#D4952E"]}
          borderWidth={1.5}
          duration={10}
        />
      )}

      <Link href={`/properties/${property.slug}`} className="block">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={property.images[0].src}
            alt={property.images[0].alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Badges */}
          <div className="absolute left-3 top-3 flex gap-2">
            <Badge className="bg-amber text-navy font-semibold border-0 text-[11px]">
              {property.listingType === "rent" ? "For Rent" : "For Sale"}
            </Badge>
            <Badge
              variant="secondary"
              className="bg-navy/80 text-white border-0 backdrop-blur-sm text-[11px] capitalize"
            >
              {property.type}
            </Badge>
          </div>

          {/* Price */}
          <div className="absolute bottom-3 right-3">
            <span className="rounded-lg bg-navy/80 px-3 py-1.5 font-heading text-sm font-bold text-white backdrop-blur-sm">
              {formatPrice(property.price)}
            </span>
          </div>

          {/* Status dot */}
          {property.status === "available" && (
            <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-navy/70 px-2 py-1 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] font-medium text-white/80">
                Available
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-heading text-lg font-bold text-foreground line-clamp-1">
            {property.title}
          </h3>

          <div className="mt-2 flex items-center gap-1.5 text-muted-foreground">
            <MapPin size={14} weight="fill" className="shrink-0 text-amber" />
            <span className="text-xs line-clamp-1">
              {property.location.area}, {property.location.city}
            </span>
          </div>

          {/* Features */}
          {property.features.bedrooms > 0 && (
            <div className="mt-4 flex items-center gap-4 border-t border-border pt-4">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Bed size={16} weight="duotone" />
                <span className="text-xs font-medium">
                  {property.features.bedrooms} Bed
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Bathtub size={16} weight="duotone" />
                <span className="text-xs font-medium">
                  {property.features.bathrooms} Bath
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Ruler size={16} weight="duotone" />
                <span className="text-xs font-medium">
                  {property.features.sqft.toLocaleString()} sqft
                </span>
              </div>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
