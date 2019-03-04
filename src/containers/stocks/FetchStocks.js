import React from 'react'
import { connect } from 'react-redux'
import { getPrices, setStockSymbol } from '../../actions/stockActions'

const FetchStocks = ({ dispatch, stockSymbol }) => {
  let type = 'TIME_SERIES_MONTHLY'

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          dispatch(getPrices(stockSymbol.value, type))
          // symbol.value = ''
        }}
      >
        {/* <select
          onChange={e => {
            type = e.target.value
          }}
        >
          <option value="TIME_SERIES_MONTHLY">Monthly</option>
          <option value="TIME_SERIES_DAILY">Daily</option>
        </select>
        <input
          value={stockSymbol}
          onChange={e => dispatch(setStockSymbol(e.target.value))}
          type="text"
          placeholder="Search..."
        /> */}
        <button type="submit">fetch prices</button>
      </form>
    </div>
  )
}
const mapStateToProps = state => ({
  stockSymbol: state.stockSymbol
})

export default connect(mapStateToProps)(FetchStocks)
