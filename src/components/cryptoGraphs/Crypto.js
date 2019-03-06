import React, { Component } from 'react'
import PriceGraph from '../stockGraph/PriceGraph'
import CryptoFilter from '../../containers/cryptoCurrency/CryptoFilter'
import Legend from '../stockGraph/Legend'

// import PriceGraph from './PriceGraph'
// import LineFilter from '../../containers/stocks/LineFilter'
import { CryptoLines } from '../../actions/cryptoActions'
import CryptoList from './CryptoList'
import loadingSpinner from '../../images/loading.svg'

class Crypto extends Component {
  render() {
    const { loading, cryptoPrices, error, meta, cryptoLines } = this.props
    console.log(cryptoLines)
    // if (error) {
    //   return <div className="error">Error : {error}</div>
    // }
    // if (loading) {
    //   return <h1>Loading...</h1>
    // }
    return (
      <>
        <div className="flex-holder">
          <div className="meta">
            {meta && !loading && (
              <p>Last updated: {meta['6. Last Refreshed']}</p>
            )}
          </div>
          <CryptoList />
        </div>
        {error && <div className="error">Error : {error}</div>}
        {loading && (
          <img
            className="loading-spinner"
            alt="Loading..."
            src={loadingSpinner}
          />
        )}
        {cryptoPrices.length !== 0 && !loading && (
          <>
            <div className="line-filters">
              <Legend stocklines={cryptoLines} />
              <CryptoFilter filter={CryptoLines.HIGH}>high</CryptoFilter>
              <CryptoFilter filter={CryptoLines.LOW}>low</CryptoFilter>
              <CryptoFilter filter={CryptoLines.OPEN}>open</CryptoFilter>
              <CryptoFilter filter={CryptoLines.CLOSE}>close</CryptoFilter>
            </div>
            <PriceGraph
              crypto={true}
              stockLines={cryptoLines}
              prices={cryptoPrices}
            />
          </>
        )}
      </>
    )
  }
}

export default Crypto
