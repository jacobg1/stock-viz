import React from 'react'
import { connect } from 'react-redux'
import { addPieChart } from '../actions'

const AddPieChart = ({ dispatch }) => {
  let firstNumber
  let total

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          dispatch(addPieChart(firstNumber.value, total.value))
          firstNumber.value = ''
          total.value = ''
        }}
      >
        <input
          ref={node => (firstNumber = node)}
          placeholder="first number"
          type="number"
        />
        <input ref={node => (total = node)} placeholder="total" type="number" />
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default connect()(AddPieChart)
