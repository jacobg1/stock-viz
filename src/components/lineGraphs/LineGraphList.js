import React, { PureComponent } from 'react'
import lineGraph from '../lineGraphs/LineGraph'

class LineGraphList extends PureComponent {
  render() {
    const { lineGraphs } = this.props
    console.log(lineGraphs)
    return <div>test</div>
  }
}

export default LineGraphList
