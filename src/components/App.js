import React, { useState } from "react";

import Modal from "./Modal";

import Calendar from "./Calendar";

import Siginin from "./Signin";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default () => {
  const [name,setName]=useState('');
  console.log({name});


  return (
    <Router>
      <Switch>
        <Route exact path="/Signin"
         component={Siginin} 
         setName ={setName}/>
        <Route exact path="/Modal" component={Modal} />
        <Route exact path="/Calendar" component={Calendar} />
      </Switch>
    </Router>
  );
};
