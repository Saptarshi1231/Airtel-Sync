import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { t, LANGUAGES, LanguageCode } from '../../i18n/translations';
import {
  Sparkles,
  Lock,
  Mail,
  Building,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Store,
  UtensilsCrossed,
} from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { login, demoLogin, goToScreen, language, setLanguage } = useApp();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('dr.verma@apexclinic.in');
  const [password, setPassword] = useState('••••••••');
  const [businessName, setBusinessName] = useState('Apex Health Clinic');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, isSignUp ? 'Dr. Verma' : 'Dr. Rajesh Verma', businessName);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="absolute top-5 right-5 flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs shadow-sm">
        <label htmlFor="login-language" className="sr-only">{t('Select language')}</label>
        <select
          id="login-language"
          value={language}
          onChange={event => setLanguage(event.target.value as LanguageCode)}
          aria-label={t('Select language')}
          className="cursor-pointer bg-transparent font-semibold text-slate-700 outline-none"
        >
          {LANGUAGES.map(option => (
            <option key={option.code} value={option.code}>{option.nativeLabel}</option>
          ))}
        </select>
      </div>
      <div className="max-w-md w-full space-y-6">
        
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div
            onClick={() => goToScreen('landing')}
            className="inline-flex items-center gap-2 cursor-pointer group mb-2"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center text-white shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform">
              <span className="font-black text-xl tracking-tighter">U</span>
            </div>
            <span className="font-black text-2xl tracking-tight text-slate-900">
              Udyam<span className="text-red-600">Sync</span>
            </span>
          </div>

          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            {isSignUp ? t('Create your Business Account') : t('Sign in to UdyamSync')}
          </h2>
          <p className="text-xs text-slate-500">
            {isSignUp
              ? t('Join thousands of MSMEs discovering smart digital infrastructure')
              : t('Access your AI digital advisor, active quotes, and service bundles')}
          </p>
        </div>

        {/* Auth Card */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-6">
          
          {/* Quick Demo Login Preset Notice (Top Priority for Hackathon) */}
          <div className="bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50 p-4 rounded-2xl border border-purple-200 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-purple-900">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>{t("Instant Hackathon Demo Login")}</span>
              </div>
              <span className="text-[10px] bg-purple-200/70 text-purple-900 px-2 py-0.5 rounded-full font-bold">{t("No Password Needed")} </span>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <button
                type="button"
                onClick={() => demoLogin('clinic')}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white border border-purple-200 hover:border-purple-400 hover:shadow-xs transition-all text-left group cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-red-600 transition-colors">{t("🏥 Dr. Verma's Clinic (Recommended)")} </div>
                    <div className="text-[11px] text-slate-500">{t("8 employees • 1 location • Clinic Bundle")} </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-purple-500 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => demoLogin('retail')}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white border border-purple-200 hover:border-purple-400 hover:shadow-xs transition-all text-left group cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                    <Store className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-amber-700 transition-colors">{t("🏪 Gupta Kirana Superstore")} </div>
                    <div className="text-[11px] text-slate-500">{t("6 staff • POS & WhatsApp • Retail Suite")} </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-purple-500 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Form divider */}
          <div className="relative flex items-center justify-center">
            <div className="border-t border-slate-200 w-full" />
            <span className="bg-white px-3 text-xs text-slate-400 font-medium uppercase tracking-wider">{t("Or Sign In With Email")} </span>
            <div className="border-t border-slate-200 w-full" />
          </div>

          {/* Standard Form (Simulated Frontend State) */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">{t("Business / Company Name")} </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={businessName}
                    onChange={e => setBusinessName(e.target.value)}
                    placeholder="e.g. Apex Health Clinic"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-all text-slate-800"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">{t("Email Address")} </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="name@business.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-all text-slate-800"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">{t("Password")} </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-all text-slate-800"
                />
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md shadow-red-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{isSignUp ? 'Create Business Account' : 'Sign In'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Toggle between Login and Sign Up */}
          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-xs text-slate-500 hover:text-red-600 font-medium transition-colors cursor-pointer"
            >
              {isSignUp ? (
                <span>{t("Already registered?")} <strong className="text-red-600 font-bold">{t("Sign In")}</strong>
                </span>
              ) : (
                <span>{t("Don't have an account?")} <strong className="text-red-600 font-bold">{t("Sign Up Free")}</strong>
                </span>
              )}
            </button>
          </div>

        </div>

        {/* Security footnote */}
        <div className="text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-slate-400" />
          <span>{t("Secured with Airtel Enterprise Single-Sign-On")}</span>
        </div>

      </div>
    </div>
  );
};
