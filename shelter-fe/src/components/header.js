import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import App from "../App.js";

class Header extends Component {
  showsSignInOut(user) {
    if (this.props.user === null) {
      return (
        <li>
          <Link className="nav-link" to="/sign_in">
            Sign In
          </Link>
        </li>
      );
    } else
      return (
        <Link className="nav-link" to="/sign_out">
          Sign In
        </Link>
      );
  }

  // axios.post("/api/users/sign_out").then(res => {
  //   console.log(
  //     "This is the res.message " + JSON.stringify(res.data.message)
  //   );
  // });
  render() {
    return (
      <div className="Nav">
        {" "}
        <Link className="nav-link" to="/">
          <h3>
            Summit County Animal <br />
            Control and Shelter
          </h3>
        </Link>
        <div>
          <ul className="Nav-Links">
            <li>
              <Link className="nav-link" to="/adopt">
                Adopt
              </Link>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Volunteer/Foster</a>
            </li>
            {this.showsSignInOut()}
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
