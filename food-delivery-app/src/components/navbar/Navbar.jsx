import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

class Navbar extends React.Component {
  render() {
    const { cartItem } = this.props;
    console.log(cartItem.length);
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom fixed-top">
        <Link className="navbar-brand" to="/">
          Romato
        </Link>
        <div className="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
          <div className="navbar-nav mr-5">
            <Link className="nav-item nav-link active mx-3 " to="/">
              Login <span className="sr-only">(current)</span>
            </Link>
            <Link className="nav-item nav-link mx-3 " to="/">
              Sign Up
            </Link>

            <Link className="nav-item nav-link mx-3" to="/">
              <FontAwesomeIcon icon={faCartArrowDown} />
            </Link>
            <div className="bg-info" style={{ width: "20px", height: "20px", borderRadius: "50%", marginLeft: "-30px", paddingLeft: "5px", color: "white" }}>
              {cartItem.length}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItem: state.cartItem,
});

export default connect(mapStateToProps, null)(Navbar);
