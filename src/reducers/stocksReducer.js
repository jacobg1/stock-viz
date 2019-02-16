import {
  GET_PRICES_BEGIN,
  GET_PRICES_SUCCESS,
  GET_PRICES_FAILURE
} from '../actions/stockActions'

const initialState = {
  prices: [],
  loading: false,
  error: null
}

function stocksReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRICES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case GET_PRICES_SUCCESS:
      console.log(action.payload.prices)
      return {
        ...state,
        loading: false,
        prices: action.payload.prices,
        meta: action.payload.meta
      }
    case GET_PRICES_FAILURE:
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
