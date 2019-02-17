import React, { Component } from 'react'
import PriceDataLine from './PriceDataLine'

class PriceGraph extends Component {
  componentDidUpdate() {
    this.formatPriceData('1. open')
  }
  componentDidMount() {
    const { prices } = this.props
    console.log(prices)
  }
  formatPriceData(type) {
    const { prices } = this.props

    const priceDataArray = []
    Object.keys(prices).forEach((price, index) => {
      // console.log(new Date(price).getMonth())
      let timeStamp = new Date(price)
      if (timeStamp.getFullYear() > 2015) {
        priceDataArray.push({
          x: timeStamp.getTime() * 1000,
          y: Number(prices[price][type])
        })
      }
    })
    priceDataArray.reverse()
    return priceDataArray
  }
  render() {
    // set width, height and margin value
    const width = 800,
      height = 400,
      margin = 20

    const h = height - 2 * margin,
      w = width - 2 * margin

    return (
      <>
        {this.props.prices.length !== 0 && (
          <svg height={height} width={width}>
            <line className="axis" x1={margin} x2={w} y1={h} y2={h} />
            <line className="axis" x1={margin} x2={margin} y1={margin} y2={h} />
            <PriceDataLine
              height={height}
              width={width}
              margin={margin}
              priceLine={this.formatPriceData('3. low')}
            />
            {/* <PriceDataLine priceLine={this.formatPriceData('3. low')} /> */}
          </svg>
        )}
      </>
    )
  }
}

export default PriceGraph
