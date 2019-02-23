const initialState = {
  type: {
    high: true,
    low: false,
    open: false,
    close: false
  }
}
const cryptoLines = (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case 'SET_CRYPTO_LINE':
      // console.log(state)
      return {
        ...state,
        type: {
          ...state.type,
          [action.filter]: !state.type[action.filter]
        }
      }
    default:
      return state
  }
}

export default cryptoLines
