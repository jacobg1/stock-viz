import { combineReducers } from 'redux'
import pieCharts from './pieCharts'
import chartFilters from './chartFilters'
import lineGraphs from './lineGraphs'
import stocks from './stocksReducer'

export default combineReducers({
  pieCharts,
  chartFilters,
  lineGraphs,
  stocks
})
