import { PropertyCard } from "./property-card";
import type { Property } from "@/lib/types/property";

export function RelatedProperties({
  current,
  all,
}: {
  current: Property;
  all: Property[];
}) {
  const related = all
    .filter(
      (p) =>
        p.id !== current.id &&
        (p.type === current.type ||
          p.location.city === current.location.city)
    )
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="bg-muted/30 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-px w-10 bg-amber" />
          <span className="text-sm font-semibold tracking-widest text-amber uppercase">
            Similar
          </span>
        </div>
        <h2 className="mt-4 font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
          Similar Properties
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
