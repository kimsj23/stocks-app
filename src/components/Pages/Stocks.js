import React, { useState, useEffect } from "react";
import "./Stocks.css";
import Axios from "axios";

function Stocks() {
  const [stockList, setStockList] = useState([]);

  const options = {
    method: "GET",
    url: "http://localhost:5000/",
    params: { region: "US" },
  };

  useEffect(() => {
    Axios.request(options).then((response) => {
      const resData = response.data.finance.result[0].quotes;
      const exchData = resData.filter((exh) => {
        return exh.exchange === "NMS" || exh.exchange === "NYQ";
      });

      setStockList(exchData);
    });
  }, []);

  return (
    <div>
      <h1 className="stocktitle">Trending Stocks</h1>
      <table className="table">
        <tr className="headers">
          <th>Ticker</th>
          <th>Exchange</th>
          <th>Price</th>
          <th>Previous Close</th>
          <th>$ Change</th>
          <th>% Change</th>
        </tr>

        {stockList.map((stock) => {
          return (
            <tr key={stock.symbol} className="headers trendingdata">
              <td className="tickermline">
                {stock.symbol}
                <br />
                {stock.longName}
              </td>
              <td>
                {stock.fullExchangeName === "NasdaqGS"
                  ? "NASDAQ"
                  : stock.fullExchangeName}
              </td>
              <td>${stock.regularMarketPrice.toFixed(2)}</td>
              <td>${stock.regularMarketPreviousClose.toFixed(2)}</td>
              <td
                className={
                  stock.regularMarketChange > 0 ? "positive" : "negative"
                }
              >
                ${stock.regularMarketChange.toFixed(2)}
              </td>
              <td
                className={
                  stock.regularMarketChangePercent > 0 ? "positive" : "negative"
                }
              >
                {stock.regularMarketChangePercent.toFixed(2)}%
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Stocks;
