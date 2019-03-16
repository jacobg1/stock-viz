import React from 'react'
import ReactDOM from 'react-dom'
import ChartsContainer from '../src/components/Charts'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <ChartsContainer />
    </Provider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
