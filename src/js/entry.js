import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import Layout from './pages/Layout'
import Home from './pages/Home'
import RouteParams from './pages/RouteParams'
import InputPage from './pages/InputPage'
import PropTypesPage from './pages/PropTypesPage'
import ReduxExample from './redux/ReduxExample'
import Flux from './pages/Flux'

require('../css/style.css')
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Home} />
      <Route component={RouteParams} path='react-route-params/:exId' />
      <Route component={InputPage} path='react-input-page' />
      <Route component={PropTypesPage} path='react-prop-page' />
      <Route component={ReduxExample} path='redux' />
      <Route component={Flux} path='flux' />
    </Route>
</Router>, document.getElementById('app'))
