import React, { Component } from 'react'
import PriceDataLine from './PriceDataLine'
import StockLabels from './StockLabels'
import Tooltip from './Tooltip'

class PriceGraph extends Component {
  constructor() {
    super()
    this.state = {
      date: '',
      value: null,
      positionX: '',
      positionY: ''
    }
    this.setHover = this.setHover.bind(this)
    this.clearHover = this.clearHover.bind(this)
  }
  setHover(e) {
    this.setState({
      value: e.target.getAttribute('data-value'),
      date: e.target.getAttribute('data-date'),
      positionX: e.pageX - 100,
      positionY: e.pageY - 80
    })
  }
  clearHover() {
    this.setState({
      transform: '',
      value: '',
      positionX: '',
      positionY: ''
    })
  }
  formatPriceData(type) {
    const { prices } = this.props
    const priceDataArray = []
    Object.keys(prices).forEach((price, index) => {
      // console.log(new Date(price).getMonth())
      const selector = Object.keys(prices[price])[type]
      let timeStamp = new Date(price)
      //if (timeStamp.getFullYear() > 2015) {
      priceDataArray.push({
        x: timeStamp,
        y: Number(prices[price][selector])
      })
      // }
    })
    priceDataArray.reverse()
    return priceDataArray
  }

  render() {
    // set width, height and margin value
    const width = 1000,
      height = 600,
      margin = 35

    const h = height - 2 * margin,
      w = width - 2 * margin
    const { stockLines, crypto } = this.props
    console.log(crypto)
    return (
      <div className="svg-holder">
        {this.state.value && (
          <Tooltip
            value={this.state.value}
            date={this.state.date}
            positionX={this.state.positionX}
            positionY={this.state.positionY}
          />
        )}
        {this.props.prices.length !== 0 && (
          <svg height={height} width={width}>
            <line className="axis" x1={margin} x2={w} y1={h} y2={h} />
            <line className="axis" x1={margin} x2={margin} y1={margin} y2={h} />
            {stockLines.type.open && (
              <PriceDataLine
                h={h}
                w={w}
                margin={margin}
                priceLine={this.formatPriceData(0)}
                stroke="#95eaf1"
                hover={false}
              />
            )}
            {stockLines.type.high && (
              <PriceDataLine
                h={h}
                w={w}
                margin={margin}
                priceLine={this.formatPriceData(crypto ? 2 : 1)}
                stroke="#ef6e8d"
                hover={true}
                setHover={this.setHover}
                clearHover={this.clearHover}
              />
            )}
            {stockLines.type.low && (
              <PriceDataLine
                h={h}
                w={w}
                margin={margin}
                priceLine={this.formatPriceData(crypto ? 4 : 2)}
                stroke="#a8a8ff"
                hover={false}
              />
            )}
            {stockLines.type.close && (
              <PriceDataLine
                h={h}
                w={w}
                margin={margin}
                priceLine={this.formatPriceData(crypto ? 6 : 3)}
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
              priceLine={this.formatPriceData(crypto ? 2 : 1)}
            />
          </svg>
        )}
      </div>
    )
  }
}

export default PriceGraph
