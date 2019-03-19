const filterLoadingState = (state = false, action) => {
  switch (action.type) {
    case 'SET_FILTER_LOADING_STATE':
      return !state
    default:
      return state
  }
}

export default filterLoadingState
