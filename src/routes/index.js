import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/" exact component={Home} isPrivate />
      <Route path="/cart" component={Cart} isPrivate />
    </Switch>
  );
}
