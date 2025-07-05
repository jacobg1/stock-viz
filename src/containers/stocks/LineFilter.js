import { connect } from 'react-redux'
import PriceLineFilter from '../../components/stockGraph/PriceLineFilter'
import { setStockLines } from '../../actions/stockActions'

const mapStateToProps = (state, ownProps) => ({
  checked: state.stockLines.type[ownProps.filter],
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: () => dispatch(setStockLines(ownProps.filter)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PriceLineFilter)
