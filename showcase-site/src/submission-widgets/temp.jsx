import { useState, useEffect } from "react";
import axios from "axios";

{
  /* Fetch prices of crypto by entry */
}
function useCryptoData(startingInvestments) {
  const [updatedInvestments, setUpdatedInvestments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPrices = async () => {
      setIsLoading(true);

      try {
        const cryptoInvestments = startingInvestments.filter(
          (inv) => inv.type === "Crypto"
        );
        const stockInvestments = startingInvestments.filter(
          (inv) => inv.type === "Stock"
        );
        if (cryptoInvestments.length === 0 && stockInvestments.length === 0) {
          setUpdatedInvestments(startingInvestments);
          return;
        }
        const updatedCrypto = await fetchCryptoPrices(cryptoInvestments);

        setUpdatedInvestments((prevInv) =>
          prevInv.map((inv) => updatedCrypto.find((u) => u.id === inv.id))
        );
      } catch (error) {
        console.error("Couldn't update prices!", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrices();
  }, [startingInvestments]);

  return [updatedInvestments, isLoading];
}

async function fetchCryptoPrices(cryptoInvestments) {
  try {
    const allCryptoIds = cryptoInvestments.map((inv) => inv.entry).join(",");

    const res = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${allCryptoIds}&vs_currencies=aud`
    );

    const updatedInv = cryptoInvestments.map((inv) => {
      const coinEntry = inv.entry.toLowerCase();
      return {
        ...inv,
        amount:
          (res.data[coinEntry]?.aud * Number(inv.equity)).toFixed(2) ||
          "Not a coin!",
      };
    });

    return updatedInv;
  } catch (error) {
    console.error("Couldn't get coin!", error);
    return cryptoInvestments;
  }
}

export default useCryptoData;
