import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPrices } from '../actions/stockActions'

class Stocks extends Component {
  componentDidMount() {
    this.props.dispatch(getPrices())
  }
  render() {
    return <p>test</p>
  }
}

export default connect()(Stocks)
