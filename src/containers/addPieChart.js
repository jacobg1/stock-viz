import React from 'react'
import { connect } from 'react-redux'
import { addPieChart } from '../actions'

const AddPieChart = ({ dispatch }) => {
  let data

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          dispatch(addPieChart(data.value))
          data.value = ''
        }}
      >
        <input
          ref={node => (data = node)}
          placeholder="input data separate numbers by ,"
          type="text"
        />
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default connect()(AddPieChart)
