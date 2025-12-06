import { useLanguage } from "@/contexts/LanguageContext";
import { TrendingUp, Database, Zap, DollarSign, BarChart3, Package } from "lucide-react";

const ProjectStats = () => {
  const { t } = useLanguage();

  const stats = [
    { 
      label: t('stats.total'), 
      value: "1.84M", 
      unit: "أونصة ذهب",
      icon: Database,
      gradient: "from-yellow-400 to-amber-500"
    },
    { 
      label: t('stats.economic'), 
      value: "860,769", 
      unit: "أونصة (0.8 g/t)",
      icon: BarChart3,
      gradient: "from-amber-400 to-orange-500"
    },
    { 
      label: "معدل الاستخلاص", 
      value: "80%", 
      unit: "كفاءة عالية",
      icon: Zap,
      gradient: "from-yellow-300 to-yellow-500"
    },
    { 
      label: "الإنتاج السنوي", 
      value: "~81K", 
      unit: "أونصة ذهب",
      icon: TrendingUp,
      gradient: "from-yellow-500 to-amber-600"
    },
    { 
      label: "إجمالي الإيرادات", 
      value: "$1.21B", 
      unit: "عمر المشروع",
      icon: DollarSign,
      gradient: "from-amber-300 to-yellow-600"
    },
    { 
      label: "التكلفة الرأسمالية", 
      value: "$131.4M", 
      unit: "CAPEX",
      icon: Package,
      gradient: "from-yellow-400 to-orange-500"
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDIxMiwgMTc1LCA1NSwgMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gradient-gold mb-4">
            {t('stats.title')}
          </h2>
          <p className="text-gray-400 text-lg">
            {t('stats.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="glass-card border-primary/30 p-6 rounded-2xl hover:border-primary/60 transition-all duration-500 group relative overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex items-start gap-4">
                {/* Icon */}
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-7 w-7 text-primary icon-glow" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="text-sm text-gray-400 mb-1 font-medium">
                    {stat.label}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1 font-playfair group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500">
                    {stat.unit}
                  </div>
                </div>
              </div>
              
              {/* Bottom gradient line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectStats;
