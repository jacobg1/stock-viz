import React from 'react'
import PropTypes from 'prop-types'

const PercentToggle = ({ onChange, isPercent }) => {
  return (
    <div>
      <label htmlFor="numberToggle">Number</label>
      <input
        id="numberToggle"
        type="radio"
        onChange={onChange}
        checked={!isPercent}
      />
      <label htmlFor="percenToggle">Percent</label>
      <input
        id="percentToggle"
        type="radio"
        onChange={onChange}
        checked={isPercent}
      />
    </div>
  )
}

export default PercentToggle

PercentToggle.propTypes = {
	onChange: PropTypes.func.isRequired,
	isPercent: PropTypes.bool.isRequired
}