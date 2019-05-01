import React, { useState } from "react";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { useAlert } from "react-alert";

const SignIn = () => {
  const alert = useAlert();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("null");

  const handleRole = res => {
    console.log("This is the role value in handleRole " + res.data.user.role);
    setRole(res.data.user.role); //isn't updating
    console.log("This is the state of role: " + role);
  };

  const handleEmail = event => {
    setEmail(event.target.value);
  };
  const handlePassword = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const user = {
      email: email,
      password: password
    };
    axios.post("/api/users/sign_in", user).then(res => {
      alert.show(JSON.stringify(res.data.message));
      console.log("This is the response" + JSON.stringify(res));
      handleRole(res); //do I need useEffect() ??
    });
  };

  return (
    <Router>
      <div className="Sign-Up">
        <h1>Sign in to your account</h1>
        <p>
          Don't have an account yet? <a href="/sign_up">Sign Up here.</a>
        </p>
        <div className="Sign-in-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={handleEmail}
                className="form-control"
              />
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

            <br />
            <input type="submit" value="Sign In" className="Button-Orange" />
          </form>
        </div>
      </div>
    </Router>
  );
};

export default withRouter(SignIn);
