import React from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'
import PieSlice from './PieSlice'
import PercentToggle from './PercentToggle'
/*
  data: array of data points (string)
  title: title of pie chart (user inputted)
  this component reformats data into an array of numbers,
  calculates total, creates d3.pie() from data,
  renders svg and passes down slice to PieSlice component
*/
const PieChart = ({ data, labels, title, onChange, isPercent }) => {
  const numberArray = data.split(',').map(Number),
    height = 300,
    width = 350,
    slice = d3.pie()(numberArray),
    total = numberArray.reduce((total, amount) => total + amount),
    labelArray = labels.split(',')

  return (
    <div>
      <h2>
        {title ? `${title}: ` : ''} {total}
      </h2>
      <PercentToggle onChange={onChange} isPercent={isPercent} />
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

PieChart.propTypes = {
  labels: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isPercent: PropTypes.bool.isRequired
}
