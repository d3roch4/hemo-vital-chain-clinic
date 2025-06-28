
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Tokenomics from "@/components/Tokenomics";
import Footer from "@/components/Footer";
import LanguageSelector from "@/components/LanguageSelector";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LanguageSelector />
      <Hero />
      <Features />
      <Tokenomics />
      <Footer />
    </div>
  );
};

export default Index;
