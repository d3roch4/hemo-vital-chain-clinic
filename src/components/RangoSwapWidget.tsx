import React from 'react';
import { Widget, WidgetConfig } from '@rango-dev/widget-embedded';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const RangoSwapWidget = () => {
  const { t } = useTranslation('common');

  const config: WidgetConfig = {
    // API key for Rango widget (you should get your own for production)
    apiKey: 'c6381a79-2817-4602-83bf-6a641a409e32',
    // WalletConnect project ID (you should get your own for production)
    walletConnectProjectId: 'e24844c5deb5193c1c14840a7af6a40b',
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-sm border-0 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center text-xl font-bold text-gray-900">
          <ArrowUpDown className="w-6 h-6 mr-2 text-hemo-600" />
          {t('swap.title', 'Swap to $HEMO')}
        </CardTitle>
        <CardDescription>
          {t('swap.description', 'Exchange USDT for $HEMO tokens using Rango')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[600px]">
          <Widget config={config} />
        </div>
      </CardContent>
    </Card>
  );
};

export default RangoSwapWidget;