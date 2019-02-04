const lineGraphs = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LINE_GRAPH':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          data: action.data
        }
      ]
    default:
      return state
  }
}

export default lineGraphs
