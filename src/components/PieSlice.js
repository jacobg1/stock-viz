import React from 'react'
import * as d3 from 'd3'
import InnerLabel from './InnerLabel'

/*
  center: [x,y] array of x, y coordinates 
  function to calculate x and y position of labels
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
  item: object which represents and individual slice
  function to determine whether label is before or after center of circle
  if label is before returns end, if label is after returns start
  which can then be used as a css text-anchor
*/
function startOrEnd(item) {
  const { startAngle } = item,
    { endAngle } = item,
    compareAngles = (endAngle + startAngle) / 2

  return compareAngles > Math.PI ? 'end' : 'start'
}

/*
  slice: object recieved as props	
  represents a slice of the pie chart
  loops through props and creates an svg path element for each slice
*/
const PieSlice = ({ slice, total, labelArray, isPercent }) => {
  const arc = d3
    .arc()
    .innerRadius(0)
    .outerRadius(100)

  const interpolateColor = d3.interpolateRgb('#48e3e0', '#4157d9')

  return slice.map((item, index) => {
    const segmentColor = interpolateColor(index / (slice.length - 1)),
      center = arc.centroid(item),
      label = labelArray[index]

    return (
      <g className="arc" key={index}>
        <path d={arc(item)} fill={segmentColor} />
        <InnerLabel isPercent={isPercent} center={center} total={total}>
          {item.value}
        </InnerLabel>

        {label && (
          <text
            dy=".35em"
            fill={segmentColor}
            className="floating-label"
            transform={positionLabels(center)}
            textAnchor={startOrEnd(item)}
          >
            {label}
          </text>
        )}
      </g>
    )
  })
}

export default PieSlice
