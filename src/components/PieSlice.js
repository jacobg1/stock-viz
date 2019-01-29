import React from 'react'
import * as d3 from 'd3'

const PieSlice = ({ slice }) => {
  const arc = d3
    .arc()
    .innerRadius(0)
    .outerRadius(100)

  const interpolateColor = d3.interpolateRgb('#48e3e0', '#4157d9')

  return slice.map((item, index) => {
    const segmentColor = interpolateColor(index / (slice.length - 1))
    const center = arc.centroid(item)

    return (
      <g className="arc" key={index}>
        <path d={arc(item)} fill={segmentColor} />
        <text transform={`translate(${center})`} dy=".35em" className="label">
          {item.value}
        </text>
        <text transform={`translate(${center})`} className="tooltip">
          {item.value}
        </text>
      </g>
    )
  })
}

export default PieSlice
