import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, Gem } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const { t, language, setLanguage, dir } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "nav.home", href: "#hero" },
    { key: "nav.overview", href: "#overview" },
    { key: "nav.geology", href: "#geology" },
    { key: "nav.infrastructure", href: "#infrastructure" },
    { key: "nav.investment", href: "#investment" },
    { key: "nav.contact", href: "#contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-background/95 backdrop-blur-xl py-3 shadow-[0_0_30px_rgba(212,175,55,0.3)] border-b-2 border-primary/40" 
          : "bg-transparent py-6"
      )}
      dir={dir}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className={cn(
            "p-2 rounded-xl bg-primary/20 transition-all duration-300",
            isScrolled ? "scale-90" : "scale-100"
          )}>
            <Gem className="h-7 w-7 text-primary icon-glow group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <div className={cn(
            "font-playfair font-bold text-gradient-gold transition-all duration-300",
            isScrolled ? "text-xl" : "text-2xl"
          )}>
            غرب أفريقيا
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-bold text-foreground/80 hover:text-primary transition-all duration-300 relative group"
            >
              {t(item.key)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-yellow-500 transition-all group-hover:w-full" />
            </a>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="hover:bg-primary/20 hover:text-primary rounded-full border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-110"
          >
            <Globe className="h-5 w-5" />
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="hover:bg-primary/20 hover:text-primary rounded-full border border-primary/30"
          >
            <Globe className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground hover:bg-primary/20 hover:text-primary rounded-full border border-primary/30"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b-2 border-primary/30 p-6 animate-in slide-in-from-top-5 shadow-[0_10px_40px_rgba(212,175,55,0.2)]">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-foreground/80 hover:text-primary transition-all duration-300 p-3 hover:bg-primary/10 rounded-xl border border-transparent hover:border-primary/30"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
