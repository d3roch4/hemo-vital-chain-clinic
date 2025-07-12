import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Coins, Loader2, CheckCircle, AlertTriangle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import { useRaydiumPrice } from '@/hooks/useRaydiumPrice';

const TokenPurchase = () => {
  const { t } = useTranslation('common');
  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [txSignature, setTxSignature] = useState('');

  // Mock data
  const publicKey = 'mock-wallet-public-key-123456789';
  const HEMO_TOKEN_MINT = 'mock-hemo-token-mint';
  
  const { price: tokenPrice, loading: priceLoading } = useRaydiumPrice(HEMO_TOKEN_MINT);
  const solPrice = 150; // Mock SOL price in USD
  const solAmount = parseFloat(amount) * tokenPrice / solPrice;

  const handlePurchase = async () => {
    if (!amount) {
      toast.error(t('purchase.error.missingData', 'Please enter amount'));
      return;
    }

    if (parseFloat(amount) <= 0) {
      toast.error(t('purchase.error.invalidAmount', 'Please enter a valid amount'));
      return;
    }

    setIsLoading(true);
    setTxSignature('');

    try {
      // Mock transaction processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockSignature = 'mock-transaction-signature-' + Date.now();
      setTxSignature(mockSignature);
      toast.success(t('purchase.success', 'Transaction successful!'));
      
      console.log('Mock transaction signature:', mockSignature);
      console.log('HEMO tokens purchased:', amount);
    } catch (error) {
      console.error('Transaction failed:', error);
      toast.error(t('purchase.error.failed', 'Transaction failed. Please try again.'));
    } finally {
      setIsLoading(false);
    }
  };

  if (!publicKey) {
    return (
      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          {t('purchase.connectWallet', 'Please connect your wallet to purchase $HEMO tokens.')}
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-sm border-0 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center text-xl font-bold text-gray-900">
          <Coins className="w-6 h-6 mr-2 text-primary" />
          {t('purchase.title', 'Buy $HEMO Tokens')}
        </CardTitle>
        <CardDescription>
          {priceLoading 
            ? t('purchase.loadingPrice', 'Loading current price...') 
            : t('purchase.description', `Purchase $HEMO tokens at $${tokenPrice.toFixed(4)} each`)
          }
        </CardDescription>
        <div className="text-xs text-gray-500 mt-2 break-all">
          Token: {HEMO_TOKEN_MINT} (Mock)
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert>
          <AlertDescription>
            This is a mock demo. No real transactions will be processed.
          </AlertDescription>
        </Alert>
        
        <div className="space-y-2">
          <Label htmlFor="amount">
            {t('purchase.amount', 'Amount of tokens')}
          </Label>
          <Input
            id="amount"
            type="number"
            placeholder="1000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="1"
            step="1"
          />
          {amount && !priceLoading && (
            <div className="text-sm text-gray-600 space-y-1">
              <p>{t('purchase.cost', 'Cost')}: ${(parseFloat(amount) * tokenPrice).toFixed(4)} USD</p>
              <p>{t('purchase.solAmount', 'SOL Amount')}: {solAmount.toFixed(6)} SOL</p>
            </div>
          )}
        </div>

        <Button
          onClick={handlePurchase}
          disabled={!amount || isLoading || parseFloat(amount) <= 0 || priceLoading}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              {t('purchase.processing', 'Processing...')}
            </>
          ) : priceLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              {t('purchase.loadingPrice', 'Loading price...')}
            </>
          ) : (
            t('purchase.buy', 'Buy Tokens')
          )}
        </Button>

        {txSignature && (
          <Alert className="border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-700">
              <div className="space-y-2">
                <p className="font-medium">{t('purchase.success', 'Transaction successful!')}</p>
                <p className="text-xs break-all">
                  {t('purchase.signature', 'Signature')}: {txSignature}
                </p>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-green-600 hover:text-green-800 underline text-xs"
                >
                  {t('purchase.viewExplorer', 'View on Solana Explorer (Mock)')}
                </a>
              </div>
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
};

export default TokenPurchase;