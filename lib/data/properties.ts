import type {
  Property,
  PropertyFilterState,
  PropertyType,
} from "@/lib/types/property";

export const properties: Property[] = [
  {
    id: "1",
    slug: "luxury-4bed-duplex-gra-awka",
    title: "Luxury 4-Bedroom Duplex",
    description:
      "Stunning duplex in the heart of GRA Awka with modern finishes, spacious rooms, and a private compound.",
    longDescription:
      "This exquisite 4-bedroom duplex sits on a generous plot in the prestigious GRA Awka neighborhood. The property features premium Italian tiles throughout, modern kitchen fittings with granite countertops, and spacious en-suite bedrooms. The master bedroom includes a walk-in closet and a private balcony overlooking the manicured garden. The compound is fully fenced with an electric gate, ample parking for 3 vehicles, and a dedicated boys' quarter. Water supply is ensured with a borehole and overhead tank system. This is luxury living at its finest in Anambra state.",
    type: "duplex",
    listingType: "sale",
    status: "available",
    price: { amount: 65000000, currency: "NGN" },
    location: { area: "GRA", city: "Awka", state: "Anambra" },
    features: { bedrooms: 4, bathrooms: 5, sqft: 3200, parkingSpaces: 3 },
    amenities: [
      "24/7 Power Supply",
      "Borehole Water",
      "Gated Compound",
      "Boys' Quarter",
      "CCTV Security",
      "Modern Kitchen",
      "Walk-in Closet",
      "Garden",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
        alt: "Luxury duplex exterior",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
        alt: "Duplex front view",
      },
      {
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
        alt: "Living room interior",
      },
      {
        src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
        alt: "Modern kitchen",
      },
    ],
    isFeatured: true,
    dateAdded: "2026-02-15",
  },
  {
    id: "2",
    slug: "2bed-apartment-fegge-onitsha",
    title: "2-Bedroom Apartment in Fegge",
    description:
      "Well-finished 2-bedroom apartment in a secure estate in Fegge, Onitsha. Perfect for young professionals.",
    longDescription:
      "A beautifully finished 2-bedroom apartment located in a secure, gated estate in the vibrant Fegge area of Onitsha. Each bedroom is en-suite with quality sanitary fittings. The open-plan living and dining area is flooded with natural light. The kitchen comes fitted with cabinets and a gas cooker point. The estate provides 24-hour security, a shared generator for power backup, and well-maintained common areas. Ideal for working professionals or small families looking for comfort and convenience in Onitsha's commercial hub.",
    type: "apartment",
    listingType: "rent",
    status: "available",
    price: { amount: 450000, period: "year", currency: "NGN" },
    location: { area: "Fegge", city: "Onitsha", state: "Anambra" },
    features: { bedrooms: 2, bathrooms: 2, sqft: 1100, parkingSpaces: 1 },
    amenities: [
      "Estate Security",
      "Backup Generator",
      "Fitted Kitchen",
      "Tiled Throughout",
      "Water Supply",
      "Parking Space",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
        alt: "Apartment living room",
      },
      {
        src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
        alt: "Apartment interior",
      },
      {
        src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
        alt: "Kitchen area",
      },
    ],
    isFeatured: false,
    dateAdded: "2026-03-01",
  },
  {
    id: "3",
    slug: "commercial-shop-main-market-onitsha",
    title: "Commercial Shop Space",
    description:
      "Prime commercial shop space at Main Market Onitsha. High foot traffic location perfect for retail business.",
    longDescription:
      "Strategically located commercial shop space in the bustling Main Market area of Onitsha — one of West Africa's largest markets. This ground-floor unit offers excellent visibility and foot traffic. The shop comes with a roll-up security shutter, tiled flooring, and electrical fittings ready for immediate occupation. Ceiling height allows for mezzanine installation. Shared restroom facilities are available within the complex. A rare opportunity to secure a prime retail spot in Onitsha's commercial nerve center.",
    type: "shop",
    listingType: "rent",
    status: "available",
    price: { amount: 800000, period: "year", currency: "NGN" },
    location: { area: "Main Market", city: "Onitsha", state: "Anambra" },
    features: { bedrooms: 0, bathrooms: 1, sqft: 450, parkingSpaces: 0 },
    amenities: [
      "Roll-up Shutter",
      "Electricity",
      "Tiled Floor",
      "High Ceiling",
      "Shared Restroom",
      "Security",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=800&q=80",
        alt: "Commercial shop exterior",
      },
      {
        src: "https://images.unsplash.com/photo-1582037928769-181f2644ecb7?w=800&q=80",
        alt: "Shop interior",
      },
    ],
    isFeatured: false,
    dateAdded: "2026-02-20",
  },
  {
    id: "4",
    slug: "3bed-bungalow-nnewi",
    title: "3-Bedroom Bungalow in Nnewi",
    description:
      "Newly built 3-bedroom bungalow with modern finishes in a quiet residential area of Nnewi.",
    longDescription:
      "A brand-new 3-bedroom bungalow in a serene residential neighborhood in Nnewi. The property features a spacious master bedroom with en-suite bathroom, two additional bedrooms sharing a well-appointed bathroom, a large living room, separate dining area, and a modern kitchen with ample storage. The compound includes a security gatehouse, perimeter fencing, and space for a small garden. All rooms have quality PVC windows and doors, POP ceiling, and premium floor tiles. The property is connected to the public water supply with a backup overhead tank.",
    type: "house",
    listingType: "sale",
    status: "available",
    price: { amount: 28000000, currency: "NGN" },
    location: { area: "Uruagu", city: "Nnewi", state: "Anambra" },
    features: { bedrooms: 3, bathrooms: 2, sqft: 1800, parkingSpaces: 2 },
    amenities: [
      "Newly Built",
      "Perimeter Fence",
      "Security Gate",
      "POP Ceiling",
      "Water Tank",
      "Spacious Compound",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
        alt: "Modern bungalow exterior",
      },
      {
        src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
        alt: "Bungalow living area",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
        alt: "Bedroom interior",
      },
    ],
    isFeatured: true,
    dateAdded: "2026-01-10",
  },
  {
    id: "5",
    slug: "1bed-flat-awka-town",
    title: "1-Bedroom Self-Contained Flat",
    description:
      "Affordable self-contained flat near Aroma Junction, Awka. Ideal for students and single professionals.",
    longDescription:
      "A compact and well-maintained 1-bedroom self-contained flat located just minutes from Aroma Junction in Awka. The unit features a bedroom with built-in wardrobe, a clean bathroom with shower, a small but functional kitchen with gas point, and a cozy living area. The building is in a quiet compound with reliable water supply and basic security. Perfect for UNIZIK students, corpers, or young professionals looking for affordable accommodation in Awka's central area.",
    type: "flat",
    listingType: "rent",
    status: "available",
    price: { amount: 200000, period: "year", currency: "NGN" },
    location: { area: "Aroma Junction", city: "Awka", state: "Anambra" },
    features: { bedrooms: 1, bathrooms: 1, sqft: 500, parkingSpaces: 0 },
    amenities: [
      "Built-in Wardrobe",
      "Water Supply",
      "Gas Point",
      "Tiled Floor",
      "Quiet Compound",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
        alt: "Flat living area",
      },
      {
        src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
        alt: "Bedroom with wardrobe",
      },
    ],
    isFeatured: false,
    dateAdded: "2026-03-05",
  },
  {
    id: "6",
    slug: "half-plot-land-ekwulobia",
    title: "Half Plot of Land in Ekwulobia",
    description:
      "Dry, well-located half plot of land with C of O in Ekwulobia. Ready for immediate development.",
    longDescription:
      "A prime half-plot of land (60x120 feet) available for sale in Ekwulobia, Aguata LGA, Anambra State. The land is dry, flat, and free from any encumbrances. It comes with a valid Certificate of Occupancy (C of O) for hassle-free ownership transfer. The plot is located on a tarred road with access to electricity and public water. Surrounding developments include residential buildings and a school. Ideal for building a family home, investment property, or small commercial development. Survey plan and all relevant documents are available for inspection.",
    type: "land",
    listingType: "sale",
    status: "available",
    price: { amount: 5500000, currency: "NGN" },
    location: { area: "Town Center", city: "Ekwulobia", state: "Anambra" },
    features: { bedrooms: 0, bathrooms: 0, sqft: 7200, parkingSpaces: 0 },
    amenities: [
      "C of O Available",
      "Tarred Road Access",
      "Flat Terrain",
      "Electricity Access",
      "Water Access",
      "Fenced",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
        alt: "Plot of land",
      },
      {
        src: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=800&q=80",
        alt: "Land survey view",
      },
    ],
    isFeatured: false,
    dateAdded: "2026-02-28",
  },
  {
    id: "7",
    slug: "5bed-mansion-ogidi",
    title: "5-Bedroom Mansion with Pool",
    description:
      "Executive 5-bedroom mansion in Ogidi with swimming pool, smart home features, and premium finishes throughout.",
    longDescription:
      "An exceptional 5-bedroom mansion set on a sprawling compound in the prestigious Ogidi area. This executive residence features a grand entrance foyer, expansive living and dining areas, a fully equipped modern kitchen with island, and five luxuriously appointed en-suite bedrooms. The master suite includes a jacuzzi bathroom, walk-in closet, and private terrace. The property boasts a swimming pool, landscaped gardens, an outdoor entertainment area, and a three-car garage. Smart home technology controls lighting, security, and climate throughout. Staff quarters and a fully equipped laundry room complete this extraordinary offering.",
    type: "duplex",
    listingType: "sale",
    status: "available",
    price: { amount: 120000000, currency: "NGN" },
    location: { area: "Nkwelle", city: "Ogidi", state: "Anambra" },
    features: { bedrooms: 5, bathrooms: 6, sqft: 5500, parkingSpaces: 4 },
    amenities: [
      "Swimming Pool",
      "Smart Home",
      "CCTV & Alarm",
      "Staff Quarters",
      "Landscaped Garden",
      "Backup Generator",
      "Borehole",
      "3-Car Garage",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
        alt: "Mansion exterior with pool",
      },
      {
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
        alt: "Grand living room",
      },
      {
        src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
        alt: "Modern kitchen",
      },
      {
        src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
        alt: "Master bedroom",
      },
    ],
    isFeatured: true,
    dateAdded: "2026-01-25",
  },
  {
    id: "8",
    slug: "3bed-apartment-ifite-awka",
    title: "3-Bedroom Apartment near UNIZIK",
    description:
      "Spacious 3-bedroom apartment in Ifite, Awka. Minutes from UNIZIK campus. Great for families.",
    longDescription:
      "A well-designed 3-bedroom apartment in the Ifite area of Awka, strategically located near Nnamdi Azikiwe University (UNIZIK). The apartment features three good-sized bedrooms (master en-suite), a shared family bathroom, an open-plan living/dining area, and a kitchen with fitted cabinets. The building has a secure compound with parking for two vehicles, constant water supply from a shared borehole, and reliable electricity with prepaid metering. The neighborhood is peaceful yet close to markets, schools, and hospitals. Perfect for families, university staff, or professionals working in Awka.",
    type: "apartment",
    listingType: "rent",
    status: "available",
    price: { amount: 600000, period: "year", currency: "NGN" },
    location: { area: "Ifite", city: "Awka", state: "Anambra" },
    features: { bedrooms: 3, bathrooms: 2, sqft: 1400, parkingSpaces: 2 },
    amenities: [
      "Borehole Water",
      "Prepaid Meter",
      "Fitted Kitchen",
      "Parking Space",
      "Secure Compound",
      "Near UNIZIK",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=80",
        alt: "Apartment exterior",
      },
      {
        src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
        alt: "Living room",
      },
      {
        src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
        alt: "Kitchen",
      },
    ],
    isFeatured: false,
    dateAdded: "2026-03-10",
  },
  {
    id: "9",
    slug: "mini-flat-nnewi-industrial",
    title: "Mini Flat near Nnewi Industrial Area",
    description:
      "Affordable mini flat close to Nnewi's industrial zone. Perfect for factory workers and traders.",
    longDescription:
      "A functional mini flat strategically positioned near Nnewi's thriving industrial area. The property includes a bedroom, living room, bathroom, kitchen, and a small store. It's ideal for traders, factory workers, or small business owners who need affordable accommodation close to Nnewi's manufacturing hub. The compound has a shared borehole and basic security. Public transport to the market and industrial areas is readily available from the property's doorstep.",
    type: "flat",
    listingType: "rent",
    status: "available",
    price: { amount: 180000, period: "year", currency: "NGN" },
    location: {
      area: "Industrial Layout",
      city: "Nnewi",
      state: "Anambra",
    },
    features: { bedrooms: 1, bathrooms: 1, sqft: 550, parkingSpaces: 0 },
    amenities: [
      "Shared Borehole",
      "Store Room",
      "Near Industrial Area",
      "Public Transport Access",
      "Affordable",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
        alt: "Mini flat interior",
      },
      {
        src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
        alt: "Living area",
      },
    ],
    isFeatured: false,
    dateAdded: "2026-03-08",
  },
  {
    id: "10",
    slug: "4bed-detached-house-awka",
    title: "4-Bedroom Detached House",
    description:
      "Beautiful detached house in a serene Awka estate. Fully furnished with all modern amenities.",
    longDescription:
      "An elegantly designed 4-bedroom fully detached house in one of Awka's most sought-after residential estates. The property features a spacious living room with chandelier, a formal dining area, a modern kitchen with granite countertops and stainless steel appliances, and four generously sized bedrooms — all en-suite. The master bedroom boasts a jacuzzi bath and walk-in closet. Additional features include a home office, laundry room, and a rooftop terrace with panoramic views. The estate offers 24/7 security, paved roads, street lighting, and a reliable central power supply with individual meters.",
    type: "house",
    listingType: "rent",
    status: "available",
    price: { amount: 2500000, period: "year", currency: "NGN" },
    location: { area: "Executive Estate", city: "Awka", state: "Anambra" },
    features: { bedrooms: 4, bathrooms: 4, sqft: 2800, parkingSpaces: 2 },
    amenities: [
      "Fully Furnished",
      "Estate Security",
      "Central Power",
      "Rooftop Terrace",
      "Home Office",
      "Jacuzzi Bath",
      "Chandelier Lighting",
      "Paved Roads",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
        alt: "Detached house exterior",
      },
      {
        src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
        alt: "Spacious living room",
      },
      {
        src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
        alt: "Master bedroom",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
        alt: "House rear view",
      },
    ],
    isFeatured: true,
    dateAdded: "2026-02-05",
  },
];

// --- Helper functions ---

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.isFeatured && p.status === "available");
}

export function getLocations(): string[] {
  const cities = properties.map((p) => p.location.city);
  return [...new Set(cities)].sort();
}

export function getPropertyTypes(): PropertyType[] {
  const types = properties.map((p) => p.type);
  return [...new Set(types)].sort() as PropertyType[];
}

export function getFilteredProperties(
  filters: PropertyFilterState
): Property[] {
  let result = [...properties];

  if (filters.search) {
    const q = filters.search.toLowerCase();
    result = result.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.location.city.toLowerCase().includes(q) ||
        p.location.area.toLowerCase().includes(q)
    );
  }

  if (filters.type !== "all") {
    result = result.filter((p) => p.type === filters.type);
  }

  if (filters.listingType !== "all") {
    result = result.filter((p) => p.listingType === filters.listingType);
  }

  if (filters.location !== "all") {
    result = result.filter((p) => p.location.city === filters.location);
  }

  if (filters.bedrooms > 0) {
    result = result.filter((p) => p.features.bedrooms >= filters.bedrooms);
  }

  if (filters.priceRange[0] > 0 || filters.priceRange[1] < Infinity) {
    result = result.filter(
      (p) =>
        p.price.amount >= filters.priceRange[0] &&
        p.price.amount <= filters.priceRange[1]
    );
  }

  switch (filters.sortBy) {
    case "price-asc":
      result.sort((a, b) => a.price.amount - b.price.amount);
      break;
    case "price-desc":
      result.sort((a, b) => b.price.amount - a.price.amount);
      break;
    case "newest":
      result.sort(
        (a, b) =>
          new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
      );
      break;
    case "featured":
      result.sort(
        (a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0)
      );
      break;
  }

  return result;
}

export function formatPrice(price: Property["price"]): string {
  const formatted = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: price.currency,
    maximumFractionDigits: 0,
  }).format(price.amount);

  if (price.period) {
    return `${formatted}/${price.period === "year" ? "yr" : "mo"}`;
  }
  return formatted;
}
