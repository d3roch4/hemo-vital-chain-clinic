import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Wallet, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface WalletConnectionProps {
  onModalClose?: () => void;
}

const WalletConnection = ({ onModalClose }: WalletConnectionProps) => {
  const { t } = useTranslation('common');
  
  // Mock wallet state
  const connected = false;
  const mockPublicKey = 'mock-wallet-public-key-123456789';

  const handleWalletButtonClick = () => {
    console.log('Mock wallet connection');
    if (onModalClose) {
      onModalClose();
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-sm border-0 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center text-xl font-bold text-gray-900">
          <Wallet className="w-6 h-6 mr-2 text-primary" />
          {t('wallet.title', 'Wallet Connection')}
        </CardTitle>
        <CardDescription>
          {connected 
            ? t('wallet.connected', 'Wallet connected successfully') 
            : t('wallet.connect', 'Connect your Phantom wallet to purchase $HEMO tokens')
          }
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center">
          <Button 
            onClick={handleWalletButtonClick}
            variant="outline"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Connect Phantom Wallet (Mock)
          </Button>
        </div>
        
        {connected && (
          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center text-green-700 text-sm">
              <AlertCircle className="w-4 h-4 mr-2" />
              <span className="font-medium">{t('wallet.address', 'Wallet Address')}:</span>
            </div>
            <p className="text-xs text-green-600 mt-1 break-all font-mono">
              {mockPublicKey}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WalletConnection;