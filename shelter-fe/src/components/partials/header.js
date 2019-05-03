import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { AuthContext } from "../../Auth";

class Header extends Component {
  static contextType = AuthContext;

  showSignInOut(role) {
    console.log(role);
    if (role === null || role === undefined) {
      return (
        <Link className="nav-link" to="/sign_in">
          Sign In
        </Link>
      );
    } else {
      return (
        <a className="nav-link" onClick={this.context.logOut}>
          Sign Out
        </a>
      );
    }
  }

  render() {
    return (
      <div className="Nav">
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
            <li>{this.showSignInOut(this.context.role)}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
