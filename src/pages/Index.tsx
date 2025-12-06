import { useEffect, useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import ProjectStats from "@/components/ProjectStats";
import GeologySection from "@/components/GeologySection";
import InfrastructureSection from "@/components/InfrastructureSection";
import InvestmentSection from "@/components/InvestmentSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingScreen from "@/components/LoadingScreen";
import BackgroundVideo from "@/components/BackgroundVideo";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <BackgroundVideo />
      <ScrollProgress />
      <Header />
      <main>
        <HeroSection />
        <OverviewSection />
        <ProjectStats />
        <GeologySection />
        <InfrastructureSection />
        <InvestmentSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
