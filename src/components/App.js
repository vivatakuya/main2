import React, { useState } from "react";

//import Modal from "./Modal";

//import Calendar from "./Calendar";



//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./Signin";

export default () => {
  const [name, setName] = useState("");
  console.log({ name });

  return (
    <Signin setName={setName}/>
    // <Router>
    //   <Switch>
        
    //     <Route exact path="/Modal" component={Modal} />
    //     <Route exact path="/Calendar" component={Calendar} />
    //   </Switch>
    // </Router>
  );
};