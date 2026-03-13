export type PropertyType =
  | "apartment"
  | "house"
  | "duplex"
  | "flat"
  | "land"
  | "shop";

export type ListingType = "rent" | "sale";

export type PropertyStatus = "available" | "rented" | "sold" | "coming-soon";

export interface PropertyImage {
  src: string;
  alt: string;
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  type: PropertyType;
  listingType: ListingType;
  status: PropertyStatus;
  price: {
    amount: number;
    period?: "month" | "year";
    currency: string;
  };
  location: {
    area: string;
    city: string;
    state: string;
  };
  features: {
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    parkingSpaces: number;
  };
  amenities: string[];
  images: PropertyImage[];
  isFeatured: boolean;
  dateAdded: string;
}

export interface PropertyFilterState {
  search: string;
  type: PropertyType | "all";
  listingType: ListingType | "all";
  location: string | "all";
  bedrooms: number | 0;
  priceRange: [number, number];
  sortBy: "featured" | "price-asc" | "price-desc" | "newest";
}
