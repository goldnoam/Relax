
import React from 'react';
import { CloseIcon, SpinnerIcon } from './icons';
import { Technique } from '../types';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  technique: Technique | null;
  content: string;
  isLoading: boolean;
  error: string | null;
  translations: {
    generatingGuide: string;
    guideFor: string;

    close: string;
    error: string;
    errorMessage: string;
  };
}

const GuideModal: React.FC<GuideModalProps> = ({ isOpen, onClose, technique, content, isLoading, error, translations }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div
        className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-2xl h-[90vh] max-h-[700px] flex flex-col animate-slide-in-up border border-slate-200 dark:border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700 flex-shrink-0">
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
            {translations.guideFor} <span className="text-cyan-600 dark:text-cyan-400">{technique?.title}</span>
          </h2>
          <button onClick={onClose} className="p-1 rounded-full text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-grow">
          {isLoading && (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <SpinnerIcon className="w-12 h-12 text-cyan-500" />
              <p className="mt-4 text-slate-600 dark:text-slate-400">{translations.generatingGuide}</p>
            </div>
          )}
          {error && (
            <div className="flex flex-col items-center justify-center h-full text-center text-red-500">
                <h3 className="font-semibold text-lg">{translations.error}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{translations.errorMessage}</p>
            </div>
          )}
          {!isLoading && !error && content && (
            <div className="prose prose-slate dark:prose-invert max-w-none whitespace-pre-wrap leading-relaxed">
              {content}
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-slate-200 dark:border-slate-700 flex-shrink-0">
          <button
            onClick={onClose}
            className="w-full sm:w-auto sm:float-right bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            {translations.close}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuideModal;
