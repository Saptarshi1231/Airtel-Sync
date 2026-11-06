import React from 'react';
import { useApp } from '../../context/AppContext';
import { t } from '../../i18n/translations';
import {
  Sparkles,
  Edit3,
  ArrowRight,
  CheckCircle2,
  Building2,
  Users,
  MapPin,
  Wifi,
  ShieldCheck,
  Check,
} from 'lucide-react';

export const BusinessProfileSummary: React.FC = () => {
  const { businessProfile, goToScreen } = useApp();

  return (
    <div className="min-h-[85vh] flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto w-full space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
            <span>{t("Profile Audit")}</span>
            <span>•</span>
            <span className="text-red-600">{t("AI Synthesized")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{t("Your Business Profile")} </h2>
          <p className="text-sm text-slate-600">{t("Here is a verified summary of your business parameters before generating the personalized bundle.")} </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80 space-y-6">
          
          {/* Top row: Business details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-slate-100">
            {/* Business Type */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{t("Business Type")} </span>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-xl font-black text-slate-900">
                  {businessProfile.businessType === 'Other' && businessProfile.customBusinessType
                    ? businessProfile.customBusinessType
                    : t(businessProfile.businessType)}
                </span>
              </div>
            </div>

            {/* Employees */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{t("Employees")} </span>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-xl font-black text-slate-900">
                  {businessProfile.employeeCount || 8}
                </span>
                <span className="text-xs font-medium text-slate-500">
                  ({t(businessProfile.employeeTier)})
                </span>
              </div>
            </div>

            {/* Locations */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{t("Locations")} </span>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-xl font-black text-slate-900">
                  {businessProfile.locationsCount || 1}
                </span>
                <span className="text-xs font-medium text-slate-500">
                  ({t(businessProfile.locationsTier)})
                </span>
              </div>
            </div>
          </div>

          {/* Current Setup Analysis */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{t("Current Setup")} </span>
            <div className="flex flex-wrap gap-2">
              {businessProfile.currentSetup.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 text-amber-900 text-xs font-semibold border border-amber-200"
                >
                  <Wifi className="w-3.5 h-3.5 text-amber-600" />
                  {t(item)}
                </span>
              ))}
            </div>
          </div>

          {/* Key Requirements Selected */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{t("Your Key Requirements")} </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {businessProfile.requirements.map((req, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-semibold text-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{t(req)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => goToScreen('discovery-type')}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Edit3 className="w-4 h-4 text-slate-500" />
              <span>{t("✏️ Edit Profile")}</span>
            </button>

            <button
              onClick={() => goToScreen('recommendation')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm sm:text-base shadow-md shadow-red-500/25 hover:shadow-red-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>{t("Generate My Recommended Bundle")}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
