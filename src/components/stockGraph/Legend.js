import React from 'react'
import PropTypes from 'prop-types'

// buttons for filtering between charts
const Legend = ({ stocklines }) => {
  const { type } = stocklines

  return (
    <div className="legend">
      {type.high && (
        <>
          <div className="high" />
          <span> - high</span>
        </>
      )}
      {type.low && (
        <>
          <div className="low" />
          <span> - low</span>
        </>
      )}
      {type.open && (
        <>
          <div className="open" />
          <span> - open</span>
        </>
      )}
      {type.close && (
        <>
          <div className="close" />
          <span> - close</span>
        </>
      )}
    </div>
  )
}

export default Legend

Legend.propTypes = {
  stocklines: PropTypes.object.isRequired,
}
