import React from 'react';

export type Theme = 'light' | 'dark';

export type LanguageCode = 'en' | 'he' | 'fr' | 'hi' | 'ru' | 'es' | 'yi' | 'pt' | 'ar';

export interface Language {
  code: LanguageCode;
  name: string;
}

export interface Technique {
  id: string;
  title: string;
  description: string;
  duration: string;
  illustration: React.FC<{ className?: string }>;
}

export type TechniqueTranslations = {
  [key: string]: {
    title: string;
    description: string;
  }
};

export type Translations = {
  [key in LanguageCode]: {
    title: string;
    subtitle: string;
    settings: string;
    theme: string;
    light: string;
    dark: string;
    language: string;
    about: string;
    guideMe: string;
    generatingGuide: string;
    guideFor: string;
    close: string;
    error: string;
    errorMessage: string;
    aboutText: string;
    techniques: TechniqueTranslations;
  }
};
