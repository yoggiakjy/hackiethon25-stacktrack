import { useState, useEffect } from "react";
import axios from "axios";

let coinsList = null;

{
  /* Fetch prices of crypto by ticker */
}
function useCryptoData(startingInvestments) {
  const [investments, setInvestments] = useState(startingInvestments);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPrices = async () => {
      // setIsLoading(true);

      try {
        if (!coinsList) {
          const res = await axios.get(
            "https://api.coingecko.com/api/v3/coins/list"
          );
          coinsList = res.data;
        }

        const cryptoInvestments = startingInvestments.filter(
          (inv) => inv.type === "Crypto" && !inv.amount
        );
        const stockSavingInvestments = startingInvestments.filter(
          (inv => inv.type !== "Crypto")
        );
        
        const updatedInvestments = await Promise.all(
          cryptoInvestments.map(async (investment) => {
            const coin = coinsList.find(
              (coin) =>
                coin.symbol.toLowerCase() === investment.entry.toLowerCase()
            );

            console.log(coin)
            

            if (!coin) {
              return investment;
            }

            const coinRes = await axios.get(
              `https://api.coingecko.com/api/v3/coins/${coin.id}`
            );
            console.log("Checking:", coinRes.data)
            return {
              ...investment,
              amount: coinRes.data.market_data?.current_price?.aud || "N/A",
            };
          })
        );

        console.log(updatedInvestments)
        setInvestments([...stockSavingInvestments, ...updatedInvestments]);
      } catch (error) {
        console.error("Couldn't get coin!", error);
      }
      // } finally {
      //   setIsLoading(false);
      // }
    };

    fetchPrices();
  }, [startingInvestments]);

  return { investments };
}

export default useCryptoData;
