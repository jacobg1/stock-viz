import {
  GET_CRYPTO_BEGIN,
  GET_CRYPTO_SUCCESS,
  GET_CRYPTO_FAILURE
} from '../actions/cryptoActions'

const initialState = {
  prices: [],
  loading: false,
  error: null
}

function stocksReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CRYPTO_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case GET_CRYPTO_SUCCESS:
      return {
        ...state,
        loading: false,
        prices: action.payload.crypto,
        meta: action.payload.meta
      }
    case GET_CRYPTO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        prices: [],
        meta: []
      }
    default:
      return state
  }
}
export default stocksReducer
