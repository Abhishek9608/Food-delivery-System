import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../home/Home";
import Products from "../products/Products";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product" exact component={Products} />
      </Switch>
    );
  }
}

export default Routes;
