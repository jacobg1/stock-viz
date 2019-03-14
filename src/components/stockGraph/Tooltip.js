import React from 'react'
import PropTypes from 'prop-types'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const hoverHolder = css`
  position: absolute;
  padding: 13px;
  background-color: #ef6e8d;
  border-radius: 8px;
  border: 1px solid white;
  z-index: 999;
  span {
    font-size: 13px;
    display: block;
    text-align: left;
    color: black;
    &:first-of-type {
      padding-bottom: 4px;
    }
  }
`

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
      css={hoverHolder}
      style={{ top: positionY, left: positionX, backgroundColor: color }}
    >
      <span>Amount: {formatValue(value)}</span>
      <span>Date: {formatDate(date)}</span>
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
