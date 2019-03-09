import { TypeFilters } from '../actions/cryptoActions'

const cryptoType = (state = TypeFilters.MONTHLY, action) => {
  switch (action.type) {
    case 'SET_CRYPTO_TYPE':
			return action.timePeriod
    default:
      return state
  }
}

export default cryptoType
