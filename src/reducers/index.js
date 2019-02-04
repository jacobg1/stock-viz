import { combineReducers } from 'redux'
import pieCharts from './pieCharts'
import chartFilters from './chartFilters'
import lineGraphs from './lineGraphs'

export default combineReducers({
  pieCharts,
  chartFilters,
  lineGraphs
})
