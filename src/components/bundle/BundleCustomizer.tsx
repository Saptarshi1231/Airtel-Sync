import React from 'react';
import { useApp } from '../../context/AppContext';
import { LivePricingPanel } from './LivePricingPanel';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  Plus,
  Trash2,
  Sliders,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Globe,
  Smartphone,
  MessageSquare,
  Mail,
  Cloud,
  Lock,
  Video,
  CreditCard,
  RefreshCw,
  Network,
} from 'lucide-react';
import { Product } from '../../types';

import { t } from '../../i18n/translations';
const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-5 h-5" />,
  Wifi: <Globe className="w-5 h-5" />,
  Radio: <Zap className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Smartphone: <Smartphone className="w-5 h-5" />,
  Users: <Smartphone className="w-5 h-5" />,
  Layers: <Smartphone className="w-5 h-5" />,
  MessageSquare: <MessageSquare className="w-5 h-5" />,
  Mail: <Mail className="w-5 h-5" />,
  MailCheck: <Mail className="w-5 h-5" />,
  Cloud: <Cloud className="w-5 h-5" />,
  HardDrive: <Cloud className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  ShieldAlert: <ShieldCheck className="w-5 h-5" />,
  Lock: <Lock className="w-5 h-5" />,
  Video: <Video className="w-5 h-5" />,
  CreditCard: <CreditCard className="w-5 h-5" />,
  RefreshCw: <RefreshCw className="w-5 h-5" />,
  Network: <Network className="w-5 h-5" />,
};

export const BundleCustomizer: React.FC = () => {
  const {
    recommendation,
    selectedProducts,
    availableAddOns,
    addProductToBundle,
    removeProductFromBundle,
    goToScreen,
  } = useApp();

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <button
              onClick={() => goToScreen('recommendation')}
              className="text-xs font-semibold text-slate-500 hover:text-red-600 flex items-center gap-1 cursor-pointer transition-colors mb-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{t("Back to Recommendation Overview")}</span>
            </button>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <Sliders className="w-6 h-6 text-red-600" />
              <span>{t("Customize Your Bundle")}</span>
            </h1>
            <p className="text-sm text-slate-500">{t("Add or remove services to match your exact monthly budget and operational scope.")} </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-purple-700 bg-purple-50 px-3 py-1.5 rounded-xl border border-purple-200 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              {recommendation?.bundleName || 'AI Bundle'}
            </span>
          </div>
        </div>

        {/* 2-Column Layout: Left Customizer + Right Live Pricing Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Column: Selected Products & Add-ons */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Section 1: Your Selected Bundle */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/90 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <h2 className="text-lg font-black text-slate-900">{t("Your Selected Bundle")} </h2>
                  <p className="text-xs text-slate-500">{t("Active services currently factored into your recurring total.")} </p>
                </div>
                <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">
                  {selectedProducts.length} Active Services
                </span>
              </div>

              <div className="space-y-3 pt-2">
                {selectedProducts.map(product => (
                  <div
                    key={product.id}
                    className="p-4 rounded-2xl border-2 border-red-100 bg-red-50/20 hover:bg-red-50/40 transition-all flex items-center justify-between gap-4 group"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      {/* Interactive Checkmark / Toggle */}
                      <button
                        type="button"
                        onClick={() => removeProductFromBundle(product.id)}
                        className="w-6 h-6 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 shadow-xs hover:bg-red-700 transition-colors cursor-pointer"
                        title="Remove product"
                      >
                        <Check className="w-4 h-4 stroke-[3]" />
                      </button>

                      <div className="w-10 h-10 rounded-xl bg-white text-red-600 border border-red-200 flex items-center justify-center shrink-0">
                        {iconMap[product.icon] || <Zap className="w-5 h-5" />}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-extrabold text-slate-900 text-sm sm:text-base truncate">
                            {t(product.name)}
                          </h3>
                          <span className="text-[10px] uppercase font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200 shrink-0">
                            {t(product.category)}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 truncate hidden sm:block">
                          {t(product.description)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <div className="text-right">
                        <div className="text-base sm:text-lg font-black text-slate-900">
                          ₹{product.monthlyPrice.toLocaleString('en-IN')}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {product.setupFee > 0 ? `+₹${product.setupFee} setup` : t('Free setup')}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeProductFromBundle(product.id)}
                        className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-100 transition-colors cursor-pointer"
                        title="Remove from bundle"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Recommended Add-ons requested in prompt */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/90 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <h2 className="text-lg font-black text-slate-900">{t("Recommended Add-ons")} </h2>
                  <p className="text-xs text-slate-500">{t("Enhance your setup with plug-and-play modules (WhatsApp API, Failover, CCTV, POS).")} </p>
                </div>
                <span className="text-xs font-bold bg-purple-100 text-purple-800 px-2.5 py-1 rounded-full">{t("Instant Toggle")} </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {availableAddOns.map(addon => (
                  <div
                    key={addon.id}
                    onClick={() => addProductToBundle(addon)}
                    className="p-4 rounded-2xl border-2 border-dashed border-slate-300 hover:border-red-500 hover:bg-slate-50/80 transition-all cursor-pointer flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] uppercase font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                          {t(addon.category)}
                        </span>
                        <div className="w-5 h-5 rounded-md border-2 border-slate-300 group-hover:border-red-600 flex items-center justify-center transition-colors">
                          <Plus className="w-3.5 h-3.5 text-transparent group-hover:text-red-600" />
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 group-hover:bg-red-50 group-hover:text-red-600 transition-colors">
                          {iconMap[addon.icon] || <Zap className="w-4 h-4" />}
                        </div>
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-sm group-hover:text-red-600 transition-colors leading-tight">
                            {t(addon.name)}
                          </h4>
                          <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5">
                            {t(addon.description)}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                      <span className="font-black text-slate-900 text-sm">
                        ₹{addon.monthlyPrice.toLocaleString('en-IN')}
                        <span className="text-xs font-normal text-slate-500">/mo</span>
                      </span>

                      <span className="text-xs font-bold text-red-600 group-hover:underline flex items-center gap-1">
                        <span>{t("+ Add to Bundle")}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Live Pricing Panel */}
          <div className="lg:col-span-4">
            <LivePricingPanel />
          </div>

        </div>

      </div>
    </div>
  );
};
