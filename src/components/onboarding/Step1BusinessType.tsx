import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ProgressBar } from '../common/ProgressBar';
import { BUSINESS_TYPES } from '../../data/businessOptions';
import { t } from '../../i18n/translations';
import {
  ArrowRight,
  ArrowLeft,
  Store,
  Stethoscope,
  UtensilsCrossed,
  GraduationCap,
  Briefcase,
  Factory,
  Building2,
  Edit3,
  Check,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Store: <Store className="w-6 h-6" />,
  Stethoscope: <Stethoscope className="w-6 h-6" />,
  UtensilsCrossed: <UtensilsCrossed className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  Factory: <Factory className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  Edit3: <Edit3 className="w-6 h-6" />,
};

export const Step1BusinessType: React.FC = () => {
  const { businessProfile, updateProfile, goToScreen } = useApp();
  const [selectedType, setSelectedType] = useState<string>(
    businessProfile.businessType || 'Clinic / Healthcare'
  );
  const [customText, setCustomText] = useState<string>(
    businessProfile.customBusinessType || ''
  );

  const handleSelect = (name: string) => {
    setSelectedType(name);
    updateProfile({
      businessType: name,
      customBusinessType: name === 'Other' ? customText : undefined,
    });
  };

  const handleNext = () => {
    updateProfile({
      businessType: selectedType,
      customBusinessType: selectedType === 'Other' ? customText : undefined,
    });
    goToScreen('discovery-size');
  };

  return (
    <div className="min-h-[85vh] flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto w-full space-y-6">
        
        {/* Progress Bar */}
        <ProgressBar currentStepIndex={1} totalSteps={4} title="Business Profile" />

        {/* Heading */}
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-200">{t("Question 1 of 4")} </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{t("What kind of business do you run?")} </h2>
          <p className="text-sm text-slate-600">{t("This helps our AI advisor customize the ideal bandwidth, compliance, and communication tools.")} </p>
        </div>

        {/* Grid of Selectable Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
          {BUSINESS_TYPES.map(item => {
            const isSelected = selectedType === item.name;

            return (
              <div
                key={item.id}
                onClick={() => handleSelect(item.name)}
                className={`relative p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-4 text-left ${
                  isSelected
                    ? 'border-red-600 bg-red-50/50 shadow-md ring-2 ring-red-500/20'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                {/* Icon Box */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-red-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {iconMap[item.icon] || <Store className="w-6 h-6" />}
                </div>

                {/* Details */}
                <div className="flex-1 pr-6">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-slate-900 text-base">
                      {t(item.name)}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                    {t(item.tagline)}
                  </p>
                </div>

                {/* Selection Check Indicator */}
                <div
                  className={`absolute top-4 right-4 w-5 h-5 rounded-full flex items-center justify-center border transition-all ${
                    isSelected
                      ? 'bg-red-600 border-red-600 text-white'
                      : 'border-slate-300 bg-white'
                  }`}
                >
                  {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Conditional "Other" text input */}
        {selectedType === 'Other' && (
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 animate-fadeIn">
            <label className="block text-xs font-bold text-slate-700">{t("Please specify your business type:")} </label>
            <input
              type="text"
              value={customText}
              onChange={e => {
                setCustomText(e.target.value);
                updateProfile({ customBusinessType: e.target.value });
              }}
              placeholder="e.g. Diagnostic Lab, Law Firm, Gym, Event Agency..."
              className="w-full px-4 py-2.5 bg-white rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 text-slate-800"
            />
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="pt-4 flex items-center justify-between border-t border-slate-200">
          <button
            onClick={() => goToScreen('welcome')}
            className="px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t("Previous")}</span>
          </button>

          <button
            onClick={handleNext}
            className="px-7 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md shadow-red-500/25 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>{t("Next: Business Size")}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
