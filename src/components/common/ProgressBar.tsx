import React from 'react';
import { useApp } from '../../context/AppContext';
import { AppScreen } from '../../types';
import { t } from '../../i18n/translations';

interface ProgressBarProps {
  currentStepIndex: number; // 1 to 4
  totalSteps?: number;
  title?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStepIndex,
  totalSteps = 4,
  title = 'Business Profile',
}) => {
  const { goToScreen } = useApp();

  const stepScreens: AppScreen[] = [
    'discovery-type',
    'discovery-size',
    'discovery-locations',
    'discovery-setup',
  ];

  return (
    <div className="w-full max-w-xl mx-auto mb-8 px-4">
      <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
        <span className="uppercase tracking-wider text-slate-700 font-bold">{t(title)}</span>
        <span className="bg-red-50 text-red-700 px-2.5 py-0.5 rounded-full border border-red-200">
          {t('Step')} {currentStepIndex} {t('of')} {totalSteps}
        </span>
      </div>

      {/* Visual Dot and Line representation: ● ─── ○ ─── ○ ─── ○ */}
      <div className="relative flex items-center justify-between">
        {/* Background track line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 z-0 rounded-full" />
        
        {/* Active fill line */}
        <div
          className="absolute top-1/2 left-0 h-1 bg-red-600 -translate-y-1/2 z-0 rounded-full transition-all duration-300"
          style={{
            width: `${((currentStepIndex - 1) / (totalSteps - 1)) * 100}%`,
          }}
        />

        {/* Dots */}
        {Array.from({ length: totalSteps }).map((_, idx) => {
          const stepNum = idx + 1;
          const isCompleted = stepNum < currentStepIndex;
          const isCurrent = stepNum === currentStepIndex;

          return (
            <button
              key={idx}
              type="button"
              disabled={stepNum > currentStepIndex}
              onClick={() => {
                if (stepNum <= currentStepIndex && stepScreens[idx]) {
                  goToScreen(stepScreens[idx]);
                }
              }}
              className={`relative z-10 flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold transition-all ${
                isCurrent
                  ? 'bg-red-600 text-white ring-4 ring-red-100 shadow-md scale-110'
                  : isCompleted
                  ? 'bg-emerald-600 text-white cursor-pointer hover:bg-emerald-700'
                  : 'bg-white border-2 border-slate-300 text-slate-400'
              }`}
            >
              {isCompleted ? '✓' : stepNum}
            </button>
          );
        })}
      </div>
    </div>
  );
};
