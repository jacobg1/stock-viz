import React from 'react'

const Filter = ({ children, onChange, active }) => {
  return (
    <div>
      <label>{children}</label>
      <input onChange={onChange} checked={active} type="radio" />
    </div>
  )
}

export default Filter
