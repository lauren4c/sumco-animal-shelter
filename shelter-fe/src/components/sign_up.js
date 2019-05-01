import React from "react";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { useAlert } from "react-alert";

const SignUp = () => {
  const alert = useAlert();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [password_conf, setPassword_conf] = React.useState("");

  const handleName = event => {
    setName(event.target.value);
  };
  const handleEmail = event => {
    setEmail(event.target.value);
  };
  const handlePassword = event => {
    setPassword(event.target.value);
  };
  const handlePasswordConf = event => {
    setPassword_conf(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newUser = {
      name: name,
      email: email,
      password: password,
      password_conf: password_conf
    };

    axios.post("/api/users", newUser).then(res => {
      alert.show(JSON.stringify(res.data.message));
      this.props.history.push("/");
    });
  };

  return (
    <Router>
      <div className="Sign-Up">
        <h1>Sign up for an Sumco Animal Shelter account</h1>
        <p>
          Already have an account? <a href="/sign_in">Sign in here.</a>
        </p>
        <div className="Sign-up-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                onChange={handleName}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={handleEmail}
                className="form-control"
              />
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
                onChange={handlePassword}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password_conf"
                placeholder="Enter Password confirmation"
                className="form-control"
                onChange={handlePasswordConf}
              />
              <small className="text-muted" id="passwordHelp">
                password must be at least 6 characters and match confirmation
                below
              </small>
            </div>
            <br />
            <input type="submit" value="Sign Up" className="User-button" />
          </form>
        </div>
      </div>
    </Router>
  );
};

export default withRouter(SignUp);
