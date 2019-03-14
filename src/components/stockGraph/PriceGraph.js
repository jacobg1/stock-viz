// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import PriceDataLine from './PriceDataLine'
import StockLabels from './StockLabels'
import Tooltip from './Tooltip'

const axis = css`
  stroke: #d6d6d8;
`
const svgHolder = css`
  svg {
    margin: 0 auto;
    max-width: 948px;
  }
  circle {
    cursor: pointer;
    z-index: 9;
    opacity: 0;
    &:hover {
      opacity: 0.8;
    }
  }
`

class PriceGraph extends PureComponent {
  constructor() {
    super()
    this.state = {
      date: '',
      value: null,
      positionX: '',
      positionY: '',
      color: '',
      width: 1000,
      height: 600
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

  formatAllData() {
    const { prices, crypto } = this.props,
      allPriceData = []

    Object.keys(prices).forEach((price, index) => {
      const timeStamp = new Date(price),
        open = Object.keys(prices[price])[0],
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
    const { width, height } = this.props,
      margin = 35

    const h = height - 2 * margin,
      w = width - 2 * margin

    const { stockLines, crypto } = this.props,
      { date, value, positionX, positionY, color } = this.state

    return (
      <div css={svgHolder}>
        {this.state.value && (
          <Tooltip
            value={value}
            date={date}
            positionX={positionX}
            positionY={positionY}
            color={color}
          />
        )}
        {this.props.prices.length !== 0 && (
          <svg height={height} width={width}>
            <g>
              <line css={axis} x1={margin} x2={w} y1={h} y2={h} />
              <line css={axis} x1={margin} x2={margin} y1={margin} y2={h} />

              {stockLines.type.open && (
                <PriceDataLine
                  h={h}
                  w={w}
                  margin={margin}
                  stroke="#95eaf1"
                  hover={true}
                  lineType={'open'}
                  setHover={this.setHover}
                  clearHover={this.clearHover}
                  allPriceData={this.formatAllData()}
                  crypto={crypto}
                />
              )}
              {stockLines.type.high && (
                <PriceDataLine
                  h={h}
                  w={w}
                  margin={margin}
                  stroke="#ef6e8d"
                  hover={true}
                  lineType={'high'}
                  setHover={this.setHover}
                  clearHover={this.clearHover}
                  allPriceData={this.formatAllData()}
                  crypto={crypto}
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
                  crypto={crypto}
                />
              )}
              {stockLines.type.close && (
                <PriceDataLine
                  h={h}
                  w={w}
                  margin={margin}
                  stroke="#ff3c3c"
                  hover={true}
                  lineType={'close'}
                  setHover={this.setHover}
                  clearHover={this.clearHover}
                  allPriceData={this.formatAllData()}
                  crypto={crypto}
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
            </g>
          </svg>
        )}
      </div>
    )
  }
}

export default PriceGraph
