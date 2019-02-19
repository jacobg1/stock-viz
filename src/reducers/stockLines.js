import { StockLines } from '../actions/stockActions'
const initialState = ['SHOW_HIGH']
const stockLines = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'SET_STOCK_LINES':
      return [
        ...state,

        action.payload // here you are overwriting the 'currentAddress' property since action.payload = { 'currentAddress': true/false }
      ]
    default:
      return state
  }
}

export default stockLines
