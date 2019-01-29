import React from 'react'
import * as d3 from 'd3'

function positionLabels(center) {
  const x = center[0],
    y = center[1],
    h = Math.sqrt(x * x + y * y),
    translateX = (x / h) * 130,
    translateY = (y / h) * 130

  return `translate(${translateX}, ${translateY})`
}
function startOrEnd(item) {
  const startAngle = item.startAngle,
    endAngle = item.endAngle,
    compareAngles = (endAngle + startAngle) / 2
	
  return compareAngles > Math.PI ? 'end' : 'start'
}
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
        <text
          dy=".35em"
          fill="#ffffff"
          transform={positionLabels(center)}
          textAnchor={startOrEnd(item)}
        >
          {item.value}
        </text>
      </g>
    )
  })
}

export default PieSlice
