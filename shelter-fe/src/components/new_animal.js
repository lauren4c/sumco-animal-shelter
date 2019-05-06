import React, { Component } from "react";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { AuthContext } from "../Auth";

import "../App.css";
import axios from "axios";

class NewAnimal extends Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      species: "",
      size: "",
      age: "",
      breed: "",
      gender: "",
      name: "",
      description: "",
      photo: null
    };

    this.handleSpecies = this.handleSpecies.bind(this);
    this.handleSize = this.handleSize.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleBreed = this.handleBreed.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);
  }

  handleSpecies(event) {
    this.setState({ species: event.target.value });
    console.log(this.state.species);
  }
  handleSize(event) {
    this.setState({ size: event.target.value });
    console.log(this.state.size);
  }
  handleAge(event) {
    this.setState({ age: event.target.value });
  }
  handleBreed(event) {
    this.setState({ breed: event.target.value });
  }
  handleGender(event) {
    this.setState({ gender: event.target.value });
  }
  handleName(event) {
    this.setState({ name: event.target.value });
  }
  handleDescription(event) {
    this.setState({ description: event.target.value });
  }
  handlePhoto(event) {
    this.setState({
      photo: event.target.files[0],
      loaded: 0
    });
    console.log(event.target.files[0]);
  }
  uploadPhoto(event) {
    const data = new FormData();
    data.append("file", this.state.photo);
    axios.post("/api/animals/upload", data, {}).then(res => {
      console.log(JSON.stringify(res.data));
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newAnimal = {
      species: this.state.species,
      size: this.state.size,
      age: this.state.age,
      breed: this.state.breed,
      gender: this.state.gender,
      name: this.state.name,
      description: this.state.description,
      uploadedPhoto: ""
    };
    console.log(newAnimal);
    axios.post("/api/animals/create", newAnimal).then(res => {
      alert(JSON.stringify(res.data.message));
      if (JSON.stringify(res.data.message).includes("successfully") === true) {
        this.props.history.push(`/adopt/${res.data.animal.id}`);
      }
    });
  }
  render() {
    return (
      <Router>
        <div className="New-animal">
          <h1>Add a new animal</h1>

          <div className="New-animal-form">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <div className="Species-dropdown">
                  <select
                    value={this.state.value}
                    onChange={this.handleSpecies}
                  >
                    <option value="">--Select the type of animal--</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="rabbit">Rabbit</option>
                    <option value="reptile">Reptile</option>
                  </select>
                </div>
                <div className="Size-dropdown">
                  <select value={this.state.value} onChange={this.handleSize}>
                    <option value="">--Animal Size--</option>
                    <option value="Extra-Small">Extra-Small</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="Extra-Large">Extra-Large</option>
                  </select>
                </div>
                <div className="Age-dropdown">
                  <select value={this.state.value} onChange={this.handleAge}>
                    <option value="">--Animal Age--</option>
                    <option value="Baby">Baby</option>
                    <option value="Young">Young</option>
                    <option value="Adult">Adult</option>
                    <option value="Senior">Senior</option>
                  </select>
                </div>
                <div className="Gender-dropdown">
                  <select value={this.state.value} onChange={this.handleGender}>
                    <option value="">--Animal Gender--</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <label>Animal Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={this.state.value}
                  onChange={this.handleName}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  placeholder="Enter Email"
                  value={this.state.value}
                  onChange={this.handleDescription}
                  className="form-control"
                />
                <br />
                <small className="text-muted" id="emailHelp">
                  Description must be at least 10 words.
                </small>
              </div>
              <input
                type="file"
                className="Add-photo"
                onChange={this.handlePhoto}
              />
              <button
                type="button"
                className="User-button"
                onClick={this.uploadPhoto}
              >
                Upload
              </button>
              <br />

              <input type="submit" value="Add Animal" className="User-button" />
            </form>
          </div>
        </div>
      </Router>
    );
  }
}

export default withRouter(NewAnimal);
