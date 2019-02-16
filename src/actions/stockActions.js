export const GET_PRICES_BEGIN = 'GET_PRICES_BEGIN'
export const GET_PRICES_SUCCESS = 'GET_PRICES_SUCCESS'
export const GET_PRICES_FAILURE = 'GET_PRICES_FAILURE'

export const getPricesBegin = () => ({
  type: GET_PRICES_BEGIN
})

export const getPricesSuccess = prices => ({
  type: GET_PRICES_SUCCESS,
  payload: { prices }
})

export const getPricesFailure = error => ({
  type: GET_PRICES_FAILURE,
  payload: { error }
})
