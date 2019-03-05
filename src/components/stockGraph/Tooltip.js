import React from 'react'
import PropTypes from 'prop-types'

const formatDate = d => {
  let date = new Date(d)
  // console.log(date.getFullYear())
  return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()
}
const formatValue = n => {
  return parseFloat(n).toFixed(2)
}
const Tooltip = ({ value, date, positionX, positionY, color }) => {
  return (
    <div
      className="hover-holder"
      style={{ top: positionY, left: positionX, backgroundColor: color }}
    >
      <span className="hover-text">Amount: {formatValue(value)}</span>
      <span className="hover-text">Date: {formatDate(date)}</span>
    </div>
  )
}

export default Tooltip

Tooltip.propTypes = {
  value: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  positionX: PropTypes.number.isRequired,
  positionY: PropTypes.number.isRequired
}
