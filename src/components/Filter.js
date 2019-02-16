import React from 'react'
import PropTypes from 'prop-types'

// buttons for filtering between charts
const Filter = ({ children, onChange, active }) => {
  return (
    <div>
      <label>{children}</label>
      <input onChange={onChange} checked={active} type="radio" />
    </div>
  )
}

export default Filter

Filter.propTypes = {
  children: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
}
