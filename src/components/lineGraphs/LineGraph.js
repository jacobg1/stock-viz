import React, { PureComponent } from 'react'
import * as d3 from 'd3'

class LineGraph extends PureComponent {
  render() {
    // de-structure props
    const { title, data } = this.props

    // set width, height and margin value
    const width = 400,
      height = 250,
      margin = 20

    const h = height - 2 * margin,
      w = 400 - 2 * margin

    // number formatter
    const formatYLabels = y => Math.floor(y)

    // scale x axis to fit data
    const x = d3
      .scaleLinear()
      .domain(d3.extent(data, d => d.x))
      .range([margin, w])

    // scale y axis to fit data
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.y)])
      .range([h, margin])

    // use d3 to create function that will calculate the line
    // that connects the data points
    const line = d3
      .line()
      .x(d => x(d.x))
      .y(d => y(d.y))
      .curve(d3.curveCatmullRom.alpha(0.5))

    // create x axis labels and tick marks
    const xLabels = x.ticks(8).map((d, i) =>
      x(d) > margin && x(d) < w ? (
        <g key={i} transform={`translate(${x(d)}, ${h + 20})`}>
          <text>{d}</text>
          <line x1="0" x2="0" y1="0" y2="5" transform="translate(0, -20)" />
        </g>
      ) : null
    )

    // create y axis labels and tick marks
    const yLabels = y.ticks(5).map((d, i) =>
      y(d) > 10 && y(d) < h ? (
        <g key={i} transform={`translate(${margin}, ${y(d)})`}>
          <text x="-12" y="5">
            {formatYLabels(d)}
          </text>
          <line x1="0" x2="3" y1="0" y2="0" transform="translate(-3, 2)" />
          <line
            className="graph-lines"
            x1="0"
            x2={w - margin + 4}
            y1="0"
            y2="0"
            transform="translate(-3,2)"
          />
        </g>
      ) : null
    )

    return (
      <div>
        <p>{title}</p>
        <svg height={height} width={width}>
          <line className="axis" x1={margin} x2={w} y1={h} y2={h} />
          <line className="axis" x1={margin} x2={margin} y1={margin} y2={h} />
          <path className="line-path" d={line(data)} />
          <g className="axis-labels">{xLabels}</g>
          <g className="axis-labels">{yLabels}</g>
        </svg>
      </div>
    )
  }
}

export default LineGraph
