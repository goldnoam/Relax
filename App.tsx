
import React, { useState, useEffect, useCallback } from 'react';
import { Theme, LanguageCode, Technique } from './types';
import { TECHNIQUES, LANGUAGES, TRANSLATIONS } from './constants';
import { getGuidedScript } from './services/geminiService';
import Header from './components/Header';
import TechniqueCard from './components/TechniqueCard';
import SettingsModal from './components/SettingsModal';
import GuideModal from './components/GuideModal';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [languageCode, setLanguageCode] = useState<LanguageCode>('en');
  
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  
  const [currentTechnique, setCurrentTechnique] = useState<Technique | null>(null);
  const [guideContent, setGuideContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const handleOpenGuide = useCallback((technique: Technique) => {
    setCurrentTechnique(technique);
    setIsGuideOpen(true);
    setIsLoading(true);
    setError(null);
    setGuideContent('');

    const selectedLanguage = LANGUAGES.find(lang => lang.code === languageCode) || LANGUAGES[0];

    getGuidedScript(technique, selectedLanguage.name)
      .then(script => {
        setGuideContent(script);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [languageCode]);

  const translations = TRANSLATIONS[languageCode];

  return (
    <div className="bg-slate-100 dark:bg-slate-900 min-h-screen text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <Header 
        onSettingsClick={() => setIsSettingsOpen(true)}
        translations={translations}
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {TECHNIQUES.map(technique => (
            <TechniqueCard 
              key={technique.id} 
              technique={technique}
              onGuide={handleOpenGuide}
              guideMeText={translations.guideMe}
            />
          ))}
        </div>
      </main>

      <SettingsModal 
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        theme={theme}
        setTheme={setTheme}
        languageCode={languageCode}
        setLanguageCode={setLanguageCode}
        languages={LANGUAGES}
        translations={translations}
      />
      
      <GuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
        technique={currentTechnique}
        content={guideContent}
        isLoading={isLoading}
        error={error}
        translations={translations}
      />
    </div>
  );
};

export default App;
