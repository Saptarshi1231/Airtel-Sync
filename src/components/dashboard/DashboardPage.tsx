import React from 'react';
import { useApp } from '../../context/AppContext';
import { t } from '../../i18n/translations';
import {
  Sparkles,
  Sliders,
  CheckCircle2,
  Building2,
  DollarSign,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  PhoneCall,
  Wifi,
  Users,
  FileText,
  PackageCheck,
  Zap,
} from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const {
    user,
    businessProfile,
    recommendation,
    selectedProducts,
    monthlyTotal,
    completedOrder,
    goToScreen,
    resetJourney,
    demoLogin,
  } = useApp();

  // Dynamic greeting based on time of day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return t('Good morning');
    if (hour < 17) return t('Good afternoon');
    return t('Good evening');
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Welcome Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-2xl">👋</span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {getGreeting()}, {user.name ? user.name.split(' ')[0] : t('Partner')}
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-slate-500">{t("Welcome to your Airtel MSME Digital Control Center:")} <strong>{businessProfile.businessName || t('Your Business')}</strong>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => goToScreen('customize')}
              className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <Sliders className="w-4 h-4" />
              <span>{t("⚙️ Customize My Bundle")}</span>
            </button>

            <button
              onClick={resetJourney}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4 text-slate-500" />
              <span>{t("Start New Journey")}</span>
            </button>
          </div>
        </div>

        {/* Digital Business Journey Progress Tracker requested in prompt */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-500">{t("Your Digital Business Journey")} </h2>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-1">
            <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-xs font-bold text-emerald-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{t("Business Profile Completed")}</span>
            </div>

            <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-xs font-bold text-emerald-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{t("Requirements Identified")}</span>
            </div>

            <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-xs font-bold text-emerald-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{t("Bundle Generated")}</span>
            </div>

            <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-xs font-bold text-emerald-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{t("Quote Ready")}</span>
            </div>

            <div
              className={`p-3 rounded-2xl border flex items-center gap-2 text-xs font-bold ${
                completedOrder
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                  : 'bg-slate-50 border-slate-200 text-slate-400'
              }`}
            >
              {completedOrder ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              ) : (
                <span className="w-4 h-4 rounded-full border-2 border-slate-300 inline-block" />
              )}
              <span>{completedOrder ? 'Checkout Confirmed' : 'Checkout'}</span>
            </div>
          </div>
        </div>

        {/* 4 Dashboard Cards requested in prompt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: 🤖 My Recommended Bundle */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/90 flex flex-col justify-between hover:shadow-md transition-shadow group">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                🤖
              </div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400">{t("My Recommended Bundle")} </div>
              <h3 className="font-extrabold text-slate-900 text-base group-hover:text-red-600 transition-colors">
                {recommendation?.bundleName || 'Professional Clinic Digital Bundle'}
              </h3>
              <p className="text-xs text-slate-500">
                {selectedProducts.length} tailored telecom and cloud tools active
              </p>
            </div>
            <button
              onClick={() => goToScreen('recommendation')}
              className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1 cursor-pointer"
            >
              <span>{t("View Bundle Specs →")}</span>
            </button>
          </div>

          {/* Card 2: 💰 Monthly Estimated Cost */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/90 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                💰
              </div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400">{t("Monthly Estimated Cost")} </div>
              <h3 className="text-2xl font-black text-slate-900">
                ₹{monthlyTotal.toLocaleString('en-IN')}
                <span className="text-xs font-medium text-slate-500">/mo</span>
              </h3>
              <p className="text-xs text-slate-500">{t("Single unified Airtel GST invoice with zero hidden overheads")} </p>
            </div>
            <button
              onClick={() => goToScreen('quote')}
              className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
            >
              <span>{t("View Itemized Bill →")}</span>
            </button>
          </div>

          {/* Card 3: 🏢 My Business Profile */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/90 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
                🏢
              </div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400">{t("My Business Profile")} </div>
              <h3 className="font-extrabold text-slate-900 text-base">
                {t(businessProfile.businessType)}
              </h3>
              <p className="text-xs text-slate-500">
                {businessProfile.employeeCount} Employees • {t(businessProfile.locationsTier)}
              </p>
            </div>
            <button
              onClick={() => goToScreen('profile-summary')}
              className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-slate-700 hover:text-red-600 flex items-center gap-1 cursor-pointer"
            >
              <span>{t("Edit Profile Data →")}</span>
            </button>
          </div>

          {/* Card 4: ⚙️ Customize My Bundle */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/90 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                ⚙️
              </div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400">{t("Customize My Bundle")} </div>
              <h3 className="font-extrabold text-slate-900 text-base">{t("Add-on Store")} </h3>
              <p className="text-xs text-slate-500">{t("Toggle WhatsApp API, CCTV stream, or backup failover")} </p>
            </div>
            <button
              onClick={() => goToScreen('customize')}
              className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1 cursor-pointer"
            >
              <span>{t("Manage Products →")}</span>
            </button>
          </div>

        </div>

        {/* Current Active Products in Bundle List */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/90 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-base font-extrabold text-slate-900">{t("Active Telecom & Digital Services in Your Plan")} </h3>
            <span className="text-xs text-slate-500">{t("Priority Airtel 4-Hour Response Active")} </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {selectedProducts.map(item => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between"
              >
                <div>
                  <div className="font-bold text-slate-900 text-sm">{t(item.name)}</div>
                  <div className="text-[11px] text-slate-500">{t(item.category)}</div>
                </div>
                <div className="text-right">
                  <div className="font-black text-slate-900 text-sm">
                    ₹{item.monthlyPrice.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[10px] text-emerald-600 font-bold">{t("Active")}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Test Other Industry Profiles (Great for Hackathon judges!) */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>{t("Test Other MSME Archetypes")}</span>
              </h3>
              <p className="text-xs text-slate-300">{t("Experience how UdyamSync's AI engine instantly recalculates for different industries.")} </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <button
              onClick={() => {
                demoLogin('clinic');
                goToScreen('recommendation');
              }}
              className="p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 text-left transition-all cursor-pointer"
            >
              <div className="font-bold text-sm text-white">{t("🏥 Small Clinic")}</div>
              <div className="text-xs text-slate-300 mt-0.5">{t("Clinic Digital Bundle • 92% Match")}</div>
            </button>

            <button
              onClick={() => {
                demoLogin('retail');
                goToScreen('recommendation');
              }}
              className="p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 text-left transition-all cursor-pointer"
            >
              <div className="font-bold text-sm text-white">{t("🏪 Retail Store")}</div>
              <div className="text-xs text-slate-300 mt-0.5">{t("Smart Retail Suite • POS & WhatsApp")}</div>
            </button>

            <button
              onClick={() => {
                demoLogin('restaurant');
                goToScreen('recommendation');
              }}
              className="p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 text-left transition-all cursor-pointer"
            >
              <div className="font-bold text-sm text-white">{t("🍽️ Restaurant & Café")}</div>
              <div className="text-xs text-slate-300 mt-0.5">{t("Hospitality Pack • CCTV & Failover")}</div>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
