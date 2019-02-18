import React, { PureComponent } from 'react'
import * as d3 from 'd3'

class PriceDataLine extends PureComponent {
  constructor() {
    super()
    this.state = {
      date: '',
      value: null
    }
  }
  hover(e) {
    // <text transform={`translate(${x(price.x)}, ${y(price.y)})`}>{price.y}</text>
    this.setState({
      value: e.target.getAttribute('data-value'),
      date: e.target.getAttribute('data-date')
    })
  }
  clearHover() {
    this.setState({
      transform: '',
      value: ''
    })
  }
  formatDate(d) {
    let date = new Date(d)
    console.log(date.getFullYear())
    return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()
  }
  render() {
    const { priceLine, margin, h, w, stroke, hover } = this.props

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

    const hoverDots = priceLine.map((price, i) =>
      // console.log(price.y)

      hover ? (
        <circle
          onMouseEnter={e => this.hover(e)}
          key={i}
          // onMouseLeave={() => this.clearHover()}
          fill={stroke}
          cx={x(price.x)}
          cy={y(price.y)}
          r={2}
          data-value={price.y}
          data-date={price.x}
        />
      ) : null
    )

    return (
      <>
        {hoverDots}
        {this.state.value && (
          <g transform={`translate(660, -5)`}>
            <text x="0" y="0" className="hover-text">
              <tspan x="0" dy="1.2em">
                Amount: {this.state.value}
              </tspan>
              <tspan x="0" dy="1.5em">
                Date: {this.formatDate(this.state.date)}
              </tspan>
            </text>
          </g>
        )}
        <path className="path" stroke={stroke} d={line(priceLine)} />
      </>
    )
  }
}

export default PriceDataLine
