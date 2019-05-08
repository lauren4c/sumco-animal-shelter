import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../Auth";

import "../App.css";
import axios from "axios";

class NewAnimal extends Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      type: "",
      size: "",
      age: "",
      breed: "",
      gender: "",
      status: "",
      name: "",
      description: "",
      photo: null,
      uploadedPhoto: ""
    };

    this.handleType = this.handleType.bind(this);
    this.handleSize = this.handleSize.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleBreed = this.handleBreed.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);
  }

  handleType(event) {
    this.setState({ type: event.target.value });
    console.log(this.state.type);
  }
  handleSize(event) {
    this.setState({ size: event.target.value });
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
  handleStatus(event) {
    this.setState({ status: event.target.value });
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
      this.setState({ uploadedPhoto: "/" + res.data.path });
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newAnimal = {
      type: this.state.type,
      size: this.state.size,
      status: this.state.status,
      age: this.state.age,
      breed: this.state.breed,
      gender: this.state.gender,
      name: this.state.name,
      description: this.state.description,
      photo: this.state.uploadedPhoto
    };
    console.log(newAnimal);
    axios.post("/api/animals/create", newAnimal).then(res => {
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
              <div className="Dropdown-group">
                <div className="dropdown">
                  <select
                    value={this.state.value}
                    onChange={this.handleType}
                    required
                  >
                    <option value="">--Select Animal Type--</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="rabbit">Rabbit</option>
                    <option value="reptile">Reptile</option>
                  </select>
                </div>
                <div className="dropdown">
                  <select
                    value={this.state.value}
                    onChange={this.handleSize}
                    required
                  >
                    <option value="">--Select Animal Size--</option>
                    <option value="Extra-Small">Extra-Small</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="Extra-Large">Extra-Large</option>
                  </select>
                </div>
                <div className="dropdown">
                  <select
                    value={this.state.value}
                    onChange={this.handleAge}
                    required
                  >
                    <option value="">--Select Animal Age--</option>
                    <option value="Baby">Baby</option>
                    <option value="Young">Young</option>
                    <option value="Adult">Adult</option>
                    <option value="Senior">Senior</option>
                  </select>
                </div>
                <div className="dropdown">
                  <select
                    value={this.state.value}
                    onChange={this.handleGender}
                    required
                  >
                    <option value="">--Select Animal Gender--</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="dropdown">
                  <select
                    value={this.state.value}
                    onChange={this.handleStatus}
                    required
                  >
                    <option value="">--Select Animal Status--</option>
                    <option value="Extra-Small">Available</option>
                    <option value="Small">Pending</option>
                    <option value="Medium">Adopted</option>
                  </select>
                </div>
              </div>
              <label>Animal Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={this.state.value}
                onChange={this.handleName}
                className="form-control"
                required
              />
              <label>Animal Breed:</label>
              <input
                type="text"
                name="breed"
                placeholder="Enter Breed"
                value={this.state.value}
                onChange={this.handleBreed}
                className="form-control"
                required
              />
              <div className="form-group">
                <label>Description:</label>
                <textarea
                  name="description"
                  placeholder="Enter Animal Description"
                  value={this.state.value}
                  onChange={this.handleDescription}
                  className="textarea"
                  required
                />
                <br />
                <small className="text-muted" id="emailHelp">
                  Description must be at least 10 words.
                </small>
              </div>
              <div className="Photo-upload">
                <input
                  type="file"
                  className="Add-photo"
                  onChange={this.handlePhoto}
                  required
                />{" "}
                {this.state.uploadedPhoto}
                <button
                  type="button"
                  className="Admin-button"
                  onClick={this.uploadPhoto}
                >
                  Upload
                </button>
              </div>
              <br />

              <input
                type="submit"
                value="Save Animal"
                className="User-button"
              />
            </form>
          </div>
        </div>
      </Router>
    );
  }
}

export default NewAnimal;
