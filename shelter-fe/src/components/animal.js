import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { AuthContext } from "../Auth";

class Animal extends Component {
  static contextType = AuthContext;

  state = {
    animal: []
  };

  componentDidMount() {
    axios.get(`/api/animals/${this.props.match.params.id}`).then(res => {
      this.setState({ animal: res.data });
    });
  }

  showAdminButtons(role) {
    if (role === 1) {
      return (
        <span className="Edit-button">
          <Link
            to={`/adopt/${this.props.match.params.id}/edit`}
            onClick={() =>
              this.props.history.push(
                `/adopt/${this.props.match.params.id}/edit`
              )
            }
          >
            <button className="Admin-button">
              Edit {this.state.animal.name}
            </button>
          </Link>
        </span>
      );
    }
  }

  render() {
    return (
      <Router>
        <div className="Animal-profile">
          <Link to="/adopt" onClick={() => this.props.history.push("/adopt")}>
            <h4>{"<< Back to Adoptable Animals"}</h4>
          </Link>
          <h1>Meet {this.state.animal.name}!</h1>
          {this.showAdminButtons(this.context.role)}
          <div className="Animal-photo-plus-info">
            <img
              className="Animal-profile-photo"
              src={this.state.animal.photo}
              alt={this.state.animal.name}
            />
            <div className="Animal-info">
              <h2>Get to Know {this.state.animal.name}:</h2>
              <li>{this.state.animal.breed}</li>
              <li>{this.state.animal.age}</li>
              <li>{this.state.animal.size}</li>
              <li>{this.state.animal.gender}</li>
            </div>
          </div>
          <p>{this.state.animal.description}</p>
        </div>
      </Router>
    );
  }
}

export default Animal;
