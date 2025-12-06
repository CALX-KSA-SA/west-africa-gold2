import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Sparkles, TrendingUp, Shield } from "lucide-react";

const HeroSection = () => {
  const { t, dir } = useLanguage();
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-primary/60 rounded-full animate-pulse delay-100" />
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-primary/80 rounded-full animate-pulse delay-200" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/40 rounded-full animate-pulse delay-300" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-10">
            {/* Subtitle badge with icon */}
            <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-primary/20 border-2 border-primary/40 text-primary text-sm md:text-base font-bold mb-8 backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all duration-300">
              <Sparkles className="w-4 h-4 animate-pulse" />
              {t('hero.subtitle')}
              <Sparkles className="w-4 h-4 animate-pulse" />
            </div>
            
            {/* Main title with enhanced styling */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-playfair font-bold mb-8 leading-tight px-4">
              <span className="text-gradient-gold drop-shadow-[0_0_30px_rgba(212,175,55,0.6)] animate-in fade-in slide-in-from-bottom-5 duration-700">
                {t('hero.title')}
              </span>
            </h1>
            
            {/* Key stats showcase */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10 px-4">
              <div className="glass-card border-primary/30 p-4 rounded-2xl hover:border-primary/60 transition-all duration-300 hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">1.84M</div>
                <div className="text-sm md:text-base text-gray-300">أونصة ذهب</div>
              </div>
              <div className="glass-card border-primary/30 p-4 rounded-2xl hover:border-primary/60 transition-all duration-300 hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">860K</div>
                <div className="text-sm md:text-base text-gray-300">السيناريو الاقتصادي</div>
              </div>
              <div className="glass-card border-primary/30 p-4 rounded-2xl hover:border-primary/60 transition-all duration-300 hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">80%</div>
                <div className="text-sm md:text-base text-gray-300">معدل الاستخلاص</div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed px-4 font-medium">
              جميع التفاصيل متاحة للمستثمرين المؤهلين فقط بعد توقيع اتفاقية السرية (NDA)
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary via-yellow-500 to-primary hover:from-yellow-600 hover:via-primary hover:to-yellow-600 text-black font-bold text-lg px-10 py-7 rounded-full shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.7)] transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                <TrendingUp className="ml-2 h-5 w-5" />
                {t('hero.cta')}
                <ArrowIcon className="mr-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary/70 text-primary hover:bg-primary/20 font-bold text-lg px-10 py-7 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_35px_rgba(212,175,55,0.4)] transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                <Shield className="ml-2 h-5 w-5" />
                {t('nav.contact')}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
