import { connect } from 'react-redux'
import PieChartList from '../components/PieChartList'

const mapStateToProps = state => ({
  pieCharts: state.pieCharts
})

export default connect(mapStateToProps)(PieChartList)
