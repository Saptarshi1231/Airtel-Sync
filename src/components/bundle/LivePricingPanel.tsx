import React from 'react';
import { useApp } from '../../context/AppContext';
import { t } from '../../i18n/translations';
import {
  DollarSign,
  ShieldCheck,
  Zap,
  ArrowRight,
  Info,
  CheckCircle2,
  Trash2,
} from 'lucide-react';

interface LivePricingPanelProps {
  onProceed?: () => void;
}

export const LivePricingPanel: React.FC<LivePricingPanelProps> = ({ onProceed }) => {
  const {
    selectedProducts,
    monthlyTotal,
    setupTotal,
    estimatedFirstMonth,
    removeProductFromBundle,
    goToScreen,
  } = useApp();

  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200/90 space-y-6 sticky top-24">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <h3 className="font-extrabold text-slate-900 text-lg tracking-tight">{t("Live Pricing Panel")} </h3>
        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">{t("Real-time Calc")} </span>
      </div>

      {/* Monthly Recurring Items Breakdown */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
          <span>{t("Monthly Summary")}</span>
          <span>{selectedProducts.length} Items</span>
        </div>

        <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
          {selectedProducts.map(item => (
            <div
              key={item.id}
              className="flex items-center justify-between text-xs py-1 group"
            >
              <div className="flex items-center gap-1.5 truncate max-w-[170px] sm:max-w-[190px]">
                <button
                  type="button"
                  onClick={() => removeProductFromBundle(item.id)}
                  title="Remove from bundle"
                  className="text-slate-300 hover:text-red-600 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
                <span className="font-semibold text-slate-800 truncate">
                  {t(item.name)}
                </span>
              </div>
              <span className="font-bold text-slate-900 shrink-0">
                ₹{item.monthlyPrice.toLocaleString('en-IN')}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Total */}
      <div className="pt-3 border-t border-slate-200">
        <div className="flex items-center justify-between">
          <span className="text-sm font-extrabold text-slate-700">{t("Monthly Recurring Total")} </span>
          <span className="text-xl font-black text-slate-900 transition-all duration-300">
            ₹{monthlyTotal.toLocaleString('en-IN')}
            <span className="text-xs font-semibold text-slate-500">/mo</span>
          </span>
        </div>
      </div>

      {/* One-Time Setup Charges requested in prompt */}
      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
        <div className="flex items-center justify-between text-xs font-bold text-slate-600 uppercase tracking-wider">
          <span>{t("One-Time Charges")}</span>
          <span className="text-slate-400 font-normal">{t("Installation & Router")}</span>
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-600">{t("Installation / Setup Fee")}</span>
          <span className="font-bold text-slate-900">
            ₹{setupTotal.toLocaleString('en-IN')}
          </span>
        </div>
      </div>

      {/* Estimated First Month requested in prompt: Monthly + One-Time */}
      <div className="p-4 rounded-2xl bg-gradient-to-br from-red-50 via-rose-50 to-red-50 border border-red-200/80 space-y-1">
        <div className="text-[11px] font-extrabold uppercase tracking-wider text-red-700">{t("Estimated First Month")} </div>
        <div className="flex items-baseline justify-between">
          <div className="text-2xl font-black text-red-600 transition-all duration-300">
            ₹{estimatedFirstMonth.toLocaleString('en-IN')}
          </div>
          <span className="text-[11px] text-red-700 font-medium">
            (Setup + 1st Mo)
          </span>
        </div>
        <p className="text-[10px] text-slate-500 pt-1">
          Subsequent billing cycles will be ₹{monthlyTotal.toLocaleString('en-IN')}/month.
        </p>
      </div>

      {/* Primary CTA */}
      <div className="space-y-2">
        <button
          onClick={onProceed || (() => goToScreen('quote'))}
          className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>{t("Proceed to Detailed Quote")}</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>{t("Zero commitment • Instant quote generation")}</span>
        </p>
      </div>

    </div>
  );
};
