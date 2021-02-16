import React, { useState } from "react";


import Signin from "./Signin";
import Calendar from "./Calendar";
import config from "../config.json";



export default () => {
  const [name, setName] = useState("");

  if (config.signinEnabled && name === "") {
    return <Signin setName={setName} />;
  } else {
    return <Calendar name={name} />;
  }
};
