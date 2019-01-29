import React from 'react'
import * as d3 from 'd3'
import PieSlice from '../components/PieSlice'

const PieChart = ({ data }) => {
  const numberArray = data.split(',').map(Number)
  const height = 300
  const width = 300

  const slice = d3.pie()(numberArray)
  const total = numberArray.reduce((total, amount) => total + amount)

  return (
    <div>
      <h2>{total}</h2>
      <svg height={height} width={width}>
        <g transform={`translate(${width / 2}, ${height / 2})`}>
          <PieSlice slice={slice} />
        </g>
      </svg>
    </div>
  )
}
export default PieChart
