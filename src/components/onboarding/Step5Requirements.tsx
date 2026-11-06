import React from 'react';
import { useApp } from '../../context/AppContext';
import { REQUIREMENTS_OPTIONS } from '../../data/businessOptions';
import { t } from '../../i18n/translations';
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Globe,
  Smartphone,
  MessageSquare,
  Mail,
  Cloud,
  ShieldCheck,
  Video,
  CreditCard,
  Building2,
  RefreshCw,
  Check,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-5 h-5" />,
  Smartphone: <Smartphone className="w-5 h-5" />,
  MessageSquare: <MessageSquare className="w-5 h-5" />,
  Mail: <Mail className="w-5 h-5" />,
  Cloud: <Cloud className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Video: <Video className="w-5 h-5" />,
  CreditCard: <CreditCard className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
  RefreshCw: <RefreshCw className="w-5 h-5" />,
};

export const Step5Requirements: React.FC = () => {
  const { businessProfile, toggleRequirement, triggerAIAnalysis, goToScreen } = useApp();
  const selectedRequirements = businessProfile.requirements || [];

  const handleRunAnalysis = () => {
    // Run AI analysis
    triggerAIAnalysis();
  };

  return (
    <div className="min-h-[85vh] flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full space-y-6">
        
        {/* Step Indicator Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>{t("Digital Requirements Formulation")}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{t("What does your business need help with?")} </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">{t("Select the digital capabilities you want to add or upgrade. Our AI advisor will match the optimal Airtel enterprise solutions.")} </p>
        </div>

        {/* Selected count pill */}
        <div className="flex items-center justify-between px-2 text-xs font-bold text-slate-600">
          <span>{t("Choose all applicable solutions:")}</span>
          <span className="bg-red-50 text-red-700 px-2.5 py-1 rounded-full border border-red-200">
            {selectedRequirements.length} {t("selected")}
          </span>
        </div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3.5 pt-1">
          {REQUIREMENTS_OPTIONS.map(item => {
            const isSelected = selectedRequirements.includes(item.id);

            return (
              <div
                key={item.id}
                onClick={() => toggleRequirement(item.id)}
                className={`relative p-4 rounded-2xl border-2 transition-all cursor-pointer text-left flex items-start gap-4 ${
                  isSelected
                    ? 'border-red-600 bg-red-50/50 shadow-md ring-2 ring-red-500/20'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                {/* Icon box */}
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-red-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {iconMap[item.icon] || <Globe className="w-5 h-5" />}
                </div>

                {/* Content */}
                <div className="flex-1 pr-6">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      {t(item.name)}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                    {t(item.description)}
                  </p>
                  <p className="text-[11px] font-medium text-slate-600 mt-1 italic">
                    💡 {t(item.relevance)}
                  </p>
                </div>

                {/* Checkbox indicator */}
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

        {/* Navigation Buttons */}
        <div className="pt-4 flex items-center justify-between border-t border-slate-200">
          <button
            onClick={() => goToScreen('discovery-setup')}
            className="px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t("Previous")}</span>
          </button>

          <button
            onClick={handleRunAnalysis}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>{t("Analyze My Business Needs")}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
