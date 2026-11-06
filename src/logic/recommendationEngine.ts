import { BusinessProfile, Product, RecommendationResult, RequirementMapping } from '../types';
import { MOCK_PRODUCTS } from '../data/products';

export function generateRecommendation(profile: BusinessProfile): RecommendationResult {
  const { businessType, employeeCount, locationsCount, currentSetup, requirements } = profile;

  let bundleName = 'Personalized Business Digital Bundle';
  let matchScore = 90;
  let badgeText = 'AI Optimized';
  const recommendedProductIds: string[] = [];
  const addOnProductIds: string[] = [];
  const mappings: RequirementMapping[] = [];

  const isClinic = businessType.toLowerCase().includes('clinic') || businessType.toLowerCase().includes('healthcare');
  const isRetail = businessType.toLowerCase().includes('retail');
  const isRestaurant = businessType.toLowerCase().includes('restaurant') || businessType.toLowerCase().includes('café');
  const isOffice = businessType.toLowerCase().includes('office') || businessType.toLowerCase().includes('ca');
  const isMultiLocation = locationsCount > 1 || businessType.toLowerCase().includes('multi-location');
  const isManufacturing = businessType.toLowerCase().includes('manufacturing');

  // Rules based on prompt specifications
  if (isClinic) {
    bundleName = 'Professional Clinic Digital Bundle';
    matchScore = 92;
    badgeText = '92% Match for Your Business';

    recommendedProductIds.push('bb-pro');
    recommendedProductIds.push(employeeCount <= 2 ? 'sim-single' : employeeCount <= 10 ? 'sim-pack-5' : 'sim-pack-10');
    recommendedProductIds.push('cloud-email');
    recommendedProductIds.push('cloud-storage-pro');
    recommendedProductIds.push('sec-basic');

    addOnProductIds.push('comm-whatsapp');
    addOnProductIds.push('ops-cctv');
    addOnProductIds.push('ops-failover');

    mappings.push(
      {
        requirement: 'Reliable Internet',
        solution: 'Business Broadband Pro',
        reason: 'Provides dedicated symmetric speed for diagnostic machines, tele-consultation, and EHR loading with 99.9% uptime SLA.',
      },
      {
        requirement: 'Employee Connectivity',
        solution: employeeCount <= 2 ? 'Business SIM' : employeeCount <= 10 ? '5 Business SIMs' : '10 Business SIMs',
        reason: 'Equips front-desk, duty doctors, and nursing staff with CUG calling and corporate pooled data.',
      },
      {
        requirement: 'Professional Operations',
        solution: 'Business Email',
        reason: 'Ensures custom clinic domain email addresses for official lab reports, patient prescriptions, and insurance claims.',
      },
      {
        requirement: 'Secure Business Data',
        solution: 'Cloud Storage Pro',
        reason: 'HIPAA & ISO-compliant encrypted storage keeping high-resolution scans, patient histories, and clinic accounts securely backed up.',
      },
      {
        requirement: 'Data Protection',
        solution: 'Basic Cybersecurity',
        reason: 'Real-time defense safeguarding consultation terminals and billing systems from malware, ransomware, and unauthorized intrusions.',
      }
    );
  } else if (isRetail) {
    bundleName = 'Smart Retail Connectivity Suite';
    matchScore = 94;
    badgeText = '94% Match for Your Business';

    recommendedProductIds.push('bb-pro');
    recommendedProductIds.push('ops-pos');
    recommendedProductIds.push(employeeCount <= 2 ? 'sim-single' : 'sim-pack-5');
    recommendedProductIds.push('comm-whatsapp');

    addOnProductIds.push('ops-cctv');
    addOnProductIds.push('ops-failover');
    addOnProductIds.push('sec-basic');

    mappings.push(
      {
        requirement: 'Reliable Internet',
        solution: 'Business Broadband Pro',
        reason: 'Reliable high-speed fiber prevents billing desk slowdowns during peak shopping hours.',
      },
      {
        requirement: 'Payment Reliability',
        solution: 'POS Connectivity',
        reason: 'Dedicated M2M SIM connection guarantees instant UPI and card swipe authorizations.',
      },
      {
        requirement: 'Staff Coordination',
        solution: 'Business SIMs Pack',
        reason: 'Enables store managers and delivery assistants to communicate with zero internal calling expenses.',
      },
      {
        requirement: 'Customer Messaging',
        solution: 'Business WhatsApp Solution',
        reason: 'Enables automated purchase receipts, order tracking, and promotional catalogs directly to customer WhatsApp.',
      }
    );
  } else if (isRestaurant) {
    bundleName = 'Connected Bistro & Hospitality Pack';
    matchScore = 91;
    badgeText = '91% Match for Your Business';

    recommendedProductIds.push('bb-pro');
    recommendedProductIds.push(employeeCount <= 2 ? 'sim-single' : 'sim-pack-5');
    recommendedProductIds.push('ops-pos');
    recommendedProductIds.push('ops-cctv');

    if (requirements.includes('Backup Internet / Failover') || requirements.includes('Reliable Internet')) {
      recommendedProductIds.push('ops-failover');
    } else {
      addOnProductIds.push('ops-failover');
    }

    addOnProductIds.push('comm-whatsapp');
    addOnProductIds.push('sec-basic');

    mappings.push(
      {
        requirement: 'High-Speed Broadband',
        solution: 'Business Broadband Pro',
        reason: 'Handles order aggregators (Zomato/Swiggy), guest Wi-Fi, and kitchen display terminals simultaneously.',
      },
      {
        requirement: 'Payment Resilience',
        solution: 'POS Connectivity',
        reason: 'Zero payment drops even during heavy weekend rushes and main line fiber disruptions.',
      },
      {
        requirement: 'Kitchen & Floor Surveillance',
        solution: 'CCTV Connectivity',
        reason: 'High upload bandwidth for live HD surveillance of food prep areas, cash counter, and inventory.',
      },
      {
        requirement: 'Staff Connectivity',
        solution: '5 Business SIMs Pack',
        reason: 'Connects floor captains, delivery staff, and procurement teams seamlessly.',
      }
    );
  } else if (isOffice) {
    bundleName = 'Professional Advisory Office Suite';
    matchScore = 95;
    badgeText = '95% Match for Your Business';

    recommendedProductIds.push('bb-pro');
    recommendedProductIds.push('cloud-email');
    recommendedProductIds.push('cloud-storage-pro');
    recommendedProductIds.push('sec-basic');
    recommendedProductIds.push(employeeCount <= 2 ? 'sim-single' : 'sim-pack-5');

    addOnProductIds.push('fiber-biz');
    addOnProductIds.push('comm-whatsapp');
    addOnProductIds.push('ops-failover');

    mappings.push(
      {
        requirement: 'Business Internet',
        solution: 'Business Broadband Pro',
        reason: 'Symmetric fiber ensures rapid GST filing, IT portal navigation, and corporate video conferences.',
      },
      {
        requirement: 'Client Trust & Email',
        solution: 'Business Email',
        reason: 'Custom domain professional communication reflecting security and advisory prestige.',
      },
      {
        requirement: 'Audit Trail Storage',
        solution: 'Cloud Storage Pro',
        reason: 'Multi-terabyte encrypted cloud drive with automated document versioning and audit access logs.',
      },
      {
        requirement: 'Data Protection',
        solution: 'Basic Cybersecurity',
        reason: 'Restricts malware infections, shields financial data, and secures sensitive client records.',
      }
    );
  } else if (isManufacturing) {
    bundleName = 'Smart Industrial & Plant Operations Bundle';
    matchScore = 93;
    badgeText = '93% Match for Your Business';

    recommendedProductIds.push('dedicated-internet');
    recommendedProductIds.push('ops-failover');
    recommendedProductIds.push('sim-pack-10');
    recommendedProductIds.push('sec-advanced');
    recommendedProductIds.push('ops-cctv');

    addOnProductIds.push('ops-multisite');
    addOnProductIds.push('cloud-storage-pro');

    mappings.push(
      {
        requirement: 'Dedicated Connectivity',
        solution: 'Dedicated Business Internet',
        reason: '1:1 leased line with guaranteed throughput for industrial ERP, SCADA sensors, and inventory sync.',
      },
      {
        requirement: 'Continuous Operations',
        solution: 'Internet Backup / Failover',
        reason: 'Automatic wireless cellular failover protecting supply chain tracking and dispatch operations.',
      },
      {
        requirement: 'Plant Security',
        solution: 'CCTV Connectivity',
        reason: 'High upload stream for wide perimeter security, machine monitoring, and safety auditing.',
      },
      {
        requirement: 'Shopfloor Fleet',
        solution: '10 Business SIMs Pack',
        reason: 'Equips supervisors, logistics drivers, and floor heads with corporate communication.',
      }
    );
  } else if (isMultiLocation) {
    bundleName = 'Enterprise Multi-Branch Unified Network';
    matchScore = 96;
    badgeText = '96% Match for Your Business';

    recommendedProductIds.push('ops-multisite');
    recommendedProductIds.push('fiber-biz');
    recommendedProductIds.push('ops-failover');
    recommendedProductIds.push('ops-cctv');
    recommendedProductIds.push('sim-pack-10');

    addOnProductIds.push('sec-advanced');
    addOnProductIds.push('comm-whatsapp');

    mappings.push(
      {
        requirement: 'Centralized Branch Control',
        solution: 'Multi-Site Management',
        reason: 'Single cloud portal to monitor connectivity status, firewall rules, and unified billing across all locations.',
      },
      {
        requirement: 'High-Capacity Fiber',
        solution: 'High-Speed Fiber Business',
        reason: 'Ultra-low latency connectivity powering inter-branch databases and centralized software.',
      },
      {
        requirement: 'Branch Surveillance',
        solution: 'CCTV Connectivity',
        reason: 'Stream HD live feeds from all branches directly to headquarters.',
      },
      {
        requirement: 'Branch Redundancy',
        solution: 'Internet Backup / Failover',
        reason: 'Independent wireless failover keeping point-of-sale active at every single outlet.',
      }
    );
  } else {
    // Generic / Other
    bundleName = `${profile.businessType || 'Custom'} Growth Connectivity Bundle`;
    matchScore = 89;
    badgeText = '89% Match for Your Business';

    recommendedProductIds.push('bb-pro');
    recommendedProductIds.push(employeeCount <= 2 ? 'sim-single' : 'sim-pack-5');
    recommendedProductIds.push('cloud-email');
    recommendedProductIds.push('sec-basic');

    addOnProductIds.push('comm-whatsapp');
    addOnProductIds.push('cloud-storage-pro');
    addOnProductIds.push('ops-cctv');

    mappings.push(
      {
        requirement: 'Reliable Internet',
        solution: 'Business Broadband Pro',
        reason: 'High-speed business fiber with priority SLA and zero peak-hour congestion.',
      },
      {
        requirement: 'Employee Connectivity',
        solution: employeeCount <= 2 ? 'Business SIM' : '5 Business SIMs Pack',
        reason: 'Professional corporate postpaid numbers with unified billing.',
      },
      {
        requirement: 'Professional Identity',
        solution: 'Business Email',
        reason: 'Custom domain email to establish trust and professional credibility.',
      }
    );
  }

  // Check additional explicit requirements selected by user
  if (requirements.includes('Customer Communication') && !recommendedProductIds.includes('comm-whatsapp')) {
    recommendedProductIds.push('comm-whatsapp');
    mappings.push({
      requirement: 'Customer Communication',
      solution: 'Business WhatsApp Solution',
      reason: 'Verified business profile with appointment and order notifications directly on WhatsApp.',
    });
  }

  if (requirements.includes('POS / Payment Connectivity') && !recommendedProductIds.includes('ops-pos')) {
    recommendedProductIds.push('ops-pos');
    mappings.push({
      requirement: 'POS / Payment Connectivity',
      solution: 'POS Connectivity',
      reason: 'High-priority cellular link for swipe machines ensuring instant payments.',
    });
  }

  if (requirements.includes('CCTV Connectivity') && !recommendedProductIds.includes('ops-cctv')) {
    recommendedProductIds.push('ops-cctv');
    mappings.push({
      requirement: 'CCTV Connectivity',
      solution: 'CCTV Connectivity',
      reason: 'High upload pipeline dedicated to real-time surveillance streaming.',
    });
  }

  if (requirements.includes('Backup Internet / Failover') && !recommendedProductIds.includes('ops-failover')) {
    recommendedProductIds.push('ops-failover');
    mappings.push({
      requirement: 'Backup Internet / Failover',
      solution: 'Internet Backup / Failover',
      reason: 'Automatic cellular fallback keeping business online through physical fiber cuts.',
    });
  }

  if (requirements.includes('Multi-Location Management') && !recommendedProductIds.includes('ops-multisite')) {
    recommendedProductIds.push('ops-multisite');
    mappings.push({
      requirement: 'Multi-Location Management',
      solution: 'Multi-Site Management',
      reason: 'Unified pane of glass to oversee multiple offices with consolidated billing.',
    });
  }

  // Ensure unique product ids
  const uniqueRecommendedIds = Array.from(new Set(recommendedProductIds));
  const uniqueAddOnIds = Array.from(new Set(addOnProductIds)).filter(id => !uniqueRecommendedIds.includes(id));

  // Map to actual Product objects
  const recommendedProducts = uniqueRecommendedIds
    .map(id => MOCK_PRODUCTS.find(p => p.id === id))
    .filter((p): p is Product => Boolean(p));

  const availableAddOns = uniqueAddOnIds
    .map(id => MOCK_PRODUCTS.find(p => p.id === id))
    .filter((p): p is Product => Boolean(p));

  // Ensure any catalogue items not in recommended or add-ons can be chosen as optional add-ons
  MOCK_PRODUCTS.forEach(p => {
    if (!recommendedProducts.some(rp => rp.id === p.id) && !availableAddOns.some(ap => ap.id === p.id)) {
      availableAddOns.push(p);
    }
  });

  // Generate natural language explanation as requested
  let naturalLanguageExplanation = '';
  if (isClinic) {
    naturalLanguageExplanation =
      'Because you run a clinic with multiple employees, you need reliable connectivity for daily operations, professional communication, secure cloud storage, and cybersecurity to protect sensitive business information.';
  } else if (isRetail) {
    naturalLanguageExplanation =
      'Because you operate a retail store with continuous customer footfall, you need ultra-reliable broadband, zero-drop POS payment connectivity, dedicated staff communication, and automated WhatsApp messaging to boost repeat visits.';
  } else if (isRestaurant) {
    naturalLanguageExplanation =
      'Because you run a restaurant or café with peak dining hours, you require high-speed broadband for kitchen orders and food aggregators, unshakeable POS connectivity, and surveillance cameras with zero downtime failover.';
  } else if (isOffice) {
    naturalLanguageExplanation =
      'Because you manage a professional advisory office handling sensitive financial and legal records, you require symmetric fiber, encrypted cloud storage, professional domain emails, and endpoint cybersecurity.';
  } else if (isMultiLocation) {
    naturalLanguageExplanation =
      'Because your business spans multiple branch locations, centralized SD-WAN management, enterprise high-speed fiber, unified CCTV monitoring, and automated cellular failover are critical to maintain synchronized operations.';
  } else {
    naturalLanguageExplanation =
      `Based on your business profile (${profile.businessType || 'MSME'}, ${employeeCount} team members), our AI advisor synthesized an optimal telecom & cloud foundation to maximize operational uptime while keeping recurring costs transparent.`;
  }

  // Current setup gaps analysis
  const currentSetupGaps: string[] = [];
  if (currentSetup.includes('Home Broadband')) {
    currentSetupGaps.push('Upgrading from residential Home Broadband to Business Broadband eliminates residential throttling during peak hours and provides a 99.9% network SLA.');
  }
  if (currentSetup.includes('Personal Mobile SIMs')) {
    currentSetupGaps.push('Transitioning from fragmented Personal SIMs to Business SIMs ensures centralized enterprise billing, CUG free team calling, and safeguards business customer contacts.');
  }
  if (currentSetup.includes('Mobile Hotspot') || currentSetup.includes('No Dedicated Connection')) {
    currentSetupGaps.push('Replacing mobile hotspot tethering with dedicated fiber avoids device overheating, intermittent disconnections, and payment swipe failures.');
  }
  if (currentSetup.includes('Multiple Internet Providers')) {
    currentSetupGaps.push('Consolidating fragmented providers into Airtel Business delivers a single unified GST invoice and single point of 24x7 enterprise support.');
  }

  return {
    bundleName,
    matchScore,
    badgeText,
    recommendedProducts,
    availableAddOns,
    mappings,
    naturalLanguageExplanation,
    currentSetupGaps,
  };
}
