const pieCharts = (
  state = [{ id: 0, number: 10, total: 20 }, { id: 1, number: 30, total: 40 }],
  action
) => {
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
