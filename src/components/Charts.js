// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import './App.scss'
import { ChartFilters } from '../actions'
import StocksContainer from '../containers/stocks/StocksContainer'
import FilterCharts from '../containers/FilterCharts'
import CryptoContainer from '../containers/cryptoCurrency/CryptoContainer'

const chartFilters = css`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 90%;
  max-width: 540px;
  margin: 0 auto;
  padding: 15px 0;
`
const title = css`
  color: #ffffff;
  font-size: 30px;
  margin-bottom: 10px;
  padding-top: 10px;
`

/*
	component for showing charts and filters for switching between charts
*/
class Charts extends Component {
  render() {
    const { chartsToShow } = this.props
    return (
      <div className="App">
        <h1 css={title}>Data Playground</h1>
        <div className="charts">
          <div css={chartFilters}>
            <FilterCharts filter={ChartFilters.SHOW_STOCK_PRICES}>
              Stock Prices
            </FilterCharts>
            <FilterCharts filter={ChartFilters.SHOW_CRYPTO_PRICES}>
              CryptoCurrency
            </FilterCharts>
          </div>
          {chartsToShow === 'SHOW_STOCK_PRICES' && (
            <>
              <StocksContainer />
            </>
          )}
          {chartsToShow === 'SHOW_CRYPTO_PRICES' && (
            <>
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
