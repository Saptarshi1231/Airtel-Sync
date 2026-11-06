import React from 'react';
import { useApp } from '../../context/AppContext';
import { ProgressBar } from '../common/ProgressBar';
import { t } from '../../i18n/translations';
import {
  Sparkles,
  ArrowRight,
  Building2,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Lightbulb,
} from 'lucide-react';

export const WelcomeScreen: React.FC = () => {
  const { user, businessProfile, goToScreen, loadPresetScenario } = useApp();

  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto w-full text-center space-y-8">
        
        {/* Onboarding progress indicator requested in prompt:
            Business Profile
            ● ─── ○ ─── ○ ─── ○
            Step 1 of 4
        */}
        <ProgressBar currentStepIndex={1} totalSteps={4} title="Business Profile" />

        {/* Main Welcome Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 space-y-6 text-center relative overflow-hidden">
          {/* Subtle top accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-rose-500 to-purple-600" />

          {/* Avatar / Hand wave icon */}
          <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-600 mx-auto flex items-center justify-center text-3xl shadow-inner border border-red-100 animate-bounce-subtle">
            👋
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">{t("Welcome to UdyamSync!")} </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-lg mx-auto leading-relaxed">{t("Let's understand your business and find the right digital solutions for you.")} </p>
          </div>

          {/* Quick value props / expectations */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left">
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                <Clock className="w-4 h-4 text-red-600" />
                <span>{t("Takes ~90 Seconds")}</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-snug">{t("4 quick questions about your team & current internet")} </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>{t("AI-Engineered")}</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-snug">{t("Intelligently matches products to your business type")} </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{t("100% Transparent")}</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-snug">{t("Clear monthly costs and itemized installation setup")} </p>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="pt-4 space-y-3">
            <button
              onClick={() => goToScreen('discovery-type')}
              className="w-full sm:w-auto px-10 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-base shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t("Tell Us About Your Business")}</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Quick Demo Scenario helper button */}
            <div className="block">
              <button
                type="button"
                onClick={() => {
                  loadPresetScenario('clinic');
                  goToScreen('discovery-type');
                }}
                className="text-xs text-slate-500 hover:text-red-600 font-medium inline-flex items-center gap-1 cursor-pointer transition-colors"
              >
                <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                <span>{t("Pre-fill with")} <strong>{t("🏥 Small Clinic (Demo Scenario)")}</strong></span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
