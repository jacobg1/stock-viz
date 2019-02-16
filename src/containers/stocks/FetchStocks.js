import React from 'react'
import { connect } from 'react-redux'
import { getPrices } from '../../actions/stockActions'

const FetchStocks = ({ dispatch }) => {
  let symbol

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          dispatch(getPrices(symbol.value))
          symbol.value = ''
        }}
      >
        <input ref={node => (symbol = node)} placeholder="search" type="text" />
        <button type="submit">fetch prices</button>
      </form>
    </div>
  )
}

export default connect()(FetchStocks)
