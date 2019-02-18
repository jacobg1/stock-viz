import React, { Component } from 'react'
import * as d3 from 'd3'

class StockLabels extends Component {
  render() {
    const { priceLine, margin, h, w } = this.props

    // scale x axis to fit data
    const x = d3
      .scaleLinear()
      .domain(d3.extent(priceLine, d => d.x))
      .range([margin, w])

    // scale y axis to fit data
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(priceLine, d => d.y)])
      .range([h, margin])

    // create y axis labels and tick marks
    const yLabels = y.ticks(8).map((d, i) =>
      y(d) > 10 && y(d) < h ? (
        <g key={i} transform={`translate(${margin}, ${y(d)})`}>
          <text x="-12" y="5">
            {d}
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
    const formatXLabels = x => new Date(x).getFullYear()
    // create x axis labels and tick marks
    const xLabels = x.ticks(10).map((d, i) =>
      x(d) > margin && x(d) < w ? (
        <g key={i} transform={`translate(${x(d)}, ${h + 20})`}>
          <text>{formatXLabels(d)}</text>
          <line x1="0" x2="0" y1="0" y2="5" transform="translate(0, -20)" />
        </g>
      ) : null
    )

    return (
      <>
        <g className="axis-labels">{yLabels}</g>
        <g className="axis-labels">{xLabels}</g>
      </>
    )
  }
}

export default StockLabels
