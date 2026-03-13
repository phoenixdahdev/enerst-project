import { MapPin, Bed, Bathtub, Ruler, Car } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";
import type { Property } from "@/lib/types/property";
import { formatPrice } from "@/lib/data/properties";

const featureIcons = [
  { key: "bedrooms" as const, icon: Bed, label: "Bedrooms" },
  { key: "bathrooms" as const, icon: Bathtub, label: "Bathrooms" },
  { key: "sqft" as const, icon: Ruler, label: "Sq Ft" },
  { key: "parkingSpaces" as const, icon: Car, label: "Parking" },
];

export function PropertyDetails({ property }: { property: Property }) {
  return (
    <div className="mt-8">
      {/* Badges */}
      <div className="flex flex-wrap items-center gap-2">
        <Badge className="bg-amber text-navy border-0 font-semibold">
          {property.listingType === "rent" ? "For Rent" : "For Sale"}
        </Badge>
        <Badge
          variant="outline"
          className="capitalize"
        >
          {property.type}
        </Badge>
        {property.status === "available" && (
          <Badge variant="outline" className="border-emerald-500/30 text-emerald-600">
            Available
          </Badge>
        )}
      </div>

      {/* Title & price */}
      <h1 className="mt-4 font-heading text-2xl font-extrabold text-foreground sm:text-3xl lg:text-4xl">
        {property.title}
      </h1>

      <div className="mt-3 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <MapPin size={16} weight="fill" className="text-amber" />
          <span className="text-sm">
            {property.location.area}, {property.location.city},{" "}
            {property.location.state}
          </span>
        </div>
      </div>

      <p className="mt-4 font-heading text-3xl font-extrabold text-amber">
        {formatPrice(property.price)}
      </p>

      {/* Feature grid */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {featureIcons.map(({ key, icon: Icon, label }) => {
          const value = property.features[key];
          if (!value) return null;
          return (
            <div
              key={key}
              className="flex items-center gap-3 rounded-xl border border-border bg-muted/40 px-4 py-3"
            >
              <Icon size={22} weight="duotone" className="shrink-0 text-amber" />
              <div>
                <p className="font-heading text-lg font-bold text-foreground">
                  {key === "sqft" ? value.toLocaleString() : value}
                </p>
                <p className="text-[11px] text-muted-foreground">{label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Description */}
      <div className="mt-8">
        <h2 className="font-heading text-lg font-bold text-foreground">
          Description
        </h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          {property.longDescription}
        </p>
      </div>
    </div>
  );
}
