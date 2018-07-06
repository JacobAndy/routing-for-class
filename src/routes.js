import React from "react";
import { Switch, Route } from "react-router-dom";
import Product from "./components/Product/Product";
import Home from "./components/Home/Home";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/shop/:name" component={Product} />
  </Switch>
);
