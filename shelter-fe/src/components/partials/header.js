import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { AuthContext } from "../../Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  static contextType = AuthContext;

  showSignInOut(role) {
    if (role === null || role === undefined) {
      return (
        <li>
          {" "}
          <Link className="nav-link" to="/sign_in">
            Sign In
          </Link>
        </li>
      );
    } else {
      return (
        <section className="Admin-header">
          <li>
            <Link className="nav-link" to="/pending">
              Pending Adoptions
            </Link>
          </li>
          <li>
            <a className="nav-link" onClick={this.context.logOut}>
              Sign Out
            </a>
          </li>
        </section>
      );
    }
  }
  mobileNavToggle() {
    const navs = document.querySelectorAll(".Desktop-Nav");
    navs.forEach(nav => nav.classList.toggle("Navbar__ToggleShow"));
  }

  render() {
    return (
      <div className="Nav">
        <Link className="Nav-logo nav-link" to="/">
          <h3>
            Summit County Animal <br />
            Control and Shelter
          </h3>
        </Link>
        <div className="Mobile-nav nav-link">
          <FontAwesomeIcon
            id="Menu-bars"
            icon={faBars}
            size="2x"
            style={{ color: "white" }}
            onClick={() => this.mobileNavToggle()}
          />
        </div>
        <div className="Desktop-Nav">
          <ul className="Nav-Links">
            <li>
              <Link className="nav-link" to="/adopt">
                View Available Animals
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/happy_tails">
                Happy Tails
              </Link>
            </li>
            {this.showSignInOut(this.context.role)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
