import * as React from 'react'
import * as d3 from 'd3'

const PieSlice = ({ slice }) => {
  let arc = d3
    .arc()
    .innerRadius(0)
    .outerRadius(100)

  let interpolateColor = d3.interpolateRgb('#48e3e0', '#4157d9')
  return slice.map((item, index) => {
    let segmentColor = interpolateColor(index / (slice.length - 1))
    return <path key={index} d={arc(item)} fill={segmentColor} />
  })
}

export default PieSlice
