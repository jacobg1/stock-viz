import React, { Component } from 'react'
import PriceDataLine from './PriceDataLine'
import StockLabels from './StockLabels'

class PriceGraph extends Component {
  constructor() {
    super()
    this.state = {
      type: {
        high: true,
        low: false,
        open: false,
        close: false
      }
    }
  }
  componentDidUpdate() {
    // this.formatPriceData('1. open')
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
  handleCheckChange(e) {
    const name = e.target.name
    const checked = e.target.checked
    this.setState(
      prevState => {
        return {
          type: {
            ...prevState.type,
            [name]: !prevState.type[name]
          }
        }
      },
      () => {
        console.log(this.state, checked)
      }
    )
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
        <label>high</label>
        <input
          onChange={e => this.handleCheckChange(e)}
          checked={this.state.type.high}
          name="high"
          type="checkbox"
        />
        <label>low</label>
        <input
          onChange={e => this.handleCheckChange(e)}
          checked={this.state.type.low}
          name="low"
          type="checkbox"
        />
        <label>open</label>
        <input
          onChange={e => this.handleCheckChange(e)}
          checked={this.state.type.open}
          name="open"
          type="checkbox"
        />
        <label>close</label>
        <input
          onChange={e => this.handleCheckChange(e)}
          checked={this.state.type.close}
          name="close"
          type="checkbox"
        />
        {this.props.prices.length !== 0 && (
          <svg height={height} width={width}>
            <line className="axis" x1={margin} x2={w} y1={h} y2={h} />
            <line className="axis" x1={margin} x2={margin} y1={margin} y2={h} />
            {this.state.type.open && (
              <PriceDataLine
                h={h}
                w={w}
                margin={margin}
                priceLine={this.formatPriceData('1. open')}
                stroke="#95eaf1"
                hover={false}
              />
            )}
            {this.state.type.high && (
              <PriceDataLine
                h={h}
                w={w}
                margin={margin}
                priceLine={this.formatPriceData('2. high')}
                stroke="#ef6e8d"
                hover={true}
              />
            )}
            {this.state.type.low && (
              <PriceDataLine
                h={h}
                w={w}
                margin={margin}
                priceLine={this.formatPriceData('3. low')}
                stroke="#a8a8ff"
                hover={false}
              />
            )}
            {this.state.type.close && (
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
      </>
    )
  }
}

export default PriceGraph
