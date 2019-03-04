const stockSymbol = (state = {}, action) => {
  switch (action.type) {
    case 'SET_STOCK_SYMBOL':
      return {
        label: action.label,
        value: action.symbol
      }
    default:
      return state
  }
}

export default stockSymbol
