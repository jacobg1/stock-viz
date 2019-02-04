import React, { PureComponent } from 'react'
import LineGraph from '../lineGraphs/LineGraph'

class LineGraphList extends PureComponent {
  render() {
    const { lineGraphs } = this.props
    return (
      <div>
        {lineGraphs.map(lineGraph => (
          <LineGraph key={lineGraph.id} {...lineGraph} />
        ))}
      </div>
    )
  }
}

export default LineGraphList
