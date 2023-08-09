import React from "react";

function Stock({ originalStock, setPortfolio, portfolio }) {
  const{ id, ticker, name, type, price} = originalStock

  function buyStock() {
    const isInPortfolio = portfolio.find((item) => item.id === id);

    if (isInPortfolio) {
      const updatedPortfolio = portfolio.filter((item) => item.id !== id);
      setPortfolio(updatedPortfolio);
    } else {
      setPortfolio((prevData) => [...prevData, originalStock]);
    }
  }

  return (
    <div>
      <div className="card" onClick={buyStock}>
        <div className="card-body" >
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
