import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Sparkles,
  ShieldCheck,
  Building2,
  ChevronRight,
  User,
  RotateCcw,
  SlidersHorizontal,
  FileText,
  LayoutDashboard,
  CheckCircle,
  Languages,
} from 'lucide-react';
import { AppScreen } from '../../types';
import { LANGUAGES, LanguageCode, t } from '../../i18n/translations';

export const Navbar: React.FC = () => {
  const {
    language,
    setLanguage,
    currentScreen,
    goToScreen,
    user,
    logout,
    demoLogin,
    loadPresetScenario,
    resetJourney,
  } = useApp();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo and Brand */}
          <div
            onClick={() => goToScreen('landing')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center text-white shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform">
              <span className="font-black text-xl tracking-tighter">U</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-red-600 transition-colors">
                  Udyam<span className="text-red-600">Sync</span>
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold bg-red-50 text-red-700 px-2 py-0.5 rounded-full border border-red-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
                  Airtel MSME
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium -mt-0.5 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-purple-600 inline" />{t("Your AI Digital Business Advisor")} </span>
            </div>
          </div>

          {/* Quick Demo Jumpers / Flow Navigation (Ideal for Hackathon Evaluation) */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-100/90 p-1 rounded-xl text-xs font-semibold text-slate-600">
            <button
              onClick={() => goToScreen('landing')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                currentScreen === 'landing'
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'hover:text-slate-900'
              }`}
            >{t("Home")} </button>
            <button
              onClick={() => {
                demoLogin('clinic');
                goToScreen('discovery-type');
              }}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                currentScreen.startsWith('discovery') || currentScreen === 'requirements'
                  ? 'bg-white text-red-600 shadow-xs font-bold'
                  : 'hover:text-slate-900'
              }`}
            >{t("Discovery")} </button>
            <button
              onClick={() => {
                loadPresetScenario('clinic');
                goToScreen('recommendation');
              }}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                currentScreen === 'recommendation'
                  ? 'bg-white text-purple-700 shadow-xs font-bold'
                  : 'hover:text-slate-900'
              }`}
            >{t("AI Bundle")} </button>
            <button
              onClick={() => {
                loadPresetScenario('clinic');
                goToScreen('customize');
              }}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                currentScreen === 'customize'
                  ? 'bg-white text-red-600 shadow-xs font-bold'
                  : 'hover:text-slate-900'
              }`}
            >{t("Customizer")} </button>
            <button
              onClick={() => {
                loadPresetScenario('clinic');
                goToScreen('quote');
              }}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                currentScreen === 'quote'
                  ? 'bg-white text-emerald-700 shadow-xs font-bold'
                  : 'hover:text-slate-900'
              }`}
            >{t("Quote & Bill")} </button>
            <button
              onClick={() => {
                demoLogin('clinic');
                goToScreen('dashboard');
              }}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                currentScreen === 'dashboard'
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'hover:text-slate-900'
              }`}
            >{t("Dashboard")} </button>
          </div>

          {/* Right Action / Auth Button */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-slate-700 shadow-xs">
              <Languages className="h-4 w-4 text-red-600" aria-hidden="true" />
              <label htmlFor="app-language" className="sr-only">{t('Select language')}</label>
              <select
                id="app-language"
                value={language}
                onChange={event => setLanguage(event.target.value as LanguageCode)}
                aria-label={t('Select language')}
                className="max-w-[94px] cursor-pointer bg-transparent text-xs font-semibold outline-none"
              >
                {LANGUAGES.map(option => (
                  <option key={option.code} value={option.code}>{option.nativeLabel}</option>
                ))}
              </select>
            </div>
            {user.isAuthenticated ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => goToScreen('dashboard')}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-slate-300 text-xs text-slate-800 transition-colors"
                  title={t("View Dashboard")}
                >
                  <div className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs">
                    {user.name.charAt(0)}
                  </div>
                  <span className="hidden md:inline font-medium truncate max-w-[120px]">
                    {user.name.split(' ')[0]}
                  </span>
                </button>

                <button
                  onClick={() => demoLogin('clinic')}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
                  title={t("Run Clinic Demo")}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t("Demo Clinic")}</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => demoLogin('clinic')}
                  className="px-3.5 py-1.5 rounded-lg border border-red-200 text-red-700 bg-red-50 hover:bg-red-100 text-xs sm:text-sm font-semibold transition-all shadow-2xs"
                >{t("Demo Login")} </button>
                <button
                  onClick={() => goToScreen('login')}
                  className="px-4 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow-md"
                >{t("Sign In")} </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
