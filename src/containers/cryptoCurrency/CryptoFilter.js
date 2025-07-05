import { connect } from 'react-redux'
import CryptoLineFilter from '../../components/cryptoGraphs/CryptoLineFilter'
import { setCryptoLines } from '../../actions/cryptoActions'

const mapStateToProps = (state, ownProps) => ({
  checked: state.cryptoLines.type[ownProps.filter],
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: () => dispatch(setCryptoLines(ownProps.filter)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CryptoLineFilter)
