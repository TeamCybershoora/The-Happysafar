export type PackageDetails = {
  id: string;
  title: string;
  duration: string;
  priceTag?: string;
  image: string;
  itinerary: string[];
  summary: string;
  inclusions?: string[];
  exclusions?: string[];
  ctaLink?: string;
  whatsappLink?: string;
};

export type PackageSource = "curated" | "city";
