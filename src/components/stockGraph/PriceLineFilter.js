import React from 'react'
import PropTypes from 'prop-types'

// buttons for filtering between charts
const PriceLineFilter = ({ children, onChange, active }) => {
  console.log(onChange)
  return (
    <div>
      <label>{children}</label>
      <input onChange={onChange} checked={active} type="checkbox" />
    </div>
  )
}

export default PriceLineFilter
