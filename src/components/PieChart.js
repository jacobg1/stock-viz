import React from 'react'
import * as d3 from 'd3'
import PieSlice from '../components/PieSlice'

/*
  data: array of data points (string)
  title: title of pie chart (user inputted)
  this component reformats data into an array of numbers,
  calculates total, creates d3.pie() from data,
  renders svg and passes down slice to PieSlice component
*/
const PieChart = ({ data, labels, title, onClick, isPercent }) => {
  const numberArray = data.split(',').map(Number),
    height = 300,
    width = 300,
    slice = d3.pie()(numberArray),
    total = numberArray.reduce((total, amount) => total + amount),
    labelArray = labels.split(',')

  return (
    <div>
      <h2 onClick={onClick}>
        {title ? `${title} -` : ''} {total}
      </h2>
      <svg height={height} width={width}>
        <g transform={`translate(${width / 2}, ${height / 2})`}>
          <PieSlice
            isPercent={isPercent}
            slice={slice}
            labelArray={labelArray}
            total={total}
          />
        </g>
      </svg>
    </div>
  )
}

export default PieChart
