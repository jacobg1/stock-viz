import React from 'react'
import PropTypes from 'prop-types'
/*
  children: Number the label to display (props)
  center: [x,y] center of the chart calculated using d3 (props)
  total: Number sum of label values (props)
  isPercent: boolean whether label has been changed to percent, default is false
*/
const formatDate = d => {
  let date = new Date(d)
  // console.log(date.getFullYear())
  return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()
}
const Tooltip = ({ value, date, positionX, positionY }) => {
  return (
    <div className="hover-holder" style={{ top: positionY, left: positionX }}>
      <span className="hover-text">Amount: {value}</span>
      <span className="hover-text">Date: {formatDate(date)}</span>
    </div>
  )
}

export default Tooltip
