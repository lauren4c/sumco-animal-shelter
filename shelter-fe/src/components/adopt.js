import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { AuthContext } from "../Auth";

class Adopt extends Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);
    this.state = {
      animals: [],
      type: "",
      size: "",
      age: ""
    };
    this.handleType = this.handleType.bind(this);
    this.handleSize = this.handleSize.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.sortQuery = this.sortQuery.bind(this);
  }

  componentDidMount() {
    axios.get("/api/available_animals").then(res => {
      this.setState({ animals: res.data, type: "", size: "", age: "" });
    });
  }
  handleType(event) {
    this.setState({ type: event.target.value }, () => this.sortQuery());
  }
  handleSize(event) {
    this.setState({ size: event.target.value }, () => this.sortQuery());
  }
  handleAge(event) {
    this.setState({ age: event.target.value }, () => this.sortQuery());
  }

  sortQuery() {
    const query = {
      type: this.state.type,
      size: this.state.size,
      age: this.state.age
    };
    axios.get("/api/animals/sort", { params: query }).then(res => {
      this.setState({ animals: res.data });
    });
  }
  showAdminButtons(role) {
    if (role === 1) {
      return (
        <Link
          to="/new_animal"
          onClick={() => this.props.history.push(`/new_animal`)}
        >
          <button className="Admin-button">Add animal</button>
        </Link>
      );
    }
  }

  results() {
    // eslint-disable-next-line
    if (this.state.animals == "") {
      return <h2>No animals matched your search</h2>;
    } else {
      return (
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
                  <h2>{animal.name}</h2>
                </li>
                <li>{animal.breed}</li>
                <li>
                  {animal.age} {animal.gender}
                </li>
              </div>
            </Link>
          ))}
        </div>
      );
    }
  }
  render() {
    return (
      <Router>
        <div className="Adopt">
          <span className="Adopt-header">
            <Link to="/adopt" onClick={() => this.componentDidMount()}>
              <h4>{"View all Animals"}</h4>
            </Link>
            <h1>Adopt your new best friend!</h1>{" "}
            {this.showAdminButtons(this.context.role)}
          </span>
          <div className="Dropdown-group">
            <br />
            <div className="dropdown">
              <select value={this.state.value} onChange={this.handleType}>
                <option value="">--Select Animal Type--</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="rabbit">Rabbit</option>
                <option value="reptile">Reptile</option>
              </select>
            </div>
            <div className="dropdown">
              <select value={this.state.value} onChange={this.handleSize}>
                <option value="">--Select Animal Size--</option>
                <option value="Extra-Small">Extra-Small</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="Extra-Large">Extra-Large</option>
              </select>
            </div>
            <div className="dropdown">
              <select value={this.state.value} onChange={this.handleAge}>
                <option value="">--Select Animal Age--</option>
                <option value="Baby">Baby</option>
                <option value="Young">Young</option>
                <option value="Adult">Adult</option>
                <option value="Senior">Senior</option>
              </select>
            </div>
          </div>
          {this.results()}
        </div>
      </Router>
    );
  }
}

export default Adopt;
