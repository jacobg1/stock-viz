import React from 'react'
import * as d3 from 'd3'
import PieSlice from '../components/PieSlice'

const PieChart = ({ data }) => {
  const numberArray = data.split(',').map(Number)
  const height = 400
  const width = 400

  let slice = d3.pie()(numberArray)

  return (
    <svg height={height} width={width}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        <PieSlice slice={slice} />
      </g>
    </svg>
  )
}
export default PieChart
