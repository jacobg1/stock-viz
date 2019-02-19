import React, { Component } from 'react'
import PriceGraph from './PriceGraph'
import LineFilter from '../../containers/stocks/LineFilter'
import { StockLines } from '../../actions/stockActions'
import { connect } from 'react-redux'

class Stocks extends Component {
  // componentDidMount() {
  //   this.props.dispatch(getPrices())
  // }
  render() {
    const { loading, prices, error, meta, stockLines } = this.props
    console.log(prices)
    if (error) {
      return <div>Error : {error.message}</div>
    }
    if (loading) {
      return <h1>Loading...</h1>
    }
    return (
      <>
        {meta && (
          <div className="meta">
            <h2>Stock: {meta['2. Symbol']}</h2>
            {/* <p>{meta['1. Information']}</p> */}
            <p>Last updated: {meta['3. Last Refreshed']}</p>
            <div className="legend">
              <div className="high" />
              <span> - high</span>
              <div className="low" />
              <span> - low</span>
              <div className="open" />
              <span> - open</span>
              <div className="close" />
              <span> - close</span>
            </div>
          </div>
        )}

        {prices.length !== 0 && (
          <>
            <LineFilter filter={'high'}>high</LineFilter>
            <LineFilter filter={'low'}>low</LineFilter>
            <LineFilter filter={'open'}>open</LineFilter>
            <LineFilter filter={'close'}>close</LineFilter>
            <PriceGraph stockLines={stockLines} prices={prices} />
          </>
        )}
      </>
    )
  }
}

export default Stocks
