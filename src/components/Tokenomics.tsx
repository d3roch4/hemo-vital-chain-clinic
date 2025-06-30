
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
import { useTranslation } from 'react-i18next';

const Tokenomics = () => {
  const { t } = useTranslation('tokenomics');

  const distribution = [
    { 
      category: t('distribution.construction'), 
      percentage: 40, 
      color: "bg-hemo-500", 
      amount: "20M" 
    },
    { 
      category: t('distribution.operation'), 
      percentage: 25, 
      color: "bg-hemo-400", 
      amount: "12.5M" 
    },
    { 
      category: t('distribution.reserve'), 
      percentage: 15, 
      color: "bg-hemo-300", 
      amount: "7.5M" 
    },
    { 
      category: t('distribution.team'), 
      percentage: 12, 
      color: "bg-hemo-600", 
      amount: "6M" 
    },
    { 
      category: t('distribution.partnerships'), 
      percentage: 8, 
      color: "bg-hemo-200", 
      amount: "4M" 
    }
  ];

  const tokenDetails = [
    { label: t('tokenDetails.totalSupply'), value: "1,000,000,000", unit: "$HEMO" },
    { label: t('tokenDetails.currentPrice'), value: "$0.05", unit: "USD" },
    { label: t('tokenDetails.hardCap'), value: "$50M", unit: "USD" },
    { label: t('tokenDetails.softCap'), value: "$10M", unit: "USD" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-hemo-700 border-hemo-200">
            <Coins className="w-4 h-4 mr-2" />
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Token Details */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-bold text-gray-900">
                <Target className="w-6 h-6 mr-3 text-hemo-600" />
                {t('tokenDetails.title')}
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
                  <span className="font-semibold text-gray-900">{t('vesting.title')}</span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• {t('vesting.tge')}</div>
                  <div>• {t('vesting.cliff')}</div>
                  <div>• {t('vesting.monthly')}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Distribution Chart */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-bold text-gray-900">
                <PieChart className="w-6 h-6 mr-3 text-hemo-600" />
                {t('distribution.title')}
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
              {t('roadmap.title')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-hemo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">Q1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('roadmap.q1.title')}</h4>
                <p className="text-sm text-gray-600">{t('roadmap.q1.description')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-hemo-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">Q2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('roadmap.q2.title')}</h4>
                <p className="text-sm text-gray-600">{t('roadmap.q2.description')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-hemo-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">Q3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('roadmap.q3.title')}</h4>
                <p className="text-sm text-gray-600">{t('roadmap.q3.description')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-hemo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">Q4</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('roadmap.q4.title')}</h4>
                <p className="text-sm text-gray-600">{t('roadmap.q4.description')}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Tokenomics;
