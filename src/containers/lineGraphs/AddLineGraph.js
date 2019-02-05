import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addLineGraph } from '../../actions'

class AddLineGraph extends Component {
  // temp function to create some fake data points
  generateRandomData() {
    const randomDataArray = []
    for (let x = 0; x <= 20; x++) {
      const random = Math.random()
      const temp =
        randomDataArray.length > 0
          ? randomDataArray[randomDataArray.length - 1].y
          : 30
      const y =
        random >= 0.45
          ? temp + Math.floor(random * 40)
          : temp - Math.floor(random * 40)
      randomDataArray.push({ x, y })
    }
    return randomDataArray
  }

  render() {
    const { dispatch } = this.props
    let data, title

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
        <button
          onClick={() => {
            const checkForTitle = title.value ? title.value : 'random'
            dispatch(addLineGraph(this.generateRandomData(), checkForTitle))
            title.value = ''
          }}
        >
          random!
        </button>
      </>
    )
  }
}

export default connect()(AddLineGraph)
