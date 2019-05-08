import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { AuthContext } from "../Auth";

class Adopt extends Component {
  static contextType = AuthContext;

  state = {
    animals: []
  };

  componentDidMount() {
    axios.get("/api/pending_adoptions").then(res => {
      this.setState({ animals: res.data });
      console.log(res.data);
    });
  }

  render() {
    return (
      <Router>
        <div className="Adopt">
          <span className="Adopt-header">
            <h1>Pending Adoptions</h1>
          </span>

          <div className="Animal-card-holder">
            {this.state.animals.map(animal => (
              <Link
                to={`/adopt/${animal.id}`}
                key={animal.id}
                onClick={() => this.props.history.push(`/adopt/${animal.id}`)}
              >
                <div className="Animal-card">
                  <img
                    className="Animal-card-photo"
                    src={animal.photo}
                    alt={animal.name}
                  />

                  <li>
                    <h2>
                      {animal.name} - {animal.status}
                    </h2>
                  </li>
                  <li>{animal.breed}</li>
                  <li>
                    {animal.age} {animal.gender}
                  </li>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Router>
    );
  }
}

export default Adopt;
