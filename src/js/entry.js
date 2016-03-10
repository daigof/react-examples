import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

//Components
import Layout from './pages/Layout';
import Home from './pages/Home';
import Settings from './pages/Settings';
import RouteParams from './pages/RouteParams';
import Flux from './pages/Flux';
import InputPage from './pages/InputPage';

require('../css/style.css');
ReactDOM.render(
  <Router history={hashHistory}>
  <Route path="/" component={Layout}>
    <IndexRoute component={Home}></IndexRoute>
    <Route component={Settings} path="settings"></Route>
    <Route component={RouteParams} path="react-route-params/:exId"></Route>
    <Route component={InputPage} path="react-input-page"></Route>
    <Route component={Flux} path="flux"></Route>
  </Route>
</Router>, document.getElementById('app'));
