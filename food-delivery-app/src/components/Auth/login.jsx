import React from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { logIn } from "../../redux/Action";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  changehandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleAuth = (e) => {
    e.preventDefault();
    // if()
    console.log(this.props);

    let { logIn, isLogged, history } = this.props;
    let { username, password } = this.props.user;
    console.log(username, password);
    if (username === this.state.username && password === this.state.password) {
      logIn(!isLogged);
      const location = this.props.location;
      if (location.state && location.state.nextPathname) {
        const location = {
          pathname: "/",
          state: { fromDashboard: true },
        };
        history.push(location);
      } else {
        const location = {
          pathname: "/",
          state: { fromDashboard: true },
        };
        history.push(location);
      }
    }
  };

  render() {
    // const { logIn, isLogged } = this.props;
    // console.log(logIn);
    // console.log(logIn);

    return (
      <>
        <form onSubmit={this.handleAuth}>
          <div className="form-group mt-5">
            <label htmlFor="formGroupExampleInput">UserName</label>
            <input name="username" type="text" className="form-control" id="formGroupExampleInput" placeholder="Username" value={this.state.username} onChange={(e) => this.changehandler(e)} />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Password</label>
            <input name="password" type="text" className="form-control" id="formGroupExampleInput2" placeholder="password" value={this.state.password} onChange={(e) => this.changehandler(e)} />
          </div>
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  isLogged: state.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  logIn: (payload) => dispatch(logIn(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
