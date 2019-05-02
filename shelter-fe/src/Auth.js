import React, { Component } from "react";
const AuthContext = React.createContext();

export default class AuthProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      role: null
    };
    console.log(
      "This is the state in the Auth " + this.state.name + " " + this.state.role
    );
  }

  logIn(role, name) {
    this.setState({
      role: role,
      name: name
    });
    this.props.history.push("/");
  }

  logOut() {
    this.setState({
      role: null,
      name: null
    });
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          logIn: this.logIn,
          logOut: this.logOut
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export const Consumer = AuthContext.Consumer;
export const Provider = AuthProvider;
