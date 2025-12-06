import { useLanguage } from "@/contexts/LanguageContext";
import { Gem, Layers, Telescope, CheckCircle2 } from "lucide-react";

const GeologySection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Gem,
      title: "تكوينات صخرية بركانية قديمة",
      desc: "حزام صخري ذهبي عالي الجودة"
    },
    {
      icon: Layers,
      title: "عروق كوارتز غنية بالذهب",
      desc: "تركيزات ذهبية مؤكدة جيولوجياً"
    },
    {
      icon: Telescope,
      title: "تمعدن سطحي وعميق",
      desc: "إمكانيات توسع مستقبلية"
    },
    {
      icon: CheckCircle2,
      title: "نتائج حفر واعدة للغاية",
      desc: "تقديرات معتمدة من خبراء دوليين"
    }
  ];

  return (
    <section id="geology" className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-10 duration-700">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/40 text-primary text-sm font-bold mb-4">
                ⛏️ الموارد المعدنية
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient-gold mb-6">
                {t('geo.title')}
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                {t('geo.desc')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((item, index) => (
                <div 
                  key={index} 
                  className="glass-card border-primary/20 p-5 rounded-xl hover:border-primary/50 transition-all duration-500 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                      <item.icon className="h-5 w-5 text-primary icon-glow" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1 text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[600px] rounded-3xl overflow-hidden border-2 border-primary/30 group animate-in fade-in slide-in-from-right-10 duration-700 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
            {/* Beautiful West African mining landscape */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700" />
            
            {/* Info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <div className="glass-card border-primary/30 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                  <Gem className="h-6 w-6 text-primary" />
                  خريطة جيولوجية تفصيلية
                </h3>
                <p className="text-gray-300 text-sm mb-4">توضح توزيع التمعدن والاحتياطيات في منطقة المشروع</p>
                <div className="flex gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-gray-300">تمعدن عالي</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-600" />
                    <span className="text-gray-300">تمعدن متوسط</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeologySection;
