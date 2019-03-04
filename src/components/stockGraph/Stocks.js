import React, { Component } from 'react'
import PriceGraph from './PriceGraph'
import LineFilter from '../../containers/stocks/LineFilter'
import { StockLines } from '../../actions/stockActions'
import Legend from './Legend'
import SymbolList from '../../components/stockGraph/SymbolList'
import loadingSpinner from '../../images/loading.svg'

class Stocks extends Component {
  // componentDidMount() {
  //   this.props.dispatch(getPrices())
  // }
  render() {
    const { loading, prices, error, meta, stockLines } = this.props
    // console.log(prices)
    // if (error) {
    //   return <div className="error">Error : {error}</div>
    // }
    // if (loading) {
    //   return <h1>Loading...</h1>
    // }
    return (
      <>
				<SymbolList />
        {meta && !loading && (
          <div className="meta">
            {/* <h2>Stock: {meta['2. Symbol']}</h2> */}
            {/* <p>{meta['1. Information']}</p> */}
            <p>Last updated: {meta['3. Last Refreshed']}</p>
          </div>
        )}
				{
					error && (
						<div className="error">Error : {error}</div>
					)
				}
				{
					loading && (
						<img className="loading-spinner" alt="Loading..." src={loadingSpinner} />
					)
				}
        {prices.length !== 0 && !loading && (
          <>
            <div className="line-filters">
              <Legend stocklines={stockLines} />
              <LineFilter filter={StockLines.HIGH}>high</LineFilter>
              <LineFilter filter={StockLines.LOW}>low</LineFilter>
              <LineFilter filter={StockLines.OPEN}>open</LineFilter>
              <LineFilter filter={StockLines.CLOSE}>close</LineFilter>
            </div>
            <PriceGraph
              stockLines={stockLines}
              prices={prices}
              crypto={false}
            />
          </>
        )}
      </>
    )
  }
}

export default Stocks
