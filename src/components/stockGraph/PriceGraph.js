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
      positionY: '',
      color: ''
    }
    this.setHover = this.setHover.bind(this)
    this.clearHover = this.clearHover.bind(this)
  }
  setHover(e) {
    this.setState({
      value: e.target.getAttribute('data-value'),
      date: e.target.getAttribute('data-date'),
      positionX: e.pageX - 100,
      positionY: e.pageY - 80,
      color: e.target.getAttribute('data-color')
    })
  }
  clearHover() {
    this.setState({
      transform: '',
      value: '',
      positionX: '',
      positionY: '',
      color: ''
    })
  }
  // formatPriceData(type) {
  //   const { prices } = this.props
  //   const priceDataArray = []
  //   Object.keys(prices).forEach((price, index) => {
  //     // console.log(new Date(price).getMonth())
  //     const selector = Object.keys(prices[price])[type]
  //     let timeStamp = new Date(price)
  //     //if (timeStamp.getFullYear() > 2015) {
  //     priceDataArray.push({
  //       x: timeStamp,
  //       y: Number(prices[price][selector])
  //     })
  //     // }
  //   })
  //   priceDataArray.reverse()
  //   return priceDataArray
  // }
  formatAllData() {
    const { prices, crypto } = this.props
    const allPriceData = []
    Object.keys(prices).forEach((price, index) => {
      let timeStamp = new Date(price)
      let open = Object.keys(prices[price])[0],
        high = Object.keys(prices[price])[crypto ? 2 : 1],
        low = Object.keys(prices[price])[crypto ? 4 : 2],
        close = Object.keys(prices[price])[crypto ? 6 : 3]

      allPriceData.push({
        date: timeStamp,
        open: Number(prices[price][open]),
        high: Number(prices[price][high]),
        low: Number(prices[price][low]),
        close: Number(prices[price][close])
      })
    })
    return allPriceData
  }
  componentDidMount() {
    this.formatAllData()
  }

  render() {
    // set width, height and margin value
    const width = 1000,
      height = 600,
      margin = 35

    const h = height - 2 * margin,
      w = width - 2 * margin
    const { stockLines } = this.props
    console.log(stockLines.type.open)
    return (
      <div className="svg-holder">
        {this.state.value && (
          <Tooltip
            value={this.state.value}
            date={this.state.date}
            positionX={this.state.positionX}
            positionY={this.state.positionY}
            color={this.state.color}
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
                stroke="#95eaf1"
                hover={true}
                setHover={this.setHover}
                clearHover={this.clearHover}
                lineType={'open'}
                allPriceData={this.formatAllData()}
              />
            )}
            {stockLines.type.high && (
              <PriceDataLine
                h={h}
                w={w}
                margin={margin}
                stroke="#ef6e8d"
                hover={true}
                setHover={this.setHover}
                clearHover={this.clearHover}
                lineType={'high'}
                allPriceData={this.formatAllData()}
              />
            )}
            {stockLines.type.low && (
              <PriceDataLine
                h={h}
                w={w}
                margin={margin}
                stroke="#a8a8ff"
                hover={true}
                lineType={'low'}
                setHover={this.setHover}
                clearHover={this.clearHover}
                allPriceData={this.formatAllData()}
              />
            )}
            {stockLines.type.close && (
              <PriceDataLine
                h={h}
                w={w}
                margin={margin}
                stroke="#ff3c3c"
                hover={true}
                setHover={this.setHover}
                clearHover={this.clearHover}
                allPriceData={this.formatAllData()}
                lineType={'close'}
              />
            )}
            <StockLabels
              height={height}
              width={width}
              h={h}
              w={w}
              allPriceData={this.formatAllData()}
              margin={margin}
            />
          </svg>
        )}
      </div>
    )
  }
}

export default PriceGraph
