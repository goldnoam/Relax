
import React from 'react';
import { CloseIcon, SunIcon, MoonIcon } from './icons';
import { Theme, Language, LanguageCode } from '../types';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  languageCode: LanguageCode;
  setLanguageCode: (code: LanguageCode) => void;
  languages: Language[];
  translations: {
    settings: string;
    theme: string;
    light: string;
    dark: string;
    language: string;
    about: string;
    aboutText: string;
  };
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, theme, setTheme, languageCode, setLanguageCode, languages, translations }) => {
  if (!isOpen) return null;

  const handleAboutClick = () => {
    alert(translations.aboutText);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div
        className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md m-4 animate-slide-in-up border border-slate-200 dark:border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{translations.settings}</h2>
          <button onClick={onClose} className="p-1 rounded-full text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Theme Selector */}
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{translations.theme}</label>
            <div className="flex items-center space-x-2 bg-slate-100 dark:bg-slate-900 p-1 rounded-lg">
              <button
                onClick={() => setTheme('light')}
                className={`w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-md text-sm font-semibold transition-colors ${theme === 'light' ? 'bg-white text-cyan-600 shadow-sm' : 'text-slate-600 dark:text-slate-300'}`}
              >
                <SunIcon className="w-5 h-5" />
                <span>{translations.light}</span>
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-md text-sm font-semibold transition-colors ${theme === 'dark' ? 'bg-slate-700 text-cyan-400 shadow-sm' : 'text-slate-600 dark:text-slate-300'}`}
              >
                <MoonIcon className="w-5 h-5" />
                <span>{translations.dark}</span>
              </button>
            </div>
          </div>

          {/* Language Selector */}
          <div>
            <label htmlFor="language-select" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{translations.language}</label>
            <select
              id="language-select"
              value={languageCode}
              onChange={(e) => setLanguageCode(e.target.value as LanguageCode)}
              className="w-full bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-600 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>{lang.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="p-4 border-t border-slate-200 dark:border-slate-700">
            <button
              onClick={handleAboutClick}
              className="w-full text-sm text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 py-2 rounded-lg transition-colors"
            >
              {translations.about}
            </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
