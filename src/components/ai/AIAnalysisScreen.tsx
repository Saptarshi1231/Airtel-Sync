import React from 'react';
import { useApp } from '../../context/AppContext';
import { t } from '../../i18n/translations';
import {
  Sparkles,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';

const AI_STEPS = [
  'Understanding your business type',
  'Identifying your operational requirements',
  'Analyzing your current setup',
  'Checking compatible products',
  'Matching solutions to your needs',
  'Building your personalized bundle',
];

export const AIAnalysisScreen: React.FC = () => {
  const { analysisStep, goToScreen, recommendation, businessProfile } = useApp();
  const isComplete = analysisStep >= 5;

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full mx-auto space-y-8">
        
        {/* Main Processing Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-200/90 text-center relative overflow-hidden">
          
          {/* Subtle top AI gradient banner */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-purple-600 to-indigo-600 animate-pulse" />

          {/* Glowing animated brain/CPU orb */}
          <div className="relative mx-auto w-24 h-24 mb-6">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500/20 via-red-500/20 to-indigo-500/20 blur-xl animate-pulse" />
            
            <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-purple-600 via-indigo-700 to-red-600 flex items-center justify-center text-white shadow-xl shadow-purple-600/30">
              <Cpu className={`w-12 h-12 ${!isComplete ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
            </div>

            {/* Orbiting micro sparks */}
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center font-bold text-xs shadow-md animate-bounce">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-2 mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t("Airtel MSME Neural Matcher")}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {isComplete ? (
                <span className="text-emerald-600 flex items-center justify-center gap-2">{t("🎉 We found a solution for your business!")} </span>
              ) : (
                <span>{t("🤖 Analyzing your business...")}</span>
              )}
            </h2>

            <p className="text-xs sm:text-sm text-slate-500">
              {isComplete
                ? `${t('Custom tailored digital solution prepared for')} ${businessProfile.businessName || t('your business')}.`
                : `${t('Correlating')} ${t(businessProfile.businessType)} ${t('parameters with Airtel telecom and digital catalog...')}`}
            </p>
          </div>

          {/* Step-by-step Animated Checklist */}
          <div className="space-y-3 text-left max-w-md mx-auto bg-slate-50/80 p-5 rounded-2xl border border-slate-200/80">
            {AI_STEPS.map((stepText, idx) => {
              const isDone = analysisStep > idx;
              const isCurrent = analysisStep === idx;

              return (
                <div
                  key={idx}
                  className={`flex items-center gap-3 text-sm transition-all duration-300 ${
                    isDone
                      ? 'text-slate-900 font-semibold'
                      : isCurrent
                      ? 'text-purple-700 font-bold scale-[1.01]'
                      : 'text-slate-400 font-normal'
                  }`}
                >
                  <div className="shrink-0 w-5 h-5 flex items-center justify-center">
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 animate-scaleIn" />
                    ) : isCurrent ? (
                      <div className="w-4 h-4 rounded-full border-2 border-purple-600 border-t-transparent animate-spin" />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-slate-300" />
                    )}
                  </div>
                  <span className="text-xs sm:text-sm">{t(stepText)}</span>
                </div>
              );
            })}
          </div>

          {/* Action on Complete */}
          {isComplete && (
            <div className="mt-8 space-y-3 animate-fadeIn">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => goToScreen('profile-summary')}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t("Review Profile Summary")}</span>
                </button>

                <button
                  onClick={() => goToScreen('recommendation')}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-red-500/30 hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>{t("View AI Recommendation")}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
