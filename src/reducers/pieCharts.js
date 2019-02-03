const pieCharts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PIE_CHART':
      return [
        ...state,
        {
          id: action.id,
          data: action.data,
          title: action.title,
          labels: action.labels,
          isPercent: false
        }
      ]
    case 'TOGGLE_PERCENT':
      return state.map(pieChart =>
        pieChart.id === action.id
          ? { ...pieChart, isPercent: !pieChart.isPercent }
          : pieChart
      )
    default:
      return state
  }
}

export default pieCharts
