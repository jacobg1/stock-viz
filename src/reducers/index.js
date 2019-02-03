import { combineReducers } from 'redux'
import pieCharts from './pieCharts'
import chartFilters from './chartFilters'

export default combineReducers({
  pieCharts,
  chartFilters
})
