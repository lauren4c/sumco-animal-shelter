import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/partials/header";
import Footer from "./components/partials/footer";
import Landing from "./components/landing";
import Adopt from "./components/adopt";
import SignUp from "./components/sign_up";
import SignIn from "./components/sign_in";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Route exact path="/" component={Landing} />
            <Route path="/adopt" component={Adopt} />
            <Route path="/sign_in" component={SignIn} />
            <Route path="/sign_up" component={SignUp} />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
