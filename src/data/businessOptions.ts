export interface BusinessTypeItem {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  defaultRequirements: string[];
}

export const BUSINESS_TYPES: BusinessTypeItem[] = [
  {
    id: 'clinic',
    name: 'Clinic / Healthcare',
    icon: 'Stethoscope',
    tagline: 'Clinics, diagnostic centres, dental practices, nursing homes',
    defaultRequirements: [
      'Reliable Internet',
      'Business Mobile Connections',
      'Cloud Storage',
      'Business Email',
      'Cybersecurity',
    ],
  },
  {
    id: 'retail',
    name: 'Retail Store',
    icon: 'Store',
    tagline: 'Kirana, apparel, electronics, supermarket, specialty shops',
    defaultRequirements: [
      'Reliable Internet',
      'POS / Payment Connectivity',
      'Customer Communication',
      'Business Mobile Connections',
    ],
  },
  {
    id: 'restaurant',
    name: 'Restaurant / Café',
    icon: 'UtensilsCrossed',
    tagline: 'Dine-in, quick-service, bakery, café, cloud kitchen',
    defaultRequirements: [
      'Reliable Internet',
      'POS / Payment Connectivity',
      'CCTV Connectivity',
      'Business Mobile Connections',
      'Backup Internet / Failover',
    ],
  },
  {
    id: 'office',
    name: 'CA / Professional Office',
    icon: 'Briefcase',
    tagline: 'Chartered accountants, legal firms, consultants, agencies',
    defaultRequirements: [
      'Reliable Internet',
      'Business Email',
      'Cloud Storage',
      'Cybersecurity',
      'Business Mobile Connections',
    ],
  },
  {
    id: 'coaching',
    name: 'Coaching / Education',
    icon: 'GraduationCap',
    tagline: 'Tuition centers, test-prep institutes, vocational training',
    defaultRequirements: [
      'Reliable Internet',
      'Business Email',
      'Customer Communication',
      'Cloud Storage',
    ],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: 'Factory',
    tagline: 'SME factories, auto parts, textile mills, processing units',
    defaultRequirements: [
      'Reliable Internet',
      'Backup Internet / Failover',
      'Business Mobile Connections',
      'Cybersecurity',
      'CCTV Connectivity',
    ],
  },
  {
    id: 'multisite',
    name: 'Multi-location Business',
    icon: 'Building2',
    tagline: 'Retail chains, pharmacy branches, multi-city sales offices',
    defaultRequirements: [
      'Multi-Location Management',
      'Reliable Internet',
      'Backup Internet / Failover',
      'CCTV Connectivity',
      'Business Mobile Connections',
    ],
  },
  {
    id: 'other',
    name: 'Other',
    icon: 'Edit3',
    tagline: 'Tell us about your specialized business model',
    defaultRequirements: ['Reliable Internet', 'Business Email'],
  },
];

export const EMPLOYEE_TIERS = [
  {
    label: 'Just me / 1–2 employees',
    value: '1-2',
    count: 2,
    badge: 'Micro Enterprise',
    description: 'Proprietor, freelancer or duo team',
  },
  {
    label: '3–10 employees',
    value: '3-10',
    count: 8,
    badge: 'Small Business',
    description: 'Growing team with dedicated staff',
    popular: true,
  },
  {
    label: '11–50 employees',
    value: '11-50',
    count: 25,
    badge: 'Midsize Enterprise',
    description: 'Multi-department established team',
  },
  {
    label: '50+ employees',
    value: '50+',
    count: 75,
    badge: 'Scaleup',
    description: 'High volume organization',
  },
];

export const LOCATION_OPTIONS = [
  {
    label: '1 location',
    value: '1',
    count: 1,
    tag: 'Single Premise',
    description: 'Operations run from a single store, clinic or office',
  },
  {
    label: '2–5 locations',
    value: '2-5',
    count: 3,
    tag: 'Expanding Chain',
    description: 'Branches in the same city or neighboring hubs',
  },
  {
    label: '5+ locations',
    value: '5+',
    count: 8,
    tag: 'Distributed Network',
    description: 'Regional or nationwide multi-store network',
  },
];

export const CURRENT_SETUP_OPTIONS = [
  {
    id: 'Home Broadband',
    label: 'Home Broadband',
    icon: 'Home',
    risk: 'Residential SLA: Lacks static IP, symmetric speeds & business priority',
  },
  {
    id: 'Business Broadband',
    label: 'Business Broadband',
    icon: 'Building',
    risk: 'Existing commercial connection in place',
  },
  {
    id: 'Mobile Hotspot',
    label: 'Mobile Hotspot',
    icon: 'WifiOff',
    risk: 'High risk: Battery drain, tethering limits & signal dropouts',
  },
  {
    id: 'Personal Mobile SIMs',
    label: 'Personal Mobile SIMs',
    icon: 'Smartphone',
    risk: 'Fragmented expense claims, no CUG calling & employee SIM churn',
  },
  {
    id: 'Business SIMs',
    label: 'Business SIMs',
    icon: 'CheckCircle2',
    risk: 'Existing enterprise CUG mobile plans',
  },
  {
    id: 'Multiple Internet Providers',
    label: 'Multiple Internet Providers',
    icon: 'Network',
    risk: 'Multiple vendors, high billing overhead without automatic failover',
  },
  {
    id: 'No Dedicated Connection',
    label: 'No Dedicated Connection',
    icon: 'AlertCircle',
    risk: 'Severe bottleneck for modern digital operations & digital payments',
  },
];

export interface RequirementOption {
  id: string;
  name: string;
  icon: string;
  category: string;
  description: string;
  relevance: string;
}

export const REQUIREMENTS_OPTIONS: RequirementOption[] = [
  {
    id: 'Reliable Internet',
    name: 'Reliable Internet',
    icon: 'Globe',
    category: 'Connectivity',
    description: 'Reliable connectivity for employees and daily operations.',
    relevance: 'Zero buffering for billing, cloud software, and daily operations',
  },
  {
    id: 'Business Mobile Connections',
    name: 'Business Mobile Connections',
    icon: 'Smartphone',
    category: 'Mobile',
    description: 'Dedicated mobile connections for employees.',
    relevance: 'Free team-to-team calls and unified corporate billing',
  },
  {
    id: 'Customer Communication',
    name: 'Customer Communication',
    icon: 'MessageSquare',
    category: 'Engagement',
    description: 'WhatsApp, SMS, and customer messaging.',
    relevance: 'Automated booking updates, green tick WhatsApp & marketing',
  },
  {
    id: 'Business Email',
    name: 'Business Email',
    icon: 'Mail',
    category: 'Cloud',
    description: 'Professional email for your organization.',
    relevance: 'Trust-building custom domain (name@yourbusiness.com)',
  },
  {
    id: 'Cloud Storage',
    name: 'Cloud Storage',
    icon: 'Cloud',
    category: 'Cloud',
    description: 'Secure storage and collaboration tools.',
    relevance: 'Safe preservation of client files, invoices & records',
  },
  {
    id: 'Cybersecurity',
    name: 'Cybersecurity',
    icon: 'ShieldCheck',
    category: 'Security',
    description: 'Protection for your business devices and data.',
    relevance: 'Defense against ransomware, phishing & data leaks',
  },
  {
    id: 'CCTV Connectivity',
    name: 'CCTV Connectivity',
    icon: 'Video',
    category: 'Operations',
    description: 'Reliable connectivity for surveillance systems.',
    relevance: 'High upload bandwidth for 24/7 security camera feeds',
  },
  {
    id: 'POS / Payment Connectivity',
    name: 'POS / Payment Connectivity',
    icon: 'CreditCard',
    category: 'Operations',
    description: 'Reliable connectivity for payments and transactions.',
    relevance: 'Sub-second card swipe processing with zero dropouts',
  },
  {
    id: 'Multi-Location Management',
    name: 'Multi-Location Management',
    icon: 'Building2',
    category: 'Operations',
    description: 'Centralized management across business locations.',
    relevance: 'Unified dashboard, centralized billing, and private branch mesh',
  },
  {
    id: 'Backup Internet / Failover',
    name: 'Backup Internet / Failover',
    icon: 'RefreshCw',
    category: 'Connectivity',
    description: 'Secondary internet to reduce downtime.',
    relevance: 'Instant automatic switchover if primary fiber ever cuts',
  },
];
