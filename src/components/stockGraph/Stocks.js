import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

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

const stockHeader = css`
  font-size: 99px;
  color: #4d535e;
  opacity: 0.3;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  text-shadow: 0 1px 0 #e9e9ff;
`
const flex = css`
  display: flex;
  justify-content: space-around;
  max-width: 1178px;
  margin: 0 auto;
  padding: 30px 0;
`

const metaText = css`
  align-self: center;
  p {
    font-size: 14px;
  }
`
const lineFilters = css`
  max-width: 900px;
  text-align: left;
  margin: 0 auto;

  label {
    font-size: 13px;
    padding-left: 20px;

    &:first-of-type {
      padding-left: 10px;
    }
  }
`
const spinner = css`
  margin-top: 100px;
`
const fetchError = css`
  max-width: 900px;
  padding-top: 21%;
  margin: 0 auto;
`
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
        <div css={flex}>
          <div css={metaText}>
            {meta && !loading && (
              <p>Last updated: {meta['3. Last Refreshed']}</p>
            )}
          </div>

          <div className="filter-holder">
            <div className="stock-filter">
              <SymbolListFilter filter={ListFilters.SHOW_NYSE}>
                New York Stock Exchange
              </SymbolListFilter>

              <SymbolListFilter filter={ListFilters.SHOW_NASDAQ}>
                NASDAQ
              </SymbolListFilter>
            </div>
            {listFilters === 'SHOW_NYSE' && (
              <StockSymbolList options={listOfStockSymbols} />
            )}
            {listFilters === 'SHOW_NASDAQ' && (
              <StockSymbolList options={NASDAQStockSymbols} />
            )}
          </div>
        </div>

        {error && <div css={fetchError}>Error : {error}</div>}
        {loading && <img css={spinner} alt="Loading..." src={loadingSpinner} />}
        {prices.length !== 0 && !loading && (
          <>
            <div css={lineFilters}>
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
        {!loading && prices.length === 0 && <h1 css={stockHeader}>STOCKS</h1>}
      </>
    )
  }
}

const mapStateToProps = state => ({
  listFilters: state.listFilters
})
export default connect(mapStateToProps)(Stocks)
