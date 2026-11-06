import React from 'react';
import { RecommendationResult, RequirementMapping } from '../../types';
import { t } from '../../i18n/translations';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  HelpCircle,
  Lightbulb,
} from 'lucide-react';

interface WhyRecommendedProps {
  recommendation: RecommendationResult;
}

export const WhyRecommended: React.FC<WhyRecommendedProps> = ({ recommendation }) => {
  const { mappings, naturalLanguageExplanation, currentSetupGaps } = recommendation;

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white space-y-6 shadow-xl border border-indigo-900/60">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-700/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/40 text-purple-300 flex items-center justify-center font-bold">
            <Lightbulb className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <h3 className="text-xl font-black text-white tracking-tight flex items-center gap-2">{t("💡 Why Did We Recommend This?")} </h3>
            <p className="text-xs text-slate-300">{t("Explainable AI reasoning grounded in your business parameters")} </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-900/60 text-purple-200 border border-purple-700 text-xs font-semibold self-start sm:self-auto">
          <Sparkles className="w-3.5 h-3.5 text-purple-300" />
          <span>{t("Intelligent MSME Profiling")}</span>
        </div>
      </div>

      {/* Natural Language AI Narrative requested in prompt */}
      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
        <p className="text-xs uppercase font-extrabold tracking-wider text-purple-300 mb-1.5">{t("AI Advisor Rationale:")} </p>
        <p className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed italic">
          "{naturalLanguageExplanation}"
        </p>
      </div>

      {/* Requirement Mapping Visual Table / Cards requested in prompt:
          Reliable Internet → Business Broadband ✓
          Employee Connectivity → 5 Business SIMs ✓
          Professional Operations → Business Email ✓
          Secure Business Data → Cloud Storage ✓
          Data Protection → Cybersecurity ✓
      */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">{t("Requirement to Solution Mapping:")} </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {mappings.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col justify-between hover:border-slate-600 transition-all"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-slate-300">
                  {t(item.requirement)}
                </span>
                <span className="text-slate-500 font-bold text-xs">→</span>
                <span className="text-xs font-extrabold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-lg border border-emerald-800/80 flex items-center gap-1">
                  {t(item.solution)}
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug">
                {t(item.reason)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Current Setup Bottleneck Insights */}
      {currentSetupGaps.length > 0 && (
        <div className="pt-2 border-t border-slate-700/60 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            <span>{t("Setup Upgrades Detected:")}</span>
          </div>
          <div className="space-y-1.5">
            {currentSetupGaps.map((gap, idx) => (
              <div
                key={idx}
                className="text-xs text-slate-300 flex items-start gap-2 bg-amber-950/20 p-2.5 rounded-xl border border-amber-900/30"
              >
                <span className="text-amber-400 font-bold shrink-0">⚡</span>
                <span>{t(gap)}</span>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
