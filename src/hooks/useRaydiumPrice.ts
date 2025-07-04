import { useState, useEffect } from 'react';

export const useRaydiumPrice = (tokenMint: string) => {
  const [price, setPrice] = useState<number>(0.05); // fallback price
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Raydium API endpoint for token price
        const response = await fetch(`https://api.raydium.io/v2/main/price?tokens=${tokenMint}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch price from Raydium');
        }
        
        const data = await response.json();
        
        if (data && data[tokenMint]) {
          setPrice(data[tokenMint]);
        } else {
          console.warn('Price not found in Raydium API, using fallback');
        }
      } catch (err) {
        console.error('Error fetching price from Raydium:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
        // Keep fallback price on error
      } finally {
        setLoading(false);
      }
    };

    fetchPrice();
    
    // Refresh price every 30 seconds
    const interval = setInterval(fetchPrice, 30000);
    
    return () => clearInterval(interval);
  }, [tokenMint]);

  return { price, loading, error };
};
