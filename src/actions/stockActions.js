/* 
	function which fetches the stock data from the api
*/
export function getPrices() {
  return dispatch => {
    dispatch(getPricesBegin())
    return fetch(
      'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=MSFT&apikey=demo'
    )
      .then(handleFetchErrors)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        dispatch(
          getPricesSuccess(json['Monthly Time Series'], json['Meta Data'])
        )
        return json['Monthly Time Series']
      })
      .catch(error => dispatch(getPricesFailure(error)))
  }
}

// function to handle http errors
function handleFetchErrors(response) {
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
