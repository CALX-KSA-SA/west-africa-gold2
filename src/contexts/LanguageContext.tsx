import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'rtl' | 'ltr';
}

const translations = {
  ar: {
    'nav.home': 'الرئيسية',
    'nav.overview': 'نظرة عامة',
    'nav.geology': 'الجيولوجيا',
    'nav.infrastructure': 'البنية التحتية',
    'nav.investment': 'الاستثمار',
    'nav.contact': 'اتصل بنا',
    'hero.title': 'فرصة استثمارية ذهبية في غرب أفريقيا',
    'hero.subtitle': 'مشروع تعدين ذهب متوسط الحجم | موارد مؤكدة | جاهز للاستثمار',
    'hero.cta': 'تواصل معنا',
    'overview.title': '📋 نظرة عامة على الفرصة الاستثمارية',
    'overview.desc': 'مشروع صغير إلى متوسط الحجم في غرب أفريقيا مع موارد معدنية مؤكدة عبر حملات حفر سابقة وتقديرات جيولوجية معتمدة',
    'stats.title': '⛏️ حجم الموارد المعدنية',
    'stats.subtitle': 'أهم معلومة للمستثمر - تحدد قيمة المشروع',
    'stats.total': 'إجمالي الغلاف المعدني',
    'stats.total.value': '1,835,341 أونصة ذهب',
    'stats.total.details': 'متوسط العيار: 0.61 g/t | إجمالي الخام: 34.66 مليون طن',
    'stats.cutoff': 'موارد عند حد قطع 0.5 g/t',
    'stats.cutoff.value': '1,230,858 أونصة ذهب',
    'stats.cutoff.details': 'متوسط العيار: 1.03 g/t | الخام القابل للاستخراج: 13.7 مليون طن',
    'stats.economic': 'موارد عند 0.8 g/t',
    'stats.economic.value': '860,769 أونصة ذهب',
    'stats.economic.details': 'متوسط العيار: 1.46 g/t | حجم الخام: 6.79 مليون طن',
    'production.title': '🏭 الطاقة الإنتاجية السنوية المحتملة',
    'production.ore': '2,160,000 طن خام سنويًا',
    'production.recovery': '80% معدل استخلاص الذهب',
    'production.annual': '~81,072 أونصة ذهب - إنتاج سنوي متوقع',
    'revenue.title': '💰 الإيرادات والعوائد المتوقعة',
    'revenue.subtitle': 'اعتمادًا على سعر $1,500 للأونصة',
    'revenue.total': 'إجمالي الإيرادات المتوقعة',
    'revenue.total.value': '710.6 مليار FCFA ($1.21B)',
    'revenue.production': 'إجمالي الإنتاج',
    'revenue.production.value': '860,769 أونصة ذهب',
    'revenue.cashflow': 'صافي التدفقات النقدية',
    'revenue.cashflow.value': '185.3 مليار FCFA ($316.2M)',
    'capex.title': '💵 التكاليف الاستثمارية (CAPEX)',
    'capex.total': 'التكلفة الرأسمالية الكاملة',
    'capex.total.value': '77 مليار FCFA ($131.4M)',
    'opex.title': '⚙️ التكاليف التشغيلية (OPEX)',
    'opex.total': 'إجمالي التكاليف التشغيلية المقدرة',
    'opex.total.value': '$515 مليون دولار',
    'geo.title': 'الخصائص الجيولوجية',
    'geo.desc': 'تتميز المنطقة بتكوينات صخرية فريدة في الحزام الذهبي لغرب أفريقيا.',
    'infra.title': '🏗️ البنية التحتية الأساسية المتوفرة',
    'infra.desc': 'المشروع جاهز للبداية دون الحاجة لاستثمارات بنية تحتية ضخمة إضافية',
    'invest.title': '💪 نقاط القوة التي تجذب المستثمر',
    'invest.desc': 'موارد ذهبية مؤكدة، إنتاج سنوي مرتفع، عائد نقدي قوي جدًا',
    'why.title': '🎯 لماذا الاستثمار في هذا المشروع؟',
    'risks.title': '⚠️ أهم المخاطر (شفافية كاملة)',
    'risks.subtitle': 'المستثمر يقدّر الشفافية ويطمئن حين تظهر المخاطر بوضوح',
    'needs.title': '📝 ماذا يحتاج المستثمر لتقديم عرض؟',
    'contact.title': '📞 للاستفسار والحصول على المعلومات التفصيلية',
    'contact.desc': 'جميع المعلومات المفصلة والبيانات الدقيقة والموقع الجغرافي متاحة فقط للمستثمرين المؤهلين بعد توقيع اتفاقية السرية (NDA)',
    'footer.rights': '© 2025 | فرصة استثمارية في تعدين الذهب - غرب أفريقيا',
  },
  en: {
    'nav.home': 'Home',
    'nav.overview': 'Overview',
    'nav.geology': 'Geology',
    'nav.infrastructure': 'Infrastructure',
    'nav.investment': 'Investment',
    'nav.contact': 'Contact',
    'hero.title': 'Golden Investment Opportunity in West Africa',
    'hero.subtitle': 'Medium-sized Gold Mining Project | Confirmed Resources | Ready for Investment',
    'hero.cta': 'Contact Us',
    'overview.title': '📋 Investment Opportunity Overview',
    'overview.desc': 'Small to medium-sized project in West Africa with confirmed mineral resources through previous drilling campaigns and certified geological estimates',
    'stats.title': '⛏️ Mineral Resources Volume',
    'stats.subtitle': 'The most important information for the investor - determines project value',
    'stats.total': 'Total Mineral Envelope',
    'stats.total.value': '1,835,341 oz Gold',
    'stats.total.details': 'Average Grade: 0.61 g/t | Total Ore: 34.66 million tons',
    'stats.cutoff': 'Resources at 0.5 g/t Cutoff',
    'stats.cutoff.value': '1,230,858 oz Gold',
    'stats.cutoff.details': 'Average Grade: 1.03 g/t | Extractable Ore: 13.7 million tons',
    'stats.economic': 'Resources at 0.8 g/t',
    'stats.economic.value': '860,769 oz Gold',
    'stats.economic.details': 'Average Grade: 1.46 g/t | Ore Volume: 6.79 million tons',
    'production.title': '🏭 Potential Annual Production Capacity',
    'production.ore': '2,160,000 tons of ore annually',
    'production.recovery': '80% gold recovery rate',
    'production.annual': '~81,072 oz Gold - Expected annual production',
    'revenue.title': '💰 Expected Revenue and Returns',
    'revenue.subtitle': 'Based on $1,500 per ounce',
    'revenue.total': 'Total Expected Revenue',
    'revenue.total.value': '710.6 billion FCFA ($1.21B)',
    'revenue.production': 'Total Production',
    'revenue.production.value': '860,769 oz Gold',
    'revenue.cashflow': 'Net Cash Flow',
    'revenue.cashflow.value': '185.3 billion FCFA ($316.2M)',
    'capex.title': '💵 Capital Costs (CAPEX)',
    'capex.total': 'Total Capital Cost',
    'capex.total.value': '77 billion FCFA ($131.4M)',
    'opex.title': '⚙️ Operating Costs (OPEX)',
    'opex.total': 'Total Estimated Operating Costs',
    'opex.total.value': '$515 million',
    'geo.title': 'Geological Features',
    'geo.desc': 'The region features unique rock formations in West Africa\'s golden belt.',
    'infra.title': '🏗️ Available Basic Infrastructure',
    'infra.desc': 'The project is ready to start without the need for massive additional infrastructure investments',
    'invest.title': '💪 Strengths That Attract Investors',
    'invest.desc': 'Confirmed gold resources, high annual production, very strong cash returns',
    'why.title': '🎯 Why Invest in This Project?',
    'risks.title': '⚠️ Main Risks (Full Transparency)',
    'risks.subtitle': 'Investors appreciate transparency and are reassured when risks are clearly presented',
    'needs.title': '📝 What Does the Investor Need to Submit an Offer?',
    'contact.title': '📞 For Inquiries and Detailed Information',
    'contact.desc': 'All detailed information, accurate data, and geographical location are available only to qualified investors after signing a Non-Disclosure Agreement (NDA)',
    'footer.rights': '© 2025 | Gold Mining Investment Opportunity - West Africa',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [dir, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
