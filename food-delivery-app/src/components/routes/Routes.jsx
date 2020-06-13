import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../home/Home";
import Products from "../products/Products";
import Cart from "../cart/cart";
import Login from "../Auth/login";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product" exact render={(props) => <Products push {...props} />} />
        <Route path="/cart" exact render={(props) => <Cart />} />
        <Route path="/login" exact render={(props) => <Login {...props} />} />
      </Switch>
    );
  }
}

export default Routes;
