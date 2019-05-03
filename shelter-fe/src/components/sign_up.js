import React, { Component } from "react";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { AuthContext } from "../Auth";

import "../App.css";
import axios from "axios";

class SignUp extends Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = { email: "" };
    this.state = { password: "" };
    this.state = { name: "" };
    this.state = { password_conf: "" };

    this.handlePassword = this.handlePassword.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handlePasswordConf = this.handlePasswordConf.bind(this);
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }
  handleEmail(event) {
    this.setState({ email: event.target.value });
  }
  handlePassword(event) {
    this.setState({ password: event.target.value });
  }
  handlePasswordConf(event) {
    this.setState({ password_conf: event.target.value });
  }

  handleClientLogIn(res) {
    this.context.logIn(res.data.user.role, res.data.user.name);
    this.props.history.push("/");
  }

  handleSubmit(event) {
    event.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_conf: this.state.password_conf
    };

    axios.post("/api/users", newUser).then(res => {
      alert(JSON.stringify(res.data.message));
      if (JSON.stringify(res.data.message).includes("successfully") === true) {
        this.handleClientLogIn(res);
      }
    });
  }
  render() {
    return (
      <Router>
        <div className="Sign-Up">
          <h1>Sign up for an Sumco Animal Shelter account</h1>
          <p>
            Already have an account? <a href="/user/sign_in">Sign in here.</a>
          </p>
          <div className="Sign-up-form">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={this.state.value}
                  onChange={this.handleName}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={this.state.value}
                  onChange={this.handleEmail}
                  className="form-control"
                />
                <br />
                <small className="text-muted" id="emailHelp">
                  email address must be a valid address
                </small>
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="form-control"
                  value={this.state.value}
                  onChange={this.handlePassword}
                />
                <br />
                <small className="text-muted" id="passwordHelp">
                  password must be at least 6 characters and match confirmation
                  below
                </small>
              </div>

              <div className="form-group">
                <label>Password confirmation:</label>
                <input
                  type="password"
                  name="password_conf"
                  placeholder="Enter Password confirmation"
                  className="form-control"
                  value={this.state.value}
                  onChange={this.handlePasswordConf}
                />
              </div>
              <br />
              <input type="submit" value="Sign Up" className="User-button" />
            </form>
          </div>
        </div>
      </Router>
    );
  }
}

export default withRouter(SignUp);
