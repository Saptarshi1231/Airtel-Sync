import React from 'react';
import { useApp } from '../../context/AppContext';
import { t } from '../../i18n/translations';
import {
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Package,
  PhoneCall,
  Download,
} from 'lucide-react';

export const CheckoutSuccessModal: React.FC = () => {
  const { completedOrder, goToScreen, recommendation, monthlyTotal, user } = useApp();

  if (!completedOrder) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl p-6 sm:p-10 max-w-lg w-full shadow-2xl border border-slate-200 text-center space-y-6 animate-scaleIn relative overflow-hidden">
        
        {/* Top Celebration Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-red-500" />

        {/* Big celebration badge */}
        <div className="w-20 h-20 rounded-3xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center text-4xl shadow-inner border border-emerald-200 animate-bounce-subtle">
          🎉
        </div>

        {/* Title and subtitle */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{t("Great Choice!")} </h2>
          <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">{t("Your personalized business solution has been prepared successfully.")} </p>
        </div>

        {/* Summary Card inside modal */}
        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/90 text-left space-y-3">
          <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200">
            <span className="text-slate-500 font-semibold">{t("Reference Order ID")}</span>
            <span className="font-mono font-bold text-slate-900">{completedOrder.orderId}</span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{t("Selected Bundle")} </div>
              <div className="text-sm font-extrabold text-slate-900">
                {completedOrder.bundleName}
              </div>
              <div className="text-xs text-slate-500">
                {completedOrder.itemCount} Enterprise Services Included
              </div>
            </div>

            <div className="text-right">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{t("Monthly Estimated Cost")} </div>
              <div className="text-xl font-black text-emerald-600">
                ₹{completedOrder.monthlyTotal.toLocaleString('en-IN')}
                <span className="text-xs font-semibold text-slate-500">/mo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps as requested in prompt */}
        <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 text-left space-y-2 text-xs text-indigo-950">
          <div className="font-extrabold text-indigo-900 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
            <Clock className="w-3.5 h-3.5 text-indigo-600" />
            <span>{t("Next Steps:")}</span>
          </div>
          <p className="leading-relaxed">
            A dedicated Airtel Business Relationship Manager will contact{' '}
            <strong>{user.name || 'you'}</strong> {t("within")} <strong>{t("2 business hours")}</strong> {t("to schedule doorstep biometric KYC and fiber dispatch.")} </p>
        </div>

        {/* Button: Go to Dashboard */}
        <div className="pt-2 space-y-2">
          <button
            onClick={() => goToScreen('dashboard')}
            className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-base shadow-xl shadow-red-500/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{t("Go to Dashboard")}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
};
