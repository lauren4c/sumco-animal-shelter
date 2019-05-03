import React, { Component } from "react";
export const AuthContext = React.createContext();

export default class AuthProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      role: null
    };
  }

  logIn = (role, name) => {
    this.setState({
      role: role,
      name: name
    });
  };

  logOut = () => {
    this.setState({
      role: null,
      name: null
    });
    alert("You are now signed-out");
  };

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
