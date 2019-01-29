import React from 'react'
/*
  children: the label to display (props)
  center: center of the chart calculated using d3 (props)
*/
const InnerLabel = ({ children, center }) => {
  return (
    <text transform={`translate(${center})`} dy=".35em" className="label">
      {children}
    </text>
  )
}

export default InnerLabel
