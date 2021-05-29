import { useState, useEffect } from 'react';

export function useBtcPrice() {
  const [isLoading, setIsLoading] = useState(true);
  const [price, setPrice] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice/USD.json');
      const data = await response.json();
      const price = data.bpi.USD.rate;
      setPrice(price);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return { price, isLoading };
}
