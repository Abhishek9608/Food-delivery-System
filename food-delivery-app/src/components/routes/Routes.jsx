import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../home/Home";
import Products from "../products/Products";
import Cart from "../cart/cart";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product" exact render={(props) => <Products />} />
        <Route path="/cart" exact render={(props) => <Cart />} />
      </Switch>
    );
  }
}

export default Routes;
