
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, DollarSign, Users } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-hemo-50 via-white to-medical-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-hemo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-medical-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animate-delay-400"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-hemo-100 text-hemo-800 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <Heart className="w-4 h-4 mr-2" />
            {t('badge')}
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up">
            {t('title')}
            <span className="text-transparent bg-clip-text bg-medical-gradient block mt-2">
              {t('titleHighlight')}
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up animate-delay-200">
            {t('subtitle')}
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-slide-up animate-delay-400">
            <div className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-hemo-100">
              <DollarSign className="w-8 h-8 text-hemo-600 mb-2" />
              <div className="text-3xl font-bold text-gray-900">{t('stats.fundraising.value')}</div>
              <div className="text-gray-600">{t('stats.fundraising.label')}</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-hemo-100">
              <Heart className="w-8 h-8 text-hemo-600 mb-2" />
              <div className="text-3xl font-bold text-gray-900">{t('stats.clinics.value')}</div>
              <div className="text-gray-600">{t('stats.clinics.label')}</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-hemo-100">
              <Users className="w-8 h-8 text-hemo-600 mb-2" />
              <div className="text-3xl font-bold text-gray-900">{t('stats.patients.value')}</div>
              <div className="text-gray-600">{t('stats.patients.label')}</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animate-delay-600">
            <Button 
              size="lg" 
              className="bg-medical-gradient hover:shadow-xl transition-all duration-300 text-lg px-8 py-4 animate-pulse-glow"
            >
              {t('cta.buy')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-hemo-600 text-hemo-700 hover:bg-hemo-50 text-lg px-8 py-4"
            >
              {t('cta.whitepaper')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
