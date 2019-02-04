import { ChartFilters } from '../actions'

const chartFilters = (state = ChartFilters.SHOW_LINE_GRAPHS, action) => {
  switch (action.type) {
    case 'SET_CHART_FILTER':
      return action.filter
    default:
      return state
  }
}

export default chartFilters
