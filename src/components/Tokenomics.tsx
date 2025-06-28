
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  PieChart, 
  TrendingUp, 
  Lock, 
  Coins, 
  Calendar,
  Target
} from "lucide-react";

const Tokenomics = () => {
  const distribution = [
    { category: "Construção e Equipamentos", percentage: 40, color: "bg-hemo-500", amount: "20M" },
    { category: "Operação e Marketing", percentage: 25, color: "bg-hemo-400", amount: "12.5M" },
    { category: "Reserva de Emergência", percentage: 15, color: "bg-hemo-300", amount: "7.5M" },
    { category: "Equipe e Desenvolvimento", percentage: 12, color: "bg-hemo-600", amount: "6M" },
    { category: "Parcerias Estratégicas", percentage: 8, color: "bg-hemo-200", amount: "4M" }
  ];

  const tokenDetails = [
    { label: "Supply Total", value: "1,000,000,000", unit: "$HEMO" },
    { label: "Preço Atual", value: "$0.05", unit: "USD" },
    { label: "Hard Cap", value: "$50M", unit: "USD" },
    { label: "Soft Cap", value: "$10M", unit: "USD" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-hemo-700 border-hemo-200">
            <Coins className="w-4 h-4 mr-2" />
            Tokenomics
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Economia do Token
            <span className="text-hemo-600 block mt-2">$HEMO</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Distribuição transparente e estratégica dos recursos para maximizar 
            o impacto na expansão da rede de clínicas de hemodiálise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Token Details */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-bold text-gray-900">
                <Target className="w-6 h-6 mr-3 text-hemo-600" />
                Detalhes do Token
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {tokenDetails.map((detail, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-hemo-50 rounded-lg">
                    <span className="text-gray-700 font-medium">{detail.label}</span>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-gray-900">{detail.value}</span>
                      <span className="text-sm text-gray-600 ml-1">{detail.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Vesting Schedule */}
              <div className="mt-8 p-4 bg-gradient-to-r from-hemo-50 to-medical-50 rounded-lg">
                <div className="flex items-center mb-3">
                  <Lock className="w-5 h-5 mr-2 text-hemo-600" />
                  <span className="font-semibold text-gray-900">Cronograma de Liberação</span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• 25% na TGE (Token Generation Event)</div>
                  <div>• 25% em 6 meses (cliff)</div>
                  <div>• 50% liberados mensalmente ao longo de 18 meses</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Distribution Chart */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-bold text-gray-900">
                <PieChart className="w-6 h-6 mr-3 text-hemo-600" />
                Distribuição dos Recursos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {distribution.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{item.category}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-bold text-gray-900">{item.amount}</span>
                        <Badge variant="secondary" className="text-xs">
                          {item.percentage}%
                        </Badge>
                      </div>
                    </div>
                    <Progress value={item.percentage} className="h-3" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl font-bold text-gray-900">
              <Calendar className="w-6 h-6 mr-3 text-hemo-600" />
              Roadmap de Implementação
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-hemo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">Q1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Captação</h4>
                <p className="text-sm text-gray-600">Launch do token e captação inicial</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-hemo-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">Q2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Planejamento</h4>
                <p className="text-sm text-gray-600">Seleção de locais e projetos arquitetônicos</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-hemo-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">Q3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Construção</h4>
                <p className="text-sm text-gray-600">Início das obras das primeiras clínicas</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-hemo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">Q4</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Operação</h4>
                <p className="text-sm text-gray-600">Abertura das primeiras unidades</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Tokenomics;
