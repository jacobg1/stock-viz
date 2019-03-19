// setting the filter
export const setChartFilter = filter => ({
  type: 'SET_CHART_FILTER',
  filter
})

// action types for filtering between views
export const ChartFilters = {
  SHOW_PIE_CHARTS: 'SHOW_PIE_CHARTS',
  SHOW_LINE_GRAPHS: 'SHOW_LINE_GRAPHS',
  SHOW_STOCK_PRICES: 'SHOW_STOCK_PRICES',
  SHOW_CRYPTO_PRICES: 'SHOW_CRYPTO_PRICES'
}

/* 
	simulate loading on select options to give 
	users feedback that the list has changed 
*/

export const setFilterLoadingState = () => ({
  type: 'SET_FILTER_LOADING_STATE'
})
