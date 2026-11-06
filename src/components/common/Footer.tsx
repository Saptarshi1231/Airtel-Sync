import React from 'react';
import { Sparkles, Shield, PhoneCall, Headphones, Globe, Heart } from 'lucide-react';

import { t } from '../../i18n/translations';
import { useApp } from '../../context/AppContext';
export const Footer: React.FC = () => {
  const { language } = useApp();
  return (
    <footer className="bg-slate-900 text-slate-400 text-sm border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Col */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-black text-lg">
                U
              </div>
              <span className="font-bold text-lg text-white">
                Udyam<span className="text-red-500">Sync</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">{t("Your AI Digital Business Advisor. Simplifying enterprise connectivity, cloud tools, and cyber defense for Indian MSMEs.")} </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>{t("Powered by Airtel Business Infrastructure")} </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">{t("MSME Telecom Solutions")} </h4>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-white cursor-pointer transition-colors">{t("Business Broadband Pro")}</li>
              <li className="hover:text-white cursor-pointer transition-colors">{t("Corporate 5G Fleet SIMs")}</li>
              <li className="hover:text-white cursor-pointer transition-colors">{t("Dedicated Leased Internet")}</li>
              <li className="hover:text-white cursor-pointer transition-colors">{t("SD-WAN Multi-Branch Mesh")}</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">{t("Digital & Cloud Suite")} </h4>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-white cursor-pointer transition-colors">{t("Official WhatsApp Business API")}</li>
              <li className="hover:text-white cursor-pointer transition-colors">{t("Enterprise Custom Domain Email")}</li>
              <li className="hover:text-white cursor-pointer transition-colors">{t("HIPAA & ISO Cloud Storage")}</li>
              <li className="hover:text-white cursor-pointer transition-colors">{t("Endpoint Threat Cybersecurity")}</li>
            </ul>
          </div>

          {/* Column 4: Trust & Support */}
          <div>
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">{t("Airtel MSME Assurance")} </h4>
            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t("99.9% Network SLA")}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <Headphones className="w-4 h-4 text-red-400 shrink-0" />
                <span>{t("4-hour Priority MTTR")}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <Globe className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{t("Zero Hidden Fees Guaranteed")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>{t("© 2026 UdyamSync. Built for Airtel MSME Digital Transformation.")}</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">{t("Privacy Policy")}</span>
            <span className="hover:text-white cursor-pointer">{t("Terms of Service")}</span>
            <span className="hover:text-white cursor-pointer">{t("Security Standards")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
