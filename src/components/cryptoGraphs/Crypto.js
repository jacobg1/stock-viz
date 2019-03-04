import React, { Component } from 'react'
import PriceGraph from '../stockGraph/PriceGraph'
import CryptoFilter from '../../containers/cryptoCurrency/CryptoFilter'
import Legend from '../stockGraph/Legend'

// import PriceGraph from './PriceGraph'
// import LineFilter from '../../containers/stocks/LineFilter'
import { CryptoLines } from '../../actions/cryptoActions'
import CryptoList from './CryptoList'
class Crypto extends Component {
  render() {
    const { loading, cryptoPrices, error, meta, cryptoLines } = this.props
    console.log(cryptoLines)
    if (error) {
      return <div className="error">Error : {error}</div>
    }
    // if (loading) {
    //   return <h1>Loading...</h1>
    // }
    return (
      <>
				<CryptoList />
        {meta && (
          <div className="meta">
            {/* <h2>Coin: {meta['2. Digital Currency Code']}</h2>
            <p>Market: {meta['5. Market Name']}</p> */}
            <p>Last updated: {meta['6. Last Refreshed']}</p>
          </div>
        )}
				{
					loading && (
						<h1>Loading....</h1>
					)
				}
        {cryptoPrices.length !== 0 && (
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
