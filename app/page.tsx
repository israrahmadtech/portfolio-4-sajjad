import WhyTrustSection from "./components/WhyChooseMe";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import AchievementsSection from "./components/AchievementsSections";
import BenefitsSection from "./components/BenefitsSection";
import HowIWorkSection from "./components/HowIWork";
import FAQSection from "./components/FAQ";
import ContactCTASection from "./components/ContactInfo";
import ContactFormSection from "./components/ContactForm";
import TechStackSection from "./components/TechStack";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <Header />
      <HeroSection/>
      <WhyTrustSection/>
      <AchievementsSection/>
      <BenefitsSection/>
      <HowIWorkSection/>
      <FAQSection/>
      <ContactCTASection/>
      <ContactFormSection/>
      <TechStackSection/>
    </main>
  );
}