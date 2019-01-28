import React, { Component } from 'react'
import { select } from 'd3-selection'
import * as d3 from 'd3'

class PieChart extends Component {
  componentDidMount() {
    console.log('mount')
    this.createSVG()
  }
  createSVG() {
    let pieCharts = document.getElementById('pieCharts')
    let h = 100
    let w = 100
    const svg = d3
      .select(pieCharts)
      .append('svg')
      .attr('width', w)
      .attr('height', h)

    svg
      .selectAll('rect')
      .data([this.props.number, this.props.total])
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 20)
      .attr('y', (d, i) => h - 10 * d)
      .attr('width', 15)
      .attr('height', (d, i) => d * 10)
      .attr('fill', 'green')

    //   svg.selectAll("text")
    // 	  .data([this.props.number, this.props.total])
    // 	  .enter()
    // 	  .append("text")
    // 	  .text((d) => d)
    // 	  .attr("x", (d, i) => i * 70)
    // 	  .attr("y", (d, i) => d * 10)
  }
  render() {
    return <p>{this.props.total}</p>
  }
}

export default PieChart
