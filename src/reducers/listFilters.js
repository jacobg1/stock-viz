import { ListFilters } from '../actions/stockActions'

const listFilters = (state = ListFilters.SHOW_NASDAQ, action) => {
  switch (action.type) {
    case 'SET_LIST_FILTER':
      return action.filter
    default:
      return state
  }
}

export default listFilters
