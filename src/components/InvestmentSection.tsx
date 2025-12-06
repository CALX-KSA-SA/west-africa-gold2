import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle2, TrendingUp, Shield, Award, Target, Star, Lightbulb } from "lucide-react";

const InvestmentSection = () => {
  const { t } = useLanguage();

  const strengths = [
    { 
      icon: CheckCircle2, 
      title: "موارد ذهبية مؤكدة", 
      desc: "ذات حجم اقتصادي قوي",
      gradient: "from-yellow-400 to-amber-500"
    },
    { 
      icon: TrendingUp, 
      title: "إنتاج سنوي مرتفع", 
      desc: "مقارنة بحجم الاستثمار",
      gradient: "from-green-400 to-emerald-600"
    },
    { 
      icon: Award, 
      title: "عائد نقدي قوي جداً", 
      desc: "تدفقات مستدامة",
      gradient: "from-blue-400 to-cyan-600"
    },
    { 
      icon: Target, 
      title: "تكلفة تشغيل منخفضة", 
      desc: "نسبياً للإنتاج",
      gradient: "from-purple-400 to-violet-600"
    },
    { 
      icon: Shield, 
      title: "جاهزية تصميمية", 
      desc: "وتشغيلية كاملة",
      gradient: "from-orange-400 to-red-500"
    },
    { 
      icon: Star, 
      title: "إمكانية التوسع", 
      desc: "في الحفر والإنتاج مستقبلاً",
      gradient: "from-pink-400 to-rose-600"
    }
  ];

  const whyInvest = [
    { number: "1", title: "المشروع مربح جداً", desc: "من ناحية التدفقات النقدية والعوائد المتوقعة" },
    { number: "2", title: "نسب استخلاص جيدة", desc: "80% معدل استخلاص ذهب - من أفضل المعدلات" },
    { number: "3", title: "أسعار الذهب في ارتفاع عالمي", desc: "الطلب على الذهب متزايد والأسعار مستقرة ومرتفعة" },
    { number: "4", title: "نموذج تشغيل بسيط وواضح", desc: "لا توجد تعقيدات تقنية غير مألوفة" },
    { number: "5", title: "مخاطرة جيولوجية محدودة", desc: "بسبب وجود بيانات تاريخية وحفر سابق" }
  ];

  return (
    <section id="investment" className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Strengths Section */}
        <div className="mb-20">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 text-primary text-sm font-bold mb-6">
              <Lightbulb className="h-4 w-4" />
              {t('invest.title')}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gradient-gold mb-6">
              💪 نقاط القوة التي تجذب المستثمر
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((item, index) => (
              <div 
                key={index} 
                className="glass-card border-primary/20 p-8 rounded-2xl hover:border-primary/50 transition-all duration-500 group relative overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`mb-5 inline-flex p-4 rounded-xl bg-gradient-to-br ${item.gradient} bg-opacity-20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <item.icon className="h-8 w-8 text-primary icon-glow" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </div>
            ))}
          </div>
        </div>

        {/* Why Invest Section */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient-gold mb-6">
              🎯 لماذا الاستثمار في هذا المشروع؟
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyInvest.map((item, index) => (
              <div 
                key={index} 
                className="glass-card border-primary/30 p-6 rounded-2xl hover:border-primary/60 transition-all duration-500 group"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-yellow-600 flex items-center justify-center text-black font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {item.number}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
