import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../home/Home";
import Products from "../products/Products";
import Cart from "../cart/cart";
import Login from "../Auth/login";
import { connect } from "react-redux";

class Routes extends React.Component {
  render() {
    const { isLogged } = this.props;
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product" exact render={(props) => <Products push {...props} />} />
        <Route path="/cart" exact render={(props) => (isLogged ? <Cart /> : <Redirect to={{ pathname: "/login" }} />)} />
        <Route path="/login" exact render={(props) => <Login {...props} />} />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  isLogged: state.isLogged,
});

export default connect(mapStateToProps)(Routes);
