import React from 'react';
import { useApp } from '../../context/AppContext';
import { t } from '../../i18n/translations';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Printer,
  Download,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Calendar,
  FileCheck,
  Info,
  Sliders,
  Zap,
} from 'lucide-react';

export const DetailedQuotePage: React.FC = () => {
  const {
    recommendation,
    selectedProducts,
    businessProfile,
    monthlyTotal,
    setupTotal,
    estimatedFirstMonth,
    checkout,
    goToScreen,
  } = useApp();

  const quoteId = `AIRTEL-QTE-${Math.floor(100000 + Math.random() * 900000)}`;
  const currentDate = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 bg-slate-100">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => goToScreen('customize')}
            className="text-xs font-semibold text-slate-600 hover:text-red-600 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t("← Modify Bundle Items")}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 cursor-pointer shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t("Print / Save PDF")}</span>
            </button>
          </div>
        </div>

        {/* Invoice-Style Detailed Quote Paper */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-200 space-y-8 relative overflow-hidden">
          
          {/* Top Brand Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center text-white font-black text-xl">
                  U
                </div>
                <div>
                  <span className="font-extrabold text-xl text-slate-900">
                    Udyam<span className="text-red-600">Sync</span>
                  </span>
                  <span className="text-[11px] block text-slate-500 font-medium -mt-1">{t("Airtel Business Enterprise Advisor")} </span>
                </div>
              </div>
            </div>

            <div className="text-left sm:text-right space-y-0.5">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t("Official Estimate Quote")} </div>
              <div className="text-sm font-mono font-bold text-slate-900">
                {quoteId}
              </div>
              <div className="text-xs text-slate-500 flex items-center gap-1 sm:justify-end">
                <Calendar className="w-3 h-3" />
                <span>Date: {currentDate}</span>
              </div>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
              <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t("Personalized Business Solution")}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{t("🎉 Your Personalized Business Solution")} </h1>

            {/* Business Profile Summary chip requested in prompt:
                🏥 Clinic • 👥 8 Employees • 📍 1 Location
            */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
              <span className="text-slate-500 font-bold uppercase text-[10px] tracking-wider">{t("Profile Grounding:")} </span>
              <span className="flex items-center gap-1.5">
                🏥 {t(businessProfile.businessType)}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                👥 {businessProfile.employeeCount || 8} Employees
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                📍 {t(businessProfile.locationsTier || '1 location')}
              </span>
            </div>
          </div>

          {/* BILL BREAKDOWN: Invoice Table requested in prompt */}
          <div className="space-y-3">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">{t("Itemized Bill Breakdown")} </h3>

            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-600 font-bold uppercase text-[11px] tracking-wider">
                    <th className="py-3.5 px-4 sm:px-6">{t("Product & Description")}</th>
                    <th className="py-3.5 px-4 text-right">{t("Monthly Cost")}</th>
                    <th className="py-3.5 px-4 sm:px-6 text-right">{t("Setup Fee")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {selectedProducts.map((item, idx) => (
                    <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-3.5 px-4 sm:px-6">
                        <div className="font-extrabold text-slate-900">
                          {t(item.name)}
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {t(item.description)}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-right font-black text-slate-900">
                        ₹{item.monthlyPrice.toLocaleString('en-IN')}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-right font-bold text-slate-600">
                        {item.setupFee > 0 ? `₹${item.setupFee.toLocaleString('en-IN')}` : '₹0'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Summary Box with Separated Monthly & One-Time Charges */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-center justify-between text-slate-700">
                <span className="font-semibold">{t("Monthly Recurring Cost")}</span>
                <span className="font-extrabold text-slate-900 text-base">
                  ₹{monthlyTotal.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="flex items-center justify-between text-slate-700">
                <span className="font-semibold">{t("One-Time Charges (Setup / Router)")}</span>
                <span className="font-extrabold text-slate-900 text-base">
                  ₹{setupTotal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <div className="border-t-2 border-dashed border-slate-300 pt-3">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-xs uppercase font-extrabold tracking-wider text-slate-500">{t("Estimated First Month")} </div>
                  <div className="text-2xl sm:text-3xl font-black text-red-600">
                    ₹{estimatedFirstMonth.toLocaleString('en-IN')}
                  </div>
                </div>

                <div className="text-right text-[11px] text-slate-500 font-medium">{t("Subsequent months:")} <strong className="text-slate-800">₹{monthlyTotal.toLocaleString('en-IN')}/mo</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Transparent pricing note requested in prompt */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="font-bold">{t("Transparent Pricing Guarantee:")}</strong> {t("All charges are clearly shown. You can review your selected configuration before proceeding. Zero hidden processing or SIM activation fees.")} </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => goToScreen('customize')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sliders className="w-4 h-4" />
              <span>{t("Modify Configuration")}</span>
            </button>

            {/* Primary CTA: Proceed to Checkout */}
            <button
              onClick={checkout}
              className="w-full sm:w-auto px-10 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-base shadow-xl shadow-red-500/30 hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t("Proceed to Checkout")}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
