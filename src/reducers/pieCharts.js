const pieCharts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PIE_CHART':
      return [
        ...state,
        {
          id: action.id,
          number: action.number,
          total: action.total
        }
      ]
    default:
      return state
  }
}

export default pieCharts
