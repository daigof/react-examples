import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

//Components
import Layout from './pages/Layout';
import Home from './pages/Home';
import Settings from './pages/Settings';
import About from './pages/About';
import Flux from './pages/Flux';

require('../css/style.css');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route component={Settings} path="settings"></Route>
      <Route component={About} path="about"></Route>
      <Route component={Flux} path="flux"></Route>
    </Route>
  </Router>
  , document.getElementById('app'));
