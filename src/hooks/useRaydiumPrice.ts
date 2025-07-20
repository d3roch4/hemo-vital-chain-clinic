import { useState, useEffect } from 'react';

// Mock hook for token price
export const useRaydiumPrice = (tokenMint: string) => {
  const [price, setPrice] = useState<number>(0.05); // mock price
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Mock price fetching - just return static data
    setLoading(false);
    setError(null);
  }, [tokenMint]);

  return { price, loading, error };
};