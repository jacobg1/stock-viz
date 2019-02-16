// adding a pie chart
let nextPieChartId = 0
export const addPieChart = (data, title, labels, isPercent) => ({
  type: 'ADD_PIE_CHART',
  id: nextPieChartId++,
  data,
  title,
  labels,
  isPercent
})

// toggling between percent and number
export const togglePercent = id => ({
  type: 'TOGGLE_PERCENT',
  id
})

// setting the filter
export const setChartFilter = filter => ({
  type: 'SET_CHART_FILTER',
  filter
})

// action types for filtering between views
export const ChartFilters = {
  SHOW_PIE_CHARTS: 'SHOW_PIE_CHARTS',
  SHOW_LINE_GRAPHS: 'SHOW_LINE_GRAPHS',
  SHOW_STOCK_PRICES: 'SHOW_STOCK_PRICES'
}

// adding line graphs
let nextLineGraphId = 0
export const addLineGraph = (data, title) => ({
  type: 'ADD_LINE_GRAPH',
  id: nextLineGraphId++,
  data,
  title
})
