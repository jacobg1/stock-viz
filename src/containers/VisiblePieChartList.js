import { connect } from 'react-redux'
import PieChartList from '../components/pieCharts/PieChartList'
import { togglePercent } from '../actions'

const mapStateToProps = state => ({
  pieCharts: state.pieCharts
})

const mapDispatchToProps = dispatch => ({
  togglePercent: id => dispatch(togglePercent(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PieChartList)
