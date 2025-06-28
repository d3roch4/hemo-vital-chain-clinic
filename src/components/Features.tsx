
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

const Features = () => {
  const features = [
    {
      icon: Vote,
      title: "Governança Descentralizada",
      description: "Holders de $HEMO participam das decisões estratégicas da rede de clínicas",
      badge: "DAO",
      color: "text-hemo-600"
    },
    {
      icon: Building2,
      title: "Expansão da Rede",
      description: "Fundos levantados para construção e equipamento de novas unidades",
      badge: "Crescimento",
      color: "text-green-600"
    },
    {
      icon: Stethoscope,
      title: "Excelência Médica",
      description: "Padrão internacional de cuidado renal com tecnologia de ponta",
      badge: "Qualidade",
      color: "text-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Retorno Sustentável",
      description: "Modelo de negócio comprovado no setor de saúde suplementar",
      badge: "ROI",
      color: "text-purple-600"
    },
    {
      icon: Shield,
      title: "Transparência Total",
      description: "Blockchain garante auditabilidade e transparência dos recursos",
      badge: "Segurança",
      color: "text-red-600"
    },
    {
      icon: Globe,
      title: "Impacto Social",
      description: "Ampliação do acesso a tratamento de qualidade para doença renal",
      badge: "ESG",
      color: "text-emerald-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-hemo-700 border-hemo-200">
            <Heart className="w-4 h-4 mr-2" />
            Por que Investir
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Oportunidade Única no
            <span className="text-hemo-600 block mt-2">Setor de Saúde</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            $HEMO combina o potencial de crescimento do setor de saúde com a inovação 
            da governança descentralizada, criando valor para investidores e pacientes.
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
            Junte-se a mais de 500 investidores que já confiaram no projeto
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
