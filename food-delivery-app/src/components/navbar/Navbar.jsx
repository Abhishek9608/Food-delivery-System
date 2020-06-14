import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { logIn } from "../../redux/Action";

class Navbar extends React.Component {
  handleAuth = () => {
    let { isLogged, logIn } = this.props;
    logIn(!isLogged);
  };
  render() {
    // console.log(this.props);
    const { cartItem, isLogged } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom fixed-top">
        <Link className="navbar-brand" to="/">
          Romato
        </Link>
        <div className="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
          <div className="navbar-nav mr-5">
            {isLogged === true ? (
              <Link to="#" className="nav-item nav-link active mx-3 " onClick={this.handleAuth}>
                Logout <span className="sr-only">(current)</span>
              </Link>
            ) : (
              <Link to="/login" className="nav-item nav-link active mx-3 ">
                Login <span className="sr-only">(current)</span>
              </Link>
            )}
            <Link className="nav-item nav-link mx-3 " to="/">
              Sign Up
            </Link>

            <Link className="nav-item nav-link mx-3" to="/cart">
              <FontAwesomeIcon icon={faCartArrowDown} />
            </Link>
            <div className="bg-dark" style={{ width: "20px", height: "20px", borderRadius: "50%", marginLeft: "-30px", paddingLeft: "5px", color: "white" }}>
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
  isLogged: state.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  logIn: (payload) => dispatch(logIn(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
