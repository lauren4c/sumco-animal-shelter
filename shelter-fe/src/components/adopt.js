import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";
// import { AuthContext, Consumer } from "../Auth";

class Adopt extends Component {
  // static contextType = AuthContext;

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
      <div className="Adopt">
        <h1>Adopt your new best friend!</h1>
        <div className="Animal-card-holder">
          {this.state.animals.map(animal => (
            // <Fragment key={animal.id}>
            <Link
              onClick={this.forceUpdate}
              to={`/adopt/${animal.id}`}
              key={animal.id}
            >
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
            </Link>
            // </Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default Adopt;
