import React, { PureComponent } from 'react'
import PieChart from './PieChart'

/*
  pieCharts: an array of objects, each object represents a pie chart
  Loops through state and displays each individual pie chart
*/
class PieChartList extends PureComponent {
  render() {
    console.log('test')
    const { pieCharts, togglePercent } = this.props
    return (
      <div id="pieCharts">
        {pieCharts.map(pieChart => (
          <PieChart
            key={pieChart.id}
            {...pieChart}
            onClick={() => togglePercent(pieChart.id)}
          />
        ))}
      </div>
    )
  }
}

export default PieChartList
