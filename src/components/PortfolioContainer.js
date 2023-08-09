import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stockData, portfolio, setPortfolio }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      { portfolio.map((item) => <Stock key={item.id} originalStock={item} setPortfolio={setPortfolio} portfolio={portfolio}/>)}
    </div>
  );
}

export default PortfolioContainer;
