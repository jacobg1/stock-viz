const stockSymbol = (state = '', action) => {
  switch (action.type) {
    case 'SET_STOCK_SYMBOL':
      return action.symbol
    default:
      return state
  }
}

export default stockSymbol
