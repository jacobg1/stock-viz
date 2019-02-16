import { connect } from 'react-redux'
import Stocks from '../../components/Stocks'

const mapStateToProps = state => ({
  prices: state.stocks.prices,
  loading: state.stocks.loading,
  error: state.stocks.error,
  meta: state.stocks.meta
})

export default connect(mapStateToProps)(Stocks)
