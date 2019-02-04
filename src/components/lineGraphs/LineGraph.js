import React, { PureComponent } from 'react'
import * as d3 from 'd3'

class LineGraph extends PureComponent {
  // temp function to create some fake data points
  fakeData() {
    const data2 = []
    for (let x = 0; x <= 20; x++) {
      const random = Math.random()
      const temp = data2.length > 0 ? data2[data2.length - 1].y : 30
      const y =
        random >= 0.45
          ? temp + Math.floor(random * 40)
          : temp - Math.floor(random * 40)
      data2.push({ x, y })
    }
    return data2
  }

  render() {
    const { title } = this.props
    const data = this.fakeData()
    console.log(data)

    // set width, height and margin value
    const width = 350,
      height = 200,
      margin = 2

    const h = height - 2 * margin,
      w = width - 2 * margin

    //number formatter
    //   const xFormat = d3.format('.2')

    // scale x axis to fit data
    const x = d3
      .scaleLinear()
      .domain(d3.extent(data, d => d.x))
      .range([margin, w])

    // scale 7 axis to fit data
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
    console.log(line(data))
    return (
      <>
        <p>{title}</p>
        <svg height={height} width={width}>
          <line className="axis" x1={margin} x2={w} y1={h} y2={h} />
          <line className="axis" x1={margin} x2={margin} y1={margin} y2={h} />
          <path className="path" d={line(data)} />
        </svg>
      </>
    )
  }
}

export default LineGraph
