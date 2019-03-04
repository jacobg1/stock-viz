import { combineReducers } from 'redux'
import pieCharts from './pieCharts'
import chartFilters from './chartFilters'
import lineGraphs from './lineGraphs'
import stocks from './stocksReducer'
import stockLines from './stockLines'
import crypto from './cryptoReducer'
import cryptoLines from './cryptoLines'
import stockSymbol from './stockSymbol'
import cryptoCoin from './cryptoCoin'

export default combineReducers({
  pieCharts,
  chartFilters,
  lineGraphs,
  stocks,
  stockLines,
  crypto,
  cryptoLines,
  stockSymbol,
	cryptoCoin
})
