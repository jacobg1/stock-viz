import React, { PureComponent } from 'react'
import * as d3 from 'd3'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const axisLabels = css`
  text {
    fill: #a8a8ff;
    font-size: 9px;
    text-anchor: middle;
  }
  line {
    stroke: #d6d6d8;
  }
`
class StockLabels extends PureComponent {
  render() {
    const { margin, h, w, allPriceData } = this.props

    // scale x axis to fit data
    const x = d3
      .scaleLinear()
      .domain(d3.extent(allPriceData, d => d.date))
      .range([margin, w])

    // scale y axis to fit data
    const y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(allPriceData, d => Math.max(d.open, d.high, d.low, d.close))
      ])
      .range([h, margin])

    // create y axis labels and tick marks
    const yLabels = y.ticks(8).map((d, i) =>
      y(d) > 10 && y(d) < h ? (
        <g key={i} transform={`translate(${margin}, ${y(d)})`}>
          <text x="-18" y="5">
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
        <g css={axisLabels}>{yLabels}</g>
        <g css={axisLabels}>{xLabels}</g>
      </>
    )
  }
}

export default StockLabels
