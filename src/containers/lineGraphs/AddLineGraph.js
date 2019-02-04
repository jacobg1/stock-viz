import React from 'react'
import { connect } from 'react-redux'
import { addLineGraph } from '../../actions'

const AddLineGraph = ({ dispatch }) => {
  let data
  let title

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault()
          dispatch(addLineGraph(data.value, title.value))
          data.value = ''
          title.value = ''
        }}
      >
        <input
          ref={node => (data = node)}
          placeholder="input data separate numbers by ,"
          type="text"
        />
        <input ref={node => (title = node)} placeholder="title" type="text" />
        <button type="submit">add</button>
      </form>
    </>
  )
}

export default connect()(AddLineGraph)
