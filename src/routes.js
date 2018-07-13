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
/*


//////////////////////
//STATEFUL COMPONENT//
//////////////////////

THIS.PROPS.MATCH.PARAMS={name: **WHATEVER YOU GIVE IT**}


//////////////////////
//FUNCTIONAL COMPONENT//
//////////////////////

PROPS.MATCH.PARAMS={name: **WHATEVER YOU GIVE IT**}


EI


HTTP://LOCALHOST:3000/SHOP/VANS

<INSIDE OF PRODUCT COMPONENT>
THIS.PROPS.MATCH.PARAMS.NAME=VANS
*/
