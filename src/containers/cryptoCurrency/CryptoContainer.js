import { connect } from 'react-redux'
import Crypto from '../../components/cryptoGraphs/Crypto'

const mapStateToProps = state => ({
  cryptoPrices: state.crypto.prices,
  loading: state.crypto.loading,
  error: state.crypto.error,
  meta: state.crypto.meta,
  cryptoLines: state.cryptoLines,
  cryptoCoin: state.cryptoCoin,
  cryptoType: state.cryptoType
})

export default connect(mapStateToProps)(Crypto)
