import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { Consumer, Provider } from "../../Auth";

function showSignInOut(role) {
  console.log(role);
  if (role === null || role === undefined) {
    return (
      <Link className="nav-link" to="/sign_in">
        Sign In
      </Link>
    );
  } else {
    return (
      <Link className="nav-link" onClick={() => Provider.logIn()}>
        Sign Out
      </Link>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <Provider>
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
              <li>{showSignInOut(Provider.role)}</li>
            </ul>
          </div>
        </div>
      </Provider>
    );
  }
}

export default Header;
