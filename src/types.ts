export interface SolarSystemCategory {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  bestFor: string;
  efficiency: string;
  roiPeriod: string;
  gridDependency: string;
  features: string[];
  keySpecs: { label: string; value: string }[];
  diagramType: 'on-grid' | 'hybrid' | 'off-grid';
  iconName: string;
}

export interface SectorCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  targetScale: string;
  iconName: string;
  keyBenefits: string[];
  image: string;
}

export interface AuthorizedBrand {
  name: string;
  tier: 1 | 2;
  tagline: string;
  category: string;
  warranty: string;
  description: string;
  badgeText: string;
  verifiedDealer: boolean;
  logoText?: string;
  accentColor: string;
}

export interface RecentEventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  category: string;
  description: string;
  image: string;
}

export interface ProductItem {
  id: string;
  brand: 'NitroX' | 'Inverex' | 'Phoenix' | 'Aston Energy' | 'CHINT';
  name: string;
  category: string;
  tagline: string;
  specs: { label: string; value: string }[];
  badge: string;
  image: string;
  isSpecialHighlight?: boolean;
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'industrial' | 'residential';
  clientType: 'Industrial' | 'Residential' | 'Commercial' | 'BESS';
  capacity: string;
  bessCapacity?: string;
  location: string;
  year: string;
  description: string;
  panelsUsed: string;
  inverterUsed: string;
  storageUsed?: string;
  image: string;
  annualSavingsPKR: string;
  co2OffsetTons: string;
}

export interface VideoReel {
  id: string;
  title: string;
  duration: string;
  views: string;
  tag: string;
  category: string;
  thumbnail: string;
  videoUrl?: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  designation: string;
  companyOrCity: string;
  systemType: string;
  rating: number;
  review: string;
  date: string;
  verified: boolean;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email?: string;
  city: string;
  propertyType: 'Residential' | 'Commercial' | 'Industrial' | 'Agricultural';
  monthlyBillPKR: number;
  systemInterest: 'Hybrid' | 'On-Grid' | 'Off-Grid / BESS';
  roofAreaSqFt?: number;
  notes?: string;
}
