const pieCharts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PIE_CHART':
      return [
        ...state,
        {
          id: action.id,
          data: action.data
        }
      ]
    default:
      return state
  }
}

export default pieCharts
