import React from 'react'
import { connect } from 'react-redux'
import { getPrices } from '../../actions/stockActions'

const FetchStocks = ({ dispatch }) => {
  let symbol
  let type = 'TIME_SERIES_MONTHLY'
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          dispatch(getPrices(symbol.value, type))
          symbol.value = ''
        }}
      >
        <select
          onChange={e => {
            type = e.target.value
          }}
        >
          <option value="TIME_SERIES_MONTHLY">Monthly</option>
          <option value="TIME_SERIES_DAILY">Daily</option>
        </select>
        <input ref={node => (symbol = node)} placeholder="search" type="text" />
        <button type="submit">fetch prices</button>
      </form>
    </div>
  )
}

export default connect()(FetchStocks)
