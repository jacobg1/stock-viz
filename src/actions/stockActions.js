/* 
	function which fetches the stock data from the api
*/

export function getPrices(symbol, type) {
  const key = process.env.REACT_APP_API_KEY || 'demo',
    url = `https://www.alphavantage.co/query?function=${type}&symbol=${symbol}&apikey=${key}`
  return dispatch => {
    dispatch(getPricesBegin())
    return fetch(url)
      .then(handleFetchErrors)
      .then(response => response.json())
      .then(json => {
        // console.log(json)
        if (!json[Object.keys(json)[1]]) {
          dispatch(getPricesFailure(json[Object.keys(json)[0]]))
        }
        dispatch(
          getPricesSuccess(
            json[Object.keys(json)[1]],
            json[Object.keys(json)[0]]
          )
        )
        return json
      })
      .catch(error => dispatch(getPricesFailure(error)))
  }
}

// function to handle http errors
function handleFetchErrors(response) {
  // console.log(response)
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}

/*
	creating action types for:
	  - starting the request
		- when the request is successful
		- if the request fails
*/

export const GET_PRICES_BEGIN = 'GET_PRICES_BEGIN'
export const GET_PRICES_SUCCESS = 'GET_PRICES_SUCCESS'
export const GET_PRICES_FAILURE = 'GET_PRICES_FAILURE'

export const getPricesBegin = () => ({
  type: GET_PRICES_BEGIN
})

export const getPricesSuccess = (prices, meta) => ({
  type: GET_PRICES_SUCCESS,
  payload: { prices, meta }
})

export const getPricesFailure = error => ({
  type: GET_PRICES_FAILURE,
  payload: { error }
})

// setting which pice line to show on stock chart
export const setStockLines = filter => ({
  type: 'SET_PRICE_LINE',
  filter
})

// action types for filtering between stock price lines
export const StockLines = {
  OPEN: 'open',
  HIGH: 'high',
  LOW: 'low',
  CLOSE: 'close'
}
