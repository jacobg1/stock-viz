import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StockLines } from '../../actions/stockActions'
import { ListFilters } from '../../actions/stockActions'
import Legend from './Legend'
import PriceGraph from './PriceGraph'
import LineFilter from '../../containers/stocks/LineFilter'
import StockSymbolList from './StockSymbolList'
import SymbolListFilter from './SymbolListFilter'
import loadingSpinner from '../../images/loading.svg'
import listOfStockSymbols from '../../data/stockSymbols.json'
import NASDAQStockSymbols from '../../data/NASDAQSymbols.json'

class Stocks extends Component {
  // componentDidMount() {
  //   this.props.dispatch(getPrices())
  // }
  render() {
    const { loading, prices, error, meta, stockLines, listFilters } = this.props
    // console.log(prices)
    // if (error) {
    //   return <div className="error">Error : {error}</div>
    // }
    // if (loading) {
    //   return <h1>Loading...</h1>
    // }
    return (
      <>
        <SymbolListFilter filter={ListFilters.SHOW_NYSE}>
          New York Stock Exchange
        </SymbolListFilter>
        <SymbolListFilter filter={ListFilters.SHOW_NASDAQ}>
          NASDAQ
        </SymbolListFilter>
        {listFilters === 'SHOW_NYSE' && (
          <StockSymbolList options={listOfStockSymbols} />
        )}
        {listFilters === 'SHOW_NASDAQ' && (
          <StockSymbolList options={NASDAQStockSymbols} />
        )}
        {meta && !loading && (
          <div className="meta">
            {/* <h2>Stock: {meta['2. Symbol']}</h2> */}
            {/* <p>{meta['1. Information']}</p> */}
            <p>Last updated: {meta['3. Last Refreshed']}</p>
          </div>
        )}
        {error && <div className="error">Error : {error}</div>}
        {loading && (
          <img
            className="loading-spinner"
            alt="Loading..."
            src={loadingSpinner}
          />
        )}
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

const mapStateToProps = state => ({
  listFilters: state.listFilters
})
export default connect(mapStateToProps)(Stocks)
