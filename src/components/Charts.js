import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import AddPieChart from '../containers/AddPieChart'
import VisiblePieChartList from '../containers/VisiblePieChartList'
import FilterCharts from '../containers/FilterCharts'
import { ChartFilters } from '../actions'
import PropTypes from 'prop-types'

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
        <header className="App-header">
          {chartsToShow === 'SHOW_PIE_CHARTS' && (
            <>
              <AddPieChart />
              <VisiblePieChartList />
            </>
          )}
          {chartsToShow === 'SHOW_LINE_GRAPHS' && (
            <>
              <p>line graphs!!!</p>
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