import React from 'react';
import { useApp } from '../../context/AppContext';
import { t } from '../../i18n/translations';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Building2,
  Cpu,
  Layers,
  Sliders,
  DollarSign,
  Wifi,
  Smartphone,
  Mail,
  Lock,
  ChevronDown,
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { goToScreen, demoLogin } = useApp();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-red-100/40 via-purple-50/20 to-transparent pointer-events-none -z-10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-red-700 text-xs font-semibold shadow-2xs">
                <span className="flex h-2 w-2 rounded-full bg-red-600 animate-ping" />
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                <span>{t("Next-Gen Airtel MSME Digital Suite")}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Find the Right Digital Solutions for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-red-700">{t("Your Business")} </span>
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">{t("Tell us about your business, and our AI-powered advisor will understand your needs and recommend the right connectivity and digital solutions.")} </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => goToScreen('login')}
                  className="px-8 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-base shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>{t("Get Started")}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('how-it-works');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-base border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>{t("Explore Solutions")}</span>
                  <ChevronDown className="w-4 h-4 text-slate-500" />
                </button>

                {/* 1-Click Clinic Hackathon Demo Launcher */}
                <button
                  onClick={() => demoLogin('clinic')}
                  className="px-5 py-4 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 text-purple-800 font-bold text-sm hover:border-purple-300 hover:shadow-xs transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span>{t("Launch 🏥 Clinic Demo")}</span>
                </button>
              </div>

              {/* Trust micro-badges */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{t("Zero Hidden Setup Fees")}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{t("99.9% Airtel Network SLA")}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{t("Doorstep SIM & Fiber Delivery")}</span>
                </div>
              </div>
            </div>

            {/* Right Visual Illustration: Modern Architecture */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md bg-white rounded-3xl p-6 shadow-xl border border-slate-200/80">
                {/* Header chip */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[11px] font-mono text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full font-bold border border-purple-200 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />{t("AI Engine Live")} </span>
                </div>

                {/* The 3-tier diagram requested:
                    Your Business
                          +
                      AI Advisor
                          ↓
                    Personalized Digital Solutions
                */}
                <div className="py-6 space-y-4">
                  {/* Step 1: Your Business */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-center gap-3 transition-transform hover:scale-[1.02]">
                    <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{t("Input")} </div>
                      <div className="text-sm font-bold text-slate-900">{t("Your Business")} </div>
                      <div className="text-xs text-slate-500">{t("Type • Size • Locations • Current Setup")} </div>
                    </div>
                  </div>

                  {/* Plus Icon */}
                  <div className="flex justify-center text-slate-400 font-black text-lg">
                    +
                  </div>

                  {/* Step 2: AI Advisor */}
                  <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 p-4 rounded-2xl border border-purple-200 flex items-center gap-3 transition-transform hover:scale-[1.02]">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white flex items-center justify-center font-bold shadow-md shadow-purple-500/20">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-purple-700 uppercase tracking-wide flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />{t("AI Advisor")} </div>
                      <div className="text-sm font-bold text-slate-900">{t("Intelligent Telecom Matching Engine")} </div>
                      <div className="text-xs text-slate-500">{t("Identifies gaps & computes tailored bundle")} </div>
                    </div>
                  </div>

                  {/* Arrow Down */}
                  <div className="flex justify-center text-slate-400 font-black text-xl">
                    ↓
                  </div>

                  {/* Step 3: Personalized Digital Solutions */}
                  <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200 flex items-center gap-3 transition-transform hover:scale-[1.02]">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-md shadow-emerald-500/20">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">{t("Outcome")} </div>
                        <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">{t("92% Fit")} </span>
                      </div>
                      <div className="text-sm font-bold text-slate-900">{t("Personalized Digital Solutions")} </div>
                      <div className="text-xs text-slate-500">{t("Broadband • Fleet SIMs • Email • Security")} </div>
                    </div>
                  </div>
                </div>

                {/* Bottom preview footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 font-medium">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    Calculated in &lt; 3 seconds
                  </span>
                  <button
                    onClick={() => demoLogin('clinic')}
                    className="font-bold text-red-600 hover:text-red-700 cursor-pointer"
                  >{t("Try Sample Run →")} </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-extrabold text-red-600 uppercase tracking-widest">{t("Simple 4-Step Journey")} </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">{t("How UdyamSync Works")} </p>
            <p className="text-base text-slate-600">{t("Transforming how Indian MSMEs adopt telecom and digital infrastructure without sales confusion or hidden overheads.")} </p>
          </div>

          {/* 4 attractive cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200 hover:border-red-200 hover:bg-white hover:shadow-lg transition-all text-left flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-black text-xl mb-4 group-hover:scale-110 transition-transform">
                  1️⃣
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{t("Tell Us About Your Business")} </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{t("Share information about your business and how you currently operate. No technical jargon needed.")} </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs font-semibold text-red-600 flex items-center gap-1">
                <span>{t("Fast 1-minute survey")}</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200 hover:border-purple-200 hover:bg-white hover:shadow-lg transition-all text-left flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-black text-xl mb-4 group-hover:scale-110 transition-transform">
                  2️⃣
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{t("AI Understands Your Needs")} </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{t("Our intelligent advisor identifies your connectivity bottlenecks, team gaps, and digital requirements.")} </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs font-semibold text-purple-700 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t("Explainable AI logic")}</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200 hover:border-emerald-200 hover:bg-white hover:shadow-lg transition-all text-left flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xl mb-4 group-hover:scale-110 transition-transform">
                  3️⃣
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{t("Get Personalized Recommendations")} </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{t("Receive a tailored bundle of products designed specifically for your business type, scale, and budget.")} </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs font-semibold text-emerald-700 flex items-center gap-1">
                <span>{t("Curated for high ROI")}</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200 hover:border-amber-200 hover:bg-white hover:shadow-lg transition-all text-left flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black text-xl mb-4 group-hover:scale-110 transition-transform">
                  4️⃣
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{t("Customize & Get a Transparent Quote")} </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{t("Modify your bundle, toggle add-ons, and instantly see your live monthly and one-time pricing.")} </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs font-semibold text-amber-700 flex items-center gap-1">
                <span>{t("No hidden surprises")}</span>
              </div>
            </div>

          </div>

          {/* Bottom Banner CTA */}
          <div className="mt-16 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 rounded-3xl p-8 sm:p-12 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-xl shadow-red-600/20">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{t("Ready to empower your business with Airtel Digital?")} </h3>
              <p className="text-red-100 text-sm sm:text-base">{t("Join 50,000+ Indian MSMEs using UdyamSync for intelligent telecom discovery.")} </p>
            </div>
            <button
              onClick={() => goToScreen('login')}
              className="px-8 py-4 bg-white text-red-600 hover:bg-red-50 font-bold rounded-xl shadow-md hover:scale-105 transition-transform text-sm sm:text-base whitespace-nowrap cursor-pointer"
            >{t("Start Free Assessment →")} </button>
          </div>

        </div>
      </section>
    </div>
  );
};
