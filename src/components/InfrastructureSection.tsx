import { useLanguage } from "@/contexts/LanguageContext";
import { Mountain, Factory, Cog, Waves, Zap, Home, Package, Radio, Ruler, Shield } from "lucide-react";

const InfrastructureSection = () => {
  const { t } = useLanguage();

  const items = [
    { 
      icon: Mountain, 
      title: "تعدين سطحي", 
      desc: "Open Pit Mining",
      gradient: "from-yellow-400 to-orange-500"
    },
    { 
      icon: Factory, 
      title: "مصنع معالجة", 
      desc: "بتقنية CIL المتقدمة",
      gradient: "from-amber-400 to-yellow-600"
    },
    { 
      icon: Cog, 
      title: "وحدة تكسير وطحن", 
      desc: "SAG + Ball Mill",
      gradient: "from-yellow-300 to-amber-500"
    },
    { 
      icon: Waves, 
      title: "سد مخلفات", 
      desc: "Tailings بسعة 10.5 مليون طن",
      gradient: "from-blue-400 to-cyan-600"
    },
    { 
      icon: Ruler, 
      title: "منظومة ضخ المياه", 
      desc: "وإزالة المياه الجوفية",
      gradient: "from-cyan-400 to-blue-500"
    },
    { 
      icon: Mountain, 
      title: "طرق تشغيلية", 
      desc: "شبكة طرق داخلية",
      gradient: "from-gray-400 to-gray-600"
    },
    { 
      icon: Zap, 
      title: "مولدات كهرباء", 
      desc: "طاقة مستقلة",
      gradient: "from-yellow-400 to-orange-600"
    },
    { 
      icon: Home, 
      title: "مساكن ومكاتب", 
      desc: "للعمال والإدارة",
      gradient: "from-amber-300 to-orange-500"
    },
    { 
      icon: Package, 
      title: "مخازن ومستودعات", 
      desc: "بما فيها مستودع متفجرات",
      gradient: "from-yellow-500 to-amber-600"
    },
    { 
      icon: Radio, 
      title: "شبكة اتصالات", 
      desc: "لاسلكية متكاملة",
      gradient: "from-green-400 to-emerald-600"
    }
  ];

  return (
    <section id="infrastructure" className="py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDIxMiwgMTc1LCA1NSwgMC4wNSkiLz48L2c+PC9zdmc+')] opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 text-primary text-sm font-bold mb-6">
            <Shield className="h-4 w-4" />
            {t('infra.title')}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gradient-gold mb-6">
            البنية التحتية الكاملة
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('infra.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="glass-card border-primary/20 p-6 rounded-2xl hover:border-primary/50 transition-all duration-500 group relative overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`mb-5 inline-flex p-4 rounded-xl bg-gradient-to-br ${item.gradient} bg-opacity-20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <item.icon className="h-7 w-7 text-primary icon-glow" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              
              {/* Bottom gradient accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
            </div>
          ))}
        </div>

        {/* Additional info section */}
        <div className="mt-16 text-center">
          <div className="glass-card border-primary/30 p-8 rounded-3xl max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-primary font-bold">
              💡 المشروع جاهز للبداية دون الحاجة لاستثمارات بنية تحتية ضخمة إضافية
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
