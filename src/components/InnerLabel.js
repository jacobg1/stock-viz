import React from 'react'

/*
  children: the label to display (props)
  center: center of the chart calculated using d3 (props)
*/
function calculatePercent(children, total) {
  return `${((children / total) * 100).toFixed(2)}%`
}
const InnerLabel = ({ children, center, total, isPercent }) => {
  return (
    <text transform={`translate(${center})`} dy=".35em" className="label">
      {isPercent ? calculatePercent(children, total) : children}
    </text>
  )
}

export default InnerLabel
