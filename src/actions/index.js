let nextPieChartId = 0
export const addPieChart = (number, total) => ({
  type: 'ADD_PIE_CHART',
  id: nextPieChartId,
  number,
  total
})
