import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { Breadcrumb } from "@/components/properties/breadcrumb";
import { PropertyGallery } from "@/components/properties/property-gallery";
import { PropertyDetails } from "@/components/properties/property-details";
import { PropertyAmenities } from "@/components/properties/property-amenities";
import { ContactOwner } from "@/components/properties/contact-owner";
import { RelatedProperties } from "@/components/properties/related-properties";
import {
  properties,
  getPropertyBySlug,
  formatPrice,
} from "@/lib/data/properties";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return { title: "Property Not Found | EPVEOT" };

  return {
    title: `${property.title} | EPVEOT Properties`,
    description: property.description,
    openGraph: {
      title: property.title,
      description: property.description,
      images: property.images[0]?.src ? [property.images[0].src] : [],
    },
  };
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  return (
    <>
      <Navbar />
      <main>
        {/* Hero area with breadcrumb */}
        <div className="bg-navy pt-28 pb-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb title={property.title} />
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Left: main content */}
            <div className="lg:col-span-2">
              <PropertyGallery images={property.images} />
              <PropertyDetails property={property} />
              {property.amenities.length > 0 && (
                <PropertyAmenities amenities={property.amenities} />
              )}
            </div>

            {/* Right: contact sidebar */}
            <div>
              <ContactOwner property={property} />
            </div>
          </div>
        </div>

        {/* Related properties */}
        <RelatedProperties current={property} all={properties} />
      </main>
      <Footer />
    </>
  );
}
