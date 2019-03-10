// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import './App.scss'
import { breakpoints } from '../styles/breakpoints'

import { ChartFilters } from '../actions'

import StocksContainer from '../containers/stocks/StocksContainer'
import FilterCharts from '../containers/FilterCharts'
import CryptoContainer from '../containers/cryptoCurrency/CryptoContainer'
// import AddPieChart from '../containers/pieCharts/AddPieChart'
// import VisiblePieChartList from '../containers/pieCharts/VisiblePieChartList'

// import AddLineGraph from '../containers/lineGraphs/AddLineGraph'
// import VisibleLineGraphList from '../containers/lineGraphs/VisibleLineGraphList'
// import FetchStocks from '../containers/stocks/FetchStocks'
// import FetchCrypto from '../containers/cryptoCurrency/FetchCrypto'

const chartFilters = css`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 90%;
  max-width: 540px;
  margin: 0 auto;
  padding: 15px 0;
  ${'' /* @media ${breakpoints.laptop} {
    flex-direction: column;
    position: absolute;
    left: 10%;
    width: 200px;
  } */}
  ${'' /* padding-left: 104px;
  margin-top: 36px; */}
`
const title = css`
  color: #ffffff;
  font-size: 35px;
  margin-bottom: 10px;
`

/*
	component for showing charts and filters for switching between charts
*/
class Charts extends Component {
  render() {
    const { chartsToShow } = this.props
    // console.log(chartsToShow)
    return (
      <div className="App">
        <h1 css={title}>Data Lines</h1>
        <div className="charts">
          {/* <FilterCharts filter={ChartFilters.SHOW_PIE_CHARTS}>
            Pie Charts
          </FilterCharts>
          <FilterCharts filter={ChartFilters.SHOW_LINE_GRAPHS}>
            Line Graphs
          </FilterCharts> */}
          <div css={chartFilters}>
            <FilterCharts filter={ChartFilters.SHOW_STOCK_PRICES}>
              Stock Prices
            </FilterCharts>
            <FilterCharts filter={ChartFilters.SHOW_CRYPTO_PRICES}>
              CryptoCurrency
            </FilterCharts>
          </div>

          {/* {chartsToShow === 'SHOW_PIE_CHARTS' && (
            <>
              <AddPieChart />
              <VisiblePieChartList />
            </>
          )}
          {chartsToShow === 'SHOW_LINE_GRAPHS' && (
            <>
              <AddLineGraph />
              <VisibleLineGraphList />
            </>
          )} */}
          {chartsToShow === 'SHOW_STOCK_PRICES' && (
            <>
              {/* <FetchStocks /> */}
              <StocksContainer />
            </>
          )}
          {chartsToShow === 'SHOW_CRYPTO_PRICES' && (
            <>
              {/* <FetchCrypto /> */}
              <CryptoContainer />
            </>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  chartsToShow: state.chartFilters
})

const ChartsContainer = connect(mapStateToProps)(Charts)

export default ChartsContainer

Charts.propTypes = {
  chartsToShow: PropTypes.string.isRequired
}
