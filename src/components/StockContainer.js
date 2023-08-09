import React from "react";
import Stock from "./Stock";

function StockContainer({ stockData, portfolio, setPortfolio, filterType }){

  const filteredStocks = filterType ? stockData.filter((stock) => stock.type === filterType) : stockData;


  return (
    <div>
      <h2>Stocks</h2>
      {filteredStocks.map((item) => <Stock key={item.id} originalStock={item} setPortfolio={setPortfolio} portfolio={portfolio} />)}
    </div>
  );
}

export default StockContainer;
