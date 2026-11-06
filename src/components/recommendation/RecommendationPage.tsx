import React from 'react';
import { useApp } from '../../context/AppContext';
import { WhyRecommended } from './WhyRecommended';
import { t } from '../../i18n/translations';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Sliders,
  DollarSign,
  Wifi,
  Globe,
  Smartphone,
  Users,
  Mail,
  Cloud,
  Lock,
  Layers,
  FileText,
  Building,
  RotateCcw,
} from 'lucide-react';

const categoryIconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-5 h-5" />,
  Wifi: <Wifi className="w-5 h-5" />,
  Radio: <Zap className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Smartphone: <Smartphone className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Mail: <Mail className="w-5 h-5" />,
  Cloud: <Cloud className="w-5 h-5" />,
  HardDrive: <Cloud className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  ShieldAlert: <ShieldCheck className="w-5 h-5" />,
  Lock: <Lock className="w-5 h-5" />,
};

export const RecommendationPage: React.FC = () => {
  const {
    recommendation,
    selectedProducts,
    monthlyTotal,
    setupTotal,
    estimatedFirstMonth,
    goToScreen,
    businessProfile,
  } = useApp();

  if (!recommendation) {
    return (
      <div className="py-20 text-center">
        <p className="text-slate-500">{t("Generating recommendation...")}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Top Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-slate-600" />
                {t(businessProfile.businessType)} • {businessProfile.employeeCount} Staff • {t(businessProfile.locationsTier)}
              </span>

              {/* Match Score Badge requested in prompt: 92% Match for Your Business */}
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-extrabold shadow-sm animate-pulse-subtle">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                {t(recommendation.badgeText)}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">🤖</span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                {t(recommendation.bundleName)}
              </h1>
            </div>
            <p className="text-sm text-slate-500">{t("Curated by Airtel AI Advisor to provide uninterrupted operations, team collaboration, and data compliance.")} </p>
          </div>

          {/* Quick Pricing Pill & CTA */}
          <div className="w-full md:w-auto bg-slate-50 p-4 rounded-2xl border border-slate-200/80 flex flex-row md:flex-col items-center md:items-end justify-between gap-3 shrink-0">
            <div>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider text-left md:text-right">{t("Monthly Bundle Total")} </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 text-left md:text-right">
                ₹{monthlyTotal.toLocaleString('en-IN')}
                <span className="text-xs font-semibold text-slate-500">/month</span>
              </div>
            </div>

            <button
              onClick={() => goToScreen('customize')}
              className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-red-500/25 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Sliders className="w-4 h-4" />
              <span>{t("Customize Bundle")}</span>
            </button>
          </div>
        </div>

        {/* Section: Recommended Product Cards */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <span>{t("Recommended Products in Your Bundle")}</span>
              <span className="text-xs font-bold bg-red-100 text-red-700 px-2.5 py-0.5 rounded-full">
                {selectedProducts.length} Included
              </span>
            </h2>
            <button
              onClick={() => goToScreen('customize')}
              className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1 cursor-pointer"
            >
              <span>{t("Add / Remove Items →")}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedProducts.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-red-200 hover:shadow-lg transition-all flex flex-col justify-between group relative"
              >
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
                      {t(product.category)}
                    </span>
                    {product.badge && (
                      <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200">
                        {t(product.badge)}
                      </span>
                    )}
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {categoryIconMap[product.icon] || <Zap className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-base leading-tight">
                        {t(product.name)}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                        {t(product.description)}
                      </p>
                    </div>
                  </div>

                  {/* Features list */}
                  {product.features && (
                    <div className="mt-3 space-y-1.5 pt-3 border-t border-slate-100">
                      {product.features.slice(0, 3).map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{t(f)}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Pricing row */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-base sm:text-lg font-black text-slate-900">
                      ₹{product.monthlyPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">/mo</span>
                  </div>

                  <span className="text-[11px] font-medium text-slate-500">
                    {product.setupFee > 0 ? `₹${product.setupFee} setup` : t('Free setup')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: WHY DID WE RECOMMEND THIS? (AI Explainability) */}
        <WhyRecommended recommendation={recommendation} />

        {/* Bottom Navigation CTA Bar */}
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-slate-900 text-base">{t("Ready to fine-tune or review pricing?")} </h4>
            <p className="text-xs text-slate-500">{t("Add optional modules (WhatsApp API, CCTV, Failover) or jump straight to the detailed quote.")} </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => goToScreen('customize')}
              className="flex-1 sm:flex-none px-6 py-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sliders className="w-4 h-4 text-slate-600" />
              <span>{t("Customize Bundle")}</span>
            </button>

            <button
              onClick={() => goToScreen('quote')}
              className="flex-1 sm:flex-none px-7 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm shadow-md shadow-red-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t("View Detailed Quote")}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
