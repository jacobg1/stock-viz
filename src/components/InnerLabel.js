import React from 'react'

/*
  children: Number the label to display (props)
  center: [x,y] center of the chart calculated using d3 (props)
  total: Number sum of label values (props)
  isPercent: boolean whether label has been changed to percent, default is false
*/
const InnerLabel = ({ children, center, total, isPercent }) => {
  // calulate the percent value of each label
  const calculatePercent = () => {
    return `${((children / total) * 100).toFixed(2)}%`
  }
  return (
    <text transform={`translate(${center})`} dy=".35em" className="label">
      {isPercent ? calculatePercent() : children}
    </text>
  )
}

export default InnerLabel
