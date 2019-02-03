let nextPieChartId = 0
export const addPieChart = (data, title, labels, isPercent) => ({
  type: 'ADD_PIE_CHART',
  id: nextPieChartId++,
  data,
  title,
  labels,
  isPercent
})

export const togglePercent = id => ({
  type: 'TOGGLE_PERCENT',
  id
})

export const setChartFilter = filter => ({
  type: 'SET_CHART_FILTER',
  filter
})

export const ChartFilters = {
  SHOW_PIE_CHARTS: 'SHOW_PIE_CHARTS',
  SHOW_LINE_GRAPHS: 'SHOW_LINE_GRAPHS'
}
