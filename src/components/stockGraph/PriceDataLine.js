import React, { PureComponent } from 'react'
import * as d3 from 'd3'

class PriceDataLine extends PureComponent {
  render() {
    const {
      priceLine,
      margin,
      h,
      w,
      stroke,
      hover,
      setHover,
      clearHover
    } = this.props

    // scale x axis to fit data
    const x = d3
      .scaleLinear()
      .domain(d3.extent(priceLine, d => d.x))
      .range([margin, w])

    // scale y axis to fit data
    const y = d3
      .scaleLinear()
      .domain(d3.extent(priceLine, d => d.y))
      .range([h, margin])

    // use d3 to create function that will calculate the line
    // that connects the data points
    const line = d3
      .line()
      .x(d => x(d.x))
      .y(d => y(d.y))
    // .curve(d3.curveCatmullRom.alpha(0.2))

    const hoverDots = priceLine.map((price, i) =>
      hover ? (
        <circle
          onMouseMove={e => setHover(e)}
          key={i}
          onMouseLeave={() => clearHover()}
          fill={stroke}
          cx={x(price.x)}
          cy={y(price.y)}
          r={6}
          data-value={price.y}
          data-date={price.x}
        />
      ) : null
    )

    return (
      <>
        {hoverDots}
        <path className="path" stroke={stroke} d={line(priceLine)} />
      </>
    )
  }
}

export default PriceDataLine
