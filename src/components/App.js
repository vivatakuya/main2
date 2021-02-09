import React from 'react';

import Modal from './Modal';

import Calendar from './Calendar';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

export default () => {
  return (
    <Router>
    <Switch>
        <Route exact path='/Modal' component={Modal} />
        <Route exact path='/Calendar' component={Calendar} />
    </Switch>
</Router>
  )
};
