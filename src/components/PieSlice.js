import * as React from 'react'
import * as d3 from 'd3'

const PieSlice = ({ slice }) => {
  let arc = d3
    .arc()
    .innerRadius(0)
    .outerRadius(100)
  return slice.map((item, index) => {
    return <path key={index} d={arc(item)} fill="#ffffff" />
  })
}

export default PieSlice
