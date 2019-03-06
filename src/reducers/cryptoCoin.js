const initialState = {
  label: 'Select from list or type to search...',
  value: 0
}

const cryptoCoin = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CRYPTO_COIN':
      return {
        label: action.label,
        value: action.coin
      }
    default:
      return state
  }
}

export default cryptoCoin
