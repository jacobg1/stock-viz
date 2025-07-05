import { combineReducers } from 'redux'
import chartFilters from './chartFilters'
import stocks from './stocksReducer'
import stockLines from './stockLines'
import crypto from './cryptoReducer'
import cryptoLines from './cryptoLines'
import stockSymbol from './stockSymbol'
import cryptoCoin from './cryptoCoin'
import listFilters from './listFilters'
import cryptoType from './cryptoType'
import filterLoadingState from './filterLoadingState'

export default combineReducers({
  chartFilters,
  stocks,
  stockLines,
  crypto,
  cryptoLines,
  stockSymbol,
  cryptoCoin,
  listFilters,
  cryptoType,
  filterLoadingState,
})
