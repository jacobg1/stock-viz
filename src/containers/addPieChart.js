import React from 'react'
import { connect } from 'react-redux'
import { addPieChart } from '../actions'

const AddPieChart = ({ dispatch }) => {
  let data
  let title
  let labels

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          dispatch(addPieChart(data.value, title.value, labels.value))
          data.value = ''
          title.value = ''
          labels.value = ''
        }}
      >
        <input
          ref={node => (data = node)}
          placeholder="input data separate numbers by ,"
          type="text"
        />
        <input
          ref={node => (labels = node)}
          placeholder="input labels separate numbers by ,"
          type="text"
        />
        <input ref={node => (title = node)} placeholder="title" type="text" />
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default connect()(AddPieChart)
