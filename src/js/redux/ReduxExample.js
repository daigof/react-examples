import React from 'react'
import {Provider} from 'react-redux'
import {createStore, compose, applyMiddleware} from 'redux'
import appReducer from './reducers'
import TodoApp from './components/TodoApp'
import DevTools from './containers/DevTools'
import ReduxThunk from 'redux-thunk'

const enhancer = compose(
// Middleware you want to use in development:
// applyMiddleware(d1, d2, d3),
applyMiddleware(ReduxThunk),
// Required! Enable Redux DevTools with the monitors you chose
DevTools.instrument())

let store = createStore(appReducer, {}, enhancer)

// Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
if (module.hot) {
  module
    .hot
    .accept('./reducers', () => store.replaceReducer(require('./reducers')))
}

class ReduxExample extends React.Component {

  render () {
    return (
      <Provider store={store}>
        <div className='container'>
          <TodoApp/>
          <DevTools/>
        </div>
      </Provider>
    )
  }
}

export default ReduxExample
