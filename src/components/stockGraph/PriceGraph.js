import React, { Component } from 'react'
import PriceDataLine from './PriceDataLine'
import StockLabels from './StockLabels'

class PriceGraph extends Component {
  formatPriceData(type) {
    const { prices } = this.props
    console.log(prices)
    const priceDataArray = []
    Object.keys(prices).forEach((price, index) => {
      // console.log(new Date(price).getMonth())
      let timeStamp = new Date(price)
      //if (timeStamp.getFullYear() > 2015) {
      priceDataArray.push({
        x: timeStamp,
        y: Number(prices[price][type])
      })
      // }
    })
    priceDataArray.reverse()
    return priceDataArray
  }

  render() {
    // set width, height and margin value
    const width = 800,
      height = 400,
      margin = 35

    const h = height - 2 * margin,
      w = width - 2 * margin
    const { stockLines } = this.props
    console.log(stockLines)
    return (
      <div className="svg-holder">
        {this.props.prices.length !== 0 && (
          <svg height={height} width={width}>
            <line className="axis" x1={margin} x2={w} y1={h} y2={h} />
            <line className="axis" x1={margin} x2={margin} y1={margin} y2={h} />
            {stockLines.type.open && (
              <PriceDataLine
                h={h}
                w={w}
                margin={margin}
                priceLine={this.formatPriceData('1. open')}
                stroke="#95eaf1"
                hover={false}
              />
            )}
            {stockLines.type.high && (
              <PriceDataLine
                h={h}
                w={w}
                margin={margin}
                priceLine={this.formatPriceData('2. high')}
                stroke="#ef6e8d"
                hover={true}
              />
            )}
            {stockLines.type.low && (
              <PriceDataLine
                h={h}
                w={w}
                margin={margin}
                priceLine={this.formatPriceData('3. low')}
                stroke="#a8a8ff"
                hover={false}
              />
            )}
            {stockLines.type.close && (
              <PriceDataLine
                h={h}
                w={w}
                margin={margin}
                priceLine={this.formatPriceData('4. close')}
                stroke="#ff3c3c"
                hover={false}
              />
            )}
            <StockLabels
              height={height}
              width={width}
              h={h}
              w={w}
              margin={margin}
              priceLine={this.formatPriceData('2. high')}
            />
          </svg>
        )}
      </div>
    )
  }
}

export default PriceGraph
