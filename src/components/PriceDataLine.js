import React, { Component } from 'react'
import * as d3 from 'd3'

class PriceDataLine extends Component {
  render() {
    const { priceLine, margin, h, w, stroke } = this.props

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

    // use d3 to create function that will calculate the line
    // that connects the data points
    const line = d3
      .line()
      .x(d => x(d.x))
      .y(d => y(d.y))
      .curve(d3.curveCatmullRom.alpha(0.5))

    return (
      <>
        <path className="path" stroke={stroke} d={line(priceLine)} />
      </>
    )
  }
}

export default PriceDataLine
