import React from 'react'
import PieChart from './PieChart'

const PieChartList = ({ pieCharts }) => (
  <div>
    {pieCharts.map(pieChart => (
      <PieChart key={pieChart.id} {...pieChart} />
    ))}
  </div>
)

export default PieChartList
