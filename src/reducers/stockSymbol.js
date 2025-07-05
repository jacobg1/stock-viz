const initialState = {
  label: 'Select from list or type to search...',
  value: 0,
}

const stockSymbol = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STOCK_SYMBOL':
      return {
        label: action.label,
        value: action.symbol,
      }
    default:
      return state
  }
}

export default stockSymbol
