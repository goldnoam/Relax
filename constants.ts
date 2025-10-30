
import { Technique, Language, Translations } from './types';
import {
  MindfulBreathingIcon,
  BodyScanIcon,
  MindfulEatingIcon,
  MindfulWalkingIcon,
  GroundingIcon,
  DiaphragmaticBreathingIcon,
  MuscleRelaxationIcon,
  VisualizationIcon
} from './components/icons';


export const TECHNIQUES: Technique[] = [
  {
    id: 'mindful-breathing',
    title: 'Mindful Breathing',
    description: 'The foundational practice of focusing on the physical sensation of your breath to anchor yourself in the present moment.',
    duration: '3-5 Min',
    illustration: MindfulBreathingIcon,
  },
  {
    id: 'body-scan',
    title: 'Body Scan Meditation',
    description: 'A systematic scan of the body to notice sensations without judgment, promoting deep relaxation and body awareness.',
    duration: '10-15 Min',
    illustration: BodyScanIcon,
  },
  {
    id: 'mindful-eating',
    title: 'Mindful Eating',
    description: 'Using all your senses to experience and enjoy your food, fostering a greater appreciation and a healthier relationship with eating.',
    duration: '5-10 Min',
    illustration: MindfulEatingIcon,
  },
  {
    id: 'mindful-walking',
    title: 'Mindful Walking',
    description: 'Bringing your complete attention to the physical experience of walking, connecting your body and mind with each step.',
    duration: '5-10 Min',
    illustration: MindfulWalkingIcon,
  },
  {
    id: '54321-grounding',
    title: '5-4-3-2-1 Grounding',
    description: 'A powerful technique to pull you back to the present moment using your five senses, especially useful during times of anxiety.',
    duration: '2-3 Min',
    illustration: GroundingIcon,
  },
  {
    id: 'diaphragmatic-breathing',
    title: 'Deep Diaphragmatic Breathing',
    description: 'Also known as "belly breathing," this technique encourages full oxygen exchange to trigger the body\'s natural relaxation response.',
    duration: '5-7 Min',
    illustration: DiaphragmaticBreathingIcon,
  },
  {
    id: 'progressive-muscle-relaxation',
    title: 'Progressive Muscle Relaxation',
    description: 'A method of tensing and then releasing different muscle groups to achieve a state of deep physical relaxation.',
    duration: '10-15 Min',
    illustration: MuscleRelaxationIcon,
  },
  {
    id: 'visualization',
    title: 'Visualization / Guided Imagery',
    description: 'Using your imagination to create a peaceful, calming scene to immerse yourself in, reducing stress and promoting tranquility.',
    duration: '10-15 Min',
    illustration: VisualizationIcon,
  },
];

export const LANGUAGES: Language[] = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'ru', name: 'Русский' },
  { code: 'ar', name: 'العربية' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'pt', name: 'Português' },
  { code: 'he', name: 'עברית' },
  { code: 'yi', name: 'ייִדיש' },
];

const baseTranslations = {
  title: 'Relax',
  subtitle: 'Your Relaxation Guide',
  settings: 'Settings',
  theme: 'Theme',
  light: 'Light',
  dark: 'Dark',
  language: 'Language',
  about: 'About',
  guideMe: 'Guide Me',
  generatingGuide: 'Generating your guide...',
  guideFor: 'A Guide To',
  close: 'Close',
  error: 'An Error Occurred',
  errorMessage: 'Failed to generate guidance. Please try again later.',
  aboutText: 'Relax by Noam Gold 2025'
};

export const TRANSLATIONS: Translations = {
  en: { ...baseTranslations },
  es: { ...baseTranslations, title: 'Relax', subtitle: 'Tu Guía de Relajación', settings: 'Ajustes', theme: 'Tema', light: 'Claro', dark: 'Oscuro', language: 'Idioma', about: 'Sobre', guideMe: 'Guiarme', generatingGuide: 'Generando tu guía...', guideFor: 'Una guía para', close: 'Cerrar', error: 'Ocurrió un error', errorMessage: 'No se pudo generar la guía. Por favor, inténtalo de nuevo más tarde.', aboutText: 'Relax por Noam Gold 2025' },
  fr: { ...baseTranslations, title: 'Relax', subtitle: 'Votre Guide de Relaxation', settings: 'Paramètres', theme: 'Thème', light: 'Clair', dark: 'Sombre', language: 'Langue', about: 'À propos', guideMe: 'Guidez-moi', generatingGuide: 'Génération de votre guide...', guideFor: 'Un guide pour', close: 'Fermer', error: 'Une erreur est survenue', errorMessage: 'Échec de la génération du guide. Veuillez réessayer plus tard.', aboutText: 'Relax par Noam Gold 2025' },
  ru: { ...baseTranslations, title: 'Relax', subtitle: 'Ваш Гид по Релаксации', settings: 'Настройки', theme: 'Тема', light: 'Светлая', dark: 'Темная', language: 'Язык', about: 'О приложении', guideMe: 'Направляй меня', generatingGuide: 'Создание вашего руководства...', guideFor: 'Руководство по', close: 'Закрыть', error: 'Произошла ошибка', errorMessage: 'Не удалось создать руководство. Пожалуйста, попробуйте позже.', aboutText: 'Relax от Ноама Голда 2025' },
  ar: { ...baseTranslations, title: 'Relax', subtitle: 'دليلك للاسترخاء', settings: 'الإعدادات', theme: 'المظهر', light: 'فاتح', dark: 'داكن', language: 'اللغة', about: 'حول', guideMe: 'أرشدني', generatingGuide: 'جاري إنشاء دليلك...', guideFor: 'دليل إلى', close: 'إغلاق', error: 'حدث خطأ', errorMessage: 'فشل في إنشاء الإرشاد. يرجى المحاولة مرة أخرى لاحقًا.', aboutText: 'Relax بواسطة نعوم جولد 2025' },
  hi: { ...baseTranslations, title: 'Relax', subtitle: 'आपकी रिलैक्सेशन गाइड', settings: 'सेटिंग्स', theme: 'थीम', light: 'लाइट', dark: 'डार्क', language: 'भाषा', about: 'बारे में', guideMe: 'मेरा मार्गदर्शन करें', generatingGuide: 'आपकी गाइड तैयार हो रही है...', guideFor: 'एक गाइड', close: 'बंद करें', error: 'एक त्रुटि हुई', errorMessage: 'मार्गदर्शन उत्पन्न करने में विफल। कृपया बाद में पुन: प्रयास करें।', aboutText: 'नोआम गोल्ड द्वारा आराम 2025' },
  pt: { ...baseTranslations, title: 'Relax', subtitle: 'Seu Guia de Relaxamento', settings: 'Configurações', theme: 'Tema', light: 'Claro', dark: 'Escuro', language: 'Idioma', about: 'Sobre', guideMe: 'Guie-me', generatingGuide: 'Gerando seu guia...', guideFor: 'Um Guia Para', close: 'Fechar', error: 'Ocorreu um Erro', errorMessage: 'Falha ao gerar a orientação. Por favor, tente novamente mais tarde.', aboutText: 'Relax por Noam Gold 2025' },
  he: { ...baseTranslations, title: 'Relax', subtitle: 'המדריך שלך לרגיעה', settings: 'הגדרות', theme: 'ערכת נושא', light: 'בהיר', dark: 'כהה', language: 'שפה', about: 'אודות', guideMe: 'הדריכני', generatingGuide: 'יוצר את המדריך שלך...', guideFor: 'מדריך ל', close: 'סגור', error: 'אירעה שגיאה', errorMessage: 'יצירת המדריך נכשלה. אנא נסה שוב מאוחר יותר.', aboutText: 'Relax by Noam Gold 2025' },
  yi: { ...baseTranslations, title: 'Relax', subtitle: 'דיין רילאַקסיישאַן גייד', settings: 'סעטטינגס', theme: 'טעמע', light: 'ליכט', dark: 'פינצטער', language: 'שפּראַך', about: 'וועגן', guideMe: 'פיר מיך', generatingGuide: 'דזשענערייטינג דיין פירער...', guideFor: 'א גייד צו', close: 'פאַרמאַכן', error: 'אַ טעות איז פארגעקומען', errorMessage: 'נישט געקענט צו דזשענערייט גיידאַנס. ביטע פּרובירן ווידער שפּעטער.', aboutText: 'Relax by Noam Gold 2025' },
};
