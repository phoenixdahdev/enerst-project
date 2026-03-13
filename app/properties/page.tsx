import type { Metadata } from "next";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { PropertiesHero } from "@/components/properties/properties-hero";
import { PropertyGrid } from "@/components/properties/property-grid";
import { properties } from "@/lib/data/properties";

export const metadata: Metadata = {
  title: "Properties | EPVEOT",
  description:
    "Browse available properties for rent and sale across Anambra state. Apartments, houses, duplexes, land, and commercial spaces.",
};

export default function PropertiesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PropertiesHero />
        <PropertyGrid properties={properties} />
      </main>
      <Footer />
    </>
  );
}
