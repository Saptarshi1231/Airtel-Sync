import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { LandingPage } from './components/landing/LandingPage';
import { LoginPage } from './components/auth/LoginPage';
import { WelcomeScreen } from './components/onboarding/WelcomeScreen';
import { Step1BusinessType } from './components/onboarding/Step1BusinessType';
import { Step2BusinessSize } from './components/onboarding/Step2BusinessSize';
import { Step3Locations } from './components/onboarding/Step3Locations';
import { Step4CurrentSetup } from './components/onboarding/Step4CurrentSetup';
import { Step5Requirements } from './components/onboarding/Step5Requirements';
import { AIAnalysisScreen } from './components/ai/AIAnalysisScreen';
import { BusinessProfileSummary } from './components/ai/BusinessProfileSummary';
import { RecommendationPage } from './components/recommendation/RecommendationPage';
import { BundleCustomizer } from './components/bundle/BundleCustomizer';
import { DetailedQuotePage } from './components/quote/DetailedQuotePage';
import { CheckoutSuccessModal } from './components/checkout/CheckoutSuccessModal';
import { DashboardPage } from './components/dashboard/DashboardPage';

const MainRouter: React.FC = () => {
  const { currentScreen, completedOrder } = useApp();

  const renderScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return <LandingPage />;
      case 'login':
        return <LoginPage />;
      case 'welcome':
        return <WelcomeScreen />;
      case 'discovery-type':
        return <Step1BusinessType />;
      case 'discovery-size':
        return <Step2BusinessSize />;
      case 'discovery-locations':
        return <Step3Locations />;
      case 'discovery-setup':
        return <Step4CurrentSetup />;
      case 'requirements':
        return <Step5Requirements />;
      case 'ai-analysis':
        return <AIAnalysisScreen />;
      case 'profile-summary':
        return <BusinessProfileSummary />;
      case 'recommendation':
        return <RecommendationPage />;
      case 'customize':
        return <BundleCustomizer />;
      case 'quote':
        return <DetailedQuotePage />;
      case 'dashboard':
        return <DashboardPage />;
      default:
        return <LandingPage />;
    }
  };

  const showHeader = currentScreen !== 'login';
  const showFooter = ['landing', 'recommendation', 'customize', 'quote', 'dashboard'].includes(
    currentScreen
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-red-500 selection:text-white">
      {showHeader && <Navbar />}
      <main className="flex-1 w-full">
        {renderScreen()}
      </main>
      {showFooter && <Footer />}
      {completedOrder && <CheckoutSuccessModal />}
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainRouter />
    </AppProvider>
  );
}
