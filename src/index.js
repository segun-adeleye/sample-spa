'use strict';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './javascript/App';
const { Home, Stuff, Contact } = require('./javascript/Tabs');

var destination = document.querySelector("#container");

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="stuff" component={Stuff} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>
  ,
  destination
);
