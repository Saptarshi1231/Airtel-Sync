export type ProductCategory =
  | 'Connectivity'
  | 'Business Mobile'
  | 'Customer Communication'
  | 'Cloud'
  | 'Security'
  | 'Operations';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  features?: string[];
  monthlyPrice: number;
  setupFee: number;
  recommendedFor: string[];
  optional: boolean;
  icon: string;
  badge?: string;
  popular?: boolean;
}

export type BusinessTypeOption =
  | 'Retail Store'
  | 'Clinic / Healthcare'
  | 'Restaurant / Café'
  | 'Coaching / Education'
  | 'CA / Professional Office'
  | 'Manufacturing'
  | 'Multi-location Business'
  | 'Other';

export interface BusinessProfile {
  businessName: string;
  businessType: BusinessTypeOption | string;
  customBusinessType?: string;
  employeeTier: string; // 'Just me / 1–2 employees' | '3–10 employees' | '11–50 employees' | '50+ employees'
  employeeCount: number; // e.g. 8
  locationsTier: string; // '1 location' | '2–5 locations' | '5+ locations'
  locationsCount: number; // e.g. 1
  currentSetup: string[]; // e.g. ['Home Broadband', 'Personal Mobile SIMs']
  requirements: string[]; // e.g. ['Reliable Internet', 'Business Mobile Connections', ...]
  city?: string;
}

export interface RequirementMapping {
  requirement: string;
  solution: string;
  reason: string;
}

export interface RecommendationResult {
  bundleName: string;
  matchScore: number;
  badgeText: string;
  recommendedProducts: Product[];
  availableAddOns: Product[];
  mappings: RequirementMapping[];
  naturalLanguageExplanation: string;
  currentSetupGaps: string[];
}

export type AppScreen =
  | 'landing'
  | 'login'
  | 'welcome'
  | 'discovery-type'
  | 'discovery-size'
  | 'discovery-locations'
  | 'discovery-setup'
  | 'requirements'
  | 'ai-analysis'
  | 'profile-summary'
  | 'recommendation'
  | 'customize'
  | 'quote'
  | 'dashboard';

export interface UserAuth {
  isAuthenticated: boolean;
  name: string;
  email: string;
  companyName: string;
}

export interface OrderConfirmation {
  orderId: string;
  date: string;
  bundleName: string;
  monthlyTotal: number;
  setupTotal: number;
  itemCount: number;
  estimatedDeliveryHours: number;
}
