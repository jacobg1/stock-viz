let nextPieChartId = 0
export const addPieChart = data => ({
  type: 'ADD_PIE_CHART',
  id: nextPieChartId++,
  data
})
