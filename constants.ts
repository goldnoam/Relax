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

type BaseTechnique = Omit<Technique, 'title' | 'description'>;

export const BASE_TECHNIQUES: BaseTechnique[] = [
  { id: 'mindful-breathing', duration: '3-5 Min', illustration: MindfulBreathingIcon },
  { id: 'body-scan', duration: '10-15 Min', illustration: BodyScanIcon },
  { id: 'mindful-eating', duration: '5-10 Min', illustration: MindfulEatingIcon },
  { id: 'mindful-walking', duration: '5-10 Min', illustration: MindfulWalkingIcon },
  { id: '54321-grounding', duration: '2-3 Min', illustration: GroundingIcon },
  { id: 'diaphragmatic-breathing', duration: '5-7 Min', illustration: DiaphragmaticBreathingIcon },
  { id: 'progressive-muscle-relaxation', duration: '10-15 Min', illustration: MuscleRelaxationIcon },
  { id: 'visualization', duration: '10-15 Min', illustration: VisualizationIcon },
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

const techniquesEN = {
  'mindful-breathing': { title: 'Mindful Breathing', description: 'The foundational practice of focusing on the physical sensation of your breath to anchor yourself in the present moment.' },
  'body-scan': { title: 'Body Scan Meditation', description: 'A systematic scan of the body to notice sensations without judgment, promoting deep relaxation and body awareness.' },
  'mindful-eating': { title: 'Mindful Eating', description: 'Using all your senses to experience and enjoy your food, fostering a greater appreciation and a healthier relationship with eating.' },
  'mindful-walking': { title: 'Mindful Walking', description: 'Bringing your complete attention to the physical experience of walking, connecting your body and mind with each step.' },
  '54321-grounding': { title: '5-4-3-2-1 Grounding', description: 'A powerful technique to pull you back to the present moment using your five senses, especially useful during times of anxiety.' },
  'diaphragmatic-breathing': { title: 'Deep Diaphragmatic Breathing', description: 'Also known as "belly breathing," this technique encourages full oxygen exchange to trigger the body\'s natural relaxation response.' },
  'progressive-muscle-relaxation': { title: 'Progressive Muscle Relaxation', description: 'A method of tensing and then releasing different muscle groups to achieve a state of deep physical relaxation.' },
  'visualization': { title: 'Visualization / Guided Imagery', description: 'Using your imagination to create a peaceful, calming scene to immerse yourself in, reducing stress and promoting tranquility.' },
};

const techniquesES = {
  'mindful-breathing': { title: 'Respiración Consciente', description: 'La práctica fundamental de centrarse en la sensación física de la respiración para anclarse en el momento presente.' },
  'body-scan': { title: 'Meditación de Escaneo Corporal', description: 'Un escaneo sistemático del cuerpo para notar sensaciones sin juzgar, promoviendo una relajación profunda y conciencia corporal.' },
  'mindful-eating': { title: 'Alimentación Consciente', description: 'Usar todos tus sentidos para experimentar y disfrutar tu comida, fomentando una mayor apreciación y una relación más saludable con la comida.' },
  'mindful-walking': { title: 'Caminata Consciente', description: 'Prestar atención completa a la experiencia física de caminar, conectando tu cuerpo y mente con cada paso.' },
  '54321-grounding': { title: 'Técnica de Anclaje 5-4-3-2-1', description: 'Una técnica poderosa para traerte de vuelta al momento presente usando tus cinco sentidos, especialmente útil en momentos de ansiedad.' },
  'diaphragmatic-breathing': { title: 'Respiración Diafragmática Profunda', description: 'También conocida como "respiración abdominal", esta técnica fomenta el intercambio completo de oxígeno para activar la respuesta de relajación natural del cuerpo.' },
  'progressive-muscle-relaxation': { title: 'Relajación Muscular Progresiva', description: 'Un método de tensar y luego soltar diferentes grupos musculares para alcanzar un estado de profunda relajación física.' },
  'visualization': { title: 'Visualización / Imaginería Guiada', description: 'Usar tu imaginación para crear una escena pacífica y calmante en la que sumergirte, reduciendo el estrés y promoviendo la tranquilidad.' },
};

export const TRANSLATIONS: Translations = {
  en: { ...baseTranslations, techniques: techniquesEN },
  es: { ...baseTranslations, title: 'Relax', subtitle: 'Tu Guía de Relajación', settings: 'Ajustes', theme: 'Tema', light: 'Claro', dark: 'Oscuro', language: 'Idioma', about: 'Sobre', guideMe: 'Guiarme', generatingGuide: 'Generando tu guía...', guideFor: 'Una guía para', close: 'Cerrar', error: 'Ocurrió un error', errorMessage: 'No se pudo generar la guía. Por favor, inténtalo de nuevo más tarde.', aboutText: 'Relax por Noam Gold 2025', techniques: techniquesES },
  fr: { ...baseTranslations, title: 'Relax', subtitle: 'Votre Guide de Relaxation', settings: 'Paramètres', theme: 'Thème', light: 'Clair', dark: 'Sombre', language: 'Langue', about: 'À propos', guideMe: 'Guidez-moi', generatingGuide: 'Génération de votre guide...', guideFor: 'Un guide pour', close: 'Fermer', error: 'Une erreur est survenue', errorMessage: 'Échec de la génération du guide. Veuillez réessayer plus tard.', aboutText: 'Relax par Noam Gold 2025', techniques: {
    'mindful-breathing': { title: 'Respiration Consciente', description: 'La pratique fondamentale de se concentrer sur la sensation physique de votre respiration pour vous ancrer dans le moment présent.' },
    'body-scan': { title: 'Méditation du Balayage Corporel', description: 'Un balayage systématique du corps pour remarquer les sensations sans jugement, favorisant une relaxation profonde et une conscience corporelle.' },
    'mindful-eating': { title: 'Alimentation Consciente', description: 'Utiliser tous vos sens pour expérimenter et apprécier votre nourriture, favorisant une plus grande appréciation et une relation plus saine avec l\'alimentation.' },
    'mindful-walking': { title: 'Marche Consciente', description: 'Porter votre attention complète sur l\'expérience physique de la marche, connectant votre corps et votre esprit à chaque pas.' },
    '54321-grounding': { title: 'Technique d\'Ancrage 5-4-3-2-1', description: 'Une technique puissante pour vous ramener au moment présent en utilisant vos cinq sens, particulièrement utile en période d\'anxiété.' },
    'diaphragmatic-breathing': { title: 'Respiration Diaphragmatique Profonde', description: 'Aussi connue sous le nom de "respiration ventrale", cette technique encourage un échange complet d\'oxygène pour déclencher la réponse de relaxation naturelle du corps.' },
    'progressive-muscle-relaxation': { title: 'Relaxation Musculaire Progressive', description: 'Une méthode de tension puis de relâchement de différents groupes musculaires pour atteindre un état de relaxation physique profonde.' },
    'visualization': { title: 'Visualisation / Imagerie Guidée', description: 'Utiliser votre imagination pour créer une scène paisible et apaisante dans laquelle vous immerger, réduisant le stress et favorisant la tranquillité.' },
  }},
  ru: { ...baseTranslations, title: 'Relax', subtitle: 'Ваш Гид по Релаксации', settings: 'Настройки', theme: 'Тема', light: 'Светлая', dark: 'Темная', language: 'Язык', about: 'О приложении', guideMe: 'Направляй меня', generatingGuide: 'Создание вашего руководства...', guideFor: 'Руководство по', close: 'Закрыть', error: 'Произошла ошибка', errorMessage: 'Не удалось создать руководство. Пожалуйста, попробуйте позже.', aboutText: 'Relax от Ноама Голда 2025', techniques: {
    'mindful-breathing': { title: 'Осознанное Дыхание', description: 'Основная практика сосредоточения на физическом ощущении дыхания, чтобы закрепиться в настоящем моменте.' },
    'body-scan': { title: 'Сканирование Тела', description: 'Систематическое сканирование тела для замечания ощущений без осуждения, способствующее глубокой релаксации и осознанию тела.' },
    'mindful-eating': { title: 'Осознанное Питание', description: 'Использование всех своих чувств для восприятия и наслаждения едой, способствующее большей признательности и здоровому отношению к еде.' },
    'mindful-walking': { title: 'Осознанная Ходьба', description: 'Полное сосредоточение на физическом опыте ходьбы, соединяя тело и разум с каждым шагом.' },
    '54321-grounding': { title: 'Техника Заземления 5-4-3-2-1', description: 'Мощная техника, чтобы вернуть вас в настоящий момент с помощью пяти чувств, особенно полезная во время тревоги.' },
    'diaphragmatic-breathing': { title: 'Глубокое Диафрагмальное Дыхание', description: 'Также известное как "дыхание животом", эта техника способствует полному обмену кислорода для запуска естественной реакции расслабления тела.' },
    'progressive-muscle-relaxation': { title: 'Прогрессивная Мышечная Релаксация', description: 'Метод напряжения, а затем расслабления различных групп мышц для достижения состояния глубокого физического расслабления.' },
    'visualization': { title: 'Визуализация / Управляемое Воображение', description: 'Использование вашего воображения для создания мирной, успокаивающей сцены для погружения, снижения стресса и содействия спокойствию.' },
  }},
  ar: { ...baseTranslations, title: 'Relax', subtitle: 'دليلك للاسترخاء', settings: 'الإعدادات', theme: 'المظهر', light: 'فاتح', dark: 'داكن', language: 'اللغة', about: 'حول', guideMe: 'أرشدني', generatingGuide: 'جاري إنشاء دليلك...', guideFor: 'دليل إلى', close: 'إغلاق', error: 'حدث خطأ', errorMessage: 'فشل في إنشاء الإرشاد. يرجى المحاولة مرة أخرى لاحقًا.', aboutText: 'Relax بواسطة نعوم جولد 2025', techniques: {
    'mindful-breathing': { title: 'التنفس اليقظ', description: 'الممارسة الأساسية للتركيز على الإحساس الجسدي بأنفاسك لتثبيت نفسك في اللحظة الحالية.' },
    'body-scan': { title: 'مسح الجسد', description: 'مسح منهجي للجسم لملاحظة الأحاسيس دون حكم, مما يعزز الاسترخاء العميق والوعي الجسدي.' },
    'mindful-eating': { title: 'الأكل اليقظ', description: 'استخدام جميع حواسك لتجربة طعامك والاستمتاع به, مما يعزز التقدير الأكبر وعلاقة صحية مع الأكل.' },
    'mindful-walking': { title: 'المشي اليقظ', description: 'جلب انتباهك الكامل إلى التجربة الجسدية للمشي, وربط جسدك وعقلك مع كل خطوة.' },
    '54321-grounding': { title: 'تقنية التجذير 5-4-3-2-1', description: 'تقنية قوية لإعادتك إلى اللحظة الحالية باستخدام حواسك الخمس, مفيدة بشكل خاص في أوقات القلق.' },
    'diaphragmatic-breathing': { title: 'التنفس البطني العميق', description: 'تُعرف أيضًا باسم "التنفس من البطن", تشجع هذه التقنية على التبادل الكامل للأكسجين لتحفيز استجابة الاسترخاء الطبيعية في الجسم.' },
    'progressive-muscle-relaxation': { title: 'الاسترخاء العضلي التدريجي', description: 'طريقة لشد ثم إرخاء مجموعات عضلية مختلفة للوصول إلى حالة من الاسترخاء الجسدي العميق.' },
    'visualization': { title: 'التصور / الخيال الموجه', description: 'استخدام خيالك لإنشاء مشهد هادئ ومريح لتنغمس فيه, مما يقلل من التوتر ويعزز الهدوء.' },
  }},
  hi: { ...baseTranslations, title: 'Relax', subtitle: 'आपकी रिलैक्सेशन गाइड', settings: 'सेटिंग्स', theme: 'थीम', light: 'लाइट', dark: 'डार्क', language: 'भाषा', about: 'बारे में', guideMe: 'मेरा मार्गदर्शन करें', generatingGuide: 'आपकी गाइड तैयार हो रही है...', guideFor: 'एक गाइड', close: 'बंद करें', error: 'एक त्रुटि हुई', errorMessage: 'मार्गदर्शन उत्पन्न करने में विफल। कृपया बाद में पुन: प्रयास करें।', aboutText: 'नोआम गोल्ड द्वारा आराम 2025', techniques: {
    'mindful-breathing': { title: 'सचेत श्वास', description: 'वर्तमान क्षण में खुद को स्थिर करने के लिए अपनी सांस की शारीरिक अनुभूति पर ध्यान केंद्रित करने का मूलभूत अभ्यास।' },
    'body-scan': { title: 'बॉडी स्कैन ध्यान', description: 'बिना किसी निर्णय के संवेदनाओं को नोटिस करने के लिए शरीर का एक व्यवस्थित स्कैन, जो गहरी छूट और शरीर की जागरूकता को बढ़ावा देता है।' },
    'mindful-eating': { title: 'सचेत भोजन', description: 'अपने भोजन का अनुभव करने और आनंद लेने के लिए अपनी सभी इंद्रियों का उपयोग करना, भोजन के साथ अधिक प्रशंसा और एक स्वस्थ संबंध को बढ़ावा देना।' },
    'mindful-walking': { title: 'सचेत चलना', description: 'चलने के शारीरिक अनुभव पर अपना पूरा ध्यान लाना, प्रत्येक कदम के साथ अपने शरीर और मन को जोड़ना।' },
    '54321-grounding': { title: '5-4-3-2-1 ग्राउंडिंग', description: 'चिंता के समय में विशेष रूप से उपयोगी, अपनी पांच इंद्रियों का उपयोग करके आपको वर्तमान क्षण में वापस खींचने की एक शक्तिशाली तकनीक।' },
    'diaphragmatic-breathing': { title: 'गहरी डायाफ्रामिक श्वास', description: 'इसे "पेट से सांस लेना" भी कहा जाता है, यह तकनीक शरीर की प्राकृतिक विश्राम प्रतिक्रिया को ट्रिगर करने के लिए पूर्ण ऑक्सीजन विनिमय को प्रोत्साहित करती है।' },
    'progressive-muscle-relaxation': { title: 'प्रगतिशील मांसपेशी छूट', description: 'गहरी शारीरिक छूट की स्थिति प्राप्त करने के लिए विभिन्न मांसपेशी समूहों को कसने और फिर छोड़ने की एक विधि।' },
    'visualization': { title: 'विज़ुअलाइज़ेशन / गाइडेड इमेजरी', description: 'अपने आप को तनाव कम करने और शांति को बढ़ावा देने के लिए एक शांतिपूर्ण, शांत दृश्य बनाने के लिए अपनी कल्पना का उपयोग करना।' },
  }},
  pt: { ...baseTranslations, title: 'Relax', subtitle: 'Seu Guia de Relaxamento', settings: 'Configurações', theme: 'Tema', light: 'Claro', dark: 'Escuro', language: 'Idioma', about: 'Sobre', guideMe: 'Guie-me', generatingGuide: 'Gerando seu guia...', guideFor: 'Um Guia Para', close: 'Fechar', error: 'Ocorreu um Erro', errorMessage: 'Falha ao gerar a orientação. Por favor, tente novamente mais tarde.', aboutText: 'Relax por Noam Gold 2025', techniques: {
    'mindful-breathing': { title: 'Respiração Consciente', description: 'A prática fundamental de focar na sensação física da sua respiração para se ancorar no momento presente.' },
    'body-scan': { title: 'Meditação de Escaneamento Corporal', description: 'Um escaneamento sistemático do corpo para notar sensações sem julgamento, promovendo relaxamento profundo e consciência corporal.' },
    'mindful-eating': { title: 'Alimentação Consciente', description: 'Usar todos os seus sentidos para experienciar e desfrutar da sua comida, promovendo uma maior apreciação e uma relação mais saudável com a alimentação.' },
    'mindful-walking': { title: 'Caminhada Consciente', description: 'Trazer sua atenção completa para a experiência física de caminhar, conectando seu corpo e mente a cada passo.' },
    '54321-grounding': { title: 'Técnica de Aterramento 5-4-3-2-1', description: 'Uma técnica poderosa para trazê-lo de volta ao momento presente usando seus cinco sentidos, especialmente útil em momentos de ansiedade.' },
    'diaphragmatic-breathing': { title: 'Respiração Diafragmática Profunda', description: 'Também conhecida como "respiração abdominal", esta técnica incentiva a troca total de oxigênio para acionar a resposta de relaxamento natural do corpo.' },
    'progressive-muscle-relaxation': { title: 'Relaxamento Muscular Progressivo', description: 'Um método de tensionar e depois relaxar diferentes grupos musculares para alcançar um estado de profundo relaxamento físico.' },
    'visualization': { title: 'Visualização / Imagens Guiadas', description: 'Usar sua imaginação para criar uma cena pacífica e calmante para imergir, reduzindo o estresse e promovendo a tranquilidade.' },
  }},
  he: { ...baseTranslations, title: 'Relax', subtitle: 'המדריך שלך לרגיעה', settings: 'הגדרות', theme: 'ערכת נושא', light: 'בהיר', dark: 'כהה', language: 'שפה', about: 'אודות', guideMe: 'הדריכני', generatingGuide: 'יוצר את המדריך שלך...', guideFor: 'מדריך ל', close: 'סגור', error: 'אירעה שגיאה', errorMessage: 'יצירת המדריך נכשלה. אנא נסה שוב מאוחר יותר.', aboutText: 'Relax by Noam Gold 2025', techniques: {
    'mindful-breathing': { title: 'נשימה מודעת', description: 'התרגול הבסיסי של התמקדות בתחושה הפיזית של הנשימה כדי להתחבר לרגע הנוכחי.' },
    'body-scan': { title: 'סריקת גוף', description: 'סריקה שיטתית של הגוף כדי להבחין בתחושות ללא שיפוטיות, המעודדת הרפיה עמוקה ומודעות גופנית.' },
    'mindful-eating': { title: 'אכילה מודעת', description: 'שימוש בכל החושים כדי לחוות וליהנות מהמזון, טיפוח הערכה גדולה יותר ויחסים בריאים יותר עם אכילה.' },
    'mindful-walking': { title: 'הליכה מודעת', description: 'הבאת תשומת הלב המלאה לחוויה הפיזית של הליכה, וחיבור הגוף והנפש בכל צעד.' },
    '54321-grounding': { title: 'טכניקת קרקוע 5-4-3-2-1', description: 'טכניקה רבת עוצמה להחזיר אותך לרגע הנוכחי באמצעות חמשת החושים, שימושית במיוחד בזמני חרדה.' },
    'diaphragmatic-breathing': { title: 'נשימה סרעפתית עמוקה', description: 'ידועה גם בשם "נשימת בטן", טכניקה זו מעודדת חילופי חמצן מלאים כדי להפעיל את תגובת ההרפיה הטבעית של הגוף.' },
    'progressive-muscle-relaxation': { title: 'הרפיית שרירים הדרגתית', description: 'שיטה של כיווץ ושחרור קבוצות שרירים שונות כדי להגיע למצב של הרפיה גופנית עמוקה.' },
    'visualization': { title: 'דמיון מודרך / ויזואליזציה', description: 'שימוש בדמיון כדי ליצור סצנה שלווה ומרגיעה לשקוע בה, להפחתת מתח וקידום שלווה.' },
  }},
  yi: { ...baseTranslations, title: 'Relax', subtitle: 'דיין רילאַקסיישאַן גייד', settings: 'סעטטינגס', theme: 'טעמע', light: 'ליכט', dark: 'פינצטער', language: 'שפּראַך', about: 'וועגן', guideMe: 'פיר מיך', generatingGuide: 'דזשענערייטינג דיין פירער...', guideFor: 'א גייד צו', close: 'פאַרמאַכן', error: 'אַ טעות איז פארגעקומען', errorMessage: 'נישט געקענט צו דזשענערייט גיידאַנס. ביטע פּרובירן ווידער שפּעטער.', aboutText: 'Relax by Noam Gold 2025', techniques: {
    'mindful-breathing': { title: 'מיינדפֿול ברידינג', description: 'די פונדאַמענטאַל פיר פון פאָוקיסינג אויף די גשמיות געפיל פון דיין אָטעם צו פאַרפעסטיקן זיך אין דעם איצטיקן מאָמענט.' },
    'body-scan': { title: 'גוף סקאַן מעדיטאַטיאָן', description: 'א סיסטעמאַטיש יבערקוקן פון דעם גוף צו באַמערקן סענסיישאַנז אָן משפט, פּראַמאָוטינג טיף אָפּרו און גוף וויסיקייַט.' },
    'mindful-eating': { title: 'מיינדפֿול עסן', description: 'ניצן אַלע דיין סענסיז צו דערפאַרונג און הנאה דיין עסנוואַרג, פאַסטערינג אַ גרעסערע אַפּרישייישאַן און אַ כעלטיער שייכות מיט עסן.' },
    'mindful-walking': { title: 'מיינדפֿול גיין', description: 'ברענגען דיין גאַנץ ופמערקזאַמקייט צו די גשמיות דערפאַרונג פון גיין, קאַנעקטינג דיין גוף און מיינונג מיט יעדער שריט.' },
    '54321-grounding': { title: '5-4-3-2-1 גראַונדינג טעכניק', description: 'א שטאַרק טעכניק צו ציען איר צוריק צו דעם איצטיקן מאָמענט ניצן דיין פינף סענסיז, ספּעציעל נוציק אין צייט פון דייַגעס.' },
    'diaphragmatic-breathing': { title: 'טיף דייאַפראַגמאַטיק ברידינג', description: 'אויך באקאנט ווי "בויך ברידינג," דעם טעכניק ינקעראַדזשאַז פול זויערשטאָף וועקסל צו צינגל דעם גוף ס נאַטירלעך אָפּרו ענטפער.' },
    'progressive-muscle-relaxation': { title: 'פּראָגרעסיוו מוסקל אָפּרו', description: 'א מעטאָד פון טענסינג און דעמאָלט ריליסינג פאַרשידענע מוסקל גרופּעס צו דערגרייכן אַ שטאַט פון טיף גשמיות אָפּרו.' },
    'visualization': { title: 'וויסואַליזאַטיאָן / גיידיד ימידזשרי', description: 'ניצן דיין פאַנטאַזיע צו שאַפֿן אַ פרידלעך, קאַמינג סצענע צו ייַנטונקען זיך אין, רידוסינג דרוק און פּראַמאָוטינג זאַכטקייַט.' },
  }},
};
