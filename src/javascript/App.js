'use strict';

import React from 'react';
import { Link, IndexLink } from 'react-router';

import { Home, Stuff, Contact } from './Tabs';

const App = (props) => (
  <div>
    <h1>Simple SPA</h1>
    <ul className="header">
      <li><IndexLink activeClassName="active" to="/">Home</IndexLink></li>
      <li><Link activeClassName="active" to="/stuff">Stuff</Link></li>
      <li><Link activeClassName="active" to="/contact">Contact</Link></li>
    </ul>
    <div className="content">
      {props.children}
    </div>
  </div>
);

export default App;
