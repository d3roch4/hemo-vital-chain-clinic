
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Vote, 
  Building2, 
  Stethoscope, 
  TrendingUp, 
  Shield, 
  Globe,
  Heart,
  Users
} from "lucide-react";
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation('features');

  const features = [
    {
      icon: Vote,
      title: t('items.governance.title'),
      description: t('items.governance.description'),
      badge: t('items.governance.badge'),
      color: "text-hemo-600"
    },
    {
      icon: Building2,
      title: t('items.expansion.title'),
      description: t('items.expansion.description'),
      badge: t('items.expansion.badge'),
      color: "text-green-600"
    },
    {
      icon: Stethoscope,
      title: t('items.excellence.title'),
      description: t('items.excellence.description'),
      badge: t('items.excellence.badge'),
      color: "text-blue-600"
    },
    {
      icon: TrendingUp,
      title: t('items.returns.title'),
      description: t('items.returns.description'),
      badge: t('items.returns.badge'),
      color: "text-purple-600"
    },
    {
      icon: Shield,
      title: t('items.transparency.title'),
      description: t('items.transparency.description'),
      badge: t('items.transparency.badge'),
      color: "text-red-600"
    },
    {
      icon: Globe,
      title: t('items.impact.title'),
      description: t('items.impact.description'),
      badge: t('items.impact.badge'),
      color: "text-emerald-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-hemo-700 border-hemo-200">
            <Heart className="w-4 h-4 mr-2" />
            {t('badge')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('title')}
            <span className="text-hemo-600 block mt-2">{t('titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-hemo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-hemo-700 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-hemo-100 text-hemo-800 rounded-full text-sm font-medium">
            <Users className="w-4 h-4 mr-2" />
            {t('callToAction')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
