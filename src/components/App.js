import React, { useState } from "react";

//import Modal from "./Modal";
import Signin from "./Signin";
import Calendar from "./Calendar";
import config from "../config.json";

//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default () => {
  const [name, setName] = useState("");

  if (config.signinEnabled && name === "") {
    return <Signin setName={setName} />;
  } else {
    return <Calendar name={name} />;
  }
};
