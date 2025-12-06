import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { OverviewSection } from '@/components/OverviewSection';
import { ResourcesSection } from '@/components/ResourcesSection';
import { ProductionSection } from '@/components/ProductionSection';
import { RevenueSection } from '@/components/RevenueSection';
import { CapexOpexSection } from '@/components/CapexOpexSection';
import { InfrastructureSection } from '@/components/InfrastructureSection';
import { StrengthsWhySection } from '@/components/StrengthsWhySection';
import { RisksSection } from '@/components/RisksSection';
import { NextStepsSection } from '@/components/NextStepsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

function MainContent() {
  const { dir } = useLanguage();

  return (
    <div className="min-h-screen" dir={dir}>
      <Header />
      <main>
        <HeroSection />
        <OverviewSection />
        <ResourcesSection />
        <ProductionSection />
        <RevenueSection />
        <CapexOpexSection />
        <InfrastructureSection />
        <StrengthsWhySection />
        <RisksSection />
        <NextStepsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

const Index = () => {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
};

export default Index;
