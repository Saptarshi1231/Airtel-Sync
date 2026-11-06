import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  AppScreen,
  BusinessProfile,
  OrderConfirmation,
  Product,
  RecommendationResult,
  UserAuth,
} from '../types';
import { MOCK_PRODUCTS } from '../data/products';
import { generateRecommendation } from '../logic/recommendationEngine';
import { getSavedLanguage, LanguageCode } from '../i18n/translations';

interface AppContextType {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  user: UserAuth;
  currentScreen: AppScreen;
  businessProfile: BusinessProfile;
  recommendation: RecommendationResult | null;
  selectedProducts: Product[];
  availableAddOns: Product[];
  completedOrder: OrderConfirmation | null;
  isAnalyzing: boolean;
  analysisStep: number;
  // Calculations
  monthlyTotal: number;
  setupTotal: number;
  estimatedFirstMonth: number;
  // Actions
  goToScreen: (screen: AppScreen) => void;
  login: (email?: string, name?: string, companyName?: string) => void;
  demoLogin: (preset?: 'clinic' | 'retail' | 'restaurant') => void;
  logout: () => void;
  updateProfile: (updates: Partial<BusinessProfile>) => void;
  toggleRequirement: (reqId: string) => void;
  toggleCurrentSetup: (setupId: string) => void;
  loadPresetScenario: (presetType: 'clinic' | 'retail' | 'restaurant' | 'office') => void;
  triggerAIAnalysis: () => void;
  toggleProductInBundle: (product: Product) => void;
  removeProductFromBundle: (productId: string) => void;
  addProductToBundle: (product: Product) => void;
  checkout: () => void;
  resetJourney: () => void;
}

const DEFAULT_PROFILE: BusinessProfile = {
  businessName: 'Apex Health Clinic',
  businessType: 'Clinic / Healthcare',
  customBusinessType: '',
  employeeTier: '3–10 employees',
  employeeCount: 8,
  locationsTier: '1 location',
  locationsCount: 1,
  currentSetup: ['Home Broadband', 'Personal Mobile SIMs'],
  requirements: [
    'Reliable Internet',
    'Business Mobile Connections',
    'Cloud Storage',
    'Business Email',
    'Cybersecurity',
  ],
  city: 'Bengaluru',
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserAuth>({
    isAuthenticated: false,
    name: 'Dr. Rajesh Verma',
    email: 'dr.verma@apexclinic.in',
    companyName: 'Apex Health Clinic',
  });

  const [currentScreen, setCurrentScreen] = useState<AppScreen>('landing');
  const [businessProfile, setBusinessProfile] = useState<BusinessProfile>(DEFAULT_PROFILE);
  const [recommendation, setRecommendation] = useState<RecommendationResult | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [availableAddOns, setAvailableAddOns] = useState<Product[]>([]);
  const [completedOrder, setCompletedOrder] = useState<OrderConfirmation | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [language, setLanguageState] = useState<LanguageCode>(getSavedLanguage);

  const setLanguage = (nextLanguage: LanguageCode) => {
    window.localStorage.setItem('udyamsync-language', nextLanguage);
    setLanguageState(nextLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Initialize recommendation when profile changes or on demand
  const computeAndSetRecommendation = (profileToUse: BusinessProfile) => {
    const result = generateRecommendation(profileToUse);
    setRecommendation(result);
    setSelectedProducts(result.recommendedProducts);
    setAvailableAddOns(result.availableAddOns);
    return result;
  };

  const goToScreen = (screen: AppScreen) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const login = (email?: string, name?: string, companyName?: string) => {
    setUser({
      isAuthenticated: true,
      name: name || 'Dr. Rajesh Verma',
      email: email || 'dr.verma@apexclinic.in',
      companyName: companyName || businessProfile.businessName || 'Apex Health Clinic',
    });
    goToScreen('welcome');
  };

  const demoLogin = (preset: 'clinic' | 'retail' | 'restaurant' = 'clinic') => {
    loadPresetScenario(preset);
    setUser({
      isAuthenticated: true,
      name:
        preset === 'clinic'
          ? 'Dr. Rajesh Verma'
          : preset === 'retail'
          ? 'Suresh Gupta'
          : 'Chef Anita Roy',
      email:
        preset === 'clinic'
          ? 'dr.verma@apexclinic.in'
          : preset === 'retail'
          ? 'suresh@guptasuperstore.in'
          : 'anita@cafebistro.in',
      companyName:
        preset === 'clinic'
          ? 'Apex Health Clinic'
          : preset === 'retail'
          ? 'Gupta Mega Retail'
          : 'Bistro 42 Café',
    });
    goToScreen('welcome');
  };

  const logout = () => {
    setUser({
      isAuthenticated: false,
      name: '',
      email: '',
      companyName: '',
    });
    goToScreen('landing');
  };

  const updateProfile = (updates: Partial<BusinessProfile>) => {
    setBusinessProfile(prev => {
      const updated = { ...prev, ...updates };
      return updated;
    });
  };

  const toggleRequirement = (reqId: string) => {
    setBusinessProfile(prev => {
      const exists = prev.requirements.includes(reqId);
      const requirements = exists
        ? prev.requirements.filter(r => r !== reqId)
        : [...prev.requirements, reqId];
      return { ...prev, requirements };
    });
  };

  const toggleCurrentSetup = (setupId: string) => {
    setBusinessProfile(prev => {
      const exists = prev.currentSetup.includes(setupId);
      const currentSetup = exists
        ? prev.currentSetup.filter(s => s !== setupId)
        : [...prev.currentSetup, setupId];
      return { ...prev, currentSetup };
    });
  };

  const loadPresetScenario = (presetType: 'clinic' | 'retail' | 'restaurant' | 'office') => {
    if (presetType === 'clinic') {
      const p: BusinessProfile = {
        businessName: 'Apex Health Clinic',
        businessType: 'Clinic / Healthcare',
        employeeTier: '3–10 employees',
        employeeCount: 8,
        locationsTier: '1 location',
        locationsCount: 1,
        currentSetup: ['Home Broadband', 'Personal Mobile SIMs'],
        requirements: [
          'Reliable Internet',
          'Business Mobile Connections',
          'Cloud Storage',
          'Business Email',
          'Cybersecurity',
        ],
        city: 'Bengaluru',
      };
      setBusinessProfile(p);
      computeAndSetRecommendation(p);
    } else if (presetType === 'retail') {
      const p: BusinessProfile = {
        businessName: 'Gupta Superstore',
        businessType: 'Retail Store',
        employeeTier: '3–10 employees',
        employeeCount: 6,
        locationsTier: '1 location',
        locationsCount: 1,
        currentSetup: ['Home Broadband', 'Personal Mobile SIMs'],
        requirements: [
          'Reliable Internet',
          'POS / Payment Connectivity',
          'Business Mobile Connections',
          'Customer Communication',
        ],
        city: 'Mumbai',
      };
      setBusinessProfile(p);
      computeAndSetRecommendation(p);
    } else if (presetType === 'restaurant') {
      const p: BusinessProfile = {
        businessName: 'Bistro 42 Café',
        businessType: 'Restaurant / Café',
        employeeTier: '3–10 employees',
        employeeCount: 9,
        locationsTier: '1 location',
        locationsCount: 1,
        currentSetup: ['Home Broadband'],
        requirements: [
          'Reliable Internet',
          'POS / Payment Connectivity',
          'CCTV Connectivity',
          'Backup Internet / Failover',
        ],
        city: 'Delhi NCR',
      };
      setBusinessProfile(p);
      computeAndSetRecommendation(p);
    } else if (presetType === 'office') {
      const p: BusinessProfile = {
        businessName: 'Kapadia & Associates CA',
        businessType: 'CA / Professional Office',
        employeeTier: '11–50 employees',
        employeeCount: 14,
        locationsTier: '1 location',
        locationsCount: 1,
        currentSetup: ['Business Broadband', 'Personal Mobile SIMs'],
        requirements: [
          'Reliable Internet',
          'Business Email',
          'Cloud Storage',
          'Cybersecurity',
          'Business Mobile Connections',
        ],
        city: 'Ahmedabad',
      };
      setBusinessProfile(p);
      computeAndSetRecommendation(p);
    }
  };

  const triggerAIAnalysis = () => {
    setIsAnalyzing(true);
    setAnalysisStep(0);
    goToScreen('ai-analysis');

    // Simulate progressive AI reasoning steps
    const interval = setInterval(() => {
      setAnalysisStep(prev => {
        if (prev >= 5) {
          clearInterval(interval);
          setIsAnalyzing(false);
          computeAndSetRecommendation(businessProfile);
          return 6;
        }
        return prev + 1;
      });
    }, 450);
  };

  const toggleProductInBundle = (product: Product) => {
    const isAlreadySelected = selectedProducts.some(p => p.id === product.id);
    if (isAlreadySelected) {
      removeProductFromBundle(product.id);
    } else {
      addProductToBundle(product);
    }
  };

  const addProductToBundle = (product: Product) => {
    if (!selectedProducts.some(p => p.id === product.id)) {
      setSelectedProducts(prev => [...prev, product]);
      setAvailableAddOns(prev => prev.filter(p => p.id !== product.id));
    }
  };

  const removeProductFromBundle = (productId: string) => {
    const itemToRemove = selectedProducts.find(p => p.id === productId);
    if (itemToRemove) {
      setSelectedProducts(prev => prev.filter(p => p.id !== productId));
      setAvailableAddOns(prev => {
        if (!prev.some(p => p.id === productId)) {
          return [...prev, itemToRemove];
        }
        return prev;
      });
    }
  };

  const checkout = () => {
    const order: OrderConfirmation = {
      orderId: `AIRTEL-UDYAM-${Math.floor(10000 + Math.random() * 90000)}`,
      date: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      bundleName: recommendation?.bundleName || 'Personalized Business Digital Bundle',
      monthlyTotal,
      setupTotal,
      itemCount: selectedProducts.length,
      estimatedDeliveryHours: 2,
    };
    setCompletedOrder(order);
  };

  const resetJourney = () => {
    setBusinessProfile(DEFAULT_PROFILE);
    setCompletedOrder(null);
    computeAndSetRecommendation(DEFAULT_PROFILE);
    goToScreen('welcome');
  };

  // Pricing calculations
  const monthlyTotal = selectedProducts.reduce((sum, item) => sum + item.monthlyPrice, 0);
  const setupTotal = selectedProducts.reduce((sum, item) => sum + item.setupFee, 0);
  const estimatedFirstMonth = monthlyTotal + setupTotal;

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        user,
        currentScreen,
        businessProfile,
        recommendation,
        selectedProducts,
        availableAddOns,
        completedOrder,
        isAnalyzing,
        analysisStep,
        monthlyTotal,
        setupTotal,
        estimatedFirstMonth,
        goToScreen,
        login,
        demoLogin,
        logout,
        updateProfile,
        toggleRequirement,
        toggleCurrentSetup,
        loadPresetScenario,
        triggerAIAnalysis,
        toggleProductInBundle,
        removeProductFromBundle,
        addProductToBundle,
        checkout,
        resetJourney,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
