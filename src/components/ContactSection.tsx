import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Mail, Phone, User, Shield } from "lucide-react";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDIxMiwgMTc1LCA1NSwgMC4wNSkiLz48L2c+PC9zdmc+')] opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 text-primary text-sm font-bold mb-6">
              <Mail className="h-4 w-4" />
              {t('contact.title')}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gradient-gold mb-6">
              📞 للاستفسار والحصول على المعلومات التفصيلية
            </h2>
          </div>

          {/* Contact Card */}
          <div className="glass-card border-primary/30 rounded-3xl p-8 md:p-12 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Person */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-playfair font-bold text-gradient-gold mb-4 flex items-center gap-3">
                    <User className="h-8 w-8 text-primary" />
                    Dani Sinai
                  </h3>
                  <p className="text-xl text-gray-300 mb-6">الممثل الحصري للمشروع</p>
                </div>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <a 
                    href="https://wa.me/966599343529" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 p-5 rounded-2xl glass-card border-primary/20 hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1 text-lg">واتساب</h4>
                      <p className="text-primary text-xl font-bold" dir="ltr">+966 599 343 529</p>
                    </div>
                  </a>
                  
                  {/* Email */}
                  <a 
                    href="mailto:dsinai@calx.sa"
                    className="flex items-center gap-5 p-5 rounded-2xl glass-card border-primary/20 hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1 text-lg">البريد الإلكتروني</h4>
                      <p className="text-primary text-lg font-bold" dir="ltr">dsinai@calx.sa</p>
                    </div>
                  </a>
                </div>

                {/* Flags */}
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <span className="text-4xl">🇸🇦</span>
                  <span className="text-4xl">🇬🇧</span>
                  <span className="text-4xl">🇨🇳</span>
                  <span className="text-4xl">🇫🇷</span>
                </div>
              </div>

              {/* Confidentiality Notice */}
              <div className="flex items-center">
                <div className="glass-card border-primary/30 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-primary/20">
                      <Shield className="h-8 w-8 text-primary icon-glow" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-primary mb-2">سرية تامة</h4>
                      <p className="text-gray-300 leading-relaxed">
                        {t('contact.desc')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm text-gray-400">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <p>جميع البيانات التفصيلية متاحة للمستثمرين المؤهلين</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <p>الموقع الجغرافي الدقيق سري حتى توقيع NDA</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <p>تقارير فنية شاملة للمستثمرين الجادين</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a href="https://wa.me/966599343529" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary via-yellow-500 to-primary hover:from-yellow-600 hover:via-primary hover:to-yellow-600 text-black font-bold text-xl px-12 py-8 rounded-full shadow-[0_0_40px_rgba(212,175,55,0.5)] hover:shadow-[0_0_60px_rgba(212,175,55,0.8)] transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="ml-3 h-6 w-6" />
                تواصل معنا عبر واتساب
                <Mail className="mr-3 h-6 w-6" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
