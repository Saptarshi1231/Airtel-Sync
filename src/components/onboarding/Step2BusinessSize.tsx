import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ProgressBar } from '../common/ProgressBar';
import { EMPLOYEE_TIERS } from '../../data/businessOptions';
import { ArrowRight, ArrowLeft, Users, Check, Sparkles } from 'lucide-react';

import { t } from '../../i18n/translations';
export const Step2BusinessSize: React.FC = () => {
  const { businessProfile, updateProfile, goToScreen } = useApp();
  const [selectedTier, setSelectedTier] = useState<string>(
    businessProfile.employeeTier || '3–10 employees'
  );
  const [employeeCount, setEmployeeCount] = useState<number>(
    businessProfile.employeeCount || 8
  );

  const handleSelect = (label: string, count: number) => {
    setSelectedTier(label);
    setEmployeeCount(count);
    updateProfile({
      employeeTier: label,
      employeeCount: count,
    });
  };

  const handleNext = () => {
    updateProfile({
      employeeTier: selectedTier,
      employeeCount,
    });
    goToScreen('discovery-locations');
  };

  return (
    <div className="min-h-[85vh] flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto w-full space-y-6">
        
        {/* Progress Bar */}
        <ProgressBar currentStepIndex={2} totalSteps={4} title="Business Profile" />

        {/* Heading */}
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-200">{t("Question 2 of 4")} </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{t("How large is your business?")} </h2>
          <p className="text-sm text-slate-600">{t("We use your team size to size corporate SIM fleets, Wi-Fi router capacity, and cloud licenses.")} </p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {EMPLOYEE_TIERS.map(item => {
            const isSelected = selectedTier === item.label;

            return (
              <div
                key={item.value}
                onClick={() => handleSelect(item.label, item.count)}
                className={`relative p-5 rounded-2xl border-2 transition-all cursor-pointer text-left flex flex-col justify-between ${
                  isSelected
                    ? 'border-red-600 bg-red-50/50 shadow-md ring-2 ring-red-500/20'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      {t(item.badge)}
                    </span>
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all ${
                        isSelected
                          ? 'bg-red-600 border-red-600 text-white'
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-lg">
                    {t(item.label)}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {t(item.description)}
                  </p>
                </div>

                {item.popular && (
                  <div className="mt-4 pt-2 border-t border-red-100 flex items-center gap-1 text-[11px] font-semibold text-red-600">
                    <Sparkles className="w-3 h-3" />
                    <span>{t("Recommended for Clinic Demo (8 Staff)")}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Exact Employee Count Fine-Tuner */}
        <div className="p-4 bg-white rounded-2xl border border-slate-200 flex items-center justify-between shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-700">{t("Exact Team Size")}</div>
              <div className="text-xs text-slate-500">{t("Fine-tune staff count for exact SIM pack sizing")}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                const newCount = Math.max(1, employeeCount - 1);
                setEmployeeCount(newCount);
                updateProfile({ employeeCount: newCount });
              }}
              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-base flex items-center justify-center transition-colors cursor-pointer"
            >
              -
            </button>
            <span className="font-black text-lg text-slate-900 w-8 text-center">
              {employeeCount}
            </span>
            <button
              type="button"
              onClick={() => {
                const newCount = employeeCount + 1;
                setEmployeeCount(newCount);
                updateProfile({ employeeCount: newCount });
              }}
              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-base flex items-center justify-center transition-colors cursor-pointer"
            >
              +
            </button>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="pt-4 flex items-center justify-between border-t border-slate-200">
          <button
            onClick={() => goToScreen('discovery-type')}
            className="px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t("Previous")}</span>
          </button>

          <button
            onClick={handleNext}
            className="px-7 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md shadow-red-500/25 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>{t("Next: Locations")}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
