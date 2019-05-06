import React, { Component } from "react";
import "../App.css";
import axios from "axios";
// import { AuthContext, Consumer } from "../Auth";

class Animal extends Component {
  // static contextType = AuthContext;

  state = {
    animal: []
  };

  componentDidMount() {
    axios.get(`/api/animals/${this.props.match.params.id}`).then(res => {
      console.log(res);
      this.setState({ animal: res.data });
    });
  }

  render() {
    return (
      <div className="Animal-profile">
        <h1>Meet {this.state.animal.name}!</h1>
        <img
          className="Animal-profile-photo"
          src={this.state.animal.photo}
          alt={this.state.animal.name}
        />
        <li>{this.state.animal.breed}</li>
        <li>{this.state.animal.age}</li>
        <li>{this.state.animal.size}</li>
        <li>{this.state.animal.gender}</li>
        <p>{this.state.animal.description}</p>
      </div>
    );
  }
}

export default Animal;
