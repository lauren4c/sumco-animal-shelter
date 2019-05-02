import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { Consumer, Provider } from "../Auth";
// import { useAlert } from "react-alert";
// import App from "../App.js";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
    this.state = { password: "" };
    this.state = { role: "" };

    this.handlePassword = this.handlePassword.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  // alert = useAlert();

  handleRole(res) {
    console.log("This is the role value in handleRole " + res.data.user.role);
    Provider.logIn(res.data.user.role, res.data.user.name);
    console.log("This is the state of role: " + this.state.role);
    this.props.history.push("/");
  }

  handleEmail(event) {
    this.setState({ email: event.target.value });
    console.log(this.state.email);
  }
  handlePassword(event) {
    this.setState({ password: event.target.value });
    console.log(this.state.password);
  }

  handleSignIn(event) {
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    axios.post("/api/users/sign_in", user).then(res => {
      // alert.show(JSON.stringify(res.data.message));
      console.log("This is the response" + JSON.stringify(res));
      if (JSON.stringify(res.data.message).includes("successfully") === true) {
        //set state of role to signify there is a user and redirect to homepage
        this.handleRole(res);
      }
    });
  }
  render() {
    return (
      <Router>
        <div className="Sign-In">
          <h1>Sign in to your account</h1>
          <p>
            Don't have an account yet? <a href="/sign_up">Sign Up here.</a>
          </p>
          <div className="Sign-in-form">
            <form onSubmit={this.handleSignIn}>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={this.state.value}
                  placeholder="Enter Email"
                  onChange={this.handleEmail}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={this.state.value}
                  className="form-control"
                  onChange={this.handlePassword}
                />
              </div>

              <br />
              <input type="submit" value="Sign In" className="User-button" />
            </form>
          </div>
        </div>
      </Router>
    );
  }
}

export default SignIn;
