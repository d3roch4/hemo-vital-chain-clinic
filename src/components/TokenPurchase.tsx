
import React, { useState } from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Coins, Loader2, CheckCircle, AlertTriangle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

const TokenPurchase = () => {
  const { t } = useTranslation('common');
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [txSignature, setTxSignature] = useState('');

  // Mock treasury wallet address (replace with actual treasury address)
  const treasuryAddress = new PublicKey('11111111111111111111111111111112');
  
  const tokenPrice = 0.05; // $0.05 per token
  const solPrice = 150; // Mock SOL price in USD
  const solAmount = parseFloat(amount) * tokenPrice / solPrice;

  const handlePurchase = async () => {
    if (!publicKey || !amount) {
      toast.error(t('purchase.error.missingData', 'Please connect wallet and enter amount'));
      return;
    }

    if (parseFloat(amount) <= 0) {
      toast.error(t('purchase.error.invalidAmount', 'Please enter a valid amount'));
      return;
    }

    setIsLoading(true);
    setTxSignature('');

    try {
      // Create transaction
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: treasuryAddress,
          lamports: Math.floor(solAmount * LAMPORTS_PER_SOL),
        })
      );

      // Get recent blockhash
      const { blockhash } = await connection.getLatestBlockhash();
      transaction.recentBlockhash = blockhash;
      transaction.feePayer = publicKey;

      // Send transaction
      const signature = await sendTransaction(transaction, connection);
      
      // Confirm transaction
      await connection.confirmTransaction(signature, 'confirmed');
      
      setTxSignature(signature);
      toast.success(t('purchase.success', 'Transaction successful!'));
      
      console.log('Transaction signature:', signature);
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
          <Coins className="w-6 h-6 mr-2 text-hemo-600" />
          {t('purchase.title', 'Buy $HEMO Tokens')}
        </CardTitle>
        <CardDescription>
          {t('purchase.description', 'Purchase $HEMO tokens at $0.05 each')}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
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
          {amount && (
            <div className="text-sm text-gray-600 space-y-1">
              <p>{t('purchase.cost', 'Cost')}: ${(parseFloat(amount) * tokenPrice).toFixed(2)} USD</p>
              <p>{t('purchase.solAmount', 'SOL Amount')}: {solAmount.toFixed(6)} SOL</p>
            </div>
          )}
        </div>

        <Button
          onClick={handlePurchase}
          disabled={!amount || isLoading || parseFloat(amount) <= 0}
          className="w-full bg-hemo-600 hover:bg-hemo-700 text-white"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              {t('purchase.processing', 'Processing...')}
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
                  href={`https://explorer.solana.com/tx/${txSignature}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-800 underline text-xs"
                >
                  {t('purchase.viewExplorer', 'View on Solana Explorer')}
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
