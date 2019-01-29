import React from 'react'
import PieChart from './PieChart'

/*
  pieCharts: an array of objects, each object represents a pie chart
  Loops through state and displays each individual pie chart
*/
const PieChartList = ({ pieCharts }) => (
  <div id="pieCharts">
    {pieCharts.map(pieChart => (
      <PieChart key={pieChart.id} {...pieChart} />
    ))}
  </div>
)

export default PieChartList
