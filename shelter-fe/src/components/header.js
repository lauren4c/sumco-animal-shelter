import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
// import Adopt from "./components/adopt.js";

class Header extends Component {
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
            <li>
              <a href="">Sign-In</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
