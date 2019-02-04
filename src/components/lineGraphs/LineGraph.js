import React, { PureComponent } from 'react'

class LineGraph extends PureComponent {
  render() {
    console.log('test')

    const { title } = this.props

    return (
      <>
        <p>{title}</p>
      </>
    )
  }
}

export default LineGraph
