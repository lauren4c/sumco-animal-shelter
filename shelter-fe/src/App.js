import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Landing from "./components/landing";
import Adopt from "./components/adopt";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Route exact path="/" component={Landing} />
            <Route path="/adopt" component={Adopt} />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
