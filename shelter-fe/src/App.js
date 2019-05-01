import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Landing from "./components/landing";
import Adopt from "./components/adopt";
import SignUp from "./components/sign_up";
import SignIn from "./components/sign_in";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      role: null
    };
    console.log(
      "This is the state in the App" + this.state.user + this.state.role
    );
  }

  setUser(username, role) {
    this.setState({ role: role });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Route exact path="/" component={Landing} />
            <Route path="/adopt" component={Adopt} />
            <Route path="/sign_up" component={SignUp} />
            <Route path="/sign_in" component={SignIn} />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
