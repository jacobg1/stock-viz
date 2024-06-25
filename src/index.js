import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import './index.css'
import ChartsContainer from './components/Charts'
import * as serviceWorker from './serviceWorker'
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk))

const root = createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <ChartsContainer />
  </Provider>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
