// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import styled from '@emotion/styled'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { breakpoints } from '../../styles/breakpoints'

import { StockLines } from '../../actions/stockActions'
import { ListFilters } from '../../actions/stockActions'
import { getPrices } from '../../actions/stockActions'

import Legend from './Legend'
import PriceGraph from './PriceGraph'
import LineFilter from '../../containers/stocks/LineFilter'
import StockSymbolList from './StockSymbolList'
import SymbolListFilter from './SymbolListFilter'
import loadingSpinner from '../../images/loading.svg'
import listOfStockSymbols from '../../data/stockSymbols.json'
import NASDAQStockSymbols from '../../data/NASDAQSymbols.json'

const stockHeader = css`
  font-size: 72px;
  color: #4d535e;
  opacity: 0.3;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  text-shadow: 0 1px 0 #e9e9ff;
  @media ${breakpoints.mobile} {
    font-size: 99px;
    top: 50%;
  }
`
const flex = css`
  display: flex;
  justify-content: space-around;
  max-width: 1178px;
  margin: 0 auto;

  ${'' /* @media ${breakpoints.laptop} {
    padding-top: 30px;
  } */}
  ${'' /* padding: 30px 0; */}
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
const stockFilter = css`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`
const loadingHolder = css`
  width: 100%;
  height: 100%;
`
const buttonFlex = css`
  display: flex;
  flex-direction: column-reverse;
  width: 85%;
  max-width: 440px;
  @media ${breakpoints.mobile} {
    flex-direction: row;
    justify-content: center;
  }
`
const margin = css`
  margin-left: 0;
  margin-bottom: 10px;

  @media ${breakpoints.mobile} {
    margin-left: 5px;
    margin-bottom: 0;
    width: 100%;
  }
`
const button = css`
  background-color: #a2edf2;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.5px;
  border: none;
  padding: 0;
  color: #2c323b;
  padding: 0 12px;
  cursor: pointer;
  border: 1px solid #a2edf2;
  display: inline-block;
  transition: all 0.4s ease-in-out;
  line-height: 25px;
  @media ${breakpoints.mobile} {
    line-height: 100%;
  }
  &:hover {
    background-color: #2c323b;
    border-color: #b1b3fc;
    color: white;
  }
  &:focus {
    border-color: #ef6e8d;
    outline: none;
  }
`
class Stocks extends Component {
  constructor(props) {
    super()
    this.state = {
      width: 1000,
      height: 600
    }
    this.updateGraphSize = this.updateGraphSize.bind(this)
  }
  // componentDidMount() {
  //   this.props.dispatch(getPrices())
  // }
  updateGraphSize() {
    const windowWidth = window.innerWidth,
      newWidth = window.innerWidth - 35,
      newHeight = Math.round(newWidth / 1.67)
    if (windowWidth >= 970) {
      this.setState({ width: 1000, height: 600 })
    } else if (windowWidth < 970 && windowWidth > 500) {
      this.setState({ width: newWidth, height: newHeight })
    } else if (windowWidth <= 500) {
      this.setState({
        width: 430,
        height: 375
      })
    }
  }
  componentDidMount() {
    this.updateGraphSize()
    window.addEventListener('resize', this.updateGraphSize, false)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateGraphSize, false)
  }
  render() {
    const {
      loading,
      prices,
      error,
      meta,
      stockLines,
      listFilters,
      stockSymbol,
      dispatch
    } = this.props

    const { height, width } = this.state
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
          <div css={buttonFlex}>
            <button
              onClick={() => {
                if (stockSymbol.value) {
                  dispatch(getPrices(stockSymbol.value, 'TIME_SERIES_MONTHLY'))
                }
                // symbol.value = ''
              }}
              css={button}
            >
              search
            </button>
            <div css={margin}>
              <div css={stockFilter}>
                <SymbolListFilter filter={ListFilters.SHOW_NASDAQ}>
                  NASDAQ
                </SymbolListFilter>
                <SymbolListFilter filter={ListFilters.SHOW_NYSE}>
                  NYSE
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
        </div>
        <div css={metaText}>
          {meta && !loading && <p>Last updated: {meta['3. Last Refreshed']}</p>}
        </div>

        {error && <div css={fetchError}>Error : {error}</div>}
        {loading && (
          <div css={loadingHolder}>
            <img css={spinner} alt="Loading..." src={loadingSpinner} />
          </div>
        )}

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
              height={height}
              width={width}
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
  listFilters: state.listFilters,
  stockSymbol: state.stockSymbol
})
// const mapDispatchToProps = dispatch => ({
// 	getPrices: symbol => dispatch(getPrices(symbol, 'TIME_SERIES_MONTHLY'))
// })
export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Stocks)
