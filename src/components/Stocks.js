import React, { Component } from 'react'
import PriceGraph from './PriceGraph'

class Stocks extends Component {
  // componentDidMount() {
  //   this.props.dispatch(getPrices())
  // }
  render() {
    const { loading, prices, error, meta } = this.props

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
            <h2>{meta['2. Symbol']}</h2>
            <p>{meta['1. Information']}</p>
            <p>Last updated: {meta['3. Last Refreshed']}</p>
            <div className="legend">
              <div className="high" />
              <span> - High</span>
              <div className="low" />
              <span> - Low</span>
            </div>
          </div>
        )}
        <div />
        {prices && <PriceGraph prices={prices} />}
      </>
    )
  }
}

export default Stocks
