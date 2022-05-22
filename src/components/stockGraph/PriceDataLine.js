import React, { PureComponent } from 'react'
import * as d3 from 'd3'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const priceLine = css`
  stroke-width: 3px;
  fill: none;
`

class PriceDataLine extends PureComponent {
  componentDidMount() {
    d3.select('#hover').raise()
  }
  render() {
    const {
      margin,
      h,
      w,
      stroke,
      hover,
      setHover,
      clearHover,
      allPriceData,
      lineType
    } = this.props

    // scale x axis to fit data
    const x = d3
      .scaleTime()
      .domain(d3.extent(allPriceData, d => d.date))
      .range([margin, w])

    // scale y axis to fit data
    const y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(allPriceData, d => Math.max(d.low, d.open, d.high, d.close))
      ])
      .range([h, margin])

    // use d3 to create function that will calculate the line
    // that connects the data points
    const line = d3
      .line()
      .x(d => x(d.date))
      .y(d => y(d[lineType]))

    const hoverDots = allPriceData.map((price, i) =>
      hover ? (
        <circle
          onMouseMove={e => setHover(e)}
          key={i}
          onMouseLeave={() => clearHover()}
          fill={stroke}
          cx={x(price.date)}
          cy={y(price[lineType])}
          r={8}
          data-date={price.date}
          data-value={price[lineType]}
          data-color={stroke}
        />
      ) : null
    )

    return (
      <>
        <g id="hover">{hoverDots}</g>
        <path css={priceLine} stroke={stroke} d={line(allPriceData)} />
      </>
    )
  }
}

export default PriceDataLine
