import React from "react";
import Stock from "./Stock";

function StockContainer({ stockData, portfolio, setPortfolio, filterType, sortType }){

  const filteredStocks = filterType ? stockData.filter((stock) => stock.type === filterType) : stockData;

  const sortedStocks = sortType === "Alphabetically" 
  ? [...filteredStocks].sort((a,b) => a.name.localeCompare(b.name))
  : sortType === "Price"
  ? [...filteredStocks].sort((a,b) => a.price - b.price)
  : filteredStocks;


  return (
    <div>
      <h2>Stocks</h2>
      {sortedStocks.map((item) => <Stock key={item.id} originalStock={item} setPortfolio={setPortfolio} portfolio={portfolio} />)}
    </div>
  );
}

export default StockContainer;
