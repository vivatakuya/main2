import React from 'react';

import Modal from './Modal';

import Calendar from './Calendar';

import Signin from './Signin';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Siginin from './Signin';

export default () => {
  return (
    <Router>
    <Switch>
    <Route exact path='/Signin' component={Siginin} />
        <Route exact path='/Modal' component={Modal} />
        <Route exact path='/Calendar' component={Calendar} />
    </Switch>
</Router>
  )
};