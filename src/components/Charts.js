import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
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

/*
	component for showing charts and filters for switching between charts
*/
const Charts = ({ chartsToShow }) => {
  return (
    <div className="App">
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

const mapStateToProps = (state) => ({
  chartsToShow: state.chartFilters,
})

const ChartsContainer = connect(mapStateToProps)(Charts)

export default ChartsContainer

Charts.propTypes = {
  chartsToShow: PropTypes.string.isRequired,
}
