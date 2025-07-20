
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Tokenomics from "@/components/Tokenomics";
import Footer from "@/components/Footer";
import LanguageSelector from "@/components/LanguageSelector";
import Script from 'next/script'

const Index = () => {
  return (
    <>
      <div className="min-h-screen">
        <LanguageSelector />
        <div className="flex flex-col md:flex-row w-full gap-4">
          <Hero className="w-full md:w-auto" />
          <div id="rango-widget-container" className="w-full md:flex-1"></div>
        </div>
        <Features />
        <Tokenomics />
        <Footer />
      </div>
      <Script src="https://api.rango.exchange/widget/iframe.bundle.min.js"></Script> 
      <Script src="init-rango.js" strategy="lazyOnload"></Script>
    </>
  );
};

export default Index;
