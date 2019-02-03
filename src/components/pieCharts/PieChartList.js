import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import PieChart from './PieChart'

/*
  pieCharts: an array of objects, each object represents a pie chart
  Loops through state and displays each individual pie chart
  Pure component so it only re renders new state
*/
class PieChartList extends PureComponent {
  render() {
    const { pieCharts, togglePercent } = this.props
    return (
      <div id="pieCharts">
        {pieCharts.map(pieChart => (
          <PieChart
            key={pieChart.id}
            {...pieChart}
            onChange={() => togglePercent(pieChart.id)}
          />
        ))}
      </div>
    )
  }
}

export default PieChartList

PieChartList.propTypes = {
  pieCharts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      data: PropTypes.string.isRequired,
      title: PropTypes.string,
      labels: PropTypes.string,
      isPercent: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  togglePercent: PropTypes.func.isRequired
}
