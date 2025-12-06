import { useLanguage } from "@/contexts/LanguageContext";
import { Gem, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-gradient-to-b from-background to-black py-16 border-t-2 border-primary/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDIxMiwgMTc1LCA1NSwgMC4wMykiLz48L2c+PC9zdmc+')] opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-primary/20">
                <Gem className="h-8 w-8 text-primary icon-glow" />
              </div>
              <div className="text-3xl font-playfair font-bold text-gradient-gold">
                غرب أفريقيا
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              فرصة استثمارية ذهبية في قلب غرب أفريقيا
            </p>
            <div className="flex gap-2 text-2xl">
              <span>🇸🇦</span>
              <span>🇬🇧</span>
              <span>🇨🇳</span>
              <span>🇫🇷</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary mb-6">معلومات الاتصال</h3>
            <div className="space-y-3">
              <a href="mailto:dsinai@calx.sa" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors group">
                <Mail className="h-5 w-5 group-hover:icon-glow" />
                <span dir="ltr">dsinai@calx.sa</span>
              </a>
              <a href="https://wa.me/966599343529" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors group">
                <Phone className="h-5 w-5 group-hover:icon-glow" />
                <span dir="ltr">+966 599 343 529</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-5 w-5" />
                <span>غرب أفريقيا</span>
              </div>
            </div>
          </div>

          {/* Important Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary mb-6">معلومات مهمة</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>جميع المعلومات سرية حتى توقيع NDA</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>للمستثمرين المؤهلين فقط</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>تقارير فنية شاملة متاحة</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-500 text-sm text-center md:text-right">
              {t('footer.rights')}
            </div>
            <div className="text-primary font-bold text-sm">
              Dani Sinai - الممثل الحصري
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
