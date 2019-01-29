let nextPieChartId = 0
export const addPieChart = (data, title) => ({
  type: 'ADD_PIE_CHART',
  id: nextPieChartId++,
  data,
  title
})
