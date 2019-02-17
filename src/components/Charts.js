import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.scss'
import AddPieChart from '../containers/pieCharts/AddPieChart'
import VisiblePieChartList from '../containers/pieCharts/VisiblePieChartList'
import FilterCharts from '../containers/FilterCharts'
import { ChartFilters } from '../actions'
import PropTypes from 'prop-types'
import AddLineGraph from '../containers/lineGraphs/AddLineGraph'
import VisibleLineGraphList from '../containers/lineGraphs/VisibleLineGraphList'
import FetchStocks from '../containers/stocks/FetchStocks'
import StocksContainer from '../containers/stocks/StocksContainer'

/*
	component for showing charts and filters for switching between charts
*/
class Charts extends Component {
  render() {
    const { chartsToShow } = this.props
    console.log(chartsToShow)
    return (
      <div className="App">
        <FilterCharts filter={ChartFilters.SHOW_PIE_CHARTS}>
          Pie Charts
        </FilterCharts>
        <FilterCharts filter={ChartFilters.SHOW_LINE_GRAPHS}>
          Line Graphs
        </FilterCharts>
        <FilterCharts filter={ChartFilters.SHOW_STOCK_PRICES}>
          Stock Prices
        </FilterCharts>
        <header className="App-header">
          {chartsToShow === 'SHOW_PIE_CHARTS' && (
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
          )}
          {chartsToShow === 'SHOW_STOCK_PRICES' && (
            <>
              <FetchStocks />
              <StocksContainer />
            </>
          )}
        </header>
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
