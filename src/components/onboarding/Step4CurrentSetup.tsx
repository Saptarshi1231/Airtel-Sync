import React from 'react';
import { useApp } from '../../context/AppContext';
import { ProgressBar } from '../common/ProgressBar';
import { CURRENT_SETUP_OPTIONS } from '../../data/businessOptions';
import { t } from '../../i18n/translations';
import {
  ArrowRight,
  ArrowLeft,
  Home,
  Building,
  WifiOff,
  Smartphone,
  CheckCircle2,
  Network,
  AlertCircle,
  Check,
  Sparkles,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home className="w-5 h-5" />,
  Building: <Building className="w-5 h-5" />,
  WifiOff: <WifiOff className="w-5 h-5" />,
  Smartphone: <Smartphone className="w-5 h-5" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5" />,
  Network: <Network className="w-5 h-5" />,
  AlertCircle: <AlertCircle className="w-5 h-5" />,
};

export const Step4CurrentSetup: React.FC = () => {
  const { businessProfile, toggleCurrentSetup, goToScreen } = useApp();
  const currentSetup = businessProfile.currentSetup || [];

  const handleNext = () => {
    // If none selected, default to Home Broadband + Personal SIMs
    if (currentSetup.length === 0) {
      toggleCurrentSetup('Home Broadband');
      toggleCurrentSetup('Personal Mobile SIMs');
    }
    goToScreen('requirements');
  };

  return (
    <div className="min-h-[85vh] flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto w-full space-y-6">
        
        {/* Progress Bar */}
        <ProgressBar currentStepIndex={4} totalSteps={4} title="Business Profile" />

        {/* Heading */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-200">
            <span>{t("Question 4 of 4")}</span>
            <span>•</span>
            <span className="text-purple-700">{t("Multi-Select")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{t("What do you currently use for internet and connectivity?")} </h2>
          <p className="text-sm text-slate-600">{t("Select all that apply. Our advisor uses this to detect reliability risks, high expense leakage, and bandwidth bottlenecks.")} </p>
        </div>

        {/* Multi-Select Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
          {CURRENT_SETUP_OPTIONS.map(item => {
            const isSelected = currentSetup.includes(item.id);

            return (
              <div
                key={item.id}
                onClick={() => toggleCurrentSetup(item.id)}
                className={`relative p-4 rounded-2xl border-2 transition-all cursor-pointer text-left flex items-start gap-3.5 ${
                  isSelected
                    ? 'border-red-600 bg-red-50/50 shadow-md ring-2 ring-red-500/20'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-red-600 text-white'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {iconMap[item.icon] || <Home className="w-5 h-5" />}
                </div>

                {/* Content */}
                <div className="flex-1 pr-6">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    {t(item.label)}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    {t(item.risk)}
                  </p>
                </div>

                {/* Checkbox Icon */}
                <div
                  className={`absolute top-4 right-4 w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                    isSelected
                      ? 'bg-red-600 border-red-600 text-white'
                      : 'border-slate-300 bg-white'
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinic Demo helper hint */}
        <div className="p-3.5 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl border border-purple-200 flex items-center justify-between text-xs text-purple-900">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-600 shrink-0" />
            <span>
              <strong>{t("Demo Scenario:")}</strong> "{t("Home Broadband")}" + "{t("Personal Mobile SIMs")}" {t("is selected.")}
            </span>
          </div>
          <span className="font-semibold text-purple-700">
            {currentSetup.length} {t("Selected")}
          </span>
        </div>

        {/* Navigation Buttons */}
        <div className="pt-4 flex items-center justify-between border-t border-slate-200">
          <button
            onClick={() => goToScreen('discovery-locations')}
            className="px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t("Previous")}</span>
          </button>

          <button
            onClick={handleNext}
            className="px-7 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md shadow-red-500/25 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>{t("Next: Business Requirements")}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
