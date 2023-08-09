import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [ stockData, setStockData ] = useState([])
  const [ portfolio, setPortfolio] = useState([])
  const [filterType, setFilterType] = useState("")
  const [ sortType, setSortType ] = useState("")
  const [ sortOrder, setSortOrder] = useState("asc")

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then((r) => r.json())
    .then((data) => setStockData(data))
  }, [])


  return (
    <div>
      <SearchBar setFilterType={setFilterType} setSortType={setSortType} setSortOrder={setSortOrder} />
      <div className="row">
        <div className="col-8">
          <StockContainer stockData={stockData} portfolio={portfolio} setPortfolio={setPortfolio} filterType={filterType} sortType={sortType}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stockData={stockData} portfolio={portfolio} setPortfolio={setPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
