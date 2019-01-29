import React from 'react'
import * as d3 from 'd3'
import PieLabel from './PieLabel'

/*
  function to calculate x and y position of labels
  center: [x,y] array of x, y coordinates
  interpolates x and y coords into string
  which can then be set as a css transform
*/
function positionLabels(center) {
  const x = center[0],
    y = center[1],
    h = Math.sqrt(x * x + y * y),
    translateX = (x / h) * 110,
    translateY = (y / h) * 110

  return `translate(${translateX}, ${translateY})`
}

/*
  function to determine whether label is before or after center of circle
  item: object which represents and individual slice
  returns end if before center and start if after
  which can then be used as a css text-anchor
*/
function startOrEnd(item) {
  const { startAngle } = item,
    { endAngle } = item,
    compareAngles = (endAngle + startAngle) / 2

  return compareAngles > Math.PI ? 'end' : 'start'
}

/*
  represents an slice of the pie chart
  slice: object recieved as props
  loops through props and creates an svg path element for each slice
*/
const PieSlice = ({ slice }) => {
  const arc = d3
    .arc()
    .innerRadius(0)
    .outerRadius(100)

  const interpolateColor = d3.interpolateRgb('#48e3e0', '#4157d9')

  return slice.map((item, index) => {
    const segmentColor = interpolateColor(index / (slice.length - 1)),
      center = arc.centroid(item)

    return (
      <g className="arc" key={index}>
        <path d={arc(item)} fill={segmentColor} />
        <text transform={`translate(${center})`} dy=".35em" className="label">
          {item.value}
        </text>
        <PieLabel />
        <text
          dy=".35em"
          fill="#ffffff"
          className="floating-label"
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
