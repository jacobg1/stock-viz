import { connect } from 'react-redux'
import LineGraphList from '../../components/lineGraphs/LineGraphList'

const mapStateToProps = state => ({
  lineGraphs: state.lineGraphs
})

export default connect(mapStateToProps)(LineGraphList)
