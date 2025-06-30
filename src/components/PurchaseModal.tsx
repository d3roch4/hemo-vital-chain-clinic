
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useWallet } from '@solana/wallet-adapter-react';
import WalletConnection from './WalletConnection';
import TokenPurchase from './TokenPurchase';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface PurchaseModalProps {
  children: React.ReactNode;
}

const PurchaseModal = ({ children }: PurchaseModalProps) => {
  const { t } = useTranslation('hero');
  const { connected } = useWallet();
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-gray-900">
            {t('cta.buy')}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          {!connected ? (
            <WalletConnection />
          ) : (
            <TokenPurchase />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseModal;
