import { connect } from 'react-redux'
import Filter from '../components/Filter'
import { setChartFilter } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.chartFilters,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: () => dispatch(setChartFilter(ownProps.filter)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
