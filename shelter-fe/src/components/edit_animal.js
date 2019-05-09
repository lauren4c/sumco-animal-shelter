import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../Auth";

import "../App.css";
import axios from "axios";

class EditAnimal extends Component {
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
      uploadPhoto: "",
      photo: ""
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

  componentDidMount() {
    axios.get(`/api/animals/${this.props.match.params.id}`).then(res => {
      this.setState({
        type: res.data.type,
        size: res.data.size,
        age: res.data.age,
        breed: res.data.breed,
        gender: res.data.gender,
        status: res.data.status,
        name: res.data.name,
        description: res.data.description,
        currentPhoto: res.data.photo,
        photo: res.data.photo
      });
    });
  }

  handleType(event) {
    this.setState({ type: event.target.value });
    console.log(this.state.type);
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
  handleStatus(event) {
    this.setState({ status: event.target.value });
    console.log(this.state.status);
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
      this.setState({
        photo: "/" + res.data.path,
        uploadPhoto: "Photo uploaded!"
      });
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const editAnimal = {
      type: this.state.type,
      size: this.state.size,
      status: this.state.status,
      age: this.state.age,
      breed: this.state.breed,
      gender: this.state.gender,
      name: this.state.name,
      description: this.state.description,
      photo: this.state.photo
    };
    console.log(editAnimal);
    axios
      .post(`/api/animals/${this.props.match.params.id}/update`, editAnimal)
      .then(res => {
        if (
          JSON.stringify(res.data.message).includes("successfully") === true
        ) {
          this.props.history.push(`/adopt/${res.data.animal.id}`);
        }
      });
  }
  render() {
    return (
      <Router>
        <div className="New-animal">
          <h1>Edit {this.state.name}</h1>

          <div className="New-animal-form">
            <form onSubmit={this.handleSubmit}>
              <div className="Dropdown-group">
                <div className="dropdown">
                  <select
                    value={this.state.type}
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
                    value={this.state.size}
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
                    value={this.state.age}
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
                    value={this.state.gender}
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
                    value={this.state.status}
                    onChange={this.handleStatus}
                    required
                  >
                    <option value="">--Select Animal Status--</option>
                    <option value="Available">Available</option>
                    <option value="Pending">Pending</option>
                    <option value="Adopted">Adopted</option>
                  </select>
                </div>
              </div>
              <label>Animal Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={this.state.name}
                onChange={this.handleName}
                className="form-control"
                required
              />
              <label>Animal Breed:</label>
              <input
                type="text"
                name="breed"
                placeholder="Enter Breed"
                value={this.state.breed}
                onChange={this.handleBreed}
                className="form-control"
                required
              />
              <div className="form-group">
                <label>Description:</label>
                <textarea
                  name="description"
                  placeholder="Enter Animal Description"
                  value={this.state.description}
                  onChange={this.handleDescription}
                  className="textarea"
                  required
                />
                <br />
                <small className="text-muted" id="emailHelp">
                  Description must be at least 10 words.
                </small>
              </div>
              <p>Current photo:</p>
              <img
                src={this.state.currentPhoto}
                className="Thumbnail"
                alt={this.state.name}
              />
              <div className="Photo-upload">
                <input
                  type="file"
                  className="Add-photo"
                  onChange={this.handlePhoto}
                />{" "}
                <button
                  type="button"
                  className="Admin-button"
                  onClick={this.uploadPhoto}
                >
                  Upload
                </button>{" "}
                {this.state.uploadedPhoto}
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

export default EditAnimal;
