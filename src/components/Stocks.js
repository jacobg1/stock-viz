import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPrices } from '../actions/stockActions'

class Stocks extends Component {
  // componentDidMount() {
  //   this.props.dispatch(getPrices())
  // }
  render() {
    return (
      <button
        onClick={() => {
          this.props.dispatch(getPrices())
        }}
      >
        fetch prices
      </button>
    )
  }
}

export default connect()(Stocks)
