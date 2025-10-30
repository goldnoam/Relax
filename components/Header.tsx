
import React from 'react';
import { SettingsIcon } from './icons';

interface HeaderProps {
  onSettingsClick: () => void;
  translations: {
    title: string;
    subtitle: string;
    settings: string;
  };
}

const Header: React.FC<HeaderProps> = ({ onSettingsClick, translations }) => {
  return (
    <header className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-lg sticky top-0 z-20 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 border-b border-slate-200 dark:border-slate-800">
          <div className="flex flex-col">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white tracking-tight">{translations.title}</h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">{translations.subtitle}</p>
          </div>
          <button
            onClick={onSettingsClick}
            aria-label={translations.settings}
            className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200 transition-colors duration-200"
          >
            <SettingsIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
