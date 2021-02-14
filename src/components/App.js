import React, { useState } from "react";

//import Modal from "./Modal";

import Calendar from "./Calendar";



//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./Signin";

export default () => {
  const [name, setName] = useState("");
  

  if(name ===''){
  return <Signin setName={setName}/>;
  }else{
    return<Calendar name={name}/>;
  } ;
};