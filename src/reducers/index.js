import { combineReducers } from 'redux'
import pieCharts from './pieCharts'
import chartFilters from './chartFilters'
import lineGraphs from './lineGraphs'
import stocksReducer from './stocksReducer'

export default combineReducers({
  pieCharts,
  chartFilters,
  lineGraphs,
  stocksReducer
})
