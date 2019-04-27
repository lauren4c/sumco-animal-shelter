import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../App.css";
import axios from "axios";

class Adopt extends Component {
  state = {
    animals: []
  };

  componentDidMount() {
    axios.get("/api/animals").then(res => {
      this.setState({ animals: res.data });
    });
  }

  render() {
    return (
      <Router>
        <div className="Adopt">
          <h1>Adopt your new best friend!</h1>
          <div className="Animal-card-holder">
            {this.state.animals.map(animal => (
              <Fragment key={animal.id}>
                <div className="Animal-card">
                  <img
                    className="Animal-card-photo"
                    src={animal.photo}
                    alt={animal.name}
                  />

                  <li>
                    <h2>{animal.name}</h2>
                  </li>
                  <li>{animal.breed}</li>
                  <li>{animal.age}</li>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </Router>
    );
  }
}

export default Adopt;
