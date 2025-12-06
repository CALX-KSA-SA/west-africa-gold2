import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Mountain, TrendingUp, CheckCircle2, Gem, Zap, Target } from "lucide-react";

const OverviewSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Mountain,
      title: "مشروع تعدين ذهب",
      desc: "مشروع صغير إلى متوسط الحجم في غرب أفريقيا",
      gradient: "from-yellow-400 to-yellow-600"
    },
    {
      icon: Gem,
      title: "موارد معدنية مؤكدة",
      desc: "عبر حملات حفر سابقة وتقديرات جيولوجية معتمدة",
      gradient: "from-amber-400 to-orange-600"
    },
    {
      icon: Zap,
      title: "جاهز للاستثمار السريع",
      desc: "بيانات جاهزة وقابلة للتطوير الفوري",
      gradient: "from-yellow-300 to-yellow-500"
    },
    {
      icon: Target,
      title: "عوائد قوية متوقعة",
      desc: "تدفقات نقدية مجزية بعد الضرائب",
      gradient: "from-amber-300 to-yellow-600"
    }
  ];

  return (
    <section id="overview" className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gradient-gold mb-6 drop-shadow-lg">
            {t('overview.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('overview.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass-card border-primary/20 hover:border-primary/50 transition-all duration-500 group overflow-hidden relative animate-in fade-in slide-in-from-bottom-10 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <CardContent className="p-8 text-center relative z-10">
                <div className="mb-6 inline-flex p-5 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                  <feature.icon className="h-10 w-10 text-primary icon-glow" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </CardContent>
              
              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
