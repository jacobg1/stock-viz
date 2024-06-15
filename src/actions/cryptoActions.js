/* 
	function which fetches the stock data from the api
*/

export function getCrypto(symbol, type, market) {
  const key = process.env.REACT_APP_API_KEY,
    url = `https://www.alphavantage.co/query?function=${type}&symbol=${symbol}&market=${market}&apikey=${key}`
  return dispatch => {
    dispatch(getCryptoBegin())
    return fetch(url)
      .then(handleFetchErrors)
      .then(response => response.json())
      .then(json => {
        if (!json[Object.keys(json)[1]]) {
          dispatch(getCryptoFailure(json[Object.keys(json)[0]]))
        }
        dispatch(
          getCryptoSuccess(
            json[Object.keys(json)[1]],
            json[Object.keys(json)[0]]
          )
        )
        return json
      })
      .catch(error => dispatch(getCryptoFailure(error)))
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

export const GET_CRYPTO_BEGIN = 'GET_CRYPTO_BEGIN'
export const GET_CRYPTO_SUCCESS = 'GET_CRYPTO_SUCCESS'
export const GET_CRYPTO_FAILURE = 'GET_CRYPTO_FAILURE'

export const getCryptoBegin = () => ({
  type: GET_CRYPTO_BEGIN
})

export const getCryptoSuccess = (crypto, meta) => ({
  type: GET_CRYPTO_SUCCESS,
  payload: { crypto, meta }
})

export const getCryptoFailure = error => ({
  type: GET_CRYPTO_FAILURE,
  payload: { error }
})

// setting which pice line to show on crypto chart
export const setCryptoLines = filter => ({
  type: 'SET_CRYPTO_LINE',
  filter
})

// action types for filtering between stock price lines
export const CryptoLines = {
  OPEN: 'open',
  HIGH: 'high',
  LOW: 'low',
  CLOSE: 'close'
}

// action type for setting that stock symbol that will be used in search
export const setCryptoCoin = (coin, label) => ({
  type: 'SET_CRYPTO_COIN',
  coin,
  label
})

// object to hold crypto types, monthly / daily
export const TypeFilters = {
  MONTHLY: 'MONTHLY',
  DAILY: 'DAILY'
}

// setting crypto type monthly / daily
export const setCryptoType = timePeriod => ({
  type: 'SET_CRYPTO_TYPE',
  timePeriod
})
