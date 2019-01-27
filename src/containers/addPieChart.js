import React from 'react'
import { connect } from 'react-redux'

const AddPieChart = ({ dispatch }) => {
  let numberOne
  let total

  return (
    <div>
      <form>
        <input placeholder="first number" />
        <input placeholder="total" />
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default AddPieChart
