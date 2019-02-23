import React from 'react'
// import PropTypes from 'prop-types'

// buttons for filtering between charts
const PriceLineFilter = ({ children, onChange, checked }) => {
  // console.log(checked)
  return (
    <>
      <label>{children}</label>
      <input onChange={onChange} checked={checked} type="checkbox" />
    </>
  )
}

export default PriceLineFilter
