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
