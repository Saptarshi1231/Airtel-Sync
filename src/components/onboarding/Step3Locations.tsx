import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ProgressBar } from '../common/ProgressBar';
import { LOCATION_OPTIONS } from '../../data/businessOptions';
import { ArrowRight, ArrowLeft, Building2, Check, MapPin } from 'lucide-react';

import { t } from '../../i18n/translations';
export const Step3Locations: React.FC = () => {
  const { businessProfile, updateProfile, goToScreen } = useApp();
  const [selectedTier, setSelectedTier] = useState<string>(
    businessProfile.locationsTier || '1 location'
  );
  const [locationsCount, setLocationsCount] = useState<number>(
    businessProfile.locationsCount || 1
  );

  const handleSelect = (label: string, count: number) => {
    setSelectedTier(label);
    setLocationsCount(count);
    updateProfile({
      locationsTier: label,
      locationsCount: count,
    });
  };

  const handleNext = () => {
    updateProfile({
      locationsTier: selectedTier,
      locationsCount,
    });
    goToScreen('discovery-setup');
  };

  return (
    <div className="min-h-[85vh] flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto w-full space-y-6">
        
        {/* Progress Bar */}
        <ProgressBar currentStepIndex={3} totalSteps={4} title="Business Profile" />

        {/* Heading */}
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-200">{t("Question 3 of 4")} </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{t("How many locations does your business have?")} </h2>
          <p className="text-sm text-slate-600">{t("Multiple branches benefit from centralized SD-WAN routing and single consolidated billing.")} </p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 gap-3.5 pt-2">
          {LOCATION_OPTIONS.map(item => {
            const isSelected = selectedTier === item.label;

            return (
              <div
                key={item.value}
                onClick={() => handleSelect(item.label, item.count)}
                className={`relative p-5 rounded-2xl border-2 transition-all cursor-pointer text-left flex items-center justify-between ${
                  isSelected
                    ? 'border-red-600 bg-red-50/50 shadow-md ring-2 ring-red-500/20'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-red-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                        {t(item.label)}
                      </h3>
                      <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                        {t(item.tag)}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {t(item.description)}
                    </p>
                  </div>
                </div>

                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all shrink-0 ${
                    isSelected
                      ? 'bg-red-600 border-red-600 text-white'
                      : 'border-slate-300 bg-white'
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="pt-4 flex items-center justify-between border-t border-slate-200">
          <button
            onClick={() => goToScreen('discovery-size')}
            className="px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t("Previous")}</span>
          </button>

          <button
            onClick={handleNext}
            className="px-7 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md shadow-red-500/25 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>{t("Next: Current Setup")}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
