import { connect } from 'react-redux'
import Stocks from '../../components/stockGraph/Stocks'

const mapStateToProps = (state) => ({
  prices: state.stocks.prices,
  loading: state.stocks.loading,
  error: state.stocks.error,
  meta: state.stocks.meta,
  stockLines: state.stockLines,
  listFilters: state.listFilters,
  stockSymbol: state.stockSymbol,
})

export default connect(mapStateToProps)(Stocks)
